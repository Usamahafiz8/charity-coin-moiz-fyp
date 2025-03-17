import mongoose from "mongoose";

const HospitalSchema = new mongoose.Schema({
  name: String,
  location: String,
  contact: String,
  walletAddress: { type: String, unique: true, required: true }, // Added wallet address
});

export default mongoose.models.Hospital || mongoose.model("Hospital", HospitalSchema);
