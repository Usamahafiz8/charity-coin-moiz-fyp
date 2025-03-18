const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  wallet_address: { type: String, required: true },
  // hospitalId: { type: mongoose.Schema.Types.ObjectId, ref: 'Hospital' },
  medicalHistory: [String],
});

module.exports = mongoose.model('Patient', patientSchema);
