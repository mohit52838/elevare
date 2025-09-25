import { Sparkles, Brain, Users, TrendingUp, Compass } from "lucide-react";

const features = [
  {
    title: "AI-Powered Assessment",
    description: "Uncover your unique strengths, interests, and career alignments with intelligent analysis.",
    icon: <Brain className="w-10 h-10 text-primary" />,
  },
  {
    title: "Skill Recommendations",
    description: "Get real-time, personalized insights on what skills to develop for your dream career.",
    icon: <TrendingUp className="w-10 h-10 text-secondary" />,
  },
  {
    title: "Career Simulations",
    description: "Experience virtual work environments and understand industries before you commit.",
    icon: <Sparkles className="w-10 h-10 text-accent" />,
  },
  {
    title: "Mentor Connections",
    description: "Learn from industry experts and gain guidance on your professional journey.",
    icon: <Users className="w-10 h-10 text-primary" />,
  },
  {
    title: "Explore Emerging Careers",
    description: "Discover modern and unconventional paths shaped by technology and innovation.",
    icon: <Compass className="w-10 h-10 text-secondary" />,
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4" data-aos="fade-down">
          Unlock Your Future with <span className="text-primary">Elevare</span>
        </h2>
        <p
          className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          Elevare empowers students with smart tools to choose their future with clarity and confidence.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 hover:shadow-2xl transition duration-300"
              data-aos="fade-up"
              data-aos-delay={200 + index * 120}
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
