# Ashish Shabu - Portfolio Website

A modern, responsive portfolio website built with React.js, featuring smooth animations, dark theme, and interactive elements.

## 🚀 Features

### Design & UI
- **Dark Theme**: Modern dark color scheme with cyan accents
- **Responsive Design**: Fully responsive layout for desktop and mobile
- **Smooth Animations**: Framer Motion powered animations and transitions
- **Custom Cursor**: Interactive custom cursor that reacts to hover states
- **Glass Morphism**: Modern glass effect components

### Animated Backgrounds
- **Home Section**: Matrix rain animation (binary code falling effect)
- **Projects Section**: Floating code lines animation
- **Contact Section**: Animated circuit lines background

### Sections
1. **Home**: Hero section with name, tagline, and social links
2. **About**: Personal information, highlights, and technical skills grid
3. **Projects**: Project showcase with hover effects and tech stack badges
4. **Resume**: Download section with education and certifications overview
5. **Contact**: Contact form with social links and contact information

### Technical Stack
- **React.js**: Frontend framework
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **React Icons**: Icon library
- **React Intersection Observer**: Scroll-based animations

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ashishshabu/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 📁 Project Structure

```
src/
├── components/
│   ├── Navigation.js      # Navigation bar with smooth scrolling
│   ├── Home.js           # Hero section with matrix rain
│   ├── About.js          # About section with skills grid
│   ├── Projects.js       # Projects showcase
│   ├── Resume.js         # Resume download section
│   ├── Contact.js        # Contact form and info
│   ├── CustomCursor.js   # Interactive custom cursor
│   ├── MatrixRain.js     # Matrix rain animation
│   ├── CircuitBackground.js # Circuit lines animation
│   └── CodeBackground.js # Floating code lines
├── App.js               # Main app component
├── index.js             # React entry point
└── index.css            # Global styles and Tailwind imports
```

## 🎨 Customization

### Colors
The color scheme can be customized in `tailwind.config.js`:
- Primary colors: Blue/cyan gradient
- Dark theme: Various shades of gray
- Accent colors: Cyan highlights

### Content
Update the following files to customize content:
- `src/components/Home.js`: Name, tagline, social links
- `src/components/About.js`: Personal info, skills, highlights
- `src/components/Projects.js`: Project details and links
- `src/components/Resume.js`: Education, certifications
- `src/components/Contact.js`: Contact information

### Animations
- Modify animation parameters in `tailwind.config.js`
- Adjust Framer Motion variants in individual components
- Customize background animations in respective components



## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎯 Performance Features

- **Lazy Loading**: Components load as they come into view
- **Optimized Animations**: Hardware-accelerated animations
- **Minimal Bundle**: Tree-shaking and code splitting


### Code Style
- ESLint configuration included
- Prettier formatting
- Consistent component structure



## 📞 Contact

- **Email**: ashishshabu2@gmail.com
- **GitHub**: [@ashishshabu](https://github.com/ashish-shabu)
- **LinkedIn**: [Ashish Shabu](https://linkedin.com/in/ashish-shabu)