# CURSOR AI PROMPT - PHASE 1: PROJECT SETUP & COMPONENTS

## 🎯 YOUR JOB
Set up the project, extract all assets from Figma, build the design system, and create reusable components.

---

## 📁 STEP 1: CREATE FOLDER STRUCTURE

Run these commands:

```bash
mkdir -p assets/{css,js,images/{icons,backgrounds,content,logos},fonts}
mkdir -p components
touch index.html
touch assets/css/{reset.css,variables.css,base.css,components.css,utilities.css}
touch assets/js/main.js
```

**Final structure:**
```
project/
├── index.html
├── assets/
│   ├── css/
│   │   ├── reset.css
│   │   ├── variables.css
│   │   ├── base.css
│   │   ├── components.css
│   │   └── utilities.css
│   ├── js/
│   │   └── main.js
│   ├── images/
│   │   ├── icons/
│   │   ├── backgrounds/
│   │   ├── content/
│   │   └── logos/
│   └── fonts/
└── components/
```

---

## 🖼️ STEP 2: EXTRACT ALL ASSETS FROM FIGMA

### A. Export Images
1. Open Figma design
2. Select all images/photos
3. Export as:
   - **Photos**: JPG, 2x resolution
   - **Graphics with transparency**: PNG, 2x resolution
4. Save to `assets/images/content/`

**Naming convention:**
```
hero-banner.jpg
about-team-photo.jpg
service-card-bg-1.png
portfolio-project-1.jpg
```

### B. Export Icons
1. Select all icons
2. Export as **SVG**, 1x resolution
3. Save to `assets/images/icons/`

**Naming convention:**
```
icon-arrow-right.svg
icon-check.svg
icon-menu.svg
icon-close.svg
```

### C. Export Logos
1. Export as **SVG** (primary)
2. Also export as **PNG** 2x (fallback)
3. Save to `assets/images/logos/`

### D. Download Fonts
1. Note font families used in Figma
2. Download from Google Fonts or font provider
3. Save to `assets/fonts/[font-name]/`

**Example:**
```
assets/fonts/
├── inter/
│   ├── Inter-Regular.woff2
│   ├── Inter-Medium.woff2
│   └── Inter-Bold.woff2
```

---

## 🎨 STEP 3: EXTRACT DESIGN SYSTEM

Open Figma and extract these values. Write them to `assets/css/variables.css`:

### A. Colors

```css
:root {
  /* Primary Colors */
  --color-primary: #[hex from figma];
  --color-primary-light: #[hex from figma];
  --color-primary-dark: #[hex from figma];
  
  /* Secondary Colors */
  --color-secondary: #[hex from figma];
  
  /* Neutrals */
  --color-gray-50: #[hex from figma];
  --color-gray-100: #[hex from figma];
  --color-gray-200: #[hex from figma];
  --color-gray-300: #[hex from figma];
  --color-gray-400: #[hex from figma];
  --color-gray-500: #[hex from figma];
  --color-gray-600: #[hex from figma];
  --color-gray-700: #[hex from figma];
  --color-gray-800: #[hex from figma];
  --color-gray-900: #[hex from figma];
  
  /* Semantic */
  --color-success: #[hex from figma];
  --color-warning: #[hex from figma];
  --color-error: #[hex from figma];
  
  /* Backgrounds */
  --color-bg-primary: #FFFFFF;
  --color-bg-secondary: #[hex from figma];
  
  /* Text */
  --color-text-primary: #[hex from figma];
  --color-text-secondary: #[hex from figma];
  --color-text-inverse: #FFFFFF;
  
  /* Borders */
  --color-border: #[hex from figma];
}
```

### B. Typography

