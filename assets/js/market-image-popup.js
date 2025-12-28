/**
 * Market Image Popup Component
 * Displays full Bitcoin Markets screenshot in a popup
 */

class MarketImagePopup {
  constructor() {
    this.init();
  }

  init() {
    this.createOverlay();
    this.attachEventListeners();
  }

  createOverlay() {
    // Check if overlay already exists
    if (document.querySelector('.market-image-overlay')) {
      return;
    }

    const overlay = document.createElement('div');
    overlay.className = 'market-image-overlay';
    overlay.innerHTML = `
      <div class="market-image-container">
        <button class="market-image-close-btn" aria-label="Close market image">&times;</button>
        <img 
          src="assets/images/coin-radar/c21c9e377b41413476b59131e0eb6cb55f47bcd8.png" 
          alt="Bitcoin Markets Full View" 
          class="market-image-popup-img"
        />
        <p class="market-image-instructions">Click outside or press ESC to close</p>
      </div>
    `;

    document.body.appendChild(overlay);
  }

  attachEventListeners() {
    // Close button
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('market-image-close-btn')) {
        this.close();
      }
    });

    // Click outside to close (on overlay)
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('market-image-overlay')) {
        this.close();
      }
    });

    // Prevent closing when clicking on the image container
    document.addEventListener('click', (e) => {
      if (e.target.closest('.market-image-container') && 
          !e.target.classList.contains('market-image-close-btn')) {
        e.stopPropagation();
      }
    });

    // Escape key to close
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        const overlay = document.querySelector('.market-image-overlay');
        if (overlay && overlay.classList.contains('active')) {
          this.close();
        }
      }
    });
  }

  open() {
    const overlay = document.querySelector('.market-image-overlay');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  close() {
    const overlay = document.querySelector('.market-image-overlay');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// Initialize the market image popup system
let marketImagePopup;
document.addEventListener('DOMContentLoaded', () => {
  marketImagePopup = new MarketImagePopup();
});

// Helper function to open market image popup from anywhere
function openMarketImage() {
  if (marketImagePopup) {
    marketImagePopup.open();
  }
}

