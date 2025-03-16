# Sakura Background Overlay - Documentation

This document explains how to use and customize the animated sakura background for your streaming overlay.

## Overview

A gentle animated background featuring falling sakura petals, designed to create a calming and visually appealing backdrop for your streams. This background is designed to be used as a base layer beneath other transparent overlays for a complete spring-themed streaming aesthetic.

![Sakura Background Preview](../../../docs/screenshots/sakura-background.png)

## Features

- Animated falling sakura petals with varied animation patterns.
- Soft pastel color palette with soothing pink and cream gradients.
- Subtle depth and layering effects.

## Animation Features

### Gently Falling Sakura Petals

* Realistic petal shapes with subtle color variations
* Smooth falling animation with natural swaying motion
* Petals rotate and drift as they fall, mimicking real sakura
* Variable speeds and sizes for a more natural appearance

### Customizable Animation Settings

Added variables to easily control:

* `--petal-count`: Number of petals (currently 30)
* `--petal-min-size` and `--petal-max-size`: Size range of petals
* `--petal-min-duration` and `--petal-max-duration`: Speed variation of falling animation

### Layered Animation Effect

* Background elements remain with gentle floating motion
* Foreground falling petals create depth and visual interest
* All animations carefully designed to avoid being distracting

### How It Works

The overlay now uses multiple animation techniques:

* The static spring elements around the edges with subtle floating animations
* A new layer of continuously falling sakura petals across the screen
* Each petal has randomized properties (size, speed, rotation, slight color variation)
* The middle area still remains mostly clear for your game content

## Customization Options

You can adjust the animation by modifying these properties in the `:root` section:

```css
/* Sakura animation settings */
--petal-count: 30;         /* Increase for more density, decrease for subtlety */
--petal-min-size: 15px;    /* Minimum petal size */
--petal-max-size: 30px;    /* Maximum petal size */
--petal-min-duration: 10s; /* Faster falling (shorter duration) */
--petal-max-duration: 30s; /* Slower falling (longer duration) */
```

## Customization Guide

### Changing Colors

To modify the color scheme of the background:

1. **Background Colors**: Find the `.background` CSS class and modify the `background` property:
   ```css
   .background {
       /* Change these gradient colors for a different sky effect */
       background: linear-gradient(135deg, var(--bg-color-1), var(--bg-color-2));
   }
   ```
   You can customize the following CSS variables in the `:root` to change the background colors:
    - `--bg-color-1`:  Soft cream background color.
    - `--bg-color-2`: Soft sky blue background color.

2. **Sakura Petal Color**: Find the `.cherry-blossom` CSS class and adjust the `background-color` property:
   ```css
   .cherry-blossom {
       /* Modify this color for different sakura petal colors */
       background-color: var(--accent-color);
   }
   ```
   Customize the `--accent-color` CSS variable in the `:root` to change the sakura petal color.

### Adjusting Animations

1. **Petal Fall Speed**:  The falling speed is controlled by the `animation-duration` in the `@keyframes float` animation and applied to `.spring-element`. You can adjust the base speed in the `.spring-element` style, or customize individual elements.

   ```css
   .spring-element {
       /* ... other styles ... */
       animation: float 15s infinite ease-in-out; /* Adjust '15s' for speed */
   }
   ```

2. **Sway Animation**: The gentle sway of the leaves is controlled by the `@keyframes sway` animation and applied to `.leaf`. Adjust the `animation-duration` in the `.leaf` style to change the sway speed.

   ```css
   .leaf {
       /* ... other styles ... */
       animation: float 25s infinite ease-in-out, sway 8s infinite ease-in-out; /* Adjust '8s' for sway speed */
   }
   ```

### Adding or Removing Elements

1. **Sakura Petals**: The number of sakura petals is controlled by the loop in the Javascript function `createSpringElements()`. Modify the loop condition to add or remove petals.

   ```javascript
   // Create cherry blossoms - only around the edges
   for (let i = 0; i < 25; i++) { // Change '25' to adjust petal count
       // ... petal creation code ...
   }
   ```

2. **Leaves**: Similarly, the number of leaves is controlled by the loop for leaf creation in `createSpringElements()`.

   ```javascript
   // Create leaves - only around the edges
   for (let i = 0; i < 15; i++) { // Change '15' to adjust leaf count
       // ... leaf creation code ...
   }
   ```

### Integrating with Other Overlays

This background is designed to work as a base layer. To use it with other overlays:

1. Add this background as a browser source in your streaming software.
2. Add your game capture or other content source above it.
3. Add transparent foreground overlays on top.

For best results, use with other overlays from this collection that have transparent backgrounds.

## Advanced Customization

For more advanced customization, you can:

1. Adjust the opacity values in various elements to make them more or less prominent.
2. Modify the animation keyframes for completely different movement patterns.
3. Add new decorative elements by creating additional CSS classes and HTML elements.
4. Customize the corner and edge decorations by modifying the Javascript functions `createCornerDecorations()` and `createEdgeBranches()`.

## Questions or Issues?

If you have any questions about customizing this overlay or encounter any issues, please open an issue in the GitHub repository.
