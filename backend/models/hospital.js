const mongoose = require('mongoose');

const hospitalSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  wallat_address: { type: String, required: true },
  contactNumber: { type: String, required: true },
});

module.exports = mongoose.model('Hospital', hospitalSchema);
