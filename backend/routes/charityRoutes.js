const express = require("express");
const Charity = require("../models/charity");

const router = express.Router();

/**
 * @swagger
 * /charity:
 *   post:
 *     summary: Create a new charity
 *     tags: [Charity]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               purpose:
 *                 type: string
 *               email:
 *                 type: string
 *               organization:
 *                 type: string
 *               contact:
 *                 type: string
 *               wallet_address:
 *                 type: string
 *     responses:
 *       201:
 *         description: Charity created successfully
 */
router.post("/", async (req, res) => {
  try {
    const charity = new Charity(req.body);
    const savedCharity = await charity.save();
    res.status(201).json(savedCharity);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

/**
 * @swagger
 * /charity:
 *   get:
 *     summary: Get all charities
 *     tags: [Charity]
 *     responses:
 *       200:
 *         description: List of all charities
 */
router.get("/", async (req, res) => {
  try {
    const charities = await Charity.find();
    res.json(charities);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
