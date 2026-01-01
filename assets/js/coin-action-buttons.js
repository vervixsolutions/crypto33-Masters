/* ============================================
   COIN ACTION BUTTONS (Hold Tight / Sell Now)
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
  // Initialize action buttons (create them but hide by default)
  initializeActionButtons();
  
  // Add click handlers to circle indicators
  setupCircleIndicators();
});

function initializeActionButtons() {
  // Find all table sections (both upper and lower tables)
  const allTableSections = document.querySelectorAll('.coins-table-section');
  
  // Process all tables
  allTableSections.forEach(function(section) {
    // Find all coin rows in this table
    const coinRows = section.querySelectorAll('.coins-table .coin-row');
    
    coinRows.forEach(function(row) {
      // Check if action button column already exists
      let actionColumn = row.querySelector('.coin-row-action');
      
      // If it doesn't exist, create it
      if (!actionColumn) {
        actionColumn = document.createElement('div');
        actionColumn.className = 'coin-row-action';
        row.appendChild(actionColumn);
      }
      
      // Find the sentiment indicator
      const sentimentElement = row.querySelector('.coin-row-sentiment');
      
      if (sentimentElement) {
        const isBullish = sentimentElement.classList.contains('bullish');
        const isBearish = sentimentElement.classList.contains('bearish');
        
        // Clear existing content
        actionColumn.innerHTML = '';
        
        // Add buttons based on sentiment (but hidden by default)
        if (isBullish) {
          const button = document.createElement('button');
          button.className = 'coin-action-btn hold-tight-btn';
          button.textContent = 'Hold Tight';
          button.onclick = function(e) {
            e.stopPropagation();
          };
          actionColumn.appendChild(button);
        } else if (isBearish) {
          const button = document.createElement('button');
          button.className = 'coin-action-btn sell-now-btn';
          button.textContent = 'Sell Now';
          button.onclick = function(e) {
            e.stopPropagation();
          };
          actionColumn.appendChild(button);
        }
        // Neutral sentiment gets no button (empty)
      }
    });
  });
}

function setupCircleIndicators() {
  // Find all circle indicators
  const redCircle = document.querySelector('.circle-indicator.red');
  const greenCircle = document.querySelector('.circle-indicator.green');
  
  if (redCircle) {
    redCircle.addEventListener('click', function() {
      toggleActionButtons('sell-now');
    });
  }
  
  if (greenCircle) {
    greenCircle.addEventListener('click', function() {
      toggleActionButtons('hold-tight');
    });
  }
}

function toggleActionButtons(type) {
  // Find all table sections (both upper and lower tables)
  const allTableSections = document.querySelectorAll('.coins-table-section');
  
  allTableSections.forEach(function(section) {
    const coinRows = section.querySelectorAll('.coins-table .coin-row');
    
    coinRows.forEach(function(row) {
      const actionColumn = row.querySelector('.coin-row-action');
      
      if (actionColumn) {
        // Remove all show classes
        actionColumn.classList.remove('show-hold-tight', 'show-sell-now');
        
        // Check sentiment and add appropriate class
        const sentimentElement = row.querySelector('.coin-row-sentiment');
        if (sentimentElement) {
          const isBullish = sentimentElement.classList.contains('bullish');
          const isBearish = sentimentElement.classList.contains('bearish');
          
          if (type === 'hold-tight' && isBullish) {
            actionColumn.classList.add('show-hold-tight');
          } else if (type === 'sell-now' && isBearish) {
            actionColumn.classList.add('show-sell-now');
          }
        }
      }
    });
  });
}

