import { connectToDB } from "../../lib/mongodb";
import Hospital from "../../models/Hospital";

export default async function handler(req, res) {
  await connectToDB();

  if (req.method === "GET") {
    const hospitals = await Hospital.find();
    return res.status(200).json(hospitals);
  }

  if (req.method === "POST") {
    const { name, location, contact, walletAddress } = req.body;

    if (!walletAddress) {
      return res.status(400).json({ error: "Wallet address is required" });
    }

    try {
      const newHospital = new Hospital({ name, location, contact, walletAddress });
      await newHospital.save();
      return res.status(201).json(newHospital);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  res.status(405).end(); // Method Not Allowed
}