```css
:root {
  /* Fonts */
  --font-primary: '[Font Name]', sans-serif;
  --font-secondary: '[Font Name]', serif;
  
  /* Sizes - measure from Figma */
  --text-xs: 0.75rem;      /* 12px */
  --text-sm: 0.875rem;     /* 14px */
  --text-base: 1rem;       /* 16px */
  --text-lg: 1.125rem;     /* 18px */
  --text-xl: 1.25rem;      /* 20px */
  --text-2xl: 1.5rem;      /* 24px */
  --text-3xl: 1.875rem;    /* 30px */
  --text-4xl: 2.25rem;     /* 36px */
  --text-5xl: 3rem;        /* 48px */
  --text-6xl: 3.75rem;     /* 60px */
  
  /* Weights */
  --font-regular: 400;
  --font-medium: 500;
  --font-semibold: 600;
  --font-bold: 700;
  
  /* Line Heights */
  --leading-tight: 1.25;
  --leading-normal: 1.5;
  --leading-relaxed: 1.75;
}
```

### C. Spacing

```css
:root {
  /* Spacing - measure gaps in Figma */
  --space-1: 0.25rem;    /* 4px */
  --space-2: 0.5rem;     /* 8px */
  --space-3: 0.75rem;    /* 12px */
  --space-4: 1rem;       /* 16px */
  --space-5: 1.25rem;    /* 20px */
  --space-6: 1.5rem;     /* 24px */
  --space-8: 2rem;       /* 32px */
  --space-10: 2.5rem;    /* 40px */
  --space-12: 3rem;      /* 48px */
  --space-16: 4rem;      /* 64px */
  --space-20: 5rem;      /* 80px */
  --space-24: 6rem;      /* 96px */
}
```

### D. Border Radius

```css
:root {
  /* Border Radius - measure from Figma */
  --radius-sm: 0.25rem;    /* 4px */
  --radius-md: 0.5rem;     /* 8px */
  --radius-lg: 0.75rem;    /* 12px */
  --radius-xl: 1rem;       /* 16px */
  --radius-2xl: 1.5rem;    /* 24px */
  --radius-full: 9999px;
}
```

### E. Shadows

```css
:root {
  /* Shadows - copy from Figma effects */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
  --shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.15);
}
```

### F. Breakpoints

```css
:root {
  /* Breakpoints - measure frame widths */
  --breakpoint-sm: 640px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 1024px;
  --breakpoint-xl: 1280px;
  
  /* Container widths */
  --container-sm: 640px;
  --container-md: 768px;
  --container-lg: 1024px;
  --container-xl: 1280px;
}
```

### G. Z-Index Scale

```css
:root {
  /* Z-Index */
  --z-base: 0;
  --z-dropdown: 100;
  --z-sticky: 200;
  --z-modal-backdrop: 300;
  --z-modal: 400;
  --z-popover: 500;
  --z-tooltip: 600;
}
```

---

## 🔧 STEP 4: SETUP BASE CSS

### A. reset.css

```css
/* Modern CSS Reset */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
}

body {
  min-height: 100vh;
  line-height: 1.5;
}

img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
  height: auto;
}

input, button, textarea, select {
  font: inherit;
}

button {
  cursor: pointer;
  border: none;
  background: none;
}

a {
  text-decoration: none;
  color: inherit;
}

ul, ol {
  list-style: none;
}
```

### B. base.css

```css
/* Load fonts */
@font-face {
  font-family: '[Font Name]';
  src: url('../fonts/[font-folder]/[font-file].woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

/* Add more @font-face for other weights */

/* Base styles */
body {
  font-family: var(--font-primary);
  font-size: var(--text-base);
  font-weight: var(--font-regular);
  line-height: var(--leading-normal);
  color: var(--color-text-primary);
  background-color: var(--color-bg-primary);
}

/* Headings */
h1, h2, h3, h4, h5, h6 {
  font-weight: var(--font-bold);
  line-height: var(--leading-tight);
  color: var(--color-text-primary);
}

h1 { font-size: var(--text-6xl); }
h2 { font-size: var(--text-5xl); }
h3 { font-size: var(--text-4xl); }
h4 { font-size: var(--text-3xl); }
h5 { font-size: var(--text-2xl); }
h6 { font-size: var(--text-xl); }

/* Paragraphs */
p {
  color: var(--color-text-secondary);
}

/* Links */
a {
  color: var(--color-primary);
  transition: color 0.2s ease;
}

a:hover {
  color: var(--color-primary-dark);
}

/* Container */
.container {
  width: 100%;
  max-width: var(--container-xl);
  margin: 0 auto;
  padding: 0 var(--space-4);
}

@media (min-width: 768px) {
  .container {
    padding: 0 var(--space-6);
  }
}

@media (min-width: 1024px) {
  .container {
    padding: 0 var(--space-8);
  }
}
```

