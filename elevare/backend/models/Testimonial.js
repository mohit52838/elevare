import mongoose from "mongoose";

const testimonialSchema = new mongoose.Schema({
  name: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Testimonial", testimonialSchema);
