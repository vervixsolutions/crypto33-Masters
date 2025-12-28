# FIGMA TO HTML/CSS CONVERSION PROMPT

## 🎯 YOUR JOB
Convert Figma designs to pixel-perfect HTML/CSS while reusing existing components and maintaining design system consistency.

---

## 📋 PRE-CONVERSION CHECKLIST

Before starting, verify:
- [ ] Figma design is open and accessible
- [ ] Current page structure is understood
- [ ] Existing CSS files are reviewed (`assets/css/`)
- [ ] Design system variables are available (`variables.css`)
- [ ] Component library is checked (`components.css`)

---

## 🔍 STEP 1: ANALYZE FIGMA DESIGN

### A. Identify Page Structure
1. **Frame Dimensions**
   - Measure exact frame width (desktop, tablet, mobile)
   - Note breakpoints used
   - Check container max-widths

2. **Section Breakdown**
   - List all sections in order
   - Identify repeating patterns (cards, lists, grids)
   - Note unique sections vs reusable components

3. **Component Inventory**
   - Buttons (variants, sizes)
   - Cards (types, layouts)
   - Navigation elements
   - Form inputs
   - Typography (headings, body text)
   - Icons and images

### B. Extract Exact Measurements
**CRITICAL: Measure everything directly from Figma - do not estimate!**

1. **Spacing**
   - Section padding (top, bottom, left, right)
   - Gap between elements (exact px values)
   - Margin between sections
   - Internal padding within components

2. **Typography**
   - Font family (exact name from Figma)
   - Font size (exact px value)
   - Font weight (400, 500, 600, 700, 800)
   - Line height (exact value or percentage)
   - Letter spacing (exact px value)
   - Text color (exact hex code)

3. **Colors**
   - Background colors (exact hex)
   - Text colors (exact hex)
   - Border colors (exact hex)
   - Hover states (exact hex)

4. **Dimensions**
   - Width (exact px or percentage)
   - Height (exact px or min-height)
   - Border radius (exact px)
   - Border width (exact px)

5. **Effects**
   - Shadows (exact values: x, y, blur, spread, color, opacity)
   - Gradients (exact stops, colors, direction)
   - Opacity values

6. **Layout**
   - Flexbox/Grid properties
   - Alignment (exact values: flex-start, center, space-between, etc.)
   - Justify content
   - Align items
   - Gap values

---

## 🏗️ STEP 2: PLAN COMPONENT REUSE

### A. Check Existing Components
Before creating new styles, check if these exist:
- `components.css` - Reusable components
- `utilities.css` - Utility classes
- `variables.css` - Design tokens

### B. Component Reuse Strategy
1. **Use Existing Components When:**
   - Design matches existing component (≥90% similarity)
   - Only minor adjustments needed (colors, spacing)
   - Can be extended with modifier classes

2. **Create New Components When:**
   - Design is significantly different
   - Component will be reused across pages
   - Requires unique structure

3. **Page-Specific Styles When:**
   - Unique to this page only
   - One-off layout requirements
   - Page-specific overrides

---

## 📝 STEP 3: CREATE HTML STRUCTURE

### A. Semantic HTML
```html
<!-- Use semantic elements -->
<section class="page-section">
  <div class="container">
    <header class="section-header">
      <h2 class="section-title">Title</h2>
    </header>
    <div class="section-content">
      <!-- Content -->
    </div>
  </div>
</section>
```

### B. Component Structure
```html
<!-- Reusable components -->
<div class="card">
  <div class="card__header">
    <h3 class="card__title">Title</h3>
  </div>
  <div class="card__body">
    <p>Content</p>
  </div>
</div>
```

### C. Naming Conventions
- Use BEM methodology: `.block__element--modifier`
- Page-specific: `.page-name-section`
- Reusable: `.component-name`

---

## 🎨 STEP 4: WRITE CSS

### A. File Organization

**1. Reuse Existing CSS (in this order):**
```html
<!-- In HTML head -->
<link rel="stylesheet" href="assets/css/reset.css">
<link rel="stylesheet" href="assets/css/variables.css">
<link rel="stylesheet" href="assets/css/base.css">
<link rel="stylesheet" href="assets/css/components.css">
<link rel="stylesheet" href="assets/css/utilities.css">
```

