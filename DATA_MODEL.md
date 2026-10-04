# Data & API Model: KineticWorld

## 1. Data Schema (Lead Entity)

```json
{
  "id": "KW-9481",
  "name": "String (Required, 2-100 chars)",
  "email": "String (Required, Valid Email)",
  "service": "Enum ['Autonomous AI Agents', 'Enterprise LLM Integration', 'AI Workflow Automation', 'Custom AI Dev']",
  "budget": "Enum ['< $10k', '$10k - $25k', '$25k - $50k', '$50k+']",
  "message": "String (Optional, max 1000 chars)",
  "createdAt": "ISO 8601 Timestamp (e.g. 2026-10-04T23:55:00.000Z)",
  "clientIp": "String (Request IP address)",
  "status": "Enum ['NEW', 'REVIEWED', 'CONTACTED']"
}
```

---

## 2. Validation & Security Rules
1. **Sanitization**: Trim whitespace from all string inputs.
2. **Email Format**: Must match standard RFC 5322 regex.
3. **Payload Limit**: JSON payload size strictly limited to `< 50kb`.
4. **CORS Policy**: Restrict API origin to authorized client domain.
