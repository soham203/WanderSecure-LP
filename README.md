# WanderSecure Landing Page

A modern, responsive landing page for the WanderSecure tourist safety monitoring app built with React and TailwindCSS.

## 🚀 Features

- **Modern Design**: Clean, professional UI with gradient backgrounds and smooth animations
- **Responsive Layout**: Optimized for all devices (mobile, tablet, desktop)
- **Interactive Elements**: Hover effects, smooth transitions, and mobile-friendly navigation
- **App Screenshots**: Showcase section for 8 app screenshots with phone-like styling
- **User-Focused Content**: Pitch-oriented copy without technical jargon

## 🛠️ Tech Stack

- **React 19** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **TailwindCSS 3.4.17** - Utility-first CSS framework
- **PostCSS** - CSS processing

## 📁 Project Structure

```
├── public/
│   └── assets/       # App screenshots (1.jpg - 8.jpg)
├── src/
│   ├── App.jsx      # Main landing page component
│   ├── App.css      # Component styles
│   ├── index.css    # Global styles with Tailwind imports
│   └── main.jsx     # React entry point
├── index.html       # HTML template
├── tailwind.config.cjs  # Tailwind configuration
├── postcss.config.cjs   # PostCSS configuration
└── package.json     # Dependencies and scripts
```

## 🎨 Design Features

### Sections
- **Hero**: Gradient background, compelling headline, call-to-action
- **Benefits**: Feature cards with icons and hover animations
- **How it Works**: Step-by-step process with numbered circles
- **Screenshots**: Mobile app screenshots in phone-like containers
- **FAQ**: Common questions in card format
- **Footer**: Simple footer with demo disclaimer

### Visual Elements
- Gradient backgrounds and text
- Smooth hover animations
- Card-based layouts with shadows
- Mobile-first responsive design
- Brand color scheme (blue gradients)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd landing-page
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## 📱 Adding Screenshots

1. Place your app screenshots in the `public/assets/` folder
2. Name them `1.jpg`, `2.jpg`, `3.jpg`, etc. (up to 8 images)
3. The images will automatically appear in the screenshots section
4. Images are optimized for mobile app display with proper aspect ratios

## 🎯 Customization

### Colors
Edit `tailwind.config.cjs` to modify the brand colors:
```javascript
colors: {
  brand: {
    50: '#eef6ff',
    100: '#d9ecff',
    // ... other shades
    900: '#1d3e83',
  },
}
```

### Content
- Update text content in `src/App.jsx`
- Modify section titles, descriptions, and FAQ items
- Adjust the hero headline and call-to-action text

### Styling
- Modify Tailwind classes in components
- Add custom CSS in `src/App.css` if needed
- Update gradients and animations as desired

## 📄 License

Built for hackathon/demo purposes. Not intended for production use.

## 🤝 Contributing

This is a demo project for the Smart Tourist Safety Monitoring hackathon. Feel free to fork and modify for your own projects.

---

**WanderSecure** - Travel safer. Get help faster. 🛡️✈️
