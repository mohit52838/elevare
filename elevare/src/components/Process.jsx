import { CheckCircle, ListChecks, GraduationCap, TrendingUp } from "lucide-react";

const steps = [
  {
    title: "Personalized Assessment",
    description: "Complete an in-depth personality and interest assessment to uncover strengths.",
    icon: <CheckCircle className="w-10 h-10 text-primary" />,
  },
  {
    title: "Tailored Career Suggestions",
    description: "AI generates career paths aligned with your skills, values, and market trends.",
    icon: <ListChecks className="w-10 h-10 text-secondary" />,
  },
  {
    title: "Guided Skill Development",
    description: "Access learning paths and connect with mentors to grow in the right direction.",
    icon: <GraduationCap className="w-10 h-10 text-accent" />,
  },
  {
    title: "Progress & Evolution",
    description: "Track growth, refine your plan, and adapt as your aspirations evolve.",
    icon: <TrendingUp className="w-10 h-10 text-primary" />,
  },
];

export default function Process() {
  return (
    <section id="process" className="py-20 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2
          className="text-4xl font-bold text-gray-800 dark:text-white mb-4"
          data-aos="fade-down"
        >
          How <span className="text-primary">Elevare</span> Works
        </h2>
        <p
          className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          A simple yet powerful 4-step journey designed to help students move from confusion to clarity.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-xl transform hover:scale-105 transition duration-500"
              data-aos="fade-up"
              data-aos-delay={200 + index * 180}
            >
              <div className="flex justify-center mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{step.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