**2. Create Page-Specific CSS:**
- File: `assets/css/[page-name].css`
- Example: `assets/css/about.css`, `assets/css/contact.css`
- Link after other CSS files

### B. CSS Writing Rules

**1. Use CSS Variables (from variables.css)**
```css
/* ✅ GOOD - Use variables */
.section {
  background-color: var(--color-bg-primary);
  padding: var(--spacing-6xl) 0;
  color: var(--color-text-primary);
}

/* ❌ BAD - Hardcoded values */
.section {
  background-color: #000000;
  padding: 80px 0;
  color: #ffffff;
}
```

**2. Exact Measurements from Figma**
```css
/* ✅ GOOD - Exact values from Figma */
.card {
  width: 320px;           /* Exact from Figma */
  height: 240px;          /* Exact from Figma */
  padding: 24px;            /* Exact from Figma */
  border-radius: 16px;   /* Exact from Figma */
  gap: 20px;             /* Exact from Figma */
}

/* ❌ BAD - Estimated values */
.card {
  width: 300px;          /* Wrong! */
  padding: 20px;         /* Wrong! */
  border-radius: 10px;   /* Wrong! */
}
```

**3. Typography Matching**
```css
/* ✅ GOOD - Exact typography from Figma */
.section-title {
  font-family: var(--font-primary);        /* From Figma */
  font-size: 48px;                         /* Exact from Figma */
  font-weight: 700;                        /* Exact from Figma */
  line-height: 1.2;                       /* Exact from Figma */
  letter-spacing: 2px;                    /* Exact from Figma */
  color: #FFFFFF;                          /* Exact hex from Figma */
}

/* ❌ BAD - Approximated values */
.section-title {
  font-size: 50px;        /* Wrong! Should be 48px */
  font-weight: 600;       /* Wrong! Should be 700 */
  color: white;           /* Use exact hex */
}
```

**4. Layout Alignment**
```css
/* ✅ GOOD - Exact alignment from Figma */
.card-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;                              /* Exact from Figma */
  align-items: start;                     /* Exact from Figma */
  justify-items: center;                  /* Exact from Figma */
}

.flex-container {
  display: flex;
  flex-direction: row;                    /* Exact from Figma */
  justify-content: space-between;         /* Exact from Figma */
  align-items: center;                    /* Exact from Figma */
  gap: 20px;                              /* Exact from Figma */
}
```

**5. Colors - Exact Hex Codes**
```css
/* ✅ GOOD - Exact colors from Figma */
.button-primary {
  background-color: #f7931a;              /* Exact hex from Figma */
  color: #ffffff;                          /* Exact hex from Figma */
  border: 1px solid #f7931a;             /* Exact hex from Figma */
}

.button-primary:hover {
  background-color: #e68217;              /* Exact hover color from Figma */
}
```

**6. Shadows - Exact Values**
```css
/* ✅ GOOD - Exact shadow from Figma */
.card {
  box-shadow: 0px 4px 36.9px 0px rgba(247, 147, 26, 0.25);
  /* Copy exact values from Figma effects panel */
}
```

---

## 🔍 STEP 5: ACCURACY VERIFICATION

### A. Visual Comparison Checklist

**1. Layout Accuracy**
- [ ] Section spacing matches Figma exactly
- [ ] Element alignment matches (left, center, right)
- [ ] Grid/flex gaps match exactly
- [ ] Container widths match breakpoints

**2. Typography Accuracy**
- [ ] Font family matches exactly
- [ ] Font size matches exactly (measure in Figma)
- [ ] Font weight matches exactly
- [ ] Line height matches exactly
- [ ] Letter spacing matches exactly
- [ ] Text color matches exactly (use eyedropper in Figma)

**3. Component Accuracy**
- [ ] Card dimensions match exactly
- [ ] Button sizes match exactly
- [ ] Padding/margins match exactly
- [ ] Border radius matches exactly
- [ ] Border width matches exactly

