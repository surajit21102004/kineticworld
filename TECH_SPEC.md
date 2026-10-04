# Technical Specification: KineticWorld

## 1. Stack Architecture

```
                       +-----------------------------------+
                       |         React SPA (Vite)          |
                       | Tailwind CSS + Lucide Icons + JS  |
                       +-----------------------------------+
                                         |
                                         | REST HTTP / JSON
                                         v
                       +-----------------------------------+
                       |        Node.js / Express API      |
                       |       (CORS, Input Validation)    |
                       +-----------------------------------+
                                         |
                                         | File System Sync
                                         v
                       +-----------------------------------+
                       |    backend/data/leads.json        |
                       +-----------------------------------+
```

---

## 2. Directory Structure

```
d:/KineticWorld/
├── FE/                     # Frontend React Application
│   ├── public/             # Favicons, static assets
│   ├── src/
│   │   ├── components/     # UI Modules
│   │   │   ├── HeroBanner.jsx
│   │   │   ├── ServicesGrid.jsx
│   │   │   ├── PortfolioShowcase.jsx
│   │   │   ├── PortfolioModal.jsx
│   │   │   ├── AiPlayground.jsx
│   │   │   ├── RoiCalculator.jsx
│   │   │   ├── ContactForm.jsx
│   │   │   ├── Navbar.jsx
│   │   │   └── Footer.jsx
│   │   ├── data/           # Mock agency & portfolio data
│   │   │   ├── servicesData.js
│   │   │   └── portfolioData.js
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css       # Tailwind CSS directives & cyber glass theme
│   ├── index.html
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── package.json
├── BE/                     # Backend Node/Express Server
│   ├── server.js           # Express main server entrypoint
│   ├── routes/
│   │   └── leads.js        # Lead endpoints
│   ├── data/
│   │   └── leads.json      # File persistence storage
│   └── package.json
├── PROJECT_STATE.md
├── DECISIONS.md
├── SCOPE.md
├── PRD.md
├── USER_FLOWS.md
├── TECH_SPEC.md
└── README.md
```

---

## 3. Component Architecture & State Management

- **Global Theme State**: Dark glassmorphism system tokens defined in `FE/src/index.css`.
- **Form State**: Managed via React local component state with live validation (`name`, `email`, `service`, `budget`, `notes`).
- **Modal State**: Selected portfolio object state in `App.jsx` passed down to `PortfolioModal.jsx`.
- **API Service**: Axios or native `fetch` module targeting `http://localhost:5000/api/leads`.

---

## 4. Backend REST API Endpoints

### `POST /api/leads`
- **Description**: Receives lead submission form.
- **Request Body**:
  ```json
  {
    "name": "Jane Doe",
    "email": "jane@company.com",
    "service": "Autonomous AI Agents",
    "budget": "$10k - $25k",
    "message": "Looking to automate invoice processing."
  }
  ```
- **Validation**:
  - `name`: Non-empty string.
  - `email`: Valid email format regex.
  - `service`: Non-empty string.
- **Response (201 Created)**:
  ```json
  {
    "success": true,
    "refId": "KW-9481",
    "message": "Inquiry recorded successfully."
  }
  ```

### `GET /api/health`
- **Description**: Health check endpoint for system status badge.
- **Response (200 OK)**:
  ```json
  {
    "status": "operational",
    "version": "1.0.0",
    "timestamp": "2026-10-04T23:55:00Z"
  }
  ```

---

## 5. Environment & Ports
- **Frontend Dev Server**: `http://localhost:5173` (Vite)
- **Backend API Server**: `http://localhost:5000` (Express)
- **CORS Config**: Express middleware allows origin `http://localhost:5173`.
