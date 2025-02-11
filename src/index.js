require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const startServer = async () => {
  const app = express();

  // Connect to MongoDB
  mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
  });

  mongoose.connection.once('open', () => {
      console.log('Connected to database');
  });

  // Initialize server
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
  });
};

startServer();