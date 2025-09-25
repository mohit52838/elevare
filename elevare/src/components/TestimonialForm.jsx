import React, { useState } from "react";

const TestimonialForm = () => {
  const [formData, setFormData] = useState({ name: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Submitting...");

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/testimonial`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        setStatus("✅ Testimonial submitted!");
        setFormData({ name: "", message: "" });
      } else {
        setStatus(`❌ ${data.error || "Failed to submit testimonial"}`);
      }
    } catch (error) {
      console.error("❌ Testimonial Error:", error);
      setStatus("❌ Server error, try again later.");
    }
  };

  return (
    <section id="testimonial" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 max-w-lg">
        <h2 className="text-3xl font-bold text-center mb-6">Share Your Experience</h2>
        <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-xl shadow-md">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-md"
          />
          <textarea
            name="message"
            placeholder="Your Testimonial"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            className="w-full p-3 border rounded-md"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
          >
            Submit Testimonial
          </button>
          {status && <p className="text-center mt-2 text-sm">{status}</p>}
        </form>
      </div>
    </section>
  );
};

export default TestimonialForm;
