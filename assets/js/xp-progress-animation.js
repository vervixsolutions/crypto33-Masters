/**
 * XP Progress Bar Animation
 * Animates the progress bar from 0% to target percentage on page load
 */

document.addEventListener('DOMContentLoaded', function() {
  animateXPProgressBar();
});

function animateXPProgressBar() {
  const progressFill = document.querySelector('.xp-progress-bar__fill');
  const progressPercentage = document.querySelector('.xp-progress-bar__percentage');
  const progressBarText = document.querySelector('.xp-progress-bar__bar-text');
  
  if (!progressFill) {
    return;
  }
  
  // Get target percentage from data attribute or default to 27
  const targetPercentage = parseInt(progressFill.getAttribute('data-progress')) || 27;
  
  // Set initial state (0%)
  progressFill.style.width = '0%';
  if (progressPercentage) {
    progressPercentage.textContent = '0%';
  }
  if (progressBarText) {
    progressBarText.textContent = 'XP Progress: 0%';
  }
  
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
    if (progressPercentage) {
      progressPercentage.textContent = currentValue + '%';
    }
    if (progressBarText) {
      progressBarText.textContent = 'XP Progress: ' + currentValue + '%';
    }
    
    if (progress < 1) {
      requestAnimationFrame(updatePercentage);
    } else {
      // Ensure final value is exact
      if (progressPercentage) {
        progressPercentage.textContent = targetPercentage + '%';
      }
      if (progressBarText) {
        progressBarText.textContent = 'XP Progress: ' + targetPercentage + '%';
      }
    }
  }
  
  // Start percentage text animation
  requestAnimationFrame(updatePercentage);
}

