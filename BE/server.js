const express = require('express');
const cors = require('cors');
const path = require('path');
const leadsRouter = require('./routes/leads');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Health Check Endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'operational',
    service: 'KineticWorld AI Engine Backend API',
    timestamp: new Date().toISOString(),
    version: '1.0.0'
  });
});

// Routes
app.use('/api', leadsRouter);

// Export app for Vercel & serverless runtimes
module.exports = app;

// Start Server when run directly
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`=================================================`);
    console.log(`🚀 KineticWorld AI Backend API Server active`);
    console.log(`📡 URL: http://localhost:${PORT}`);
    console.log(`🟢 Health: http://localhost:${PORT}/api/health`);
    console.log(`=================================================`);
  });
}