**4. Color Accuracy**
- [ ] Background colors match (use eyedropper)
- [ ] Text colors match (use eyedropper)
- [ ] Border colors match (use eyedropper)
- [ ] Hover states match (use eyedropper)

**5. Spacing Accuracy**
- [ ] Padding values match exactly
- [ ] Margin values match exactly
- [ ] Gap values match exactly
- [ ] Section spacing matches exactly

**6. Effects Accuracy**
- [ ] Shadows match exactly (copy from Figma)
- [ ] Gradients match exactly
- [ ] Opacity values match exactly
- [ ] Blur effects match exactly

### B. Measurement Tools

**In Figma:**
1. Select element → Check right panel for exact values
2. Use Measure tool (hold Option/Alt) to measure distances
3. Use Eyedropper tool for exact colors
4. Check Effects panel for shadows, blurs
5. Check Typography panel for font details

**In Browser DevTools:**
1. Inspect element → Check computed styles
2. Compare with Figma values side-by-side
3. Use ruler/measure tool if needed

---

## 📐 STEP 6: COMPONENT PATTERNS

### A. Card Components

**When converting cards, ensure:**
```css
/* Measure from Figma: */
.card {
  width: [exact px from Figma];
  height: [exact px or auto];
  padding: [exact px] [exact px] [exact px] [exact px];
  background-color: [exact hex];
  border-radius: [exact px];
  border: [exact px] solid [exact hex];
  box-shadow: [exact shadow from Figma];
  gap: [exact px];                        /* If using flex/grid */
}

.card__header {
  margin-bottom: [exact px from Figma];
}

.card__title {
  font-size: [exact px from Figma];
  font-weight: [exact weight from Figma];
  color: [exact hex from Figma];
  line-height: [exact value from Figma];
}
```

### B. List Components

**When converting lists, ensure:**
```css
.list {
  display: flex;
  flex-direction: column;                 /* Or row from Figma */
  gap: [exact px between items];
  padding: [exact px];
}

.list-item {
  padding: [exact px];
  margin-bottom: [exact px];              /* If not using gap */
  border-bottom: [exact px] solid [exact hex]; /* If has border */
}
```

### C. Grid Components

**When converting grids, ensure:**
```css
.grid {
  display: grid;
  grid-template-columns: [exact columns from Figma];
  gap: [exact px from Figma];
  align-items: [exact value from Figma];
  justify-items: [exact value from Figma];
}
```

---

## 🎯 STEP 7: RESPONSIVE DESIGN

### A. Breakpoint Strategy

**Use existing breakpoints from variables.css:**
```css
/* Desktop first, then mobile */
.section {
  padding: var(--spacing-7xl) 0;          /* Desktop */
}

@media (max-width: 968px) {
  .section {
    padding: var(--spacing-5xl) 0;        /* Tablet */
  }
}

@media (max-width: 768px) {
  .section {
    padding: var(--spacing-4xl) 0;        /* Mobile */
  }
}
```

### B. Measure Each Breakpoint in Figma
- Check Figma frames for mobile/tablet versions
- Extract exact values for each breakpoint
- Don't assume - measure each one

---

## ✅ STEP 8: QUALITY ASSURANCE

### A. Before Marking Complete

**1. Visual Inspection**
- [ ] Open HTML in browser
- [ ] Open Figma design side-by-side
- [ ] Compare every section visually
- [ ] Check all breakpoints (desktop, tablet, mobile)

**2. Measurement Verification**
- [ ] All spacing values match Figma
- [ ] All font sizes match Figma
- [ ] All colors match Figma (use eyedropper)
- [ ] All dimensions match Figma
- [ ] All alignments match Figma

**3. Component Verification**
- [ ] Reused components work correctly
- [ ] Page-specific styles don't break existing pages
- [ ] No hardcoded values (use variables when possible)
- [ ] All images are in correct folders and referenced correctly

**4. Code Quality**
- [ ] Semantic HTML structure
- [ ] BEM naming convention followed
- [ ] CSS is organized and commented
- [ ] No duplicate styles
- [ ] Responsive design implemented

---

