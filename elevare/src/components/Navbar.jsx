import { useState, useEffect } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // ✅ default light unless explicitly saved as dark
  const [isDark, setIsDark] = useState(() => {
    try {
      const saved = localStorage.getItem("elevare-theme");
      return saved === "dark" ? true : false;
    } catch {
      return false;
    }
  });

  // Detect scroll
  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 30);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Sync dark mode with <html>
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) root.classList.add("dark");
    else root.classList.remove("dark");

    try {
      localStorage.setItem("elevare-theme", isDark ? "dark" : "light");
    } catch {}
  }, [isDark]);

  // Brand color based on Hero section
  const brandColor = scrolled
    ? "bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent dark:text-accent"
    : "text-white drop-shadow-lg";

  return (
    <>
      <nav
        className={`fixed w-full top-0 left-0 z-40 transition-all ${
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-md dark:bg-gray-900/80"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
          {/* Brand */}
          <div className="flex items-center gap-4">
            <h1
              className={`text-2xl font-extrabold tracking-wide ${brandColor}`}
            >
              Elevare
            </h1>
            <span
              className={`hidden sm:inline text-sm font-medium transition-all ${
                scrolled
                  ? "text-gray-800 dark:text-gray-300 drop-shadow-none"
                  : "text-white drop-shadow-sm"
              }`}
            >
              Choose your future
            </span>
          </div>

          {/* desktop links */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#home"
              className="hover:text-accent transition text-gray-800 dark:text-gray-200"
            >
              Home
            </a>
            <a
              href="#problem"
              className="hover:text-accent transition text-gray-800 dark:text-gray-200"
            >
              Problem
            </a>
            <a
              href="#features"
              className="hover:text-accent transition text-gray-800 dark:text-gray-200"
            >
              Features
            </a>
            <a
              href="#process"
              className="hover:text-accent transition text-gray-800 dark:text-gray-200"
            >
              How It Works
            </a>
            <a
              href="#testimonial"
              className="hover:text-accent transition text-gray-800 dark:text-gray-200"
            >
              Testimonials
            </a>
            <a
              href="#cta"
              className="hover:text-accent transition text-gray-800 dark:text-gray-200"
            >
              Get Started
            </a>
            <a
              href="#vision"
              className="hover:text-accent transition text-gray-800 dark:text-gray-200"
            >
              Vision
            </a>
            <a
              href="#contact"
              className="hover:text-accent transition text-gray-800 dark:text-gray-200"
            >
              Contact
            </a>

            {/* dark mode toggle */}
            <button
              onClick={() => setIsDark((prev) => !prev)}
              aria-label="Toggle theme"
              className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-gray-700" />
              )}
            </button>

            {/* CTA */}
            <a
              href="#features"
              className="hidden lg:inline-block bg-primary text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 dark:bg-accent dark:hover:bg-yellow-600 transition"
            >
              Get Started
            </a>
          </div>

          {/* mobile icons */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={() => setIsDark((prev) => !prev)}
              className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-gray-700" />
              )}
            </button>

            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* mobile slide-out */}
      <div
        className={`fixed inset-0 z-50 md:hidden pointer-events-none ${
          open ? "pointer-events-auto" : ""
        }`}
      >
        <div
          className={`fixed inset-0 bg-black/40 transition-opacity ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setOpen(false)}
        />
        <aside
          className={`fixed right-0 top-0 h-full w-72 bg-white dark:bg-gray-900 shadow-2xl transform transition-transform ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-4 flex items-center justify-between border-b border-gray-200 dark:border-gray-800">
            <h2 className={`text-xl font-bold ${brandColor}`}>Elevare</h2>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="p-6 space-y-4">
            <a
              onClick={() => setOpen(false)}
              href="#home"
              className="block text-lg font-medium text-gray-800 dark:text-gray-200"
            >
              Home
            </a>
            <a
              onClick={() => setOpen(false)}
              href="#problem"
              className="block text-lg font-medium text-gray-800 dark:text-gray-200"
            >
              Problem
            </a>
            <a
              onClick={() => setOpen(false)}
              href="#features"
              className="block text-lg font-medium text-gray-800 dark:text-gray-200"
            >
              Features
            </a>
            <a
              onClick={() => setOpen(false)}
              href="#process"
              className="block text-lg font-medium text-gray-800 dark:text-gray-200"
            >
              How It Works
            </a>
            <a
              onClick={() => setOpen(false)}
              href="#testimonial"
              className="block text-lg font-medium text-gray-800 dark:text-gray-200"
            >
              Testimonials
            </a>
            <a
              onClick={() => setOpen(false)}
              href="#cta"
              className="block text-lg font-medium text-gray-800 dark:text-gray-200"
            >
              Get Started
            </a>
            <a
              onClick={() => setOpen(false)}
              href="#vision"
              className="block text-lg font-medium text-gray-800 dark:text-gray-200"
            >
              Vision
            </a>
            <a
              onClick={() => setOpen(false)}
              href="#contact"
              className="block text-lg font-medium text-gray-800 dark:text-gray-200"
            >
              Contact
            </a>

            <a
              href="#features"
              onClick={() => setOpen(false)}
              className="inline-block mt-4 w-full text-center bg-primary text-white px-4 py-2 rounded-lg dark:bg-accent dark:hover:bg-yellow-600 transition"
            >
              Get Started
            </a>
          </nav>
        </aside>
      </div>
    </>
  );
}
