# Animated Geometric Cube Pattern Background - Documentation

This document explains how to use and customize the animated geometric cube pattern background for your streaming overlay or web project.

## Overview

This HTML/CSS/JavaScript file creates a mesmerizing animated background with tessellated cubes that create an optical illusion where it's ambiguous which parts stick "out" and which parts stick "in." The animation includes smooth transitions that continuously change your perception of the cube wall. It's designed for streaming overlays, website backgrounds, or any digital content that needs a dynamic geometric backdrop.

![Cube Pattern Background Preview](../../../docs/screenshots/cube-pattern-background.png)

## Adding to OBS Studio
# Animated Geometric Cube Pattern Background - Documentation

This document explains how to use and customize the animated geometric cube pattern background for your streaming overlay or web project.


1. **Save the HTML file**:
   - Save the HTML code as a file with the `.html` extension (e.g., `geometric-cube-background.html`).
   - Store it in a location you can easily access.

2. **Add as Browser Source**:
   - In OBS Studio, click the "+" button in the Sources panel.
   - Select "Browser" from the menu.
   - Name your source (e.g., "Cube Pattern Background").
   - Check "Local file" and click "Browse".
   - Locate and select your saved HTML file.
   - Set Width to 1920 and Height to 1080 (or your stream resolution).
   - Click "OK" to add the source.

3. **Layer Properly**:
   - Make sure the cube pattern background is at the bottom of your sources list.
   - Position any other overlay elements (webcam, alerts, etc.) above it.

## Customization Options

The background can be easily customized by editing the HTML file in any text editor. Here are the main aspects you can change:

### Background Color

Find the `background` CSS style in the `setup()` or `draw()` function:

```javascript
background(10, 10, 30);
```

You can change these RGB values to any color you like. Some examples:

- Deep purple: `background(25, 0, 50);`
- Dark gray: `background(20, 20, 20);`
- Dark teal: `background(0, 20, 30);`

### Cube Pattern Properties

Find the `config` object at the top of the JavaScript section:

```javascript
const config = {
    cubeSize: 40,          // Size of each cube
    gridSize: 24,          // Calculated dynamically for coverage
    animationSpeed: 0.0006, // Speed of pattern change
    rotationAmount: 0.01,   // Amount of subtle rotation
    drawUpdateFrequency: 30 // Only update the display every 30 frames
};
```

Here's what each property does:

- **cubeSize**: Controls the size of individual cubes. Smaller values create more detailed patterns.
- **gridSize**: Automatically calculated, but you can manually override for specific density.
- **animationSpeed**: Controls how quickly the cube pattern shifts. Lower values = slower transitions.
- **rotationAmount**: Controls the amount of subtle rotation in the overall pattern.
- **drawUpdateFrequency**: Controls how often the visual is redrawn. Higher values save CPU but reduce smoothness.

### Cube Colors

Find the `baseColors` object in the `drawCube` function:

```javascript
let baseColors = {
    topOut: color(120, 140, 170),
    leftOut: color(80, 100, 130),
    rightOut: color(100, 120, 150),
    
    topIn: color(100, 120, 150),
    leftIn: color(120, 140, 170),
    rightIn: color(80, 100, 130)
};
```

You can change these RGB values to create different color schemes for the cubes:

#### Examples:

1. **Warmer colors** (reddish/orange):
   ```javascript
   let baseColors = {
       topOut: color(170, 140, 120),
       leftOut: color(130, 100, 80),
       rightOut: color(150, 120, 100),
       
       topIn: color(150, 120, 100),
       leftIn: color(170, 140, 120),
       rightIn: color(130, 100, 80)
   };
   ```

2. **Grayscale**:
   ```javascript
   let baseColors = {
       topOut: color(200, 200, 200),
       leftOut: color(120, 120, 120),
       rightOut: color(160, 160, 160),
       
       topIn: color(160, 160, 160),
       leftIn: color(200, 200, 200),
       rightIn: color(120, 120, 120)
   };
   ```

3. **Green/teal**:
   ```javascript
   let baseColors = {
       topOut: color(100, 170, 150),
       leftOut: color(60, 130, 110),
       rightOut: color(80, 150, 130),
       
       topIn: color(80, 150, 130),
       leftIn: color(100, 170, 150),
       rightIn: color(60, 130, 110)
   };
   ```

## Advanced Customizations

### Changing the Cube Pattern

The pattern of which cubes appear to stick "out" vs "in" is controlled by the wave functions in `drawCubeWall()`:

```javascript
let wave1 = cos((x * 0.12 + y * 0.1) + ambiguityPhase * 0.4);
let wave2 = sin((x * 0.09 - y * 0.11) + ambiguityPhase * 0.3);
let wave3 = cos((x * 0.06 + y * 0.13) - ambiguityPhase * 0.35);
```

To create different patterns:
- Adjust the multipliers for x and y to change the pattern density
- Change the trig functions (cos/sin) to alter the pattern style
- Modify the ambiguityPhase multipliers to change the speed of different wave components

### Creating a "Frozen" Pattern

If you want to stop the animation but maintain the current pattern:

```javascript
// Change this line:
ambiguityPhase += config.animationSpeed;

// To this:
// ambiguityPhase += 0; // Frozen pattern
```

### Adding Click Interaction

For websites (not OBS), you could add code that changes the pattern or colors when clicked:

```javascript
function mousePressed() {
  // Generate new random colors
  // or
  // Reset ambiguityPhase
  // or
  // Change animation direction
}
```

## Performance Considerations

- **Cube Size**: Larger cubes (higher `cubeSize` value) will create fewer cubes and better performance.
- **Grid Size**: If you manually set `gridSize` lower, you'll have fewer cubes to render.
- **drawUpdateFrequency**: Higher values (e.g., 30, 60) will dramatically reduce CPU usage by redrawing less often.
- **Browser Source Settings**: In OBS, you can set the browser source to refresh when not visible to save resources.

## Troubleshooting

If the background doesn't appear or has issues:
1. Make sure the HTML file is saved with proper formatting.
2. Check that the browser source is correctly pointed to the file.
3. Verify the browser source is visible and not hidden behind other sources.
4. Try refreshing the browser source in OBS.
5. If animation is too resource-intensive, increase `cubeSize` and increase `drawUpdateFrequency`.

## Compatibility

This background should work with:
- OBS Studio.
- Streamlabs Desktop.
- XSplit.
- Any other streaming software that supports browser sources.
- Modern web browsers (Chrome, Firefox, Safari, Edge).
