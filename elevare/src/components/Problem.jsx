export default function Problem() {
  const problems = [
    "Overwhelmed by Options",
    "Lack of Personalized Guidance",
    "Education-Industry Gap",
    "Mental Health Impact",
  ];

  return (
    <section
      className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors"
      id="problem"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2
          className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4 drop-shadow-lg"
          data-aos="fade-down"
        >
          The Modern Student's Dilemma
        </h2>
        <p
          className="text-gray-600 dark:text-gray-300 mb-12 text-lg md:text-xl"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          Students today face overwhelming options and uncertainty, often without
          personalized guidance, leading to stress and anxiety.
        </p>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {problems.map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 hover:shadow-2xl transition duration-300 hover:scale-105"
              data-aos="fade-up"
              data-aos-delay={100 + index * 100}
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                {item}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
