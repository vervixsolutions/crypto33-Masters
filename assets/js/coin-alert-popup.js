/**
 * Coin Alert Popup Component
 * Displays breaking news alerts for cryptocurrencies
 */

class CoinAlertPopup {
  constructor() {
    this.init();
  }

  init() {
    this.createOverlay();
    this.attachEventListeners();
  }

  createOverlay() {
    // Check if overlay already exists
    if (document.querySelector('.coin-alert-overlay')) {
      return;
    }

    const overlay = document.createElement('div');
    overlay.className = 'coin-alert-overlay';
    overlay.innerHTML = `
      <div class="coin-alert-box">
        <button class="alert-close-btn" aria-label="Close alert">&times;</button>
        
        <div class="alert-header">
          <svg class="alert-warning-icon" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.5 0C8.73 0 0 8.73 0 19.5S8.73 39 19.5 39 39 30.27 39 19.5 30.27 0 19.5 0z" fill="#FFD500"/>
            <path d="M19.5 6C12.596 6 7 11.596 7 18.5S12.596 31 19.5 31 32 25.404 32 18.5 26.404 6 19.5 6z" fill="#8B0000"/>
            <path d="M21.875 21.125H17.125V11.375H21.875V21.125ZM21.875 26.875H17.125V22.125H21.875V26.875Z" fill="#FFD500"/>
          </svg>
          <h3 class="alert-title">COIN ALERT:</h3>
        </div>

        <div class="alert-message">
          <p id="alert-coin-name">$TURBO is breaking out!</p>
          <p id="alert-sentiment">92% Bullish.</p>
        </div>

        <div class="alert-divider"></div>

        <a href="#" class="alert-details-link" id="alert-details-link">See Details</a>
      </div>
    `;

    document.body.appendChild(overlay);
  }

  attachEventListeners() {
    // Close button
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('alert-close-btn')) {
        this.close();
      }
      // Don't close on overlay click since it's transparent now
    });

    // See Details link
    document.addEventListener('click', (e) => {
      if (e.target.id === 'alert-details-link') {
        e.preventDefault();
        // Close alert and open portfolio popup
        const coinName = e.target.getAttribute('data-coin-name') || 'Bitcoin (BTC)';
        const coinIcon = e.target.getAttribute('data-coin-icon') || 'assets/images/icons/BTC.svg';
        const coinPrice = e.target.getAttribute('data-coin-price') || '$97,850';
        
        this.close();
        
        // Open portfolio popup if it exists
        if (typeof openPortfolioPopup === 'function') {
          setTimeout(() => {
            openPortfolioPopup({
              name: coinName,
              icon: coinIcon,
              livePrice: coinPrice
            });
          }, 300);
        }
      }
    });

    // Escape key to close
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.close();
      }
    });
  }

  open(alertData) {
    const overlay = document.querySelector('.coin-alert-overlay');
    
    // Set alert content
    const coinNameElement = document.getElementById('alert-coin-name');
    const sentimentElement = document.getElementById('alert-sentiment');
    const detailsLink = document.getElementById('alert-details-link');

    if (alertData) {
      coinNameElement.textContent = alertData.message || `$${alertData.symbol || 'BTC'} is breaking out!`;
      sentimentElement.textContent = alertData.sentiment || '92% Bullish.';
      
      // Store coin data in the details link for later use
      detailsLink.setAttribute('data-coin-name', alertData.name || 'Bitcoin (BTC)');
      detailsLink.setAttribute('data-coin-icon', alertData.icon || 'assets/images/icons/BTC.svg');
      detailsLink.setAttribute('data-coin-price', alertData.price || '$97,850');
    }

    // Remove closing class if it exists
    overlay.classList.remove('closing');
    
    // Show overlay - use requestAnimationFrame to ensure smooth animation
    requestAnimationFrame(() => {
      overlay.classList.add('active');
    });
  }

  close() {
    const overlay = document.querySelector('.coin-alert-overlay');
    
    // Add closing class for slide down animation
    overlay.classList.add('closing');
    
    // Remove active class after animation completes
    setTimeout(() => {
      overlay.classList.remove('active', 'closing');
    }, 800); // Match CSS transition duration
  }
}

// Initialize the alert system
let coinAlertPopup;

document.addEventListener('DOMContentLoaded', () => {
  coinAlertPopup = new CoinAlertPopup();
  
  // Show popup when user scrolls 30% down the page (first time only)
  setupScrollTrigger();
});

// Show popup when user scrolls 30% down the page (first time only)
function setupScrollTrigger() {
  // Check if popup has been shown before using sessionStorage
  const popupShown = sessionStorage.getItem('coinAlertPopupShownOnScroll');
  
  if (popupShown) {
    // Popup already shown on this session, don't show again
    return;
  }
  
  let popupShownOnScroll = false; // Track if popup has been shown on this page load
  
  // Scroll handler function
  function handleScroll() {
    // Only trigger once per page load
    if (popupShownOnScroll) {
      return;
    }
    
    // Calculate scroll percentage
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollPercentage = (scrollTop / (documentHeight - windowHeight)) * 100;
    
    // Show popup when user scrolls 30% down
    if (scrollPercentage >= 30) {
      popupShownOnScroll = true;
      showAutoPopup();
      
      // Remove scroll listener after popup is shown
      window.removeEventListener('scroll', handleScroll);
    }
  }
  
  // Add scroll event listener
  window.addEventListener('scroll', handleScroll);
}

// Show popup automatically on scroll trigger
function showAutoPopup() {
  if (!coinAlertPopup) {
    return;
  }
  
  // Default alert data
  const defaultAlertData = {
    name: 'Bitcoin (BTC)',
    symbol: 'BTC',
    message: '$BTC is breaking out!',
    sentiment: '92% Bullish.',
    icon: 'assets/images/icons/BTC.svg',
    price: '$97,850'
  };
  
  // Open the popup
  coinAlertPopup.open(defaultAlertData);
  
  // Mark as shown in sessionStorage
  sessionStorage.setItem('coinAlertPopupShownOnScroll', 'true');
  
  // Auto-close after 3 seconds
  setTimeout(() => {
    coinAlertPopup.close();
  }, 3000);
}

// Helper function to open alert from anywhere
function openCoinAlert(alertData) {
  if (coinAlertPopup) {
    coinAlertPopup.open(alertData);
  }
}

