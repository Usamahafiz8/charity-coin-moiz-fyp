const express = require("express");
const Hospital = require("../models/hospital");

const router = express.Router();

/**
 * @swagger
 * /hospitals:
 *   post:
 *     summary: Create a new hospital
 *     tags: [Hospitals]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               location:
 *                 type: string
 *               phone:
 *                 type: string
 *               email:
 *                 type: string
 *               wallet_address:
 *                 type: string
 *               contactNumber:
 *                 type: string
 *     responses:
 *       201:
 *         description: Hospital created successfully
 */
router.post("/", async (req, res) => {
  const hospital = new Hospital(req.body);
  try {
    const savedHospital = await hospital.save();
    res.status(201).json(savedHospital);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

/**
 * @swagger
 * /hospitals:
 *   get:
 *     summary: Get all hospitals
 *     tags: [Hospitals]
 *     responses:
 *       200:
 *         description: List of all hospitals
 */
router.get("/", async (req, res) => {
  try {
    const hospitals = await Hospital.find();
    res.json(hospitals);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
