# Cyber Security Awareness Simulator

A modern, interactive cybersecurity training platform built with React. Learn to identify phishing emails, detect fake websites, strengthen passwords, and respond to real-world attack scenarios — all in a safe simulated environment.

![Cyber Security Awareness Simulator](./docs/screenshots/hero.png)

## Features

- **Phishing Email Simulator** — Gmail-style interface to analyze and mark suspicious emails
- **Fake Website Detector** — Inspect URLs, HTTPS indicators, and compare real vs fake sites
- **Password Strength Analyzer** — Live strength meter with crack-time estimates
- **Cyber Safety Quiz** — Timed multiple-choice quiz with score tracking
- **Attack Simulation Scenarios** — OTP scams, QR fraud, tech support, WiFi, social engineering
- **Analytics Dashboard** — Recharts visualizations of threat trends and your progress
- **Dark/Light Theme Toggle** — Persistent via localStorage
- **Achievement Badges** — Unlock badges as you complete modules
- **Live Threat Alert Ticker** — Simulated cyber threat feed
- **Responsive Design** — Mobile, tablet, and desktop optimized
- **Smooth Animations** — Framer Motion page transitions and scroll effects

## Tech Stack

| Technology | Purpose |
|---|---|
| React 19 | UI framework |
| Vite 6 | Build tool |
| Tailwind CSS 4 | Styling |
| React Router DOM 7 | Routing |
| Framer Motion | Animations |
| Recharts | Analytics charts |
| Lucide React | Icons |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18+ and npm

### Installation

```bash
# Clone or navigate to the project directory
cd "Cyber Security Project"

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/          # Route pages
├── layouts/        # Layout wrappers
├── routes/         # Route definitions
├── data/           # Static content & mock data
├── hooks/          # Custom React hooks
├── utils/          # Helper functions
├── context/        # Theme & app state
├── animations/     # Framer Motion variants
└── styles/         # Global CSS & Tailwind
```

## Pages

| Route | Description |
|---|---|
| `/` | Home — hero, features, stats, testimonials |
| `/phishing-simulator` | Phishing email training |
| `/fake-website-detector` | Website fraud detection |
| `/password-analyzer` | Password strength tool |
| `/cyber-quiz` | Timed security quiz |
| `/attack-simulation` | Interactive attack scenarios |
| `/dashboard` | Analytics & progress charts |
| `/about` | About page & achievements |

## Screenshots

> Add your screenshots to `docs/screenshots/` and they will appear here.

| Page | Preview |
|---|---|
| Home | `./docs/screenshots/hero.png` |
| Phishing Simulator | `./docs/screenshots/phishing.png` |
| Dashboard | `./docs/screenshots/dashboard.png` |
| Quiz | `./docs/screenshots/quiz.png` |

## LocalStorage Keys

| Key | Description |
|---|---|
| `cyber-theme` | Dark/light theme preference |
| `cyber-achievements` | Unlocked achievement IDs |
| `cyber-quiz-scores` | Quiz score history |
| `cyber-sim-stats` | Simulation completion counts |

## License

Educational use only. This project is for cybersecurity awareness training purposes.
