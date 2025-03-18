const express = require("express");
const Patient = require("../models/patient");

const router = express.Router();

/**
 * @swagger
 * /patients:
 *   post:
 *     summary: Create a new patient
 *     tags: [Patients]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               age:
 *                 type: number
 *               phone:
 *                 type: string
 *               email:
 *                 type: string
 *               wallet_address:
 *                 type: string
 *               hospitalId:
 *                 type: string
 *                 format: uuid
 *               medicalHistory:
 *                 type: array
 *                 items:
 *                   type: string
 *     responses:
 *       201:
 *         description: Patient created successfully
 */
router.post("/", async (req, res) => {
  const patient = new Patient(req.body);
  try {
    const savedPatient = await patient.save();
    res.status(201).json(savedPatient);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

/**
 * @swagger
 * /patients:
 *   get:
 *     summary: Get all patients
 *     tags: [Patients]
 *     responses:
 *       200:
 *         description: List of all patients
 */
router.get("/", async (req, res) => {
  try {
    const patients = await Patient.find();
    res.json(patients);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
