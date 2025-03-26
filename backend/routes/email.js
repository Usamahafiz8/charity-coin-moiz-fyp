const express = require("express");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
require("dotenv").config();

const Charity = require("../models/charity");
const Hospital = require("../models/hospital");
const Patient = require("../models/patient");
const Trusty = require("../models/trusty");

const router = express.Router();

// Email configuration
const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST, // SMTP server
    port: process.env.SMTP_PORT, // SMTP port (e.g., 587 for TLS, 465 for SSL)
    secure: process.env.SMTP_SECURE === "true", // Set 'true' for 465, 'false' for 587
    auth: {
      user: process.env.SMTP_USER, // Your SMTP username
      pass: process.env.SMTP_PASS, // Your SMTP password
    },
  });
  

/**
 * @swagger
 * /email/send-email:
 *   post:
 *     summary: Send email to all users
 *     tags: [Email]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               subject:
 *                 type: string
 *               message:
 *                 type: string
 *               senderName:
 *                 type: string
 *     responses:
 *       200:
 *         description: Emails sent successfully
 *       400:
 *         description: No users found to send emails
 *       500:
 *         description: Failed to send emails
 */
router.post("/send-email", async (req, res) => {
  try {
    const { subject, message, senderName } = req.body;

    // Fetch all users' emails from the database
    const charities = await Charity.find({}, "email");
    const hospitals = await Hospital.find({}, "email");
    const patients = await Patient.find({}, "email");
    const trusties = await Trusty.find({}, "email");

    // Extract email addresses
    const emailList = [
      ...charities.map((user) => user.email),
      ...hospitals.map((user) => user.email),
      ...patients.map((user) => user.email),
      ...trusties.map((user) => user.email),
    ];

    if (emailList.length === 0) {
      return res
        .status(400)
        .json({ message: "No users found to send emails." });
    }

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER, // Use environment variable
      to: emailList,
      subject: subject,
      text: `Hello,\n\n${message}\n\nBest Regards,\n${senderName}`,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Emails sent successfully!" });
  } catch (error) {
    console.error("Email sending error:", error);
    res.status(500).json({ message: "Failed to send emails", error });
  }
});

module.exports = router;
