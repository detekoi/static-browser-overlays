# Game Overlays Repository Guidelines

## Project Overview
Collection of browser-based overlays for Twitch streaming, featuring different themes and aspect ratios.

## Commands
- **Serve locally**: `python -m http.server` or `npx serve`
- **Validate HTML**: `npx html-validate "**/*.html" "**/*.htm"`
- **Check CSS**: `npx stylelint "**/*.css"` (for extracted CSS files)
- **Live preview**: Use browser with OBS preview or `npx browser-sync start --server --files "."`

## Style Guidelines
- **HTML**: 
  - Use semantic HTML5 elements with consistent indentation (4 spaces)
  - Include proper meta tags and descriptive title
  - Keep overlay elements in logical container divs

- **CSS**:
  - Currently using inline styles in `<style>` tags for easy embedding
  - Future plan: Move to dedicated CSS files for improved maintainability
  - Organize properties by type (positioning, display, box model, aesthetics)
  - Use hex/rgba colors with consistent opacity patterns
  - Employ SVG data URIs for decorative elements (may move to separate asset files)

- **JavaScript**:
  - Future plan: Implement in dedicated .js files
  - Use for animations, interactive elements, and stream integrations
  - Follow standard JS style with clear comments

- **Assets**:
  - Currently using inline SVG data URIs for simple graphics
  - Future plan: Move to dedicated asset files for complex graphics
  - Use optimized image formats appropriate for web (SVG, WebP, PNG)

- **Naming**:
  - Use descriptive, kebab-case class names (e.g., `gameboy-frame`, `webcam-container`)
  - Maintain consistent naming patterns across overlay variations

- **Structure**: 
  - Group related elements inside semantic container divs
  - Comment major sections of both HTML and CSS

## File Organization
Future planned structure:
```
/overlays/
  /{theme}-{aspect-ratio}/
    index.html
    /css/
    /js/
    /assets/
```