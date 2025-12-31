# Crypto33 Masters

**A comprehensive cryptocurrency education and news aggregation platform focused on financial freedom, truth, and wealth building.**

## Overview

Crypto33 Masters is a full-featured web platform that combines cryptocurrency education, balanced news analysis, live market tracking, gamified learning systems, and community features. The platform helps users understand crypto, politics, and financial markets from multiple perspectives while building wealth and maintaining financial sovereignty.

## Key Features

### 🎓 Training & Education
- 8-week structured cryptocurrency training program
- Interactive lessons with progress tracking
- XP (Experience Points) system for gamification
- Lesson completion badges and rewards
- Step-by-step learning paths

### 📰 Freedom Hub - News Aggregation
- **Atlas Jr. Daily Brief**: Updated every morning with balanced news analysis
- Balanced news feed showing Left, Right, and Atlas Jr. Truth perspectives side-by-side
- **Freedom Meter**: Scoring system to assess risk to sovereignty and wealth (0-100%)
- Category filters: Crypto, Politics, Health, Economy
- Real-time news aggregation from multiple sources
- Comment system on articles with moderation
- Social sharing (X/Twitter, Facebook)

### 📊 Coin Radar - Live Market Tracking
- Live cryptocurrency market heatmap
- Real-time price tracking for major coins (Bitcoin, Ethereum, Dogecoin, etc.)
- Market tabs: Favorites, Hot, New, Gainers, Losers, 24h Vol, Market Cap
- Search and filter functionality
- Portfolio math calculator popup
- Coin alert system
- Market image popups with detailed information

### 🏆 Vault System
- Rank progression: Recruit → Commander → Sovereign
- Badge collection system with Eagle badge achievements
- XP tracking and leaderboard
- Progress visualization with decorative elements
- User profile and statistics tracking

### 🐸 Fog Breaker XP - Health & Wellness System
- Health-focused XP progression system
- **Healing Blueprint**: 5 pillars of health and wellness
- **Mini Series**: Educational video series (Sugar, Alcohol, Warrior)
- **Supplement Stack Protocols**: Health protocol cards
- **Tracker System**: Health tracking with loyalty unlocks
- **XP Challenge Missions**: Gatekeeper missions with badge rewards
- Tier progression: Initiate Healer → Advanced tiers

### 📚 Books - Freedom Library
- Digital library showcasing published books
- Book collection tracking (e.g., "2 of 5 in your Vault")
- XP generation and badge unlocks for book completion
- Referral links and free downloads
- Featured books: "Crypto33", "From Fog to Fire", and future titles
- Preview and purchase functionality

### 👥 Community Features
- Comment system on news articles
- Social sharing (X/Twitter, Facebook)
- User notifications and strike system
- Safety rules and moderation
- Respectful discussion guidelines

### 💎 Membership Tiers
- **$33 Club**: Limited founding offer
- Sovereign Circle (premium tier)
- Early alerts for breaking news
- VIP badges and exclusive content
- Membership gating system

### ✝️ Faith Section
- Faith-based content and resources
- Integration of freedom, faith, and facts philosophy

## Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Styling**: 
  - Modular CSS architecture with `main.css` as entry point
  - Component-based styling system
  - Responsive design with mobile-first approach
- **Fonts**: 
  - Montserrat (weights: 400, 500, 600, 700, 800)
  - Poppins (weights: 400, 500, 600, 700)
  - Bebas Neue
  - Inter (weights: 400, 500, 600, 700, 800)
  - Vollkorn (weights: 400, 700)
