export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-gray-900 dark:bg-black text-gray-300 py-10 px-6 transition-colors"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        <div>
          <h1 className="text-2xl font-bold text-white mb-3">Elevare</h1>
          <p className="text-sm">
            Empowering students to navigate their career journeys with clarity and confidence.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#features" className="hover:text-accent transition">Features</a></li>
            <li><a href="#process" className="hover:text-accent transition">How It Works</a></li>
            <li><a href="#vision" className="hover:text-accent transition">Vision</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact Us</h3>
          <p className="text-sm">Email: support@elevare.com</p>
          <p className="text-sm">Phone: +91 98765 43210</p>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm mt-8 border-t border-gray-700 pt-6">
        © {new Date().getFullYear()} Elevare. All rights reserved.
      </div>
    </footer>
  );
}
