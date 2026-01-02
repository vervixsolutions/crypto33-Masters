/**
 * Coin Radar Tabs - Sliding Tab Functionality
 * Handles tab switching with smooth slide animations
 * Upper tabs and bottom table tabs work independently
 */

document.addEventListener('DOMContentLoaded', function() {
  // ============================================
  // UPPER TABS SECTION (Controls top coins section)
  // ============================================
  const topTabButtons = document.querySelectorAll('.coin-radar-tabs-section .tab-btn');
  const topCoinsSection = document.querySelector('.top-coins-section');
  
  let topActiveTab = 'favorites';
  let topIsAnimating = false;
  
  // Function to get tab name from button
  function getTabName(button) {
    return button.textContent.trim().toLowerCase();
  }
  
  // Function to normalize tab name
  function normalizeTabName(tabName) {
    const normalized = tabName.toLowerCase().trim();
    if (normalized.includes('24h') || normalized.includes('vol')) {
      return '24h vol';
    }
    if (normalized.includes('market') || normalized.includes('cap')) {
      return 'market cap';
    }
    return normalized;
  }
  
  // Function to handle upper tab click
  function handleTopTabClick(tabName) {
    if (topIsAnimating) return;
    
    const normalizedTabName = normalizeTabName(tabName);
    
    // Don't do anything if clicking the same tab
    if (topActiveTab === normalizedTabName) return;
    
    topIsAnimating = true;
    
    // Remove active class from all top tabs
    topTabButtons.forEach(btn => btn.classList.remove('active'));
    
    // Add active class to clicked tab
    topTabButtons.forEach(btn => {
      if (normalizeTabName(getTabName(btn)) === normalizedTabName) {
        btn.classList.add('active');
      }
    });
    
    // Update active tab
    topActiveTab = normalizedTabName;
    
    // Slide animation for top coins section
    if (topCoinsSection) {
      // Slide out
      topCoinsSection.style.opacity = '0';
      topCoinsSection.style.transform = 'translateX(-30px)';
      
      // Slide in after delay
      setTimeout(() => {
        topCoinsSection.style.opacity = '1';
        topCoinsSection.style.transform = 'translateX(0)';
        topIsAnimating = false;
      }, 200);
    } else {
      topIsAnimating = false;
    }
  }
  
  // Add click event listeners to upper tabs
  topTabButtons.forEach(button => {
    button.addEventListener('click', function() {
      const tabName = getTabName(this);
      handleTopTabClick(tabName);
    });
  });
  
  // Initialize top coins section
  if (topCoinsSection) {
    topCoinsSection.style.opacity = '1';
    topCoinsSection.style.transform = 'translateX(0)';
  }
  
  // Set initial active top tab
  const initialActiveTopTab = document.querySelector('.coin-radar-tabs-section .tab-btn.active');
  if (initialActiveTopTab) {
    topActiveTab = normalizeTabName(getTabName(initialActiveTopTab));
  }
  
  // ============================================
  // BOTTOM TABLE TABS SECTION (Controls table sections)
  // With slide animation like first section
  // ============================================
  const tableTabButtons = document.querySelectorAll('.table-tabs .table-tab');
  const coinsTableSections = document.querySelectorAll('.coins-table-section');
  
  let tableActiveTab = 'hot';
  let tableIsAnimating = false;
  
  // Function to handle table tab click
  function handleTableTabClick(tabName) {
    if (tableIsAnimating) return;
    
    const normalizedTabName = normalizeTabName(tabName);
    
    // Don't do anything if clicking the same tab
    if (tableActiveTab === normalizedTabName) return;
    
    tableIsAnimating = true;
    
    // Determine which table section to show based on tab name
    let targetIndex = 0;
    if (normalizedTabName === 'new') {
      targetIndex = 1; // Show second table section for "New"
    } else {
      targetIndex = 0; // Show first table section for all other tabs
    }
    
    // Remove active class from all table tabs
    tableTabButtons.forEach(btn => btn.classList.remove('active'));
    
    // Add active class to clicked tab in all sections
    coinsTableSections.forEach(section => {
      const tabsInSection = section.querySelectorAll('.table-tab');
      tabsInSection.forEach(tab => {
        if (normalizeTabName(getTabName(tab)) === normalizedTabName) {
          tab.classList.add('active');
        }
      });
    });
    
    // Update active tab
    tableActiveTab = normalizedTabName;
    
    // Find currently visible section
    let currentVisibleIndex = -1;
    coinsTableSections.forEach((section, index) => {
      if (section.style.display !== 'none' && window.getComputedStyle(section).display !== 'none') {
        currentVisibleIndex = index;
      }
    });
    
    // Handle section switching with animation
    const targetSection = coinsTableSections[targetIndex];
    const targetTableContent = targetSection.querySelector('.table-content-wrapper');
    
    // If switching between different sections, animate both
    if (currentVisibleIndex !== targetIndex && currentVisibleIndex !== -1) {
      const currentSection = coinsTableSections[currentVisibleIndex];
      const currentTableContent = currentSection.querySelector('.table-content-wrapper');
      
      // Slide out current table content
      if (currentTableContent) {
        currentTableContent.style.opacity = '0';
        currentTableContent.style.transform = 'translateX(30px)';
      }
      
      setTimeout(() => {
        currentSection.style.display = 'none';
        if (currentTableContent) {
          currentTableContent.style.opacity = '';
          currentTableContent.style.transform = '';
        }
        
        // Show section and animate table content
        targetSection.style.display = 'block';
        if (targetTableContent) {
          targetTableContent.offsetHeight; // Force reflow
          targetTableContent.style.opacity = '0';
          targetTableContent.style.transform = 'translateX(-30px)';
          
          setTimeout(() => {
            targetTableContent.style.opacity = '1';
            targetTableContent.style.transform = 'translateX(0)';
            tableIsAnimating = false;
          }, 50);
        } else {
          tableIsAnimating = false;
        }
      }, 200);
    } else {
      // Same section or initial - animate table content like first section
      targetSection.style.display = 'block';
      if (targetTableContent) {
        targetTableContent.offsetHeight; // Force reflow
        targetTableContent.style.opacity = '0';
        targetTableContent.style.transform = 'translateX(-30px)';
        
        setTimeout(() => {
          targetTableContent.style.opacity = '1';
          targetTableContent.style.transform = 'translateX(0)';
          tableIsAnimating = false;
        }, 200);
      } else {
        tableIsAnimating = false;
      }
      
      // Hide other sections
      coinsTableSections.forEach((section, index) => {
        if (index !== targetIndex) {
          section.style.display = 'none';
          const otherTableContent = section.querySelector('.table-content-wrapper');
          if (otherTableContent) {
            otherTableContent.style.opacity = '';
            otherTableContent.style.transform = '';
          }
        }
      });
    }
  }
  
  // Add click event listeners to table tabs
  tableTabButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.stopPropagation();
      const tabName = getTabName(this);
      handleTableTabClick(tabName);
    });
  });
  
  // Initialize: show first table section (Hot), hide second, set initial state
  coinsTableSections.forEach((section, index) => {
    if (index === 0) {
      section.style.display = 'block';
      const tableContent = section.querySelector('.table-content-wrapper');
      if (tableContent) {
        tableContent.style.opacity = '1';
        tableContent.style.transform = 'translateX(0)';
      }
    } else {
      section.style.display = 'none';
    }
  });
  
  // Set initial active table tab
  const initialActiveTableTab = document.querySelector('.table-tabs .table-tab.active');
  if (initialActiveTableTab) {
    tableActiveTab = normalizeTabName(getTabName(initialActiveTableTab));
  }
});

