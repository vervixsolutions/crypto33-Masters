# Components Documentation

This directory contains reusable components for the Crypto33 Masters website.

## Component Structure

Each component is self-contained in its own folder with:
- `[component-name].html` - HTML structure and usage example
- `[component-name].css` - Component-specific styles

## Available Components

### 1. XP Progress Bar (`xp-progress-bar/`)

Displays XP progress with percentage, tier name, and progress bar.

**Props:**
- `percentage`: number (0-100) - Progress percentage
- `tier`: string - Current tier name (e.g., "Initiate Healer")
- `description`: string - Description text below the tier

**Usage:**
```html
<div class="xp-progress-bar">
  <div class="xp-progress-bar__content">
    <div class="xp-progress-bar__text">
      <h3 class="xp-progress-bar__title">
        XP Progress: <span class="xp-progress-bar__percentage">27%</span> — Tier: <span class="xp-progress-bar__tier">Initiate Healer</span>
      </h3>
      <p class="xp-progress-bar__description">Description text here</p>
    </div>
    <div class="xp-progress-bar__bar-wrapper">
      <div class="xp-progress-bar__bar">
        <div class="xp-progress-bar__fill" style="width: 27%"></div>
      </div>
    </div>
  </div>
</div>
```

**Styling:**
- Link `components/xp-progress-bar/xp-progress-bar.css` in your HTML
- Progress bar image: `assets/images/frog-breaker-xp/xp-progress-bar.png` (extracted from Figma)

---

### 2. Hero/Intro Card (`hero-intro-card/`)

Large hero card with title, subtitle, description, and bullet list.

**Props:**
- `subtitle`: string - Small uppercase subtitle
- `title`: string - Main title
- `description`: string - Main description paragraph
- `bullets`: array - Array of bullet point strings

**Usage:**
```html
<div class="hero-intro-card">
  <div class="hero-intro-card__background"></div>
  <div class="hero-intro-card__content">
    <p class="hero-intro-card__subtitle">Subtitle</p>
    <h2 class="hero-intro-card__title">Main Title</h2>
    <p class="hero-intro-card__description">Description text</p>
    <ul class="hero-intro-card__bullets">
      <li>Bullet point 1</li>
      <li>Bullet point 2</li>
    </ul>
  </div>
</div>
```

**Styling:**
- Link `components/hero-intro-card/hero-intro-card.css` in your HTML
- Background image: `assets/images/frog-breaker-xp/hero-intro-background.png` (extracted from Figma)

---

### 3. Section Header (`section-header/`)

Section header with title, description, and optional action button.

**Props:**
- `title`: string - Main section title
- `description`: string - Description text below title (optional)
- `buttonText`: string - Action button text (optional)
- `buttonLink`: string - Action button link (optional)

**Usage:**
```html
<div class="section-header">
  <div class="section-header__content">
    <h2 class="section-header__title">Section Title</h2>
    <p class="section-header__description">Description text</p>
  </div>
  <a href="#" class="section-header__button">Action Button →</a>
</div>
```

**Styling:**
- Link `components/section-header/section-header.css` in your HTML

---

### 4. Pillar Card (`pillar-card/`)

Card component for displaying pillar information with number, title, tags, bullets, and action button.

**Props:**
- `number`: string - Pillar number (e.g., "01", "02")
- `title`: string - Pillar title
- `tags`: string - Comma-separated tags
- `bullets`: array - Array of bullet point strings
- `buttonText`: string - Button text (default: "Open Pillar")
- `variant`: string - Card variant: "default", "highlighted", "blue" (optional)
- `backgroundImage`: string - Background image path (optional)

**Variants:**
- Default: `pillar-card` - Solid background with border
- Highlighted: `pillar-card--highlighted` - With background image and red border
- Blue: `pillar-card--blue` - With background image and blue border

**Usage:**
```html
<div class="pillar-card pillar-card--highlighted">
  <div class="pillar-card__background"></div>
  <div class="pillar-card__content">
    <p class="pillar-card__number">Pillar 01</p>
    <h3 class="pillar-card__title">Pillar Title</h3>
    <p class="pillar-card__tags">Tag 1 • Tag 2 • Tag 3</p>
    <ul class="pillar-card__bullets">
      <li>Bullet point 1</li>
      <li>Bullet point 2</li>
    </ul>
    <button class="pillar-card__button">Open Pillar</button>
  </div>
</div>
```

**Styling:**
- Link `components/pillar-card/pillar-card.css` in your HTML
- Background images (extracted from Figma):
  - Highlighted variant: `assets/images/frog-breaker-xp/pillar-1-background.png`
  - Blue variant: `assets/images/frog-breaker-xp/pillar-4-background.png`

---

### 5. Protocol Card (`protocol-card/`)

Card component for displaying supplement stack protocols with title, description, and action buttons.

**Props:**
- `title`: string - Protocol title
- `description`: string - Short description
- `note`: string - Additional note text (optional)
- `primaryButtonText`: string - Primary button text (default: "Order Now")
- `secondaryButtonText`: string - Secondary button text (default: "View Protocol")