---

## 🧩 STEP 5: BUILD REUSABLE COMPONENTS

**IMPORTANT:** Make components loosely coupled - no parent dependencies!

### Component Checklist

Go through Figma and identify:

```
□ Buttons (primary, secondary, sizes)
□ Input fields (text, email, password, textarea)
□ Cards (all variations)
□ Navigation elements
□ Form components
□ Badges/Labels
□ Alerts/Messages
□ Modals/Dialogs
```

### Example: Button Component

**Measure from Figma:**
- Padding: 12px 24px
- Height: 48px
- Border radius: 8px
- Font size: 16px
- Font weight: 500

**Write to `components.css`:**

```css
/* ===== BUTTONS ===== */

.btn {
  /* Base - reusable */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-3) var(--space-6);
  font-family: var(--font-primary);
  font-size: var(--text-base);
  font-weight: var(--font-medium);
  line-height: 1;
  border-radius: var(--radius-lg);
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  text-decoration: none;
  white-space: nowrap;
}

/* Variants - loosely coupled */
.btn-primary {
  background-color: var(--color-primary);
  color: var(--color-text-inverse);
}

.btn-primary:hover {
  background-color: var(--color-primary-dark);
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.btn-secondary {
  background-color: transparent;
  color: var(--color-primary);
  border: 2px solid var(--color-primary);
}

.btn-secondary:hover {
  background-color: var(--color-primary);
  color: var(--color-text-inverse);
}

/* Sizes - loosely coupled */
.btn-sm {
  padding: var(--space-2) var(--space-4);
  font-size: var(--text-sm);
}

.btn-lg {
  padding: var(--space-4) var(--space-8);
  font-size: var(--text-lg);
}

/* States - loosely coupled */
.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}

.btn:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}
```

**Usage (loosely coupled):**
```html
<button class="btn btn-primary">Default</button>
<button class="btn btn-primary btn-lg">Large Primary</button>
<button class="btn btn-secondary btn-sm">Small Secondary</button>
```

### Example: Card Component

**Measure from Figma:**
- Background: white
- Border radius: 16px
- Padding: 24px
- Shadow: medium

**Write to `components.css`:**

```css
/* ===== CARDS ===== */

.card {
  /* Base - reusable */
  background-color: var(--color-bg-primary);
  border-radius: var(--radius-2xl);
  padding: var(--space-6);
  box-shadow: var(--shadow-md);
  transition: all 0.3s ease;
}

.card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-4px);
}

/* Card sections - loosely coupled */
.card__header {
  margin-bottom: var(--space-4);
}

.card__title {
  font-size: var(--text-2xl);
  font-weight: var(--font-bold);
  color: var(--color-text-primary);
  margin-bottom: var(--space-2);
}

.card__body {
  color: var(--color-text-secondary);
  line-height: var(--leading-relaxed);
}

.card__footer {
  margin-top: var(--space-6);
  padding-top: var(--space-4);
  border-top: 1px solid var(--color-border);
}

/* Card variants - loosely coupled */
.card-featured {
  border: 2px solid var(--color-primary);
}

.card-horizontal {
  display: flex;
  gap: var(--space-6);
}
```

**Usage (loosely coupled):**
```html
<div class="card">
  <div class="card__header">
    <h3 class="card__title">Card Title</h3>
  </div>
  <div class="card__body">
    <p>Card content goes here</p>
  </div>
  <div class="card__footer">
    <button class="btn btn-primary">Action</button>
  </div>
</div>
```

### Example: Input Component

