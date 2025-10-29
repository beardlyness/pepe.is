# 🐸 PePe.IS

```
 ██████╗ ███████╗██████╗ ███████╗   ██╗███████╗
 ██╔══██╗██╔════╝██╔══██╗██╔════╝   ██║██╔════╝
 ██████╔╝█████╗  ██████╔╝█████╗     ██║███████╗
 ██╔═══╝ ██╔══╝  ██╔═══╝ ██╔══╝     ██║╚════██║
 ██║     ███████╗██║     ███████╗██╗██║███████║
 ╚═╝     ╚══════╝╚═╝     ╚══════╝╚═╝╚═╝╚══════╝
```

> **A random MeMe generator for the Frogman himself!**

[![License](https://img.shields.io/badge/license-GPL--3.0-green.svg)](LICENSE)
[![Made with Love](https://img.shields.io/badge/made%20with-♥-22c55e.svg)](https://pepe.is)
[![Pepe Approved](https://img.shields.io/badge/pepe-approved-22c55e.svg)](https://pepe.is)

## 🎯 What is PePe.IS?

PePe.IS is a retro-styled, dark-themed web application that generates random Pepe the Frog memes for your viewing and sharing pleasure. Find the Pepe that matches your mood, copy the URL, and share it with your friends across the web!

**Live Site:** [https://pepe.is](https://pepe.is)

---

## ✨ Features

- 🎲 **Random Pepe Generator** - Get a fresh Pepe meme with every visit or refresh
- 🔄 **Instant Refresh** - Load new Pepes without reloading the page
- 📋 **One-Click Copy** - Copy Pepe URLs to your clipboard instantly
- 🐦 **Twitter/X Integration** - Share your favorite Pepes directly to Twitter
- 📱 **Fully Responsive** - Works beautifully on desktop, tablet, and mobile
- 🎨 **Retro Aesthetic** - VT323 monospace font with dark green accents
- 🌙 **Dark Mode First** - Easy on the eyes with glassmorphism effects
- 🚀 **Lightning Fast** - Minimal dependencies, maximum performance
- ♿ **Accessible** - Semantic HTML with proper ARIA labels

---

## 🛠️ Tech Stack

- **Frontend:** Vanilla HTML5, CSS3, JavaScript (ES6)
- **Styling:** Custom CSS with VT323 retro font from Google Fonts
- **API:** Tenor API for random Pepe meme images
- **Hosting:** Static site (can be deployed anywhere)
- **Design:** Dark theme with green (#22c55e) accent color

---

## 🚀 Quick Start

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- (Optional) A local web server for development

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/pepe-is/pepe.git
   cd pepe
   ```

2. **Open in your browser**
   
   Simply open `index.html` in your web browser, or use a local server:

   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js (with npx)
   npx http-server
   
   # Using PHP
   php -S localhost:8000
   ```

3. **Visit in browser**
   ```
   http://localhost:8000
   ```

That's it! No build process, no dependencies to install. Pure vanilla web goodness. 🎉

---

## 📁 Project Structure

```
pepe/
├── index.html          # Main landing page
├── privacy.html        # Privacy policy page
├── terms.html          # Terms of service page
├── README.md           # You are here!
├── css/
│   └── style.css       # All styles (dark theme, glassmorphism, retro)
├── js/
│   └── pepe.js         # Core functionality (API calls, modal, sharing)
└── img/
    ├── favicon.jpg     # Site favicon
    ├── spin.gif        # Animated favicon
    ├── refresh.png     # Refresh button icon
    ├── twitter.png     # Twitter/X share icon
    └── share.png       # Share button icon
```

---

## 🎨 Design Philosophy

PePe.IS embraces a **retro-futuristic aesthetic** with these core principles:

- **Dark First:** Deep black backgrounds with subtle gradients
- **Green Accents:** Primary color #22c55e (green) for all interactive elements
- **Retro Typography:** VT323 monospace font for that classic terminal feel
- **Glassmorphism:** Subtle blur effects and transparency for modern appeal
- **Minimalism:** Clean, uncluttered interface focused on the memes
- **Smooth Animations:** Gentle transitions and hover effects for polish

---

## 🔧 Configuration

### Tenor API Key

The project uses Tenor API to fetch random Pepe memes. The API key is located in `js/pepe.js`:

```javascript
var apikey = "YOUR_TENOR_KEY_HERE";
```

To use your own API key:
1. Get a free API key from [Tenor Developer Portal](https://developers.google.com/tenor)
2. Replace the `apikey` value in `js/pepe.js`

### Customization

Want to customize PePe.IS? Here are some quick tweaks:

**Change the accent color:**
```css
/* In css/style.css, find and replace #22c55e with your color */
color: #22c55e; /* Your color here */
```

**Change the font:**
```css
/* In css/style.css, replace the @import and font-family */
@import url('https://fonts.googleapis.com/css?family=YourFont');
font-family: 'YourFont', monospace;
```

**Change the search term:**
```javascript
// In js/pepe.js, modify the search_term
var search_term = "pepe"; // Try "frogs", "memes", etc.
```

---

## 📱 Features Breakdown

### 🐸 Random Pepe Generation
Powered by Tenor's random search API, each visit or refresh fetches a new Pepe meme from thousands of options.

### 📋 Custom Modal System
Replaced default browser `alert()` with a beautiful custom modal that matches the site's aesthetic:
- Smooth fade-in and slide-in animations
- Click outside to close
- Retro VT323 font styling
- Green accent theme

### 🔄 Refresh Without Reload
The refresh button only reloads the Pepe image, not the entire page, for a seamless experience.

### 🐦 Social Sharing
One-click sharing to Twitter/X with pre-formatted text and the Pepe URL.

### 📜 Scroll-to-Top
On longer pages (Privacy, Terms), a scroll-to-top button appears after scrolling 300px.

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch:** `git checkout -b feature/amazing-feature`
3. **Commit your changes:** `git commit -m 'Add some amazing feature'`
4. **Push to the branch:** `git push origin feature/amazing-feature`
5. **Open a Pull Request**

### Contribution Guidelines

- Maintain the retro aesthetic and dark theme
- Keep code vanilla (no frameworks/build tools)
- Test on multiple browsers and devices
- Follow existing code style and formatting
- Update documentation as needed

---

## 🐛 Bug Reports

Found a bug? Please open an issue with:

- Browser and version
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable

---

## 📄 License

This project is licensed under the GNU General Public License v3.0 - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **Pepe the Frog** - Created by Matt Furie
- **Tenor API** - For providing the meme images
- **Google Fonts** - For the VT323 retro font
- **The Meme Community** - For keeping Pepe alive and well

---

## 📞 Contact

**Hacked, LLC**
- 📧 Email: hi [AT] pepe [DOT] is
- 🐙 GitHub: [@pepe-is](https://github.com/pepe-is)
- 🌐 Website: [https://pepe.is](https://pepe.is)

---

<div align="center">

**Made with ♥ and lots of PePe's**

```
!welcome!
```

🐸 **[Visit PePe.IS](https://pepe.is)** 🐸

</div>
