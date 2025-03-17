import mongoose from "mongoose";

const CharitySchema = new mongoose.Schema({
  name: String,
  purpose: String,
  fundsCollected: Number,
  walletAddress: { type: String, unique: true, required: true }, // Added wallet address
});

export default mongoose.models.Charity || mongoose.model("Charity", CharitySchema);
