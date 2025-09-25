import { useEffect, useState } from "react";

export default function Vision() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setOffset(Math.min(60, y * 0.08));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="vision"
      className="py-20 text-white text-center px-6 relative overflow-hidden transition-colors bg-gradient-to-r from-secondary to-primary dark:from-gray-900 dark:to-gray-800"
    >
      <div
        className="absolute inset-0 opacity-30 animate-gradient-slow"
        style={{
          background: "linear-gradient(135deg, rgba(147,51,234,0.6), rgba(59,130,246,0.6))",
        }}
      ></div>

      <div
        className="relative max-w-5xl mx-auto"
        style={{ transform: `translateY(${offset}px)` }}
      >
        <h2
          className="text-4xl font-bold mb-6 drop-shadow-lg"
          data-aos="fade-down"
        >
          Our Vision
        </h2>
        <p
          className="text-lg md:text-xl opacity-95 leading-relaxed mb-8 drop-shadow"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          At <span className="font-semibold">Elevare</span>, we envision a future where every student embarks on their
          career journey with clarity, confidence, and purpose.
          <br /><br />
          By bridging the gap between education and industry, and empowering students with AI-driven tools and mentorship,
          we aim to transform confusion into clarity, and fear into excitement.
        </p>
        <blockquote
          className="italic text-xl font-light opacity-90 drop-shadow-md"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          "What if every student could choose their future with clarity and confidence?"
        </blockquote>
      </div>
    </section>
  );
}
