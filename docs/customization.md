# Customization Guide

This guide explains how to customize the browser overlays to match your stream's aesthetic.

## Basic Customization

Most overlays can be customized by editing the HTML and CSS files. Here's how to get started:

1. Open the overlay's HTML file in a text editor
2. Look for the `<style>` section or the linked CSS file
3. Make your changes
4. Save the file and refresh your browser source in your streaming software

## Using CSS Variables (Recommended for Minimal Overlays)

The minimal overlays use CSS variables (custom properties) for easy customization. This modern approach allows you to change multiple aspects of the overlay by modifying a single value.

1. Open the overlay's HTML file in a text editor
2. Look for the `:root` section in the CSS, which contains variables like this:
```css
:root {
    /* Colors */
    --border-color: rgba(0, 0, 0, 0.8);
    --shadow-color: rgba(0, 0, 0, 0.4);
    
    /* Game window position and size */
    --game-width: 1760px;
    --game-height: 990px;
    --game-left-position: 47%;
    
    /* Webcam position and size */
    --webcam-size: 250px;
    --webcam-bottom: 40%;
    --webcam-right: 1%;
    --webcam-visibility: block;
    --webcam-bg-color: rgba(0, 0, 0, 1);
}
```
3. Change the values to customize your overlay
4. Save the file and refresh your browser source

### Advantages of CSS Variables

- **Simple**: Change one value to update multiple elements
- **Intuitive**: Variable names clearly indicate what they control
- **Consistent**: Ensures design harmony throughout the overlay
- **No coding knowledge required**: Just change the values

### Common CSS Variable Customizations for Minimal Overlays

#### Changing Border Color and Transparency

To change the border color from black to another color:

```css
/* Original - Black borders at 80% opacity */
--border-color: rgba(0, 0, 0, 0.8);

/* Blue borders */
--border-color: rgba(0, 50, 255, 0.8);

/* Green borders */
--border-color: rgba(0, 150, 50, 0.8);

/* Red borders */
--border-color: rgba(255, 0, 0, 0.8);

/* More transparent borders (50% opacity) */
--border-color: rgba(0, 0, 0, 0.5);

/* Fully opaque borders */
--border-color: rgba(0, 0, 0, 1);

/* Using hex color format */
--border-color: #ff5500;
```

#### Adjusting Webcam Container

To customize the webcam container:

```css
/* Larger webcam */
--webcam-size: 350px;

/* Smaller webcam */
--webcam-size: 200px;

/* Hide webcam completely */
--webcam-visibility: none;

/* Show webcam (default) */
--webcam-visibility: block;

/* Change webcam background color to red */
--webcam-bg-color: rgba(255, 0, 0, 1);

/* Semi-transparent webcam background */
--webcam-bg-color: rgba(0, 0, 0, 0.5);

/* Transparent webcam background */
--webcam-bg-color: transparent;
```

#### Repositioning Elements

To reposition game window or webcam:

```css
/* Center game window exactly */
--game-left-position: 50%;

/* Move game window more to the left */
--game-left-position: 40%;

/* Position webcam in top-right corner */
--webcam-top: 5%;
--webcam-right: 5%;
--webcam-bottom: auto; /* Remove bottom positioning */

/* Position webcam in top-left corner */
--webcam-top: 5%;
--webcam-left: 5%;
--webcam-right: auto; /* Remove right positioning */
--webcam-bottom: auto; /* Remove bottom positioning */
```

## Changing Colors

Colors in the overlays are defined using hex codes (e.g., `#FFFFFF` for white) or rgba values.

To change a color:
1. Find the CSS property you want to modify (e.g., `background-color`, `color`, `border-color`)
2. Replace the color value with your preferred color
3. Save the file and refresh your browser source

### Example

Original code:
```css
.webcam-border {
    background-color: #B89F7A;
}
```

Modified code:
```css
.webcam-border {
    background-color: #6A8D73; /* Changed to a soft green */
}
```

## Modifying Sizes and Positions

You can adjust the size and position of elements by modifying their CSS properties:

- `width` and `height`: Change the dimensions of an element
- `top`, `right`, `bottom`, `left`: Adjust the position of elements
- `transform`: Scale, rotate, or reposition elements

### Example

Original code:
```css
.webcam-container {
    position: absolute;
    right: 150px;
    top: 80px;
    width: 300px;
    height: 300px;
}
```

Modified code:
```css
.webcam-container {
    position: absolute;
    right: 200px; /* Moved further right */
    top: 100px; /* Moved down slightly */
    width: 350px; /* Made larger */
    height: 350px; /* Made larger */
}
```

## Changing Fonts

To change fonts:
1. Find the `font-family` property in the CSS
2. Replace it with your preferred font
3. Ensure the font is installed on your computer or add a web font import

### Adding Web Fonts

Add this to the `<head>` section of the HTML file:
```html
<link href="https://fonts.googleapis.com/css2?family=Your+Font+Name&display=swap" rel="stylesheet">
```

Then update the CSS:
```css
body {
    font-family: 'Your Font Name', sans-serif;
}
```

## Adding or Removing Elements

You can add or remove HTML elements to customize the overlay further:

- To remove an element: Delete or comment out the corresponding HTML and CSS
- To add an element: Add new HTML and the corresponding CSS styles

## Advanced Customization

For more advanced customization:

1. **SVG Graphics**: Many decorative elements use inline SVG. You can modify these or create your own using tools like Inkscape or Adobe Illustrator.

2. **Animations**: CSS animations can be modified by changing the `@keyframes` rules and animation properties.

3. **Responsive Design**: Adjust media queries if you need the overlay to respond differently to various stream dimensions.

## Testing Your Changes

Always test your customized overlay before using it on a live stream:

1. Save your changes
2. Refresh the browser source in your streaming software
3. Check how it looks with your game and webcam
4. Make adjustments as needed

## Reverting Changes

If you're unhappy with your customizations:

1. Keep a backup of the original files before making changes
2. Revert to the backup if needed
3. Or re-download the original overlay from the repository

## Need Help?

If you need assistance with customization:
- Check the overlay-readme.md in the overlay's folder for specific customization options and variables
  - Each minimal overlay has detailed documentation on all available CSS variables
  - The readme explains the purpose and effect of each variable
- Check the comments in the HTML file itself, which explain many of the customization options
- Open an issue on GitHub with your question
- Consider contributing your customized version back to the repository for others to use

### Finding All Available Variables

For minimal overlays, all the variables are defined in the `:root` section at the top of the CSS. Each overlay has slightly different variables based on its design needs:

- Minimal 16:9 overlay has variables optimized for widescreen modern games
- Minimal 10:9 overlay has variables designed for Game Boy Advance and similar handhelds
- Minimal 4:3 overlay has variables suited for classic consoles and retro PC games

The specific options for each overlay are documented in their respective overlay-readme.md files.