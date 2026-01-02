# 🚀 Balaji S - Portfolio Website

## 🌐 Live Demo

**[🔗 View Live Portfolio](https://balaji-29-s.github.io/portfolio/)**

> Experience the portfolio in action! Click the link above to explore the live website.

---

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS, showcasing my journey as an aspiring Software Developer & Data Scientist — highlighting my projects, skills, certifications, internships, and contact information in a clean, elegant layout.

## ✨ Features

### 🎨 Design & UI
- **Modern Design**: Clean and professional interface with smooth animations
- **Dark/Light Theme**: Toggle between themes with system preference detection
- **Responsive Layout**: Optimized for all device sizes (mobile, tablet, desktop)
- **Interactive Animations**: Custom animations including Galaxy background, Electric Border, and Spotlight cards
- **Glass Morphism**: Modern glass effects and elegant transitions

### 🧭 Navigation & Sections
- **Buttery Smooth Scrolling**: Powered by Lenis for premium scroll experience
- **Single-Page Application**: Seamless navigation between sections
- **Hero Section**: Dynamic introduction with call-to-action buttons
- **About Me**: Personal introduction with skill highlights and resume download
- **Experience**: Internships, certifications, and education with interactive elements
- **Projects**: Featured AI/ML and full-stack projects showcase
- **Contact**: Functional contact form with Formspree integration

### 🔧 Technical Features
- **TypeScript**: Full type safety and better development experience
- **Component Architecture**: Modular and reusable React components
- **Theme System**: Context-based theme management with localStorage persistence
- **Smooth Scrolling**: Lenis integration for buttery smooth scroll animations
- **Form Handling**: Integrated contact form with Formspree
- **Bold Text Support**: Markdown-style formatting in achievements and descriptions
- **Certificate Links**: Direct links to verify certifications and credentials

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe JavaScript development
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework

### UI Components
- **Radix UI** - Accessible, unstyled UI primitives
- **Lucide React** - Beautiful and consistent icons
- **Lenis** - Buttery smooth scroll animations
- **Custom Components** - Reusable UI components library

### Build & Deploy
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing and optimization
- **GitHub Pages** - Automated deployment

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/balaji-29-s/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
# or
yarn build
```

### Deploy to GitHub Pages

```bash
npm run deploy
# or
yarn deploy
```

## 📁 Project Structure

```
portfolio/
├── public/                 # Static assets
│   ├── *.png, *.jpg       # Images and logos
│   ├── favicon.ico        # Site favicon
│   └── robots.txt         # SEO configuration
├── src/
│   ├── animations/        # Custom animation components
│   │   ├── ElectricBorder.tsx
│   │   ├── Galaxy.tsx
│   │   ├── SpotlightCard.tsx
│   │   └── ...
│   ├── components/        # React components
│   │   ├── ui/           # UI component library
│   │   ├── About.tsx     # About section
│   │   ├── Contact.tsx   # Contact form
│   │   ├── Experience.tsx # Experience & education
│   │   ├── Hero.tsx      # Landing section
│   │   ├── Navigation.tsx # Header navigation
│   │   ├── Projects.tsx  # Projects showcase
│   │   └── Footer.tsx    # Footer section
│   ├── contexts/         # React contexts
│   │   └── ThemeContext.tsx # Theme management
│   ├── data/             # JSON data files
│   │   ├── projects.json
│   │   ├── certifications.json
│   │   ├── education.json
│   │   └── internships.json
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions
│   ├── pages/            # Page components
│   └── assets/           # Local assets
├── *.config.js           # Configuration files
└── package.json          # Dependencies and scripts
```

## 🎨 Customization

### Personal Information
Update your personal details in the following files:
- `src/components/Hero.tsx` - Name, title, and bio
- `src/components/About.tsx` - About section and skills
- `src/components/Contact.tsx` - Contact information
- `src/components/Footer.tsx` - Footer details

### Projects
Update the projects array in `src/data/projects.json`:

```json
{
  "title": "Your Project Title",
  "description": "Project description...",
  "image": "project-image.jpg",
  "technologies": ["React", "TypeScript", "..."],
  "liveUrl": "https://your-project.com",
  "githubUrl": "https://github.com/username/repo",
  "featured": true,
  "highlights": [
    "Key feature 1",
    "Key feature 2"
  ]
}
```

### Current Featured Projects
- **AI Interview Mocker**: AI-powered interview simulation platform
- **Medical Assistant**: Healthcare management with AI document processing
- **SafeCity**: Urban safety monitoring with real-time maps
- **Sea Surface Temperature Prediction**: Deep learning model for oceanographic forecasting

### Experience & Education
Update your experience in the respective JSON files:
- `src/data/certifications.json` - Certifications and courses
- `src/data/education.json` - Educational background
- `src/data/internships.json` - Work experience and internships

## 🔧 Configuration

### Environment Variables
Create a `.env` file for environment-specific configurations:

```env
VITE_FORMSPREE_ENDPOINT=your_formspree_endpoint_here
```

### Deployment Configuration
The project includes automated deployment scripts:

- `npm run build` - Build for production
- `npm run deploy` - Deploy to GitHub Pages

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints for:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎯 SEO & Performance

- **Semantic HTML**: Proper HTML5 semantic elements
- **Meta Tags**: Configured for social media sharing
- **Performance**: Optimized images and lazy loading
- **Accessibility**: ARIA labels and keyboard navigation support

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Design Inspiration**: Modern portfolio designs and UI/UX best practices
- **Icons**: [Lucide React](https://lucide.dev/) for beautiful icons
- **UI Components**: [Radix UI](https://www.radix-ui.com/) for accessible components
- **Animations**: Custom CSS and React animations
- **Hosting**: [GitHub Pages](https://pages.github.com/) for free hosting

## 📞 Contact

**Balaji S**
- Portfolio: https://balaji-29-s.github.io/portfolio
- LinkedIn: https://www.linkedin.com/in/balaji-s-39770232a/
- Email: bs8315@srmist.edu.in
- GitHub: [@balaji-29-s](https://github.com/balaji-29-s)

---

⭐ **Star this repository if you found it helpful!**
