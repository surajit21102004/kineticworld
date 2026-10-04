# Deployment Guide: KineticWorld (Stage 16)

## Production Build Verification

### 1. Build Production Frontend Bundle
```bash
cd d:/KineticWorld/FE
npm run build
```
Creates static assets in `FE/dist/` ready for Vercel, Netlify, or Nginx hosting.

### 2. Launch Backend API
```bash
cd d:/KineticWorld/BE
npm start
```
Starts Express API server on `http://localhost:5000`.

### 3. Smoke Test Verification
- Visit site URL.
- Test contact form submission.
- Verify entry written to `BE/data/leads.json`.
