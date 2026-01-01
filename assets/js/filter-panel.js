/* ============================================
   FILTER PANEL FUNCTIONALITY
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
  // Create filter panel
  createFilterPanel();
  
  // Setup filter button click handler
  setupFilterButton();
  
  // Close panel when clicking outside
  setupOutsideClickHandler();
});

function createFilterPanel() {
  // Check if filter panel already exists
  if (document.querySelector('.filter-panel')) {
    return;
  }
  
  // Find the filter button container
  const searchFilterWrapper = document.querySelector('.search-filter-wrapper');
  
  if (!searchFilterWrapper) {
    return;
  }
  
  // Make it relative positioned if not already
  searchFilterWrapper.style.position = 'relative';
  
  // Create filter panel HTML
  const filterPanel = document.createElement('div');
  filterPanel.className = 'filter-panel';
  filterPanel.innerHTML = `
    <div class="filter-panel-header">
      <h3 class="filter-panel-title">Filter Options</h3>
      <button class="filter-panel-close" aria-label="Close filter">&times;</button>
    </div>
    
    <div class="filter-section">
      <h4 class="filter-section-title">Price Range</h4>
      <div class="filter-options">
        <div class="filter-option">
          <input type="radio" id="price-all" name="price" value="all" checked>
          <label for="price-all">All Prices</label>
        </div>
        <div class="filter-option">
          <input type="radio" id="price-low" name="price" value="low">
          <label for="price-low">Under $1</label>
        </div>
        <div class="filter-option">
          <input type="radio" id="price-mid" name="price" value="mid">
          <label for="price-mid">$1 - $100</label>
        </div>
        <div class="filter-option">
          <input type="radio" id="price-high" name="price" value="high">
          <label for="price-high">Above $100</label>
        </div>
      </div>
    </div>
    
    <div class="filter-section">
      <h4 class="filter-section-title">24h Change</h4>
      <div class="filter-options">
        <div class="filter-option">
          <input type="radio" id="change-all" name="change" value="all" checked>
          <label for="change-all">All Changes</label>
        </div>
        <div class="filter-option">
          <input type="radio" id="change-gainers" name="change" value="gainers">
          <label for="change-gainers">Gainers Only</label>
        </div>
        <div class="filter-option">
          <input type="radio" id="change-losers" name="change" value="losers">
          <label for="change-losers">Losers Only</label>
        </div>
      </div>
    </div>
    
    <div class="filter-section">
      <h4 class="filter-section-title">Sentiment</h4>
      <div class="filter-options">
        <div class="filter-option">
          <input type="radio" id="sentiment-all" name="sentiment" value="all" checked>
          <label for="sentiment-all">All Sentiments</label>
        </div>
        <div class="filter-option">
          <input type="radio" id="sentiment-bullish" name="sentiment" value="bullish">
          <label for="sentiment-bullish">Bullish Only</label>
        </div>
        <div class="filter-option">
          <input type="radio" id="sentiment-bearish" name="sentiment" value="bearish">
          <label for="sentiment-bearish">Bearish Only</label>
        </div>
        <div class="filter-option">
          <input type="radio" id="sentiment-neutral" name="sentiment" value="neutral">
          <label for="sentiment-neutral">Neutral Only</label>
        </div>
      </div>
    </div>
    
    <div class="filter-panel-footer">
      <button class="filter-btn-reset">Reset</button>
      <button class="filter-btn-apply">Apply Filters</button>
    </div>
  `;
  
  // Append to search filter wrapper
  searchFilterWrapper.appendChild(filterPanel);
  
  // Setup close button
  const closeBtn = filterPanel.querySelector('.filter-panel-close');
  if (closeBtn) {
    closeBtn.addEventListener('click', function() {
      closeFilterPanel();
    });
  }
  
  // Setup reset button
  const resetBtn = filterPanel.querySelector('.filter-btn-reset');
  if (resetBtn) {
    resetBtn.addEventListener('click', function() {
      resetFilters();
    });
  }
  
  // Setup apply button
  const applyBtn = filterPanel.querySelector('.filter-btn-apply');
  if (applyBtn) {
    applyBtn.addEventListener('click', function() {
      applyFilters();
      closeFilterPanel();
    });
  }
}

function setupFilterButton() {
  const filterBtn = document.querySelector('.filter-btn');
  
  if (filterBtn) {
    filterBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      toggleFilterPanel();
    });
  }
}

function toggleFilterPanel() {
  const filterPanel = document.querySelector('.filter-panel');
  const filterBtn = document.querySelector('.filter-btn');
  
  if (filterPanel) {
    const isActive = filterPanel.classList.contains('active');
    
    if (isActive) {
      closeFilterPanel();
    } else {
      openFilterPanel();
    }
  }
}

function openFilterPanel() {
  const filterPanel = document.querySelector('.filter-panel');
  const filterBtn = document.querySelector('.filter-btn');
  
  if (filterPanel) {
    filterPanel.classList.add('active');
    if (filterBtn) {
      filterBtn.classList.add('active');
    }
  }
}

function closeFilterPanel() {
  const filterPanel = document.querySelector('.filter-panel');
  const filterBtn = document.querySelector('.filter-btn');
  
  if (filterPanel) {
    filterPanel.classList.remove('active');
    if (filterBtn) {
      filterBtn.classList.remove('active');
    }
  }
}

function setupOutsideClickHandler() {
  document.addEventListener('click', function(e) {
    const filterPanel = document.querySelector('.filter-panel');
    const filterBtn = document.querySelector('.filter-btn');
    const searchFilterWrapper = document.querySelector('.search-filter-wrapper');
    
    if (filterPanel && filterPanel.classList.contains('active')) {
      // Check if click is outside the filter panel and button
      if (!filterPanel.contains(e.target) && 
          !filterBtn.contains(e.target) && 
          searchFilterWrapper && 
          !searchFilterWrapper.contains(e.target)) {
        closeFilterPanel();
      }
    }
  });
}

function resetFilters() {
  // Reset all radio buttons to "all" option
  const allRadios = document.querySelectorAll('.filter-panel input[type="radio"][value="all"]');
  allRadios.forEach(radio => {
    radio.checked = true;
  });
}

function applyFilters() {
  // Get selected filter values
  const priceFilter = document.querySelector('input[name="price"]:checked')?.value || 'all';
  const changeFilter = document.querySelector('input[name="change"]:checked')?.value || 'all';
  const sentimentFilter = document.querySelector('input[name="sentiment"]:checked')?.value || 'all';
  
  console.log('Filters applied:', {
    price: priceFilter,
    change: changeFilter,
    sentiment: sentimentFilter
  });
  
  // TODO: Implement actual filtering logic here
  // This would filter the coin rows based on selected criteria
}