## 📋 STEP 9: FILE STRUCTURE

### A. HTML File
- Location: Root directory or appropriate subdirectory
- Name: `[page-name].html`
- Structure: Follow existing HTML files pattern

### B. CSS File
- Location: `assets/css/[page-name].css`
- Name: `[page-name].css`
- Link in HTML: After all other CSS files

### C. Images
- Icons → `assets/images/icons/`
- Logos → `assets/images/logos/`
- Backgrounds → `assets/images/backgrounds/`
- Content → `assets/images/content/`

---

## 🚨 COMMON MISTAKES TO AVOID

### ❌ DON'T:
1. **Estimate values** - Always measure from Figma
2. **Use approximate colors** - Always use eyedropper for exact hex
3. **Skip responsive design** - Check all breakpoints in Figma
4. **Create duplicate components** - Check existing components first
5. **Hardcode values** - Use CSS variables when available
6. **Ignore alignment** - Match exact alignment from Figma
7. **Approximate spacing** - Measure exact gaps and padding
8. **Skip hover states** - Include all interactive states
9. **Forget to test** - Always compare with Figma side-by-side
10. **Break existing pages** - Ensure new styles don't affect other pages

### ✅ DO:
1. **Measure everything** - Use Figma's measurement tools
2. **Use exact values** - Copy exact px, hex, weights from Figma
3. **Reuse components** - Check existing CSS first
4. **Use variables** - Leverage design system tokens
5. **Test thoroughly** - Compare browser with Figma
6. **Follow naming conventions** - Use BEM methodology
7. **Organize CSS** - Page-specific in separate file
8. **Comment code** - Explain complex sections
9. **Verify responsive** - Check all breakpoints
10. **Maintain consistency** - Follow existing patterns

---

## 📝 EXAMPLE CONVERSION WORKFLOW

### Step-by-Step Example:

**1. Analyze Figma:**
```
- Frame: 1440px wide
- Section: "About Us"
- Contains: 3 cards in a row
- Card dimensions: 320px × 240px
- Gap between cards: 24px
- Section padding: 80px top/bottom
```

**2. Check Existing Components:**
```
- Check components.css for card component
- Found: .card exists but needs modification
- Will extend with .card-about modifier
```

**3. Create HTML:**
```html
<section class="about-section">
  <div class="container">
    <div class="about-grid">
      <div class="card card-about">
        <!-- Card content -->
      </div>
      <!-- More cards -->
    </div>
  </div>
</section>
```

**4. Write CSS:**
```css
/* In assets/css/about.css */

.about-section {
  padding: 80px 0;  /* Exact from Figma */
}

.about-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;  /* Exact from Figma */
}

.card-about {
  width: 320px;  /* Exact from Figma */
  height: 240px; /* Exact from Figma */
  /* Extend base .card styles */
}
```

**5. Verify:**
```
- Open browser and Figma side-by-side
- Measure spacing: ✓ Matches
- Check colors: ✓ Matches
- Verify alignment: ✓ Matches
- Test responsive: ✓ Works
```

---

## 🎯 FINAL CHECKLIST

Before considering conversion complete:

- [ ] All measurements match Figma exactly
- [ ] All colors match Figma exactly (eyedropper verified)
- [ ] All typography matches Figma exactly
- [ ] All spacing matches Figma exactly
- [ ] All alignments match Figma exactly
- [ ] All components are properly structured
- [ ] Existing CSS is reused where possible
- [ ] Page-specific CSS is in separate file
- [ ] Responsive design implemented for all breakpoints
- [ ] Images are organized in correct folders
- [ ] HTML is semantic and well-structured
- [ ] CSS follows naming conventions
- [ ] No hardcoded values (variables used when available)
- [ ] Visual comparison with Figma is pixel-perfect
- [ ] No existing pages are broken
- [ ] Code is clean and commented

---

## 💡 REMEMBER

**Accuracy is paramount.** If something doesn't match Figma exactly, measure again. Don't guess. Don't approximate. Measure, verify, and match exactly.

The goal is pixel-perfect conversion that maintains design system consistency while accurately representing the Figma design.

