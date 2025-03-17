import mongoose from "mongoose";

const PatientSchema = new mongoose.Schema({
  name: String,
  age: Number,
  disease: String,
  hospitalId: { type: mongoose.Schema.Types.ObjectId, ref: "Hospital" },
  walletAddress: { type: String, unique: true, required: true }, // Added wallet address
});

export default mongoose.models.Patient || mongoose.model("Patient", PatientSchema);
