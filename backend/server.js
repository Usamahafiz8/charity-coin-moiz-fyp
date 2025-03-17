require('dotenv').config(); // Ensure environment variables are loaded

const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const hospitalRoutes = require('./routes/hospitalRoutes');
const patientRoutes = require('./routes/patientRoutes');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors({
  origin: 'http://localhost:3000' // Update this to match your frontend URL
}));

console.log("MONGODB_URI:", process.env.MONGODB_URI); // Debugging

// Connect to MongoDB
connectDB();

// Use routes
app.use('/hospitals', hospitalRoutes);
app.use('/patients', patientRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
