# Minimal 16:9 Overlay

A clean, minimal overlay for 16:9 aspect ratio gameplay with transparent background and **completely customizable** styling to match your unique stream aesthetic.

![Minimal 16:9 Overlay](../../../docs/screenshots/minimal-16-9.png)

## Features

- Clean design with minimal elements.
- Transparent background for use with any background images.
- **Fully customizable borders** - change colors, transparency, thickness, and corner roundness.
- Optimized 16:9 game window (1760×990 pixels) for 1920×1080 displays.
- **Flexible webcam container** - adjust size, position, background color, and shape.
- Ability to hide webcam container entirely via CSS variable.
- **Simple customization system** using CSS variables - perfect for streamers of all technical skill levels.

## Customization

All customization options are available through CSS variables in the `:root` section. This makes it easy to adjust the overlay without having to modify multiple CSS properties.

```css
:root {
    /* Colors */
    --border-color: rgba(0, 0, 0, 0.8);
    --shadow-color: rgba(0, 0, 0, 0.4);
    
    /* Game window position and size - for 1920x1080 resolution */
    --game-width: 1760px;        /* Fixed width for 16:9 game window */
    --game-height: 990px;        /* Fixed height for 16:9 game window (1760 * 9/16) */
    --game-left-position: 47%;   /* Left position of game window (shifted left to reduce overlap) */
    
    /* Webcam position and size */
    --webcam-size: 250px;        /* Width and height of webcam container */
    --webcam-bottom: 40%;        /* Distance from bottom - centers vertically */
    --webcam-right: 1%;          /* Distance from right */
    --webcam-visibility: block;  /* Set to "none" to hide webcam container */
    --webcam-bg-color: rgba(0, 0, 0, 1); /* Background color behind webcam - solid black */
}
```

### Border Customization

The overlay borders can be fully personalized to match your stream's branding:

- **Color**: Change `--border-color` to any color using hex codes (#RRGGBB), RGB, or RGBA values.
- **Transparency**: Adjust the alpha channel in `--border-color` (e.g., `rgba(0, 0, 0, 0.8)` for 80% opacity black).
- **Shadow Effects**: Modify `--shadow-color` to create subtle depth or glow effects.
- **Border Thickness**: Edit the border width in the CSS (default is 5px) for thinner or thicker borders.
- **Corner Styling**: Adjust the border-radius value in the CSS to create more rounded or squared corners.

### Game Window Positioning

The game window is positioned slightly to the left (at 49% by default) to leave more room for the webcam on the right. The window has fixed dimensions optimized for 1920×1080 displays. You can adjust:

- `--game-width`: The width of the game window in pixels (default 1760px).
- `--game-height`: The height of the game window in pixels (default 990px).
- `--game-left-position`: The horizontal position of the game window (percentage from left).

If you want to center the game window exactly, set `--game-left-position` to 50%.

### Webcam Customization

The webcam container is highly flexible and offers multiple customization options:

- **Size**: 
  - Adjust `--webcam-size` to create a larger or smaller webcam display.
  - Default is 250px which works well for most setups.

- **Position**: 
  - Precisely place your webcam anywhere on screen using:
    - `--webcam-bottom` and `--webcam-right` (default setup).
    - Or use `--webcam-top` and `--webcam-left` to position in other corners.
  - Experiment with different values to find the perfect position for your specific game.

- **Visibility**: 
  - Set `--webcam-visibility: none` to completely hide the webcam container.
  - Useful for gameplay-only segments or screenshots.

- **Background Appearance**: 
  - Change `--webcam-bg-color` to any color that matches your stream's theme.
  - Create a custom look with transparency (e.g., `rgba(255, 0, 0, 0.5)` for semi-transparent red).
  - Use `transparent` for no background at all.

- **Shape Customization**:
  - Modify the border-radius value in the CSS to transform the circular container.
  - Create a square (0px), rounded square (10-20px), or oval shape instead of the default circle.

## Usage in OBS

1. Add a new "Browser" source in OBS.
2. Check "Local file" and browse to the overlay.html file.
3. Set the width and height to match your canvas size (typically 1920x1080).
4. Add your game capture and webcam sources beneath this browser source.
5. Position your game capture to align with the game window frame.
6. Position your webcam to fit within the circular container.

## Combining with Background Themes

This minimal overlay is designed to work with any background theme in the repository:

1. First add a background layer from the `/sources/backgrounds/` directory.
2. Then add this overlay as a layer above it.
3. Adjust your game and webcam sources accordingly.
