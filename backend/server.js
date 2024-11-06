const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const hospitalRoutes = require('./routes/hospitalRoutes');
const patientRoutes = require('./routes/patientRoutes');

const app = express();
app.use(bodyParser.json());

// Connect to MongoDB
connectDB();

// Use routes
app.use('/hospitals', hospitalRoutes);
app.use('/patients', patientRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
