import express from "express";
import DemoRequest from "../models/DemoRequest.js";
import { sendEmail } from "../utils/sendEmail.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, email, course } = req.body;

    // ✅ Save to DB
    const demo = new DemoRequest({ name, email, course });
    await demo.save();

    // ✅ Send notification email
    await sendEmail(
      process.env.EMAIL_USER,
      "🎓 New Demo Request",
      `Name: ${name}\nEmail: ${email}\nCourse: ${course}`
    );

    res.status(200).json({ message: "Demo request submitted successfully!" });
  } catch (err) {
    console.error("❌ Demo Request Error:", err.message);
    res.status(500).json({ error: "Failed to submit demo request" });
  }
});

export default router;
