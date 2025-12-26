# CSS Refactoring Guide

## Overview
This codebase has been refactored to improve consistency, maintainability, and reusability through the use of CSS custom properties (variables) and utility classes.

## New File Structure

```
css/
├── variables.css          # CSS custom properties (colors, typography, spacing, etc.)
├── base.css              # Base styles and resets
├── utilities.css         # Reusable utility classes
├── components.css        # Component-specific styles (refactored)
├── header-refactored.css # Header component (refactored)
├── main.css             # Main stylesheet that imports all files
├── freedom-hub.css      # Page-specific (to be refactored)
├── training.css         # Page-specific (to be refactored)
├── style.css            # Legacy file (being phased out)
└── header.css           # Legacy file (being phased out)
```

## CSS Custom Properties (Variables)

All design tokens are now defined as CSS custom properties in `variables.css`:

### Colors
- `--color-primary`: Main brand color (#f7931a)
- `--color-bg-primary`: Primary background (#000000)
- `--color-text-primary`: Primary text color (#ffffff)
- And many more...

### Typography
- `--font-primary`: Montserrat
- `--font-size-*`: Font size scale (xs to 11xl)
- `--font-weight-*`: Font weights (normal to extrabold)

### Spacing
- `--spacing-*`: Consistent spacing scale (xs to 8xl)

### Breakpoints
- `--breakpoint-*`: Responsive breakpoints

## Usage Examples

### Before (Hardcoded)
```css
.button {
  background-color: #f7931a;
  padding: 12px 24px;
  font-size: 14px;
  border-radius: 15px;
}
```

### After (Using Variables)
```css
.button {
  background-color: var(--color-primary);
  padding: var(--spacing-md) var(--spacing-2xl);
  font-size: var(--font-size-md);
  border-radius: var(--radius-lg);
}
```

## Utility Classes

Common patterns are now available as utility classes:

### Spacing
- `.gap-md`, `.gap-lg`, `.gap-xl` - Flex/grid gaps
- `.p-0`, `.pt-4`, `.mb-8` - Padding and margin utilities

### Typography
- `.text-primary`, `.text-secondary` - Text colors
- `.text-lg`, `.text-xl` - Font sizes
- `.font-bold`, `.font-semibold` - Font weights
- `.uppercase`, `.lowercase` - Text transforms

### Layout
- `.container`, `.container-lg`, `.container-xl` - Container widths
- `.d-flex`, `.d-grid` - Display utilities
- `.items-center`, `.justify-between` - Flexbox utilities

### Buttons
- `.btn`, `.btn-primary`, `.btn-secondary` - Button variants

## Migration Strategy

1. **Phase 1** (Completed): Created variables and utilities
2. **Phase 2** (In Progress): Refactoring components to use variables
3. **Phase 3** (Pending): Refactoring page-specific styles
4. **Phase 4** (Pending): Removing legacy CSS files

## Updating HTML Files

HTML files should now import `main.css` instead of individual files:

```html
<!-- Old -->
<link rel="stylesheet" href="css/style.css">
<link rel="stylesheet" href="css/header.css">
<link rel="stylesheet" href="css/freedom-hub.css">

<!-- New -->
<link rel="stylesheet" href="css/main.css">
```

## Benefits

1. **Consistency**: All values come from a single source of truth
2. **Maintainability**: Change a variable once, update everywhere
3. **Scalability**: Easy to add new components using existing tokens
4. **Developer Experience**: Clear naming conventions and organization
5. **Performance**: Reduced CSS file size through reuse

## Naming Conventions

- Variables: `--property-category-name` (e.g., `--color-primary`)
- Utility classes: `.utility-name` (e.g., `.text-center`)
- Component classes: `.component-name` (e.g., `.hero-section`)

## Best Practices

1. Always use variables for colors, spacing, and typography
2. Prefer utility classes for common patterns
3. Create component classes for complex, reusable components
4. Keep page-specific styles minimal
5. Document any new variables or utilities added

