const express = require('express');
const Hospital = require('../models/hospital');

const router = express.Router();

// Create a new hospital
router.post('/', async (req, res) => {
  const hospital = new Hospital(req.body);
  try {
    const savedHospital = await hospital.save();
    res.status(201).json(savedHospital);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get all hospitals
router.get('/', async (req, res) => {
  try {
    const hospitals = await Hospital.find();
    res.json(hospitals);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update a hospital
router.put('/:id', async (req, res) => {
  try {
    const updatedHospital = await Hospital.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedHospital);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a hospital
router.delete('/:id', async (req, res) => {
  try {
    await Hospital.findByIdAndDelete(req.params.id);
    res.json({ message: 'Hospital deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
