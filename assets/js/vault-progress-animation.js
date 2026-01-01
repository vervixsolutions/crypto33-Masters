/**
 * Vault Progress Bar Animation
 * Animates the progress bar from 0% to target percentage on page load
 */

document.addEventListener('DOMContentLoaded', function() {
  animateProgressBar();
});

function animateProgressBar() {
  const progressFill = document.querySelector('.vault-progress-fill');
  const progressPercentage = document.querySelector('.vault-progress-percentage');
  
  if (!progressFill || !progressPercentage) {
    return;
  }
  
  // Get target percentage from data attribute or default to 62
  const targetPercentage = parseInt(progressFill.getAttribute('data-progress')) || 62;
  
  // Set initial state (0%)
  progressFill.style.width = '0%';
  progressPercentage.textContent = '0%';
  
  // Force a reflow to ensure initial state is applied before transition
  void progressFill.offsetWidth;
  
  // Use CSS transition for smooth width animation
  progressFill.style.width = targetPercentage + '%';
  
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
    progressPercentage.textContent = currentValue + '%';
    
    if (progress < 1) {
      requestAnimationFrame(updatePercentage);
    } else {
      // Ensure final value is exact
      progressPercentage.textContent = targetPercentage + '%';
    }
  }
  
  // Start percentage text animation
  requestAnimationFrame(updatePercentage);
}

