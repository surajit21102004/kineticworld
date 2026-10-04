# User Flows & Journeys: KineticWorld

## Journey 1: Primary Lead Conversion (Happy Path)

```mermaid
flowchart TD
    A[Visitor Lands on Hero] --> B[Views Animated AI Headline & Status]
    B --> C{Action Choice}
    C -->|Click 'Launch Project'| F[Smooth Scroll to Lead Form]
    C -->|Scroll / Explore| D[Explore AI Solutions Grid]
    D --> E[Try Interactive AI Playground Demo]
    E --> F
    F --> G[Fill Name, Email, Select Service & Budget]
    G --> H[Click 'Submit Inquiry']
    H --> I[Express API POST /api/leads]
    I --> J[Validates Input & Saves to leads.json]
    J --> K[Displays Inline Success Card with Ref # KW-XXXX]
```

---

## Journey 2: Portfolio & ROI Evaluation

```mermaid
flowchart TD
    A[Visitor Scrolls to Portfolio] --> B[Clicks 'View Case Study' on FinTech Agent]
    B --> C[Portfolio Modal Opens with Glass Blur]
    C --> D[Reads Architecture Specs & ROI Metrics]
    D --> E[Closes Modal via Esc / Backdrop / X]
    E --> F[Scrolls to ROI Estimator]
    F --> G[Adjusts Hours Saved Slider]
    G --> H[Calculates Projected Annual Savings]
    H --> I[Clicks Tier CTA 'Select Package']
    I --> J[Navigates to Lead Form with Pre-selected Tier]
```

---

## Journey 3: Form Failure & Offline Recovery Path

```mermaid
flowchart TD
    A[User Fills Lead Form] --> B{Validation Check}
    B -->|Invalid Email / Missing Name| C[Highlight Input in Red + Display Error Text]
    C --> D[User Corrects Input]
    D --> E[Resubmits Form]
    B -->|Valid Data| F[Trigger Fetch POST /api/leads]
    F --> G{Server Available?}
    G -->|No / Network Error| H[Show Offline Toast: 'Server offline. Reach us at contact@kineticworld.ai']
    G -->|Yes| I[201 Created -> Render Success Confirmation]
```

---

## 4. State Matrix

| Component | First Use / Default State | Active / Hover State | Error / Failure State | Success State |
|---|---|---|---|---|
| **Hero Banner** | Glowing ambient mesh background, live status badge | Interactive CTA hover neon glow | Fallback static gradient if reduced motion | N/A |
| **Case Studies** | 3 preview cards displayed | Card scale + neon border highlight | Modal fails gracefully if missing data | Expanded case study modal active |
| **AI Playground** | Prompt selector ready | Simulated streaming text animation | Prompt empty error hint | Completed code & metric response view |
| **Lead Form** | Clean form inputs | Active blue ring outline on focus | Red input border + inline error badge | Green checkmark confirmation + Ref ID |
