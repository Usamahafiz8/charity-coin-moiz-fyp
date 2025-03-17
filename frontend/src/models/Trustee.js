import mongoose from "mongoose";

const TrusteeSchema = new mongoose.Schema({
  name: String,
  organization: String,
  contact: String,
  walletAddress: { type: String, unique: true, required: true }, // Added wallet address
});

export default mongoose.models.Trustee || mongoose.model("Trustee", TrusteeSchema);
