# Crestron Elegance UI Demo

Modern, responsive smart home control interface built with Tailwind CSS and Vanilla JavaScript. A demonstration of how the Crestron UI will look for client applications.

## Features

- **House Overview** - Complete control of lighting, blinds, and climate zones across multiple floors
- **Scenes** - Preset automation scenarios for different areas and moods
- **Door Controls** - Entry management and security gate control
- **Door Entry** - Intercom system with camera feed and quick access buttons
- **Responsive Design** - Optimized for desktop displays and tablets
- **Real-time Feedback** - Interactive controls with visual state indicators
- **Accessibility** - Keyboard navigation and ARIA labels

## Demo Pages

- `index.html` - Home page with quick access to all systems
- `overview.html` - Detailed control panel for all house functions
- `scenes.html` - Scene management and room-based presets
- `doors.html` - Door and gate control interface
- `door-entry.html` - Intercom and entry system

## Technologies

- HTML5
- Tailwind CSS (CDN)
- Vanilla JavaScript (no dependencies)
- Feather Icons
- Custom Web Components

## Usage

1. Clone the repository
2. Open `index.html` in a web browser
3. Navigate between pages using the buttons

Alternatively, serve locally:
```bash
python3 -m http.server 8000
# Or with Python 2
python -m SimpleHTTPServer 8000
```

Then visit `http://localhost:8000`

## Performance Optimizations

- Minified CSS with CSS variables for consistency
- Event delegation for efficient JavaScript
- Optimized Feather icon rendering
- Prefetch and preconnect for CDN resources
- Reduced motion support for accessibility

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

MIT License - See LICENSE file for details

## Client Branding

This is a demonstration UI for Medibach. All styling and interactions are customizable for specific client requirements.

---

**Made by inControl** - Smart home automation solutions
