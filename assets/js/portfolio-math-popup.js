/**
 * Portfolio Math Popup Component
 * Handles portfolio calculations and popup interactions for Coin Radar
 */

class PortfolioMathPopup {
  constructor() {
    this.currentCoin = null;
    this.purchasePrice = 0;
    this.quantity = 0;
    this.init();
  }

  init() {
    this.createOverlay();
    this.attachEventListeners();
  }

  createOverlay() {
    // Check if overlay already exists
    if (document.querySelector('.portfolio-math-overlay')) {
      return;
    }

    const overlay = document.createElement('div');
    overlay.className = 'portfolio-math-overlay';
    overlay.innerHTML = `
      <div class="portfolio-math-popup">
        <button class="popup-close-btn" aria-label="Close popup">&times;</button>
        
        <!-- Header -->
        <div class="popup-header">
          <div class="popup-header-left">
            <img src="" alt="" class="popup-coin-icon" id="popup-coin-icon">
            <div class="popup-coin-info">
              <p class="popup-label">Portfolio Math</p>
              <p class="popup-coin-name" id="popup-coin-name">--</p>
            </div>
          </div>
          <div class="popup-header-right">
            <p class="popup-label">Live Price</p>
            <p class="popup-live-price" id="popup-live-price">$0</p>
          </div>
        </div>

        <!-- Input Section -->
        <div class="popup-input-section">
          <div class="popup-input-group">
            <label class="popup-input-label">Purchase Price</label>
            <input 
              type="number" 
              class="popup-input-field" 
              id="popup-purchase-price" 
              placeholder="$0"
              step="0.0001"
            >
          </div>
          
          <div class="popup-input-group">
            <label class="popup-input-label">Quantity (Coins)</label>
            <input 
              type="number" 
              class="popup-input-field" 
              id="popup-quantity" 
              placeholder="0"
              step="0.0001"
            >
          </div>

          <!-- Portfolio Stats -->
          <div class="popup-portfolio-stats">
            <div class="popup-stat-row">
              <span class="popup-stat-label">Cost basis</span>
              <span class="popup-stat-value" id="popup-cost-basis">$0.0000</span>
            </div>
            <div class="popup-stat-row">
              <span class="popup-stat-label">Current value</span>
              <span class="popup-stat-value" id="popup-current-value">$0.0000</span>
            </div>
            <div class="popup-stat-row">
              <span class="popup-stat-label">Unrealized P/L</span>
              <span class="popup-stat-value positive" id="popup-unrealized-pl">+$0.0000</span>
            </div>
            <p class="popup-stat-description">All portfolio math for this coin lives here.</p>
          </div>
        </div>

        <!-- Sell Targets Section -->
        <div class="popup-targets-section">
          <p class="popup-targets-label">2x · 5x · 10x Sell Targets</p>
          <div class="popup-targets-grid">
            <!-- 2x Target -->
            <div class="popup-target-card">
              <p class="popup-target-title">2x Target</p>
              <p class="popup-target-subtitle">Target price</p>
              <p class="popup-target-price" id="target-2x-price">$0</p>
              <p class="popup-target-description">Portfolio value at 2x</p>
              <p class="popup-target-placeholder" id="target-2x-value">Enter price + qty</p>
            </div>

            <!-- 5x Target -->
            <div class="popup-target-card">
              <p class="popup-target-title">5x Target</p>
              <p class="popup-target-subtitle">Target price</p>
              <p class="popup-target-price" id="target-5x-price">$0</p>
              <p class="popup-target-description">Portfolio value at 5x</p>
              <p class="popup-target-placeholder" id="target-5x-value">Enter price + qty</p>
            </div>

            <!-- 10x Target -->
            <div class="popup-target-card">
              <p class="popup-target-title">10x Target</p>
              <p class="popup-target-subtitle">Target price</p>
              <p class="popup-target-price" id="target-10x-price">$0</p>
              <p class="popup-target-description">Portfolio value at 10x</p>
              <p class="popup-target-placeholder" id="target-10x-value">Enter price + qty</p>
            </div>
          </div>
        </div>

        <!-- Footer -->
        <div class="popup-footer">
          <p class="popup-disclaimer">
            Coin Radar is a separate premium feature. Include up to 5 tracked coins by default, then offer small add-on fees for more.
          </p>
          <button class="popup-upgrade-btn">Preview Premium Upgrade Flow</button>
        </div>
      </div>
    `;

    document.body.appendChild(overlay);
  }

