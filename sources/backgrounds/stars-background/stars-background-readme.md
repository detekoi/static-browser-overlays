# Twinkling Stars Background - Documentation

This document explains how to use and customize the animated twinkling stars background for your streaming overlay.

## Overview

This HTML/CSS/JavaScript file creates a beautiful animated background with twinkling stars of various sizes, colors, and brightness levels. It's designed specifically for streaming overlays and can be used as a base layer in OBS Studio or similar streaming software.

![Twinkling Stars Background Preview](../../../docs/screenshots/stars-background.png)

## Adding to OBS Studio
# Twinkling Stars Background - Documentation

This document explains how to use and customize the animated twinkling stars background for your streaming overlay.


1. **Save the HTML file**:
   - Save the HTML code as a file with the `.html` extension (e.g., `twinkling-stars-background.html`).
   - Store it in a location you can easily access.

2. **Add as Browser Source**:
   - In OBS Studio, click the "+" button in the Sources panel.
   - Select "Browser" from the menu.
   - Name your source (e.g., "Stars Background").
   - Check "Local file" and click "Browse".
   - Locate and select your saved HTML file.
   - Set Width to 1920 and Height to 1080 (or your stream resolution).
   - Click "OK" to add the source.

3. **Layer Properly**:
   - Make sure the stars background is at the bottom of your sources list.
   - Position any other overlay elements (webcam, alerts, etc.) above it.

## Customization Options

The background can be easily customized by editing the HTML file in any text editor. Here are the main aspects you can change:

### Background Color/Gradient

Find the `body` CSS style in the `<style>` section:

```css
body {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    /* CUSTOMIZE: Background color - currently a dark blue gradient */
    background: linear-gradient(to bottom, #0f0f29, #000011);
}
```

You can change the gradient colors to any color values you like. Some examples:

- Deep purple gradient: `background: linear-gradient(to bottom, #2e1065, #000000);`
- Space blue gradient: `background: linear-gradient(to bottom, #0c1445, #000000);`
- Dark red gradient: `background: linear-gradient(to bottom, #300a0a, #000000);`

### Star Properties

Find the `config` object in the JavaScript section:

```javascript
const config = {
    totalStars: 200,       // Total number of stars
    smallStarSize: 2,      // Size of small stars in pixels
    mediumStarSize: 3,     // Size of medium stars in pixels
    largeStarSize: 4,      // Size of large stars in pixels
    minTwinkleDuration: 3, // Minimum twinkling animation duration in seconds
    maxTwinkleDuration: 8, // Maximum twinkling animation duration in seconds
    minBrightness: 0.5,    // Minimum star brightness (0-1)
    maxBrightness: 0.9,    // Maximum star brightness (0-1)
    
    // CUSTOMIZE: Color variations for stars (hex codes)
    // Default is white, you can add blue, yellow, etc.
    colors: [
        '#ffffff', // White
        '#fffacd', // Light yellow
        '#e6e6fa', // Lavender
        '#b0e0e6'  // Light blue
    ]
};
```

Here's what each property does:

- **totalStars**: Increases or decreases the number of stars in the background.
- **Star Sizes**: Controls the pixel size of small, medium, and large stars.
- **Twinkle Duration**: Controls how quickly stars twinkle (higher values = slower twinkling).
- **Brightness**: Controls how bright the stars appear at their peak.
- **Colors**: Array of hex color codes for stars (add or remove colors as desired).

### Star Distribution

You can change the ratio of small, medium, and large stars by editing the `getRandomSize()` function:

```javascript
function getRandomSize() {
    const rand = Math.random();
    
    // 70% small, 20% medium, 10% large
    if (rand < 0.7) {
        return config.smallStarSize;
    } else if (rand < 0.9) {
        return config.mediumStarSize;
    } else {
        return config.largeStarSize;
    }
}
```

#### How to Adjust the Distribution:

The function uses probability thresholds to determine star sizes:
- `rand < 0.7`: Creates small stars (70% probability)
- `rand < 0.9`: Creates medium stars (20% probability)
- Otherwise: Creates large stars (10% probability)

To change the distribution, modify the threshold values using this formula:
- First threshold = percentage of small stars (as decimal)
- Second threshold = percentage of small + medium stars (as decimal)
- Large stars automatically get the remaining percentage

#### Examples:

1. **Equal distribution** (33% each):
   ```javascript
   if (rand < 0.33) {
       return config.smallStarSize;
   } else if (rand < 0.66) {
       return config.mediumStarSize;
   } else {
       return config.largeStarSize;
   }
   ```

2. **Mostly medium stars** (10% small, 80% medium, 10% large):
   ```javascript
   if (rand < 0.1) {
       return config.smallStarSize;
   } else if (rand < 0.9) {
       return config.mediumStarSize;
   } else {
       return config.largeStarSize;
   }
   ```

3. **Rare large stars** (50% small, 45% medium, 5% large):
   ```javascript
   if (rand < 0.5) {
       return config.smallStarSize;
   } else if (rand < 0.95) {
       return config.mediumStarSize;
   } else {
       return config.largeStarSize;
   }
   ```

## Advanced Customizations

### Adding a Slight Movement Effect

If you want the stars to have a slight drifting motion, you can add this to the CSS:

```css
@keyframes drift {
    0% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(5px);
    }
    100% {
        transform: translateY(0);
    }
}

.star {
    /* Add to existing star CSS */
    animation: twinkle var(--twinkle-duration) ease-in-out infinite,
               drift 20s ease-in-out infinite;
}
```

### Adding Occasional "Shooting Stars"

For a more dynamic background, you could add code for occasional shooting stars. This would require additional JavaScript and CSS, but can create a more immersive effect.

## Performance Considerations

- **Star Count**: If you experience performance issues, try reducing the `totalStars` value.
- **Animation Complexity**: Simpler animations (fewer stars, less motion) will use fewer resources.
- **Browser Source Settings**: In OBS, you can set the browser source to refresh when not visible to save resources.

## Troubleshooting

If the background doesn't appear:
1. Make sure the HTML file is saved with proper formatting.
2. Check that the browser source is correctly pointed to the file.
3. Verify the browser source is visible and not hidden behind other sources.
4. Try refreshing the browser source in OBS.

## Compatibility

This background should work with:
- OBS Studio (recommended).
- Streamlabs Desktop.
- XSplit.
- Any other streaming software that supports browser sources.

## License and Attribution

This twinkling stars background is free to use for your personal or commercial streaming needs. No attribution is required, though it's appreciated if you share where you got it from with other streamers!