**Usage:**
```html
<div class="protocol-card">
  <div class="protocol-card__content">
    <h3 class="protocol-card__title">Protocol Title</h3>
    <p class="protocol-card__description">Description text</p>
    <p class="protocol-card__note">Note text</p>
    <div class="protocol-card__actions">
      <button class="protocol-card__button protocol-card__button--secondary">View Protocol</button>
      <button class="protocol-card__button protocol-card__button--primary">Order Now</button>
    </div>
  </div>
</div>
```

**Styling:**
- Link `components/protocol-card/protocol-card.css` in your HTML

---

### 6. Tracker Card (`tracker-card/`)

Card component for displaying tracker information and loyalty unlocks with parchment-style background.

**Props:**
- `title`: string - Card title
- `subtitle`: string - Subtitle text (optional)
- `bullets`: array - Array of bullet point strings
- `xpInfo`: string - XP points information text
- `variant`: string - "default" or "loyalty" (for loyalty unlocks card)

**Usage:**
```html
<div class="tracker-card">
  <div class="tracker-card__background"></div>
  <div class="tracker-card__content">
    <h3 class="tracker-card__title">Title</h3>
    <p class="tracker-card__subtitle">Subtitle</p>
    <ul class="tracker-card__bullets">
      <li>Bullet point 1</li>
      <li>Bullet point 2</li>
    </ul>
    <div class="tracker-card__xp-info">
      <p>XP Points information</p>
    </div>
  </div>
</div>
```

**Loyalty Variant:**
```html
<div class="tracker-card tracker-card--loyalty">
  <!-- Same structure as above -->
</div>
```

**Styling:**
- Link `components/tracker-card/tracker-card.css` in your HTML
- Background images (extracted from Figma):
  - Default: `assets/images/frog-breaker-xp/tracker-card-background.png`
  - Loyalty: `assets/images/frog-breaker-xp/loyalty-unlocks-background.png`

---

### 7. Mission Card (`mission-card/`)

Large card component for displaying XP Challenge Missions (Pillar 5) with mission list, badge info, and tracking info.

**Props:**
- `subtitle`: string - Section subtitle
- `title`: string - Mission title
- `bullets`: array - Array of mission bullet points
- `badgeName`: string - Badge name
- `badgeXp`: string - XP points
- `badgeDescription`: string - Badge description
- `trackingTitle`: string - Tracking section title
- `trackingDescription`: string - Tracking description

**Usage:**
```html
<div class="mission-card">
  <div class="mission-card__content">
    <p class="mission-card__subtitle">Pillar 5 — XP Challenge Missions</p>
    <h2 class="mission-card__title">Gatekeeper Missions • Guard Your Gates</h2>
    <ul class="mission-card__bullets">
      <li>Mission 1</li>
      <li>Mission 2</li>
    </ul>
    <div class="mission-card__info-boxes">
      <div class="mission-card__badge-box">
        <h3 class="mission-card__badge-title">Vault Badge: Name</h3>
        <p class="mission-card__badge-description">XP: +300 • Description</p>
      </div>
      <div class="mission-card__tracking-box">
        <h3 class="mission-card__tracking-title">How It Tracks</h3>
        <p class="mission-card__tracking-description">Tracking info</p>
      </div>
    </div>
  </div>
</div>
```

**Styling:**
- Link `components/mission-card/mission-card.css` in your HTML

---

### 8. Series Card (`series-card/`)

Card component for displaying mini-series with emoji, title, video list, and action button.

**Props:**
- `emoji`: string - Emoji icon
- `title`: string - Series title
- `videos`: array - Array of video titles
- `bonus`: string - Bonus content text
- `variant`: string - "sugar", "alcohol", "warrior" (for different background colors)

**Variants:**
- Sugar: `series-card--sugar` - Brown/orange theme
- Alcohol: `series-card--alcohol` - Blue/teal theme
- Warrior: `series-card--warrior` - Orange/brown theme

**Usage:**
```html
<div class="series-card series-card--sugar">
  <div class="series-card__background"></div>
  <div class="series-card__content">
    <h3 class="series-card__title">🍭 Sugar Series</h3>
    <ul class="series-card__videos">
      <li>Video 1: Title</li>
      <li>Video 2: Title</li>
    </ul>
    <p class="series-card__bonus">Bonus: XP Checklist</p>
    <button class="series-card__button">Start Series</button>
  </div>
</div>
```

**Styling:**
- Link `components/series-card/series-card.css` in your HTML
- Background images (extracted from Figma):
  - Sugar: `assets/images/frog-breaker-xp/series-sugar-background.png`
  - Alcohol: `assets/images/frog-breaker-xp/series-alcohol-background.png`
  - Warrior: `assets/images/frog-breaker-xp/series-warrior-background.png`

---

## Adding Components to Pages

1. Copy the component HTML structure into your page
2. Link the component CSS file in the `<head>` section:
   ```html
   <link rel="stylesheet" href="components/[component-name]/[component-name].css">
   ```
3. Customize the content by replacing the example text with your data

## Component Naming Convention

- Use BEM methodology: `.block__element--modifier`
- Component folders: lowercase with hyphens (e.g., `xp-progress-bar`)
- CSS classes: match component folder name (e.g., `.xp-progress-bar`)

## Responsive Design

All components include responsive breakpoints:
- Desktop: Default styles
- Tablet: `@media (max-width: 1200px)`
- Mobile: `@media (max-width: 768px)`