- **Icons**: Font Awesome 6.4.0
- **Design**: Dark theme with orange (#f7931a) accent colors
- **Architecture**: Component-based reusable UI system

## Project Structure

```
crypto33-Masters/
├── index.html                    # Homepage with hero, live coin prices, vault teaser
├── coin-radar.html              # Live cryptocurrency market heatmap
├── vault.html                   # User progress tracking and badge system
├── training.html                # 8-week cryptocurrency training program
├── freedom-hub.html             # News aggregation with Freedom Meter
├── frog-breaker-xp.html         # Health & wellness XP system
├── books.html                   # Freedom Library - book collection
├── signup.html                  # Login/Join page
├── faith.html                   # Faith section
│
├── assets/
│   ├── css/
│   │   ├── main.css             # Main stylesheet (imports all CSS)
│   │   ├── reset.css            # CSS reset
│   │   ├── variables.css        # CSS variables
│   │   ├── base.css             # Base typography and common styles
│   │   ├── utilities.css        # Utility classes
│   │   ├── components.css      # Component styles
│   │   ├── header.css           # Header and navigation
│   │   ├── footer.css           # Footer component
│   │   ├── style.css            # Additional global styles
│   │   ├── freedom-hub.css      # Freedom Hub page styles
│   │   ├── freedom-meter.css    # Freedom Meter widget styles
│   │   ├── coin-radar.css       # Coin Radar page styles
│   │   ├── vault.css            # Vault page styles
│   │   ├── training.css         # Training page styles
│   │   ├── books.css            # Books page styles
│   │   ├── frog-breaker-xp.css  # Fog Breaker XP page styles
│   │   ├── comment-section.css  # Comment system styles
│   │   ├── signup.css           # Signup page styles
│   │   └── [other page-specific CSS files]
│   │
│   ├── js/
│   │   ├── main.js              # Main JavaScript (mobile menu, navigation)
│   │   ├── coin-alert-popup.js  # Coin alert popup functionality
│   │   ├── market-image-popup.js # Market image popup functionality
│   │   └── portfolio-math-popup.js # Portfolio calculator popup
│   │
│   └── images/
│       ├── logos/               # Logo files
│       ├── backgrounds/         # Background images
│       ├── coin-radar/          # Coin Radar icons and images
│       ├── freedom-meter/       # Freedom Meter gauge assets
│       ├── frog-breaker-xp/    # Fog Breaker XP images
│       ├── books/               # Book covers and images
│       ├── vault/               # Vault decorative elements
│       ├── icons/               # Icon files (SVG, PNG)
│       ├── decorative/          # Decorative elements
│       └── content/             # Content images
│
└── components/                   # Reusable component library
    ├── README.md                # Component documentation
    ├── xp-progress-bar/         # XP progress bar component
    ├── hero-intro-card/         # Hero/intro card component
    ├── section-header/          # Section header component
    ├── pillar-card/             # Pillar card component
    ├── protocol-card/           # Protocol card component
    ├── tracker-card/            # Tracker card component
    ├── mission-card/            # Mission card component
    └── series-card/             # Series card component
```

## Component System

The project uses a modular component-based architecture. Each component is self-contained with its own HTML structure and CSS. See `components/README.md` for detailed component documentation.

**Available Components:**
- XP Progress Bar
- Hero/Intro Card
- Section Header
- Pillar Card
- Protocol Card
- Tracker Card
- Mission Card
- Series Card

## Pages

- **Homepage** (`index.html`): Main landing page with hero section, live coin prices, vault teaser, mission cards, and membership information
- **Coin Radar** (`coin-radar.html`): Live cryptocurrency market heatmap with real-time price tracking, filters, and portfolio tools
- **Vault** (`vault.html`): User progress tracking, badge collection, rank progression, and XP leaderboard
- **Training** (`training.html`): 8-week structured cryptocurrency training program with interactive lessons
- **Freedom Hub** (`freedom-hub.html`): News aggregation platform with Atlas Jr. Daily Brief, Freedom Meter, and multi-perspective analysis
- **Fog Breaker XP** (`frog-breaker-xp.html`): Health & wellness system with healing blueprint, mini series, supplement protocols, and tracker
- **Books** (`books.html`): Freedom Library showcasing published books with collection tracking and XP rewards
- **Signup** (`signup.html`): Login/Join page for user authentication and membership signup
- **Faith** (`faith.html`): Faith-based content and resources

## Getting Started

1. **Clone the repository:**
```bash
git clone https://github.com/vervixsolutions/crypto33-Masters.git
cd crypto33-Masters
```

2. **Open in browser:**
   - Simply open `index.html` in your web browser to view the homepage
   - No build process or dependencies required (static HTML/CSS/JS)

3. **Navigate through pages:**
   - Use the header navigation to access different sections
   - All pages are linked and functional

## CSS Architecture

The project uses a modular CSS architecture:
- `main.css` serves as the entry point, importing all stylesheets in the correct order
- Styles are organized by purpose: reset, variables, base, utilities, components, and page-specific styles
- Component styles are located in the `components/` directory
- Page-specific styles are in `assets/css/` with descriptive names

## Design Philosophy

Crypto33 Masters promotes:
- **Truth**: Multiple perspectives on news and events (Left, Right, Atlas Jr. Truth)
- **Education**: Structured learning paths for cryptocurrency mastery
- **Freedom**: Financial sovereignty and wealth building
- **Health**: Holistic approach to wellness (Fog Breaker XP)
- **Community**: Respectful discussion and knowledge sharing
- **Faith**: Integration of faith-based principles

## Features

### Live Market Data
- Real-time cryptocurrency price tracking
- Market heatmap visualization
- Portfolio calculation tools

### Gamification
- XP (Experience Points) system across multiple areas
- Badge collection and achievements
- Rank progression system
- Leaderboards

### News & Analysis
- Daily news briefs (Atlas Jr. Daily Brief)
- Freedom Meter risk assessment
- Multi-perspective news analysis
- Category filtering

### Education
- 8-week training program
- Book library with XP rewards
- Mini video series
- Health protocols and trackers

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Responsive design for desktop, tablet, and mobile devices
- Mobile menu toggle for smaller screens

## Disclaimer

**Important**: This is an educational and informational platform. Content is for discussion purposes and does not constitute financial, tax, legal, or medical advice. Always do your own research (DYOR) and consult qualified professionals before making any financial, health, or legal decisions.

## License

All Rights Reserved

---

**Built with ❤️ for financial freedom and truth**

