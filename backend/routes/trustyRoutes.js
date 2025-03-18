const express = require("express");
const Trusty = require("../models/trusty");

const router = express.Router();

/**
 * @swagger
 * /trusty:
 *   post:
 *     summary: Create a new trusty
 *     tags: [Trusty]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
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
 *         description: Trusty created successfully
 */
router.post("/", async (req, res) => {
  try {
    const trusty = new Trusty(req.body);
    const savedTrusty = await trusty.save();
    res.status(201).json(savedTrusty);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

/**
 * @swagger
 * /trusty:
 *   get:
 *     summary: Get all trusties
 *     tags: [Trusty]
 *     responses:
 *       200:
 *         description: List of all trusties
 */
router.get("/", async (req, res) => {
  try {
    const trusties = await Trusty.find();
    res.json(trusties);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
