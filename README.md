# Mindgrub AI Website - Multi-Version Demo

A showcase of three distinct approaches to presenting Mindgrub's AI capabilities and services.

## Overview

This project demonstrates three different design directions for mindgrub.ai:

1. **Version A - Corporate/Professional**: Enterprise-focused with emphasis on ROI and business value
2. **Version B - Tech-Forward/Modern**: Developer-oriented with cutting-edge design and technical depth
3. **Version C - Interactive/Engaging**: Playful and interactive with live AI demonstrations

## Quick Start

1. Open `index.html` in a web browser to see the version selector
2. Click on any version to explore it
3. Use keyboard shortcuts 1, 2, or 3 to quickly switch between versions

## Project Structure

```
mindgrub-ai/
├── index.html              # Main version selector page
├── version-a/              # Corporate/Professional version
│   ├── index.html
│   ├── css/
│   └── js/
├── version-b/              # Tech-Forward/Modern version
│   ├── index.html
│   ├── css/
│   └── js/
├── version-c/              # Interactive/Engaging version
│   ├── index.html
│   ├── css/
│   └── js/
└── shared/                 # Shared resources
    ├── css/
    │   ├── global.css     # Design system and variables
    │   ├── reset.css      # CSS reset
    │   └── components.css # Reusable components
    ├── js/
    │   └── main.js        # Shared utilities
    └── images/
        └── mindgrub-logo.svg
```

## Version Details

### Version A - Corporate/Professional
- **Target Audience**: C-suite executives, enterprise decision-makers
- **Key Features**:
  - Clean, professional design
  - ROI calculator
  - Case studies with metrics
  - Trust indicators
  - Service-focused content

### Version B - Tech-Forward/Modern
- **Target Audience**: Developers, technical teams, CTOs
- **Key Features**:
  - Dark theme with gradients
  - Code demonstrations
  - Technical specifications
  - API documentation preview
  - Performance metrics

### Version C - Interactive/Engaging
- **Target Audience**: General audience, potential AI users
- **Key Features**:
  - Interactive AI playground
  - Live chat demonstrations
  - Playful animations
  - Hands-on experiences
  - Gamified elements

## Design System

### Colors
- **Primary Orange**: #F47114 (Mindgrub brand color)
- **Black**: #231F20
- **White**: #FFFFFF
- **Tech Blue**: #0084FF
- **Purple**: #6B5CE7
- **Teal**: #00D4AA

### Typography
- **Primary Font**: Inter
- **Monospace Font**: Roboto Mono

### Spacing
- Uses consistent spacing scale: xs, sm, md, lg, xl, 2xl, 3xl

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance

- No external dependencies
- Vanilla JavaScript (ES6+)
- Optimized assets
- Lazy loading for images
- Responsive design

## Presentation Guide

Each version is designed for a 5-10 minute presentation:

1. **Start with the version selector** to show all options
2. **Demo each version** highlighting unique features
3. **Discuss pros/cons** of each approach
4. **Gather feedback** on preferred direction

## Local Development

Simply open any HTML file in a web browser. No build process or server required.

For best results, use a local web server:

```bash
# Python 3
python -m http.server 8000

# Node.js
npx http-server

# Then open http://localhost:8000
```

## Notes

- All content is placeholder/demo content
- Forms are not functional (demo only)
- AI interactions are simulated
- Optimized for desktop and mobile viewing

## License

© 2024 Mindgrub. All rights reserved.