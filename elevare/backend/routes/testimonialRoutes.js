import express from "express";
import Testimonial from "../models/Testimonial.js";
import { sendEmail } from "../utils/sendEmail.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, message } = req.body;

    // ✅ Save to DB
    const testimonial = new Testimonial({ name, message });
    await testimonial.save();

    // ✅ Send notification email
    await sendEmail(
      process.env.EMAIL_USER,
      "⭐ New Testimonial Submitted",
      `Name: ${name}\nMessage: ${message}`
    );

    res.status(200).json({ message: "Testimonial submitted successfully!" });
  } catch (err) {
    console.error("❌ Testimonial Error:", err.message);
    res.status(500).json({ error: "Failed to submit testimonial" });
  }
});

export default router;
