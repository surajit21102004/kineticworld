# Build With Kinetics (BWK) — AI Software & Cloud Infrastructure Platform

[![React](https://img.shields.io/badge/React-18-blue.svg)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-cyan.svg)](https://tailwindcss.com/)
[![Node.js](https://img.shields.io/badge/Node.js-20-green.svg)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-4.19-black.svg)](https://expressjs.com/)

**Build With Kinetics** is a high-velocity AI software engineering and cloud infrastructure platform designed to showcase autonomous multi-agent networks, enterprise RAG engines, and scalable digital systems.

---

## 🚀 Key Features

* **Official Slate & Steel Design System:** Obsidian Black (`#0B0F17`), Light Neutral Surface (`#F6F7F5`), Ink Black (`#172129`), and Slate Highlights (`#416377`).
* **Standalone Vector Logo:** Official monogram vector SVG geometry with dynamic Ink/White theme toggling.
* **5 Technical Case Studies:** Deep dives into FinTech RAG, Multi-Agent Document Audits, Medical NLP Extraction, E-Commerce Predictive Agents, and Industrial IoT Telemetry.
* **5 Core Engineering Practice Pillars:** Autonomous AI Agents, Enterprise RAG, Custom Full-Stack Web & Cloud, Systems Architecture, and Hardware IoT Telemetry.
* **Interactive 4-Step Project Inquiry Funnel:** Interactive capability selection, security requirements (Managed API / Private VPC / On-Prem), timeline/budget selector, and drag-and-drop RFP file attachment.
* **Node/Express REST API:** Backend lead intake endpoint (`POST /api/leads`) with input sanitization and `leads.json` file logger.

---

## 🛠 Project Structure

```
d:/KineticWorld/
├── FE/                                 # React (Vite) + Tailwind CSS Frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── Logo.jsx                # Official BWK Monogram Emblem SVG
│   │   │   ├── Navbar.jsx              # Centered Floating Pill Navigation
│   │   │   ├── HeroBanner.jsx          # Hero Banner & SLA Metrics Bar
│   │   │   ├── ServicesGrid.jsx        # 5 Practice Area Pillars
│   │   │   ├── FeaturedCaseStudy.jsx   # Architecture Blueprint Preview
│   │   │   ├── PortfolioShowcase.jsx   # 5 Technical Case Studies Grid
│   │   │   ├── PortfolioModal.jsx      # Case Study Architecture Drill-Down
│   │   │   ├── TechEcosystem.jsx       # Technology Ecosystem Grid
│   │   │   ├── ContactForm.jsx         # 4-Step Project Inquiry Funnel
│   │   │   ├── PreFooterCallout.jsx    # High-Conversion CTA Banner
│   │   │   └── Footer.jsx              # Footer with Monogram Emblem
│   │   ├── data/                       # Case Studies & Services Datasets
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
├── BE/                                 # Node.js + Express Backend API
│   ├── server.js                       # Express Main Entrypoint
│   ├── routes/leads.js                 # Lead Submission Endpoint
│   └── data/leads.json                 # Persistent Leads Log
└── BWK-Slate-Steel-Brand-Kit/          # Official Brand Assets & SVGs
```

---

## ⚡ Local Setup & Execution

### 1. Install & Run Backend Server
```bash
cd BE
npm install
npm run dev
```
*Backend API server active at `http://localhost:5000`*

### 2. Install & Run Frontend Client
```bash
cd FE
npm install
npm run dev
```
*Vite Dev Server active at `http://localhost:5173`*

---

## 📦 Production Build
```bash
cd FE
npm run build
```

---

## 🔒 Security & Privacy
* **Zero Base Model Data Retention**
* **Input Sanitization & CORS Restricted Endpoints**
* **VPC Isolation Specifications**
