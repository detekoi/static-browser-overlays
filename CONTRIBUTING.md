# Contributing to Browser Overlays

Thank you for considering contributing to the Browser Overlays project! This document provides guidelines and instructions for contributing.

## How to Contribute

### Creating a New Overlay

1. Fork the repository
2. Create a new branch for your overlay: `git checkout -b new-overlay-name`
3. Follow the structure:
   ```
   overlays/overlay-name/
   ├── overlay.html (or index.html)
   ├── styles.css (if separate from HTML)
   └── assets/ (for images, fonts, etc.)
   ```
4. Include a README.md in your overlay folder explaining its features and customization options
5. Submit a pull request with a description of your overlay

### Improving Existing Overlays

1. Fork the repository
2. Create a new branch for your improvements: `git checkout -b improve-overlay-name`
3. Make your changes, ensuring they follow the style guidelines
4. Submit a pull request with a description of your improvements

### Reporting Issues

1. Check if the issue already exists in the GitHub issues
2. Create a new issue with a descriptive title and detailed description
3. Include steps to reproduce the issue
4. Add screenshots if applicable

## Style Guidelines

### HTML

- Use semantic HTML5 elements
- Maintain consistent indentation (4 spaces)
- Include proper meta tags and descriptive titles

### CSS

- Organize properties by type (positioning, display, box model, aesthetics)
- Use hex/rgba colors with consistent opacity patterns
- Comment major sections

### JavaScript

- Keep it minimal to ensure performance
- Document functions with clear comments
- Avoid dependencies where possible

## Visual Design Guidelines

- Follow the Polar Bear Cafe-inspired aesthetic: clean lines, soft colors, nature-inspired elements
- Maintain a non-distracting design that doesn't compete with the streamed content
- Ensure readability of any text elements
- Design with different stream sizes in mind

## Pull Request Process

1. Ensure your code follows the style guidelines
2. Update documentation if necessary
3. Include screenshots of your overlay in action
4. Submissions will be reviewed by maintainers before merging

## Code of Conduct

- Be respectful and inclusive in your language and contributions
- Provide constructive feedback
- Focus on the improvement of the project

Thank you for contributing to make streaming overlays more accessible and beautiful for everyone!