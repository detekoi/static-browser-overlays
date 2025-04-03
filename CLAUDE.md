# Game Overlays Repository Guidelines

## Project Overview
Collection of browser-based overlays for Twitch streaming, featuring different themes and aspect ratios.

## Commands
- **Serve locally**: `python -m http.server` or `npx serve` or `npx browser-sync start --server --files "."`
- **Install dependencies**: `npm install` (installs Puppeteer for screenshots)
- **Validate HTML**: `npx html-validate "**/*.html" "**/*.htm"` or `./scripts/validate-html.sh`
- **Check CSS**: `npx stylelint "**/*.css"` (for extracted CSS files)
- **Screenshots**: `node scripts/take-screenshots.js` (use `--force` to regenerate all)
- **Update README**: `node scripts/update-readme-with-screenshots.js`
- **Create release zips**: `node scripts/create-release-zips.js`

## Code Style Guidelines
- **HTML**: Semantic HTML5, 4-space indentation, proper meta tags, validated before commit
- **CSS**: Inline styles in `<style>` tags, properties order: positioning → display → box model → aesthetics
- **JS**: Minimal, focus on layout over interaction, descriptive function/variable names
- **Naming**: Use kebab-case for class names (e.g., `gameboy-frame`), be descriptive, consistent across variants
- **File Structure**: `/sources/overlays/{theme}-{aspect-ratio}/` or `/sources/backgrounds/{theme}/`
- **File Naming**: Main HTML file should be `overlay.html`, `background.html`, or `index.html`
- **Error Handling**: Provide fallbacks for SVG/background elements, test in both OBS and browser
- **Dimensions**: Current designs use fixed dimensions (1920x1080)

## Content Values
- **Aesthetic Freedom**: Various aesthetic styles welcome
- **Inclusive Design**: Create accessible overlays for all streamers
- **Community Values**: LGBTQIA+-supportive and anti-racist content encouraged