# RRABS - R.R. Automated Building Solutions

A modern web application for **R.R. Automated Building Solutions (RRABS)**, showcasing advanced MEP (Mechanical, Electrical, Plumbing), Building Management Systems (BMS), ELV & Security, and IT Networking engineering services.

---

## 🏢 Overview

**RRABS** delivers end-to-end building automation and MEP engineering services for commercial, industrial, healthcare, residential, hospitality, and institutional sectors. The web platform offers an interactive and responsive experience highlighting service offerings, industry verticals, project capabilities, and direct consultation booking.

---

## ⚡ Core Features & Services

- **Mechanical, Electrical & Plumbing (MEP)**: High-voltage/low-voltage distribution, HVAC climate engineering, and advanced plumbing & drainage systems.
- **Building Management Systems (BMS)**: Centralized control, HVAC optimization, energy monitoring, and automated facility management.
- **ELV & Security Systems**: CCTV surveillance, biometric access control, fire detection & suppression, and public address systems.
- **Structured Cabling & IT Infrastructure**: Data center cabling, enterprise fiber optics, and robust network architectures.
- **Industry Solutions**: Tailored engineering designs for Commercial, Residential, Healthcare, Hospitality, Industrial, and Institutional sectors.
- **Interactive Inquiries & Quote Calculator**: Real-time consultation requests, scope estimators, and contact gateways.

---

## 🛠️ Technology Stack

- **Framework**: [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Routing**: [React Router DOM v7](https://reactrouter.com/)
- **Styling**: Vanilla CSS (modular design system with responsive layouts and micro-interactions)
- **Icons**: Custom SVG icons and Lucide-inspired iconography
- **Package Manager**: [pnpm](https://pnpm.io/)

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v18+ recommended) and `pnpm` installed.

```bash
# Install pnpm if you don't have it
npm install -g pnpm
```

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/saran531/RRABS.git
   cd RRABS
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Start development server:
   ```bash
   pnpm run dev
   ```

4. Build for production:
   ```bash
   pnpm run build
   ```

5. Preview production build:
   ```bash
   pnpm run preview
   ```

---

## 📁 Repository Structure

```text
RRABS/
├── public/                 # Static assets
├── src/
│   ├── assets/             # Images, illustrations, and logos
│   │   ├── images/         # Categorized images (about, services, industries)
│   │   └── RRABS_Logo.png  # Primary branding
│   ├── components/         # Reusable UI components (Navbar, Footer, Modals, Icons)
│   ├── pages/              # Application pages and service deep-dives
│   │   ├── services/       # Service-specific detail pages
│   │   ├── Home.jsx        # Landing page
│   │   ├── About.jsx       # About RRABS & leadership
│   │   ├── Services.jsx    # Complete services catalog
│   │   └── Contact.jsx     # Contact & inquiry form
│   ├── App.jsx             # Root application component & routing
│   ├── main.jsx            # Application entry point
│   └── index.css           # Global design tokens and base styles
├── package.json
└── vite.config.js
```

---

## 📄 License

Private / Proprietary to R.R. Automated Building Solutions.

