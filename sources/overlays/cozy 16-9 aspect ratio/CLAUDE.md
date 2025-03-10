# Arctic Polar Bear Cozy OBS Overlay Guidelines

## Project Overview
A Twitch overlay with a cozy Arctic/Polar Bear theme, featuring animated aurora borealis, falling snow, and icicles.

## Commands
- **Serve locally**: Use a simple HTTP server like `python -m http.server` or `npx serve`
- **Validate HTML**: `npx html-validate overlay.htm`
- **Check CSS**: `npx stylelint "**/*.css"` (if CSS is extracted to separate files)

## Style Guidelines
- **HTML**: 
  - Use semantic HTML5 elements with proper indentation (4 spaces)
  - SVG and CSS-based decorative elements instead of images for performance
- **CSS**:
  - Properties organized by type (positioning, display, box model, aesthetics)
  - Gradients used for aurora effects and snow ground
  - CSS animations for dynamic elements (snowfall, aurora waves)
  - Use absolute positioning with percentage units for responsive scaling
- **Naming**: Use descriptive, kebab-case class names (e.g., `arctic-background`, `webcam-container`)
- **Structure**: Group related elements inside container divs
- **Responsive Design**: Uses percentage-based sizing to adapt to various 16:9 resolutions

## Theme Elements
- **Arctic Background**: Gradient sky with aurora borealis effect
- **Snow Elements**: Animated falling snowflakes and snow-covered ground
- **Ice Features**: Icicles hanging from the top of the screen
- **Polar Bears**: Main character polar bear and distant silhouettes
- **Webcam Integration**: Circular webcam container that overlaps the game window

## Animation Features
- **Snowfall**: Continuous gentle snowfall animation
- **Aurora Borealis**: Subtle wave motion in the northern lights
- **Interactive Elements**: Designed to frame gameplay without distraction

## Error Handling
Include meaningful fallbacks for animations and decorative elements for browsers that don't support certain CSS features.