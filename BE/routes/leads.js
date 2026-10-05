const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const defaultLeadsFilePath = path.join(__dirname, '../data/leads.json');
const tmpLeadsFilePath = path.join('/tmp', 'leads.json');

const getLeadsFilePath = () => {
  if (fs.existsSync(tmpLeadsFilePath)) return tmpLeadsFilePath;
  return defaultLeadsFilePath;
};

// Helper to read leads
const getLeads = () => {
  try {
    const filePath = getLeadsFilePath();
    if (!fs.existsSync(filePath)) {
      try {
        fs.writeFileSync(filePath, JSON.stringify([]));
      } catch (e) {
        // Fallback to /tmp if primary fails
        fs.writeFileSync(tmpLeadsFilePath, JSON.stringify([]));
        return [];
      }
      return [];
    }
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data || '[]');
  } catch (err) {
    console.error('Error reading leads file:', err);
    return [];
  }
};

// Helper to save leads
const saveLeads = (leads) => {
  try {
    const filePath = getLeadsFilePath();
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(filePath, JSON.stringify(leads, null, 2));
  } catch (err) {
    console.error('Error writing to primary leads file, using /tmp fallback:', err.message);
    try {
      fs.writeFileSync(tmpLeadsFilePath, JSON.stringify(leads, null, 2));
    } catch (tmpErr) {
      console.error('Error writing to /tmp leads file:', tmpErr);
    }
  }
};

// POST /api/leads - Lead submission endpoint
router.post('/leads', (req, res) => {
  const { name, email, service, budget, message } = req.body;

  // Basic Validation
  if (!name || typeof name !== 'string' || name.trim().length < 2) {
    return res.status(400).json({ success: false, message: 'Full name is required (min 2 characters).' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email.trim())) {
    return res.status(400).json({ success: false, message: 'A valid email address is required.' });
  }

  const refId = `KW-${Math.floor(1000 + Math.random() * 9000)}`;
  const newLead = {
    id: refId,
    name: name.trim(),
    email: email.trim(),
    service: service || 'General AI Inquiry',
    budget: budget || 'Unspecified',
    message: message ? message.trim() : '',
    createdAt: new Date().toISOString(),
    status: 'NEW'
  };

  const leads = getLeads();
  leads.unshift(newLead);
  saveLeads(leads);

  console.log(`[LEAD RECEIVED] Ref: ${refId} | Name: ${newLead.name} | Email: ${newLead.email}`);

  return res.status(201).json({
    success: true,
    refId: refId,
    message: 'Thank you! Your project inquiry has been received. Our AI Lead Architect will contact you within 24 hours.'
  });
});

// GET /api/leads - Retrieve leads list (Internal)
router.get('/leads', (req, res) => {
  const leads = getLeads();
  res.json({ success: true, count: leads.length, leads });
});

module.exports = router;
