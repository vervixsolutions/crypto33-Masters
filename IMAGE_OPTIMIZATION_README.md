# Image Optimization Guide

## ✅ Optimization Complete!

Your images have been successfully optimized! Here's what was accomplished:

- **40 files optimized** out of 178 total images
- **Reduced from 147.97 MB to 26.85 MB**
- **Saved 121.12 MB (81.9% reduction!)**
- **Original files backed up** to `assets/images/_backup/`

## 📊 What Was Optimized

The script automatically:
- **Compressed** PNG and JPG files using high-quality settings
- **Resized** oversized images to a maximum of 1920x1920 pixels (maintaining aspect ratio)
- **Skipped** files that were already small (< 500KB)
- **Preserved** image quality while dramatically reducing file sizes

### Key Optimizations:
- Background images: Reduced from ~10.9 MB to ~1.09 MB each (90% reduction)
- Book covers: Reduced from 5-7 MB to 1-2 MB (75-85% reduction)
- Training images: Reduced from 5+ MB to ~0.1 MB (98% reduction)
- Other large images: Average 60-80% reduction

## 🔄 How to Use the Optimization Script

### Run optimization (with backup):
```bash
npm run optimize:backup
```

### Run optimization (without backup):
```bash
npm run optimize
```

### Run directly:
```bash
node optimize-images.js --backup
```

## 📦 Restore Original Images

If you need to restore the original images from backup:

1. Navigate to the backup folder: `assets/images/_backup/`
2. Copy the files back to their original locations
3. Or use this PowerShell command (run from project root):

```powershell
# Restore all images from backup
$backupPath = "assets\images\_backup"
$targetPath = "assets\images"

Get-ChildItem -Path $backupPath -Recurse -File | ForEach-Object {
    $relativePath = $_.FullName.Replace((Resolve-Path $backupPath).Path + "\", "")
    $targetFile = Join-Path $targetPath $relativePath
    $targetDir = Split-Path $targetFile -Parent
    
    if (-not (Test-Path $targetDir)) {
        New-Item -ItemType Directory -Path $targetDir -Force | Out-Null
    }
    
    Copy-Item $_.FullName -Destination $targetFile -Force
    Write-Host "Restored: $relativePath"
}
```

## ⚙️ Configuration

You can adjust optimization settings in `optimize-images.js`:

- `QUALITY.jpg`: JPEG quality (default: 85)
- `QUALITY.png`: PNG quality (default: 90)
- `MAX_WIDTH`: Maximum image width (default: 1920)
- `MAX_HEIGHT`: Maximum image height (default: 1920)

## 🚀 Performance Impact

With these optimizations, your website should now:
- **Load 5-6x faster** for image-heavy pages
- **Use 82% less bandwidth**
- **Provide better user experience** especially on mobile devices
- **Reduce server costs** if hosting images

## 📝 Notes

- SVG files are not optimized (they're already vector-based and small)
- Images smaller than 500KB were skipped to save processing time
- All optimizations maintain visual quality while reducing file size
- The script uses the Sharp library, which is industry-standard for image processing

## 🔍 Verify Results

To check the current sizes of your images:

```powershell
Get-ChildItem -Path "assets\images" -Recurse -Include *.jpg,*.jpeg,*.png -File | 
    Select-Object Name, @{Name="Size(MB)";Expression={[math]::Round($_.Length/1MB, 2)}} | 
    Sort-Object "Size(MB)" -Descending | 
    Format-Table -AutoSize
```

## 🗑️ Clean Up Backups

Once you've verified everything works correctly, you can delete the backup folder:

```powershell
Remove-Item -Path "assets\images\_backup" -Recurse -Force
```

---

**Note:** The backup folder contains your original images. Keep it until you're confident the optimized images work correctly in your application.

