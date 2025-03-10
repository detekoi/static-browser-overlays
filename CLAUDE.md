# Game Overlays Repository Guidelines

## Project Overview
Collection of browser-based overlays for Twitch streaming, featuring different themes and aspect ratios.

## Commands
- **Serve locally**: `python -m http.server` or `npx serve`
- **Validate HTML**: `npx html-validate "**/*.html" "**/*.htm"`
- **Check CSS**: `npx stylelint "**/*.css"` (for extracted CSS files)
- **Live preview**: `npx browser-sync start --server --files "."`
- **Take screenshots**: `node scripts/take-screenshots.js` (requires Puppeteer)
- **Install dependencies**: `npm install` (installs Puppeteer for screenshots)

## Style Guidelines
- **HTML**: 
  - Use semantic HTML5 elements with consistent indentation (4 spaces)
  - Include proper meta tags and descriptive title
  - Validate with html-validate before committing changes

- **CSS**:
  - Use inline styles in `<style>` tags for easy embedding
  - Organize properties: positioning → display → box model → aesthetics
  - Use consistent color schemes within an overlay
  - Use SVG data URIs for simple decorative elements

- **JavaScript**:
  - Keep scripts minimal - focus on layout rather than interaction
  - Include in dedicated .js files when needed
  - Use descriptive function and variable names

- **Naming**:
  - Use kebab-case for class names (e.g., `gameboy-frame`, `webcam-container`)
  - Use descriptive names that indicate component purpose
  - Follow consistent naming patterns across overlay variations

- **Error Handling**:
  - Provide fallbacks for SVG and background elements
  - Test overlays in both OBS and browser environments

## Content Guidelines
- **Aesthetic Freedom**: Any aesthetic style is welcome - not restricted to a specific theme
- **Inclusive Design**: Create overlays that are accessible to streamers from all backgrounds
- **Community Values**: LGBTQIA+-supportive and anti-racist content is encouraged
- **Content Standards**:
  - Avoid content that promotes discrimination or harmful stereotypes
  - Create overlays that are welcoming to diverse streaming communities
  - Design with consideration for different cultural contexts
- **Community-Focused**: Prioritize usability and accessibility in your designs

## Design Approach
- Current repository has a "cozy" or "cozy gaming" aesthetic focus
- Current designs use fixed dimensions (1920x1080)
- Consider adding media queries for responsive behavior if needed

## File Organization
- Group files by type (overlays, backgrounds) and then by theme and aspect ratio
- Keep source files in `/sources/overlays/{theme}-{aspect-ratio}/` or `/sources/backgrounds/{theme}/`
- Releases are automatically zipped in `/releases/` directory