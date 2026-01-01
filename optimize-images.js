const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Configuration
const IMAGE_DIR = path.join(__dirname, 'assets', 'images');
const BACKUP_DIR = path.join(__dirname, 'assets', 'images', '_backup');
const QUALITY = {
  jpg: 85,
  png: 90
};
const MAX_WIDTH = 1920; // Maximum width for images
const MAX_HEIGHT = 1920; // Maximum height for images

// Create backup directory if needed
function createBackupDir() {
  if (!fs.existsSync(BACKUP_DIR)) {
    fs.mkdirSync(BACKUP_DIR, { recursive: true });
    console.log('Created backup directory:', BACKUP_DIR);
  }
}

// Backup original file
function backupFile(filePath) {
  const relativePath = path.relative(IMAGE_DIR, filePath);
  const backupPath = path.join(BACKUP_DIR, relativePath);
  const backupDir = path.dirname(backupPath);
  
  if (!fs.existsSync(backupDir)) {
    fs.mkdirSync(backupDir, { recursive: true });
  }
  
  fs.copyFileSync(filePath, backupPath);
  return backupPath;
}

// Get file size in MB
function getFileSizeMB(filePath) {
  const stats = fs.statSync(filePath);
  return (stats.size / (1024 * 1024)).toFixed(2);
}

// Optimize image
async function optimizeImage(filePath, createBackup = false) {
  try {
    const ext = path.extname(filePath).toLowerCase();
    
    // Only process jpg, jpeg, and png files
    if (!['.jpg', '.jpeg', '.png'].includes(ext)) {
      return null;
    }
    
    const originalSize = getFileSizeMB(filePath);
    
    // Skip if file is already small (< 500KB)
    if (parseFloat(originalSize) < 0.5) {
      console.log(`⏭️  Skipping ${path.basename(filePath)} (${originalSize} MB - already small)`);
      return null;
    }
    
    // Create backup if requested
    if (createBackup) {
      backupFile(filePath);
    }
    
    // Get image metadata
    const metadata = await sharp(filePath).metadata();
    const { width, height } = metadata;
    
    // Calculate new dimensions (maintain aspect ratio)
    let newWidth = width;
    let newHeight = height;
    
    if (width > MAX_WIDTH || height > MAX_HEIGHT) {
      const ratio = Math.min(MAX_WIDTH / width, MAX_HEIGHT / height);
      newWidth = Math.round(width * ratio);
      newHeight = Math.round(height * ratio);
    }
    
    // Create sharp instance
    let sharpInstance = sharp(filePath);
    
    // Resize if needed
    if (newWidth !== width || newHeight !== height) {
      sharpInstance = sharpInstance.resize(newWidth, newHeight, {
        fit: 'inside',
        withoutEnlargement: true
      });
    }
    
    // Optimize based on file type
    if (ext === '.jpg' || ext === '.jpeg') {
      await sharpInstance
        .jpeg({ 
          quality: QUALITY.jpg,
          mozjpeg: true,
          progressive: true
        })
        .toFile(filePath + '.tmp');
    } else if (ext === '.png') {
      await sharpInstance
        .png({ 
          quality: QUALITY.png,
          compressionLevel: 9,
          adaptiveFiltering: true
        })
        .toFile(filePath + '.tmp');
    }
    
    // Replace original with optimized version
    fs.renameSync(filePath + '.tmp', filePath);
    
    const newSize = getFileSizeMB(filePath);
    const savings = ((parseFloat(originalSize) - parseFloat(newSize)) / parseFloat(originalSize) * 100).toFixed(1);
    
    console.log(`✅ Optimized: ${path.basename(filePath)}`);
    console.log(`   ${originalSize} MB → ${newSize} MB (${savings}% reduction)`);
    if (newWidth !== width || newHeight !== height) {
      console.log(`   Resized: ${width}x${height} → ${newWidth}x${newHeight}`);
    }
    
    return {
      file: path.basename(filePath),
      originalSize: parseFloat(originalSize),
      newSize: parseFloat(newSize),
      savings: parseFloat(savings)
    };
    
  } catch (error) {
    console.error(`❌ Error optimizing ${filePath}:`, error.message);
    // Clean up temp file if it exists
    if (fs.existsSync(filePath + '.tmp')) {
      fs.unlinkSync(filePath + '.tmp');
    }
    return null;
  }
}

// Recursively find all image files
function findImageFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !filePath.includes('_backup')) {
      findImageFiles(filePath, fileList);
    } else if (stat.isFile()) {
      const ext = path.extname(file).toLowerCase();
      if (['.jpg', '.jpeg', '.png'].includes(ext)) {
        fileList.push(filePath);
      }
    }
  });
  
  return fileList;
}

// Main function
async function main() {
  console.log('🚀 Starting image optimization...\n');
  
  const createBackup = process.argv.includes('--backup');
  
  if (createBackup) {
    createBackupDir();
    console.log('📦 Backup mode enabled - original files will be backed up\n');
  }
  
  const imageFiles = findImageFiles(IMAGE_DIR);
  console.log(`Found ${imageFiles.length} image files to process\n`);
  
  const results = [];
  let totalOriginalSize = 0;
  let totalNewSize = 0;
  
  for (const file of imageFiles) {
    const result = await optimizeImage(file, createBackup);
    if (result) {
      results.push(result);
      totalOriginalSize += result.originalSize;
      totalNewSize += result.newSize;
    }
  }
  
  console.log('\n' + '='.repeat(50));
  console.log('📊 Optimization Summary:');
  console.log('='.repeat(50));
  console.log(`Total files optimized: ${results.length}`);
  console.log(`Total original size: ${totalOriginalSize.toFixed(2)} MB`);
  console.log(`Total new size: ${totalNewSize.toFixed(2)} MB`);
  console.log(`Total space saved: ${(totalOriginalSize - totalNewSize).toFixed(2)} MB`);
  console.log(`Average reduction: ${((totalOriginalSize - totalNewSize) / totalOriginalSize * 100).toFixed(1)}%`);
  
  if (createBackup) {
    console.log(`\n💾 Backups saved to: ${BACKUP_DIR}`);
  }
  
  console.log('\n✨ Optimization complete!');
}

// Run the script
main().catch(console.error);

