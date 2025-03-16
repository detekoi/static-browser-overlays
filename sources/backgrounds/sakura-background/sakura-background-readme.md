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

You can adjust the animation by modifying these CSS properties in the `:root` section:

**For Falling Sakura Petals Animation:**
* `--petal-count`: Number of petals (default: 30). Increase for more density, decrease for fewer petals.
* `--petal-min-size`: Minimum petal size (default: 15px). Adjust the minimum size of the falling petals.
* `--petal-max-size`: Maximum petal size (default: 30px). Adjust the maximum size of the falling petals.
* `--petal-min-duration`: Minimum fall duration (default: 10s). Adjust for faster or slower falling petals.
* `--petal-max-duration`: Maximum fall duration (default: 30s).  Adjust for faster or slower falling petals.

**For Spring Elements Animation (Edge Decorations):**
* `--edge-animation-duration`:  Animation duration for spring elements (default: 15s for float, 8s for sway). Adjust for faster or slower floating and swaying motion of edge elements.
* `--edge-element-opacity`: Opacity of edge elements (default: 0.6). Adjust for more or less prominent edge decorations.
* `--edge-blur-filter`: Blur filter for edge elements (default: 1px). Adjust for softer or sharper edge decorations.

### Layered Animation Effect

* Background elements remain with gentle floating motion
* Foreground falling petals create depth and visual interest
* All animations carefully designed to avoid being distracting

### How It Works

This overlay uses several techniques to create a gentle and visually appealing animated background:

* **Edge Decorations (Spring Elements)**: Around the edges of the screen, static spring-themed elements like cherry blossoms and leaves are placed. These elements have subtle floating animations to add gentle motion.

* **Falling Sakura Petals**: A layer of continuously falling sakura petals is added across the entire screen. Each petal is dynamically created with randomized properties for size, speed, rotation, and slight color variation to create a natural and varied falling effect.

* **Clear Middle Area**: The central area of the overlay is intentionally kept mostly clear. This is to ensure that the background does not obstruct the main content of your stream, such as the game畫面 or camera feed.

* **CSS Animations**:  CSS animations (`@keyframes float` and `@keyframes sway` for edge elements, and `@keyframes falling-petal` for sakura petals) are used to control the movement of the elements, providing smooth and efficient animation performance.

* **JavaScript Initialization**: JavaScript is used to dynamically create and position the spring elements and falling sakura petals when the page loads, ensuring a randomized and unique layout each time the overlay is used. The `createSpringElements()` function handles the edge decorations, and `createFallingSakuraPetals()` handles the full-screen falling petals.

## Customization Options

You can adjust the animation by modifying these properties in the `:root` section:

```css
/* Sakura animation settings */
/* Falling sakura petals */
--petal-count: 30;         /* Number of falling petals */
--petal-min-size: 15px;    /* Minimum petal size */
--petal-max-size: 30px;    /* Maximum petal size */
--petal-min-duration: 10s; /* Minimum fall duration */
--petal-max-duration: 30s; /* Maximum fall duration */

/* Spring elements (edge decorations) animation */
--edge-animation-duration: 15s; /* Animation duration for edge elements */
--edge-element-opacity: 0.6;    /* Opacity of edge elements */
--edge-blur-filter: 1px;       /* Blur filter for edge elements */
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

1. **Falling Petal Animation**:
   - **Petal Count**: Control the number of falling petals using the `--petal-count` CSS variable.
   - **Petal Size**: Adjust the size range of falling petals with `--petal-min-size` and `--petal-max-size`.
   - **Fall Speed**: Modify the falling speed by changing `--petal-min-duration` and `--petal-max-duration`. Shorter durations mean faster falling.

2. **Spring Element Animation**:
   - **Float Animation**: The floating animation of spring elements is controlled by the `animation-duration` in the `@keyframes float` animation applied to `.spring-element`. Adjust the `animation-duration` in the `.spring-element` style to change the speed.

     ```css
     .spring-element {
         /* ... other styles ... */
         animation: float 15s infinite ease-in-out; /* Adjust '15s' for speed */
     }
     ```

   - **Sway Animation**: The sway of leaves is controlled by the `@keyframes sway` animation applied to `.leaf`. Adjust the `animation-duration` in the `.leaf` style to change the sway speed.

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
