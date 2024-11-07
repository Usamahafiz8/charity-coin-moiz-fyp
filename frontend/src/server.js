// server.js
const express = require('express'); 
const { connectDB } = require('./src/utils/db'); // Adjust this path if needed

const app = express();

// Connect to MongoDB
connectDB();

// Define your routes and middleware here

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