  attachEventListeners() {
    // Close button
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('popup-close-btn') || 
          e.target.classList.contains('portfolio-math-overlay')) {
        this.close();
      }
    });

    // Input listeners for calculations
    document.addEventListener('input', (e) => {
      if (e.target.id === 'popup-purchase-price') {
        this.purchasePrice = parseFloat(e.target.value) || 0;
        this.updateCalculations();
      }
      if (e.target.id === 'popup-quantity') {
        this.quantity = parseFloat(e.target.value) || 0;
        this.updateCalculations();
      }
    });

    // Upgrade button
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('popup-upgrade-btn')) {
        alert('Premium upgrade flow would be triggered here!');
      }
    });

    // Escape key to close
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.close();
      }
    });
  }

  open(coinData) {
    this.currentCoin = coinData;
    const overlay = document.querySelector('.portfolio-math-overlay');
    
    // Populate coin data
    document.getElementById('popup-coin-icon').src = coinData.icon;
    document.getElementById('popup-coin-icon').alt = coinData.name;
    document.getElementById('popup-coin-name').textContent = coinData.name;
    document.getElementById('popup-live-price').textContent = coinData.livePrice;

    // Pre-fill purchase price with live price if available
    const purchasePriceInput = document.getElementById('popup-purchase-price');
    purchasePriceInput.value = coinData.livePrice.replace('$', '').replace(',', '');
    this.purchasePrice = parseFloat(purchasePriceInput.value) || 0;

    // Reset quantity
    document.getElementById('popup-quantity').value = '';
    this.quantity = 0;

    // Update calculations
    this.updateCalculations();

    // Show overlay
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  close() {
    const overlay = document.querySelector('.portfolio-math-overlay');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
    
    // Reset values
    this.currentCoin = null;
    this.purchasePrice = 0;
    this.quantity = 0;
  }

  updateCalculations() {
    if (!this.currentCoin) return;

    const livePrice = parseFloat(this.currentCoin.livePrice.replace('$', '').replace(',', '')) || 0;
    const costBasis = this.purchasePrice * this.quantity;
    const currentValue = livePrice * this.quantity;
    const unrealizedPL = currentValue - costBasis;

    // Update portfolio stats
    document.getElementById('popup-cost-basis').textContent = this.formatCurrency(costBasis);
    document.getElementById('popup-current-value').textContent = this.formatCurrency(currentValue);
    
    const plElement = document.getElementById('popup-unrealized-pl');
    plElement.textContent = (unrealizedPL >= 0 ? '+' : '') + this.formatCurrency(unrealizedPL);
    plElement.className = 'popup-stat-value ' + (unrealizedPL >= 0 ? 'positive' : 'negative');

    // Calculate sell targets
    this.updateTargets(livePrice);
  }

  updateTargets(livePrice) {
    const targets = [
      { multiplier: 2, priceId: 'target-2x-price', valueId: 'target-2x-value' },
      { multiplier: 5, priceId: 'target-5x-price', valueId: 'target-5x-value' },
      { multiplier: 10, priceId: 'target-10x-price', valueId: 'target-10x-value' }
    ];

    targets.forEach(target => {
      const targetPrice = this.purchasePrice * target.multiplier;
      const portfolioValue = targetPrice * this.quantity;

      document.getElementById(target.priceId).textContent = this.formatCurrency(targetPrice);
      
      const valueElement = document.getElementById(target.valueId);
      if (this.quantity > 0 && this.purchasePrice > 0) {
        valueElement.textContent = this.formatCurrency(portfolioValue);
        valueElement.style.color = '#f7931a';
      } else {
        valueElement.textContent = 'Enter price + qty';
        valueElement.style.color = '#f7931a';
      }
    });
  }

  formatCurrency(value) {
    if (value === 0) return '$0.0000';
    
    // Determine decimal places based on value size
    let decimals = 2;
    if (value < 1) {
      decimals = 4;
    }
    
    return '$' + value.toLocaleString('en-US', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals
    });
  }
}

// Initialize the popup system
let portfolioPopup;
document.addEventListener('DOMContentLoaded', () => {
  portfolioPopup = new PortfolioMathPopup();
});

// Helper function to open popup from anywhere
function openPortfolioPopup(coinData) {
  if (portfolioPopup) {
    portfolioPopup.open(coinData);
  }
}

