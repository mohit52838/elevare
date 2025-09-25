import express from "express";
import Contact from "../models/Contact.js";
import { sendEmail } from "../utils/sendEmail.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // ✅ Save message to DB
    const contact = new Contact({ name, email, message });
    await contact.save();

    // ✅ Send email notification
    await sendEmail(
      process.env.EMAIL_USER,
      "📩 New Contact Form Submission",
      `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    );

    res.status(200).json({ message: "Message sent successfully!" });
  } catch (err) {
    console.error("❌ Contact Error:", err.message);
    res.status(500).json({ error: "Failed to send message" });
  }
});

export default router;
