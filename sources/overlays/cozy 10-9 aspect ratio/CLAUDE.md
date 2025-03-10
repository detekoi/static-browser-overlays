# Polar Bear Cafe Twitch Stream Overlay Guidelines

## Project Overview
A Twitch overlay with Polar Bear Cafe theme, featuring a GameBoy display, webcam, and chat areas.

## Commands
- **Serve locally**: Use a simple HTTP server like `python -m http.server` or `npx serve`
- **Validate HTML**: `npx html-validate overlay.html`
- **Check CSS**: `npx stylelint "**/*.css"` (if CSS is extracted to separate files)

## Style Guidelines
- **HTML**: Use semantic HTML5 elements with proper indentation (4 spaces)
- **CSS**:
  - Properties organized by type (positioning, display, box model, aesthetics)
  - Use hex values for colors (#RRGGBB), with semantic names in comments
  - SVG data URIs for simple decorative elements
  - Position elements using absolute positioning with px units
- **Naming**: Use descriptive, kebab-case class names (e.g., `gameboy-frame`, `webcam-container`)
- **Structure**: Group related elements inside container divs
- **Responsive Design**: Current design is fixed at 1920x1080; implement media queries if responsive version needed

## Error Handling
Include meaningful fallbacks for SVG and background elements.