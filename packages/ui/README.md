# @arrival/ui Design System

Shared design system and typography rules for Arrival products.

## Structure

```
src/
  styles/
    base/           # Core styles
      _colors.scss       # CSS custom properties for colors
      _globals.scss      # Global element styles
      _sizing.scss       # Sizing utilities
      _typography.scss   # Typography mixins and classes
      _utilities.scss    # Utility classes (.usection, .ucontainer, etc.)
      _variables.scss    # SCSS build-time variables
    abstracts/      # Build-time tools
      _animation.scss    # Animation durations
      _functions.scss    # SCSS functions (e.g. rem() converter)
      _respond.scss      # Responsive breakpoint mixins
    vendors/        # Third-party resets
      _reset.scss        # CSS reset
```

## Using Shared Styles

### Option 1: Direct Import (Current - Each app imports independent copies)

Each app (`apps/www`, `apps/research`, etc.) maintains its own copy of the styles in `src/styles/`. They're synchronized with `packages/ui/src/styles/`.

```scss
// In any component .module.scss or main.scss
@use "@/styles/base/typography" as *;
@use "@/styles/base/variables" as *;

.myComponent {
  @include title1;  // Use typography mixins
  gap: $spacing-2;  // Use SCSS variables
}
```

### Option 2: Shared Package Import (Future - When multiple apps use styles)

Once `apps/research` is set up, we can configure both apps to import from `packages/ui` directly using path aliases or SCSS loadPaths. At that point, update `next.config.ts` in each app to add `sassOptions.loadPaths`.

## CSS Custom Properties

Colors and spacing are also available as CSS custom properties for runtime theming:

```scss
// In _colors.scss
[data-theme="light"] {
  --c-on-surface: #14120b;
  --c-surface-0: #ffffff;
}

[data-theme="dark"] {
  --c-on-surface: #edecec;
  --c-surface-0: #14120b;
}
```

Use in any CSS:

```css
body {
  background-color: var(--c-surface-0);
  color: var(--c-on-surface);
}
```

## Syncing Between Apps

When updating shared styles:
1. Make changes in the canonical location (`packages/ui/src/styles/`)
2. Copy to each app's `src/styles/` (or automate this)
3. For a true monorepo setup later, remove local copies and configure both apps to use `packages/ui` directly

## Future Improvements

- [ ] Extract CSS custom properties to a separate theme system
- [ ] Set up automatic sync between `packages/ui` and app-local styles
- [ ] Add component library exports to `packages/ui/src/components`
- [ ] Export design tokens as JSON for other tooling