```css
/* ===== FORM INPUTS ===== */

.input {
  /* Base - reusable */
  width: 100%;
  padding: var(--space-3) var(--space-4);
  font-family: var(--font-primary);
  font-size: var(--text-base);
  color: var(--color-text-primary);
  background-color: var(--color-bg-primary);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  transition: all 0.2s ease;
}

.input:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.input::placeholder {
  color: var(--color-text-secondary);
}

/* Input variants - loosely coupled */
.input-error {
  border-color: var(--color-error);
}

.input-success {
  border-color: var(--color-success);
}

/* Label - loosely coupled */
.label {
  display: block;
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
  color: var(--color-text-primary);
  margin-bottom: var(--space-2);
}

/* Form group - loosely coupled */
.form-group {
  margin-bottom: var(--space-6);
}

.form-group .label {
  margin-bottom: var(--space-2);
}

.form-group .input {
  margin-bottom: var(--space-1);
}

.form-group .help-text {
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
}

.form-group .error-text {
  font-size: var(--text-sm);
  color: var(--color-error);
}
```

**Usage (loosely coupled):**
```html
<div class="form-group">
  <label class="label" for="email">Email</label>
  <input type="email" id="email" class="input" placeholder="Enter your email">
  <span class="help-text">We'll never share your email</span>
</div>
```

---

## 🛠️ STEP 6: CREATE UTILITY CLASSES

**Write to `utilities.css`:**

```css
/* Display */
.d-none { display: none; }
.d-block { display: block; }
.d-flex { display: flex; }
.d-grid { display: grid; }

/* Flex */
.flex-row { flex-direction: row; }
.flex-column { flex-direction: column; }
.justify-center { justify-content: center; }
.justify-between { justify-content: space-between; }
.align-center { align-items: center; }
.gap-4 { gap: var(--space-4); }
.gap-6 { gap: var(--space-6); }

/* Text */
.text-center { text-align: center; }
.text-left { text-align: left; }
.text-right { text-align: right; }
.font-bold { font-weight: var(--font-bold); }

/* Spacing */
.mt-4 { margin-top: var(--space-4); }
.mb-4 { margin-bottom: var(--space-4); }
.mt-6 { margin-top: var(--space-6); }
.mb-6 { margin-bottom: var(--space-6); }
.py-12 { padding-top: var(--space-12); padding-bottom: var(--space-12); }
.px-4 { padding-left: var(--space-4); padding-right: var(--space-4); }

/* Width */
.w-full { width: 100%; }
.max-w-full { max-width: 100%; }
```

---

## 📄 STEP 7: CREATE HTML TEMPLATE

**Create `index.html`:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Website</title>
  
  <!-- Preload critical fonts -->
  <link rel="preload" href="assets/fonts/[font]/[font].woff2" as="font" type="font/woff2" crossorigin>
  
  <!-- CSS in order -->
  <link rel="stylesheet" href="assets/css/reset.css">
  <link rel="stylesheet" href="assets/css/variables.css">
  <link rel="stylesheet" href="assets/css/base.css">
  <link rel="stylesheet" href="assets/css/components.css">
  <link rel="stylesheet" href="assets/css/utilities.css">
</head>
<body>
  
  <!-- Content goes here in Phase 2 -->
  
  <script src="assets/js/main.js"></script>
</body>
</html>
```

---

## ✅ PHASE 1 COMPLETE CHECKLIST

Before moving to Phase 2, verify:

- [ ] Folder structure created
- [ ] All images exported from Figma
- [ ] All icons exported as SVG
- [ ] Logos exported
- [ ] Fonts downloaded
- [ ] Design system extracted (colors, typography, spacing, etc.)
- [ ] `variables.css` complete with all tokens
- [ ] `reset.css` added
- [ ] `base.css` with font loading and base styles
- [ ] All common components built in `components.css`
- [ ] Utility classes created in `utilities.css`
- [ ] HTML template ready
- [ ] All CSS linked in correct order

---

## 🎯 KEY PRINCIPLES

**Loose Coupling:**
- Base classes are independent (`.btn`, `.card`, `.input`)
- Modifiers don't depend on context (`.btn-primary`, `.btn-lg`)
- Can mix and match freely (`class="btn btn-primary btn-lg"`)
- No deep nesting in selectors
- No `!important` needed

**Reusability:**
- Components work anywhere
- No parent-specific styles
- Use CSS variables for consistency
- Utility classes for quick adjustments

**Scalability:**
- Easy to add new variants
- Easy to override when needed
- Mobile-first approach
- Performance optimized

---
