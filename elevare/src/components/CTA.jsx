import React, { useState } from "react";

const CTA = () => {
  const [formData, setFormData] = useState({ name: "", email: "", course: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Submitting...");

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/demo`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        setStatus("✅ Demo request submitted!");
        setFormData({ name: "", email: "", course: "" });
      } else {
        setStatus(`❌ ${data.error || "Failed to submit request"}`);
      }
    } catch (error) {
      console.error("❌ Demo Form Error:", error);
      setStatus("❌ Server error, try again later.");
    }
  };

  return (
    <section id="demo" className="py-16 bg-blue-600 text-white">
      <div className="container mx-auto px-4 max-w-lg text-center">
        <h2 className="text-3xl font-bold mb-6">Empower Your Future Today</h2>
        <form onSubmit={handleSubmit} className="space-y-4 bg-white text-gray-900 p-6 rounded-xl shadow-md">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-md"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-md"
          />
          <input
            type="text"
            name="course"
            placeholder="Course (optional)"
            value={formData.course}
            onChange={handleChange}
            className="w-full p-3 border rounded-md"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
          >
            Request Demo
          </button>
          {status && <p className="text-center mt-2 text-sm">{status}</p>}
        </form>
      </div>
    </section>
  );
};

export default CTA;
