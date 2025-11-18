import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { FloatingSocials } from "@/components/FloatingSocials";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { GlobalBackground } from "@/components/GlobalBackground";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <GlobalBackground />
      <Navigation />
      <FloatingSocials />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
