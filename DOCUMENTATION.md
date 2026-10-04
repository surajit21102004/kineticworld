# Developer & System Documentation: KineticWorld (Stage 17)

## Architecture Overview
KineticWorld is structured as a decoupled React SPA frontend communicating with a lightweight Node.js/Express REST API.

---

## Component Architecture
- `Navbar.jsx`: Sticky glassmorphic header with active section tracking and mobile drawer toggle.
- `HeroBanner.jsx`: Animated cyber headline, live model status pill, and quick CTAs.
- `ServicesGrid.jsx`: 4 core agency solution cards displaying feature tags and operational benchmarks.
- `PortfolioShowcase.jsx` & `PortfolioModal.jsx`: Case studies gallery featuring verified ROI metrics and architecture drill-downs.
- `AiPlayground.jsx`: Streaming interactive AI prompt sandbox simulator.
- `RoiCalculator.jsx`: Dynamic team hours saved slider calculating annual financial savings.
- `ContactForm.jsx`: Lead capture form posting to Express `/api/leads` endpoint with input validation and reference tracking IDs (`KW-XXXX`).
- `Footer.jsx`: Operational status dashboard indicator.

---

## API Documentation

### `POST /api/leads`
- **Request Format**: JSON `{ name, email, service, budget, message }`
- **Response Format**: JSON `{ success: true, refId: "KW-XXXX", message: "..." }`
- **Storage Path**: `BE/data/leads.json`
