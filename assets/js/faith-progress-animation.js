/**
 * Faith Progress Bar Animation
 * Animates the progress bar from 0% to target percentage on page load
 */

document.addEventListener('DOMContentLoaded', function() {
  animateFaithProgressBar();
});

function animateFaithProgressBar() {
  const progressBar = document.querySelector('.xp-progress-bar');
  const progressLabel = document.querySelector('.progress-label-left');
  
  if (!progressBar) {
    return;
  }
  
  // Get target percentage from data attribute or default to 40
  const targetPercentage = parseInt(progressBar.getAttribute('data-progress')) || 40;
  
  // Set initial state (0%)
  progressBar.style.setProperty('--progress-width', '0%');
  if (progressLabel) {
    progressLabel.textContent = '0% of series watched';
  }
  
  // Force a reflow to ensure initial state is applied before transition
  void progressBar.offsetWidth;
  
  // Use CSS transition for smooth width animation
  progressBar.style.setProperty('--progress-width', targetPercentage + '%');
  
  // Animate percentage text count-up
  const duration = 2000; // 2 seconds (match CSS transition duration)
  const startTime = performance.now();
  const startValue = 0;
  
  function updatePercentage() {
    const elapsed = performance.now() - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    // Easing function (ease-out cubic) to match CSS transition
    const easeOut = 1 - Math.pow(1 - progress, 3);
    
    const currentValue = Math.round(startValue + (targetPercentage - startValue) * easeOut);
    if (progressLabel) {
      progressLabel.textContent = currentValue + '% of series watched';
    }
    
    if (progress < 1) {
      requestAnimationFrame(updatePercentage);
    } else {
      // Ensure final value is exact
      if (progressLabel) {
        progressLabel.textContent = targetPercentage + '% of series watched';
      }
    }
  }
  
  // Start percentage text animation
  requestAnimationFrame(updatePercentage);
}

