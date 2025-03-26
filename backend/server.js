require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const hospitalRoutes = require("./routes/hospitalRoutes");
const patientRoutes = require("./routes/patientRoutes");
const trustyRoutes = require("./routes/trustyRoutes");
const charityRoutes = require("./routes/charityRoutes");
const setupSwagger = require("./swagger"); 
const emailRoutes = require("./routes/email");

const app = express();
app.use(bodyParser.json());
app.use(cors({ origin: "http://localhost:3000" }));

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable inside .env");
}

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error("MongoDB Connection Error:", err));

  app.use("/hospitals", hospitalRoutes);
  app.use("/patients", patientRoutes);
  app.use("/trusty", trustyRoutes);
  app.use("/charity", charityRoutes);
  app.use("/email", emailRoutes); 

// Setup Swagger
setupSwagger(app);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
