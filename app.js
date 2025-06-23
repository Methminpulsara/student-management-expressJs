const express = require('express');
const dotenv = require('dotenv');
const studentRoutes = require('./routes/studentRoute');
const cors = require('cors'); // Optional if using frontend

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors()); // Optional, enable only if frontend runs on different port
app.use(express.json()); // Parses JSON body

// Routes
//app.use('/students', studentRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('👋 Hello! Student Management API is working.');
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
