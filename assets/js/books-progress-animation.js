/**
 * Books Progress Bar Animation
 * Animates the progress bars from 0% to target percentage on page load
 */

document.addEventListener('DOMContentLoaded', function() {
  animateBooksProgressBars();
});

function animateBooksProgressBars() {
  // Main progress bar
  const mainProgressFill = document.querySelector('.books-progress-fill');
  const mainProgressLabel = document.querySelector('.books-progress-labels .progress-label-left');
  
  // Sidebar progress bar
  const sidebarProgressFill = document.querySelector('.sidebar-progress-fill');
  const sidebarProgressLabel = document.querySelector('.sidebar-progress-labels .progress-label-left');
  
  // Animate main progress bar
  if (mainProgressFill) {
    const targetPercentage = parseInt(mainProgressFill.getAttribute('data-progress')) || 40;
    
    // Set initial state (0%)
    mainProgressFill.style.width = '0%';
    if (mainProgressLabel) {
      mainProgressLabel.textContent = '0% complete';
    }
    
    // Force a reflow to ensure initial state is applied before transition
    void mainProgressFill.offsetWidth;
    
    // Use CSS transition for smooth width animation
    mainProgressFill.style.width = targetPercentage + '%';
    
    // Animate percentage text count-up
    animatePercentageText(mainProgressLabel, targetPercentage, 'complete');
  }
  
  // Animate sidebar progress bar
  if (sidebarProgressFill) {
    const targetPercentage = parseInt(sidebarProgressFill.getAttribute('data-progress')) || 40;
    
    // Set initial state (0%)
    sidebarProgressFill.style.width = '0%';
    if (sidebarProgressLabel) {
      sidebarProgressLabel.textContent = '0% complete';
    }
    
    // Force a reflow to ensure initial state is applied before transition
    void sidebarProgressFill.offsetWidth;
    
    // Use CSS transition for smooth width animation
    sidebarProgressFill.style.width = targetPercentage + '%';
    
    // Animate percentage text count-up
    animatePercentageText(sidebarProgressLabel, targetPercentage, 'complete');
  }
}

function animatePercentageText(element, targetPercentage, suffix) {
  if (!element) return;
  
  const duration = 2000; // 2 seconds (match CSS transition duration)
  const startTime = performance.now();
  const startValue = 0;
  
  function updatePercentage() {
    const elapsed = performance.now() - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    // Easing function (ease-out cubic) to match CSS transition
    const easeOut = 1 - Math.pow(1 - progress, 3);
    
    const currentValue = Math.round(startValue + (targetPercentage - startValue) * easeOut);
    element.textContent = currentValue + '% ' + suffix;
    
    if (progress < 1) {
      requestAnimationFrame(updatePercentage);
    } else {
      // Ensure final value is exact
      element.textContent = targetPercentage + '% ' + suffix;
    }
  }
  
  // Start percentage text animation
  requestAnimationFrame(updatePercentage);
}

