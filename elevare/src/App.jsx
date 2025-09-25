import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Process from "./components/Process";
import Problem from "./components/Problem";
import TestimonialForm from "./components/TestimonialForm";
import CTA from "./components/CTA";
import Vision from "./components/Vision";
import Footer from "./components/Footer";
import StickyCTA from "./components/StickyCTA";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <div className="font-sans scroll-smooth">
      <Navbar />

      {/* Sections with IDs to match Navbar links */}
      <section id="home">
        <Hero />
      </section>

      <section id="problem">
        <Problem />
      </section>

      <section id="features">
        <Features />
      </section>

      <section id="process">
        <Process />
      </section>

      <section id="testimonial">
        {/* Testimonial Form integrated */}
        <TestimonialForm />
      </section>

      <section id="cta">
        <CTA />
      </section>

      <section id="vision">
        <Vision />
      </section>

      <section id="contact">
        <ContactForm />
      </section>

      <Footer />
      <StickyCTA />
    </div>
  );
}

export default App;
