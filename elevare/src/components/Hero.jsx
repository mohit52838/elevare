export default function Hero() {
  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center text-center relative overflow-hidden transition-colors bg-gradient-to-r from-primary to-secondary dark:from-gray-900 dark:to-gray-800"
    >
      {/* Decorative SVG left */}
      <svg
        className="absolute left-6 top-10 w-48 opacity-20 dark:opacity-30"
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <circle
          cx="60"
          cy="60"
          r="50"
          stroke="white"
          strokeOpacity="0.12"
          strokeWidth="8"
        />
        <path
          d="M30 80 C50 20, 70 20, 90 80"
          stroke="white"
          strokeOpacity="0.08"
          strokeWidth="6"
          strokeLinecap="round"
        />
      </svg>

      {/* Title */}
      <h2
        className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight drop-shadow-2xl text-white dark:text-gray-100"
        data-aos="fade-down"
      >
        Choose Your Future <br /> With{" "}
        <span className="text-accent">Clarity & Confidence</span>
      </h2>

      {/* Subtitle */}
      <p
        className="max-w-2xl text-lg md:text-xl mb-8 text-gray-100 dark:text-gray-300 opacity-95 drop-shadow"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Elevare helps students unlock their career journey through AI-powered
        guidance, skill mapping, and mentorship — making tomorrow clearer,
        brighter, and stress-free.
      </p>

      {/* Buttons */}
      <div data-aos="fade-up" data-aos-delay="400" className="space-x-4">
        <a
          href="#features"
          className="bg-accent text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md transition inline-block hover:opacity-90"
        >
          Start Your Journey
        </a>
        <a
          href="#process"
          className="bg-white text-primary px-6 py-3 rounded-lg text-lg font-semibold shadow-md transition inline-block hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700"
        >
          Learn More
        </a>
      </div>

      {/* Decorative SVG bottom-right */}
      <svg
        className="absolute right-6 bottom-10 w-40 opacity-15 dark:opacity-30"
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <rect
          x="10"
          y="10"
          width="100"
          height="100"
          stroke="white"
          strokeOpacity="0.08"
          strokeWidth="6"
          rx="12"
        />
        <path
          d="M20 90 L60 40 L100 90"
          stroke="white"
          strokeOpacity="0.06"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </section>
  );
}
