# Ashish Shabu - Software Development Engineer Portfolio

A blazing-fast, modern portfolio website built with **React**, **Vite**, and **Tailwind CSS**. Designed with a sleek dark theme, interactive 3D glassmorphism elements, and advanced SEO to showcase software engineering projects and technical skills.

## 🚀 Features

### Design & UI
- **Dark Theme**: Modern dark color scheme with glowing neon cyan/blue cyber accents.
- **Responsive Design**: Fully responsive layout for mobile, tablet, and desktop.
- **Smooth Animations**: Powered by `framer-motion` for fluid scroll transitions and micro-interactions.
- **Glassmorphism**: Premium frosted-glass effect components.
- **Interactive Terminal**: Fully functional macOS-style terminal component with easter eggs and command parsing.
- **Toast Notifications**: Integrated `react-hot-toast` for sleek contact form feedback.

### Advanced SEO & Performance
- **Vite Powered**: Lightning-fast local development and optimized production builds.
- **Rich Metadata**: Complete Open Graph (OG) tags and Twitter Cards for beautiful link previews.
- **Structured Data**: Schema.org JSON-LD injected for enhanced search engine understanding.
- **Search Engine Ready**: Includes custom `robots.txt` and `sitemap.xml`.

### Animated Backgrounds
- **Home Section**: Matrix rain animation (binary code falling effect).
- **Projects Section**: Floating code lines animation.
- **Contact Section**: Animated circuit lines background.

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Ashish-Shabu/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server (Vite)**
   ```bash
   npm start
   # or
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (default Vite port) or the port displayed in your terminal.

5. **Build for Production**
   ```bash
   npm run build
   ```

## 📁 Project Structure

```
.
├── public/
│   ├── favicon.jpg          # Custom OG/Favicon logo
│   ├── og-image.jpg         # Open Graph preview image
│   ├── robots.txt           # Search engine crawling rules
│   └── sitemap.xml          # Site map for indexing
├── src/
│   ├── components/
│   │   ├── Navigation.jsx   # Navigation bar with smooth scrolling
│   │   ├── Home.jsx         # Hero section
│   │   ├── About.jsx        # Bio and technical skills grid
│   │   ├── Projects.jsx     # Software engineering project showcase
│   │   ├── Resume.jsx       # Certifications and skills summary
│   │   ├── InteractiveTerminal.jsx # Playable terminal easter egg
│   │   ├── Contact.jsx      # Web3Forms contact form with toast notifications
│   │   ├── CustomCursor.jsx # Optional interactive custom cursor
│   │   ├── MatrixRain.jsx   # Canvas-based matrix rain
│   │   ├── CircuitBackground.jsx
│   │   └── CodeBackground.jsx
│   ├── App.jsx              # Main app wrapper and Toaster setup
│   ├── index.jsx            # React root entry point
│   └── index.css            # Global Tailwind utilities and custom CSS
├── index.html               # Main HTML template with SEO tags
├── vite.config.js           # Vite build configuration
└── package.json             # Dependencies and scripts
```

## 🎨 Technologies Used

- **Frontend**: React 18, Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons (Fa, Si)
- **Email Service**: Web3Forms API
- **Notifications**: React Hot Toast

## 📞 Contact

- **Email**: ashishshabu4@gmail.com
- **GitHub**: [@Ashish-Shabu](https://github.com/Ashish-Shabu)
- **LinkedIn**: [Ashish Shabu](https://www.linkedin.com/in/ashish-shabu/)