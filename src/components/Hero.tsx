import { Button } from "@/components/ui/button";
import pfp_saurabh from "@/assets/pfp_saurabh.jpg";
import { ArrowRight, Code, Sparkles, Figma, Terminal, Mouse, Pen, Circle, Triangle } from "lucide-react";
import { NetworkEffect } from "@/components/NetworkEffect";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-0 px-6"
    >
      {/* Network Effect - Icons with connecting lines */}
      <NetworkEffect />

      {/* Floating Micro Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Figma
          className="absolute top-[15%] left-[8%] w-5 h-5 text-primary/12 animate-float"
          style={{ animationDelay: "0s", transform: 'rotate(3deg)' }}
        />
        <Code
          className="absolute top-[25%] right-[12%] w-6 h-6 text-secondary/15 animate-float"
          style={{ animationDelay: "1.2s", transform: 'rotate(-4deg)' }}
        />
        <Pen
          className="absolute top-[60%] left-[15%] w-5 h-5 text-primary/10 animate-float"
          style={{ animationDelay: "2s", transform: 'rotate(5deg)' }}
        />
        <Mouse
          className="absolute bottom-[30%] right-[18%] w-5 h-5 text-secondary/12 animate-float"
          style={{ animationDelay: "0.8s", transform: 'rotate(-3deg)' }}
        />
        <Sparkles
          className="absolute top-[40%] right-[8%] w-4 h-4 text-primary/15 animate-float"
          style={{ animationDelay: "1.5s", transform: 'rotate(2deg)' }}
        />
        <Circle
          className="absolute top-[70%] left-[25%] w-4 h-4 text-secondary/8 animate-float"
          style={{ animationDelay: "2.5s", transform: 'rotate(-6deg)' }}
        />
        <Triangle
          className="absolute top-[35%] left-[5%] w-5 h-5 text-primary/10 animate-float"
          style={{ animationDelay: "1.8s", transform: 'rotate(4deg)' }}
        />
        <Terminal
          className="absolute bottom-[25%] left-[22%] w-5 h-5 text-secondary/12 animate-float"
          style={{ animationDelay: "0.5s", transform: 'rotate(-2deg)' }}
        />
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/20 rounded-full animate-float opacity-0"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 2}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto max-w-6xl relative z-[2]">
        <div className="flex flex-col items-center text-center">
          {/* Microline Hello */}
          <div
            className="inline-flex items-center gap-2 mb-6 animate-fade-slide-up"
            style={{ animationDelay: "0.1s", opacity: 0 }}
          >
            <span className="text-4xl">👋</span>
            <span className="text-sm font-body font-medium text-muted-foreground">
              Hello!
            </span>
          </div>

          {/* Main Headline */}
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 max-w-4xl leading-tight animate-fade-slide-up"
            style={{ animationDelay: "0.2s", opacity: 0 }}
          >
            I'm{" "}
            <span className="text-gradient-electric">Saurabh</span>,{" "}
            <br className="hidden sm:block" />
            Software Developer & UI/UX Designer.
          </h1>

          {/* Portrait with Semicircle Background */}
          <div
            className="relative my-8 md:my-12 animate-fade-slide-up"
            style={{ animationDelay: "0.3s", opacity: 0 }}
          >
            {/* Large Semicircle Gradient Background with Enhanced Glow */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] md:w-[520px] md:h-[520px] rounded-full bg-gradient-electric opacity-90 glow-electric animate-glow-pulse -z-10" />
            {/* Additional Soft Pastel Glow Layer */}
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] md:w-[600px] md:h-[600px] rounded-full opacity-20 blur-[60px] -z-20"
              style={{
                background: 'radial-gradient(circle, #B0E0E6 0%, #DDA0DD 100%)'
              }}
            />

            {/* Portrait */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden ring-8 ring-white shadow-strong hover:scale-105 transition-transform duration-500">
              <img
                src={pfp_saurabh}
                alt="Saurabh Chandravanshi - Software Developer & UI/UX Designer"
                className="w-full h-full object-cover"
              />

            </div>

            {/* Achievement Badge - Right */}
            <div className="absolute -right-8 top-8 md:-right-20 md:top-12 bg-white rounded-2xl px-4 py-3 shadow-strong animate-fade-slide-up hidden sm:block" style={{ animationDelay: "0.5s", opacity: 0 }}>
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">
                      ⭐
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-2xl font-heading font-bold mt-1">4+ Projects</p>
              <p className="text-xs text-muted-foreground font-body">
                Built & Deployed
              </p>
            </div>

            {/* Testimonial Quote - Left */}
            <div className="absolute -left-8 bottom-12 md:-left-24 md:bottom-16 bg-white rounded-2xl p-4 shadow-strong max-w-[200px] animate-fade-slide-up hidden lg:block" style={{ animationDelay: "0.6s", opacity: 0 }}>
              <div className="text-primary text-3xl mb-1">"</div>
              <p className="text-xs font-body text-foreground/80 leading-relaxed">
                Passionate about crafting fast, beautiful interfaces with modern tech. I blend elegant UI with solid engineering.
              </p>
            </div>
          </div>

          {/* Subheading */}
          <p
            className="text-lg md:text-xl font-body text-muted-foreground max-w-2xl mb-10 leading-relaxed animate-fade-slide-up"
            style={{ animationDelay: "0.4s", opacity: 0 }}
          >
            I build beautiful, performant products by merging elegant code with
            thoughtful design.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row items-center gap-4 mb-16 animate-fade-slide-up"
            style={{ animationDelay: "0.5s", opacity: 0 }}
          >
            <Button
              asChild
              size="lg"
              className="bg-gradient-electric text-white shadow-strong hover:shadow-strong hover:scale-104 transition-all duration-200 font-body font-semibold px-8 rounded-full group"
            >
              <a href="#projects">
                View My Work
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white shadow-soft hover:shadow-strong transition-all duration-200 font-body font-semibold px-8 rounded-full"
            >
              <a href="https://drive.google.com/file/d/1BwI3C0iXosMEn-LG9_J-7DEhOhQA0Za0/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                Download CV
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0,64 C240,90 480,100 720,85 C960,70 1200,45 1440,64 L1440,120 L0,120 Z"
            fill="hsl(var(--background))"
            fillOpacity="0.8"
          />
          <path
            d="M0,80 C320,100 640,110 960,95 C1120,87.5 1280,75 1440,85 L1440,120 L0,120 Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};
