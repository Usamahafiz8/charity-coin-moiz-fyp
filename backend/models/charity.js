const mongoose = require("mongoose");

const charitySchema = new mongoose.Schema({
  name: { type: String, required: true },
  purpose: { type: String, required: true },
  email: { type: String, required: true },
  organization: { type: String, required: true },
  contact: { type: String, required: true },
  wallet_address: { type: String, required: true },
});

module.exports = mongoose.model("Charity", charitySchema);
