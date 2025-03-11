# Minimal 4:3 Overlay

A clean, minimal overlay for 4:3 aspect ratio gameplay (classic consoles, arcade games, and retro PCs) with transparent background and **extensive customization options** to create your perfect retro streaming setup.

## Features

- Clean design with minimal elements.
- Transparent background compatible with any background theme.
- **Completely customizable borders** - adjust colors, opacity, thickness, and corner roundness.
- Optimized 4:3 game window (1420×1065 pixels) for 1920×1080 displays.
- **Highly configurable webcam container** - customize size, position, background, and shape.
- Ability to hide webcam container entirely via CSS variable.
- **Easy styling system** using simple CSS variables - make the overlay your own without coding knowledge.

## Customization

All customization options are available through CSS variables in the `:root` section. This makes it easy to adjust the overlay without having to modify multiple CSS properties.

```css
:root {
    /* Colors */
    --border-color: rgba(0, 0, 0, 0.8);
    --shadow-color: rgba(0, 0, 0, 0.4);
    
    /* Game window position and size - for 1920x1080 resolution */
    --game-width: 1420px;        /* Fixed width for 4:3 game window */
    --game-height: 1065px;       /* Fixed height for 4:3 ratio (1420 * 3/4) */
    --game-left-position: 45%;   /* Left position of game window */
    
    /* Webcam position and size */
    --webcam-size: 300px;        /* Width and height of webcam container */
    --webcam-bottom: 40%;        /* Distance from bottom - centers vertically */
    --webcam-right: 3%;          /* Distance from right */
    --webcam-visibility: block;  /* Set to "none" to hide webcam container */
    --webcam-bg-color: rgba(0, 0, 0, 1); /* Background color behind webcam - solid black */
}
```

### Border Customization

Make the borders truly your own with these customization options:

- **Colors**: 
  - Change `--border-color` to any color that fits your stream theme.
  - Use hex codes (#RRGGBB), RGB values, or RGBA for custom transparency.
  - Try branded colors, team colors, or colors that match your other stream elements.

- **Transparency Effects**:
  - Adjust the alpha channel in `--border-color` (e.g., `rgba(0, 0, 0, 0.8)` for 80% opacity).
  - Create subtle semi-transparent borders that let background elements show through.

- **Visual Depth**:
  - Modify `--shadow-color` to create subtle shadows, glows, or highlight effects.
  - Experiment with colored shadows for unique visual styles.

- **Size and Shape**:
  - Edit the border width in the CSS (default is 5px) to create thinner or thicker borders.
  - Adjust the border-radius values to create more squared or rounded corners.

### Game Window Positioning

The game window is positioned to the left (at 45% by default) to leave more room for the webcam on the right. The window has fixed dimensions optimized for 1920×1080 displays. You can adjust:

- `--game-width`: The width of the game window in pixels (default 1420px).
- `--game-height`: The height of the game window in pixels (default 1065px).
- `--game-left-position`: The horizontal position of the game window (percentage from left).

If you want to center the game window exactly, set `--game-left-position` to 50%.

### Webcam Customization

Create the perfect webcam container to complement your retro gameplay:

- **Size and Scale**: 
  - Adjust `--webcam-size` to perfectly size your webcam display.
  - Find the ideal balance between gameplay visibility and webcam presence.
  - Default 300px works well for most setups but can be increased for facecam-focused streams.

- **Positioning**:
  - Place your webcam exactly where you want it:
    - Use `--webcam-bottom` and `--webcam-right` (default configuration).
    - Or switch to `--webcam-top` and `--webcam-left` for other screen positions.
  - Find the perfect spot that doesn't obscure important game elements.
  - Create corner, side, or even centered webcam placement.

- **Visibility Options**:
  - Toggle `--webcam-visibility` between `block` and `none` to show/hide webcam.
  - Perfect for gameplay-focused segments or when taking screenshots.

- **Background Styling**:
  - Default solid black background (`--webcam-bg-color: rgba(0, 0, 0, 1)`).
  - Change to any color that matches your stream aesthetic.
  - Add partial transparency for a softer look (e.g., `rgba(0, 0, 0, 0.7)`).
  - Set to `transparent` for a borderless webcam effect.

- **Container Shape**:
  - Default circular shape is created using border-radius.
  - Modify the border-radius value to create:
    - Perfect circle (default).
    - Rounded square (try 20px for subtle rounding).
    - Square (0px for sharp corners).
    - Oval shape (different radius values for width/height).

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
