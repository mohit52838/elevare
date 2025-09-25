import mongoose from "mongoose";

const demoRequestSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  course: { type: String, default: "General" },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("DemoRequest", demoRequestSchema);
