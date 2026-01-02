/**
 * Vault Teaser Progress Bar Animation
 * Animates the progress bar when the vault teaser section comes into view
 */

document.addEventListener('DOMContentLoaded', function() {
  const vaultTeaserSection = document.querySelector('.vault-teaser-section');
  const progressFill = document.querySelector('.vault-teaser-section .progress-fill');
  
  if (!vaultTeaserSection || !progressFill) {
    return;
  }
  
  // Get target percentage from data attribute or from inline style
  let targetPercentage = parseInt(progressFill.getAttribute('data-progress'));
  
  if (!targetPercentage || isNaN(targetPercentage)) {
    // Extract from inline style if data attribute doesn't exist
    const inlineWidth = progressFill.style.width;
    if (inlineWidth) {
      targetPercentage = parseFloat(inlineWidth); // Use parseFloat to handle "65%"
    } else {
      targetPercentage = 65; // Default fallback
    }
  }
  
  // Set initial state (0%)
  progressFill.style.width = '0%';
  progressFill.style.transition = 'width 2s cubic-bezier(0.4, 0, 0.2, 1)';
  
  // Use Intersection Observer to trigger animation when section is visible
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Section is in view, trigger animation
        animateProgressBar(progressFill, targetPercentage);
        // Unobserve after animation starts (only animate once)
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.3, // Trigger when 30% of section is visible
    rootMargin: '0px'
  });
  
  observer.observe(vaultTeaserSection);
});

function animateProgressBar(progressFill, targetPercentage) {
  // Force a reflow to ensure initial state (0%) is applied
  void progressFill.offsetWidth;
  
  // Animate to target percentage
  progressFill.style.width = targetPercentage + '%';
  
  // Optional: Animate percentage text if it exists
  const rankProgressText = document.querySelector('.rank-progress');
  if (rankProgressText) {
    // Extract percentage from text like "60% to Sovereign"
    const textMatch = rankProgressText.textContent.match(/(\d+)%/);
    if (textMatch) {
      const targetTextPercentage = parseInt(textMatch[1]);
      animatePercentageText(rankProgressText, targetTextPercentage);
    }
  }
}

function animatePercentageText(element, targetPercentage) {
  const duration = 2000; // 2 seconds to match progress bar animation
  const startTime = performance.now();
  const startValue = 0;
  const originalText = element.textContent;
  const textPattern = originalText.match(/^(\d+)%/);
  
  if (!textPattern) return;
  
  function updatePercentage() {
    const elapsed = performance.now() - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    // Easing function (ease-out cubic)
    const easeOut = 1 - Math.pow(1 - progress, 3);
    
    const currentValue = Math.round(startValue + (targetPercentage - startValue) * easeOut);
    element.textContent = originalText.replace(/\d+%/, currentValue + '%');
    
    if (progress < 1) {
      requestAnimationFrame(updatePercentage);
    } else {
      // Ensure final value is exact
      element.textContent = originalText.replace(/\d+%/, targetPercentage + '%');
    }
  }
  
  requestAnimationFrame(updatePercentage);
}

