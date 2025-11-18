import React from "react";
import { Code, Palette, Zap, Coffee } from "lucide-react";
import myPhoto from "@/assets/sic.jpg";

const skills = [
  { name: "Java", logo: "/src/assets/java.png" },
  { name: "React", logo: "/src/assets/react.png" },
  { name: "Next.js", logo: "/src/assets/nextjs.svg" },
  { name: "Node.js", logo: "/src/assets/nodejs.png" },
  { name: "HTML5", logo: "/src/assets/html5.png" },
  { name: "CSS3", logo: "/src/assets/css3.svg" },
  { name: "Tailwind CSS", logo: "/src/assets/tailwindcss.png" },
  { name: "JavaScript", logo: "/src/assets/javascript.png" },
  { name: "TypeScript", logo: "/src/assets/typescript.svg" },
  { name: "Express.js", logo: "/src/assets/expressjs.webp" },
  { name: "Git", logo: "/src/assets/git.png" },
  { name: "GitHub", logo: "/src/assets/github.png" },
  { name: "MongoDB", logo: "/src/assets/mongodb.png" },
  { name: "Firebase", logo: "/src/assets/firebase.png" },
  { name: "Figma", logo: "/src/assets/figma.png" },
  { name: "VS Code", logo: "/src/assets/vscode.png" },
  { name: "Postman", logo: "/src/assets/postman.png" },
  { name: "IntelliJ", logo: "/src/assets/intellij.png" },
];

const highlights = [
  { icon: Code, label: "Clean Code", description: "Writing maintainable, scalable solutions" },
  { icon: Palette, label: "Design Systems", description: "Building cohesive user experiences" },
  { icon: Zap, label: "Performance", description: "Optimized for speed and efficiency" },
  { icon: Coffee, label: "Collaboration", description: "Team player and clear communicator" },
];

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 bg-gradient-to-b from-white to-[#F8FAFF]">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* Left: Image */}
          <div
            className="relative animate-fade-slide-up motion-safe:opacity-100"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute -top-8 -left-8 w-72 h-72 bg-gradient-electric opacity-20 blur-3xl rounded-full" />

              <div className="relative bg-white rounded-3xl p-8 shadow-strong">
                {/* changed: removed aspect-square and adjusted image classes so it keeps original ratio */}
                <div className="rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center overflow-hidden">
                  <img
                    src={myPhoto}
                    alt="Saurabh Chandravanshi"
                    className="max-w-full max-h-[520px] object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="space-y-8">
            <div className="animate-fade-slide-up motion-safe:opacity-100" style={{ animationDelay: "0.2s" }}>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                About <span className="text-gradient-electric">Me</span>
              </h2>
              <p className="text-lg text-muted-foreground font-body mb-2">Blending creativity with clean code.</p>
            </div>

            <div className="animate-fade-slide-up space-y-4 motion-safe:opacity-100" style={{ animationDelay: "0.3s" }}>
              <p className="text-foreground/80 font-body leading-relaxed">
                I’m a developer and designer who loves making digital experiences feel smooth, clean, and a little bit fun. I mix simple
                layouts, cool animations, and neat code to bring ideas to life—always aiming for stuff that looks great and feels even
                better to use.
              </p>
              <p className="text-foreground/80 font-body leading-relaxed">
                When I’m not coding or designing, I’m usually exploring new ideas, trying fresh tools, and adding little creative touches that
                make my work stand out.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4 animate-fade-slide-up motion-safe:opacity-100" style={{ animationDelay: "0.4s" }}>
              {highlights.map((highlight, index) => {
                const Icon = highlight.icon;
                return (
                  <div key={index} className="bg-white rounded-2xl p-4 shadow-soft hover:shadow-strong transition-all duration-200 group">
                    <Icon className="w-6 h-6 text-primary mb-2 group-hover:scale-110 transition-transform" />
                    <h3 className="font-heading font-semibold text-sm mb-1">{highlight.label}</h3>
                    <p className="text-xs text-muted-foreground font-body leading-relaxed">{highlight.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Tech Stack - Full Width Section Below About */}
        <div className="animate-fade-slide-up motion-safe:opacity-100" style={{ animationDelay: "0.5s" }}>
          <h3 className="font-heading font-semibold text-sm text-muted-foreground mb-6 uppercase tracking-wide text-center">
            Tech Stack
          </h3>

          <div className="relative overflow-hidden">
            <div className="marquee">
              <div className="marquee-track flex items-center gap-6">
                {skills.concat(skills).map((skill, index) => (
                  <div
                    key={`${skill.name}-${index}`}
                    className="flex-shrink-0 w-[140px] h-[140px] bg-white rounded-2xl shadow-soft transition-transform duration-200 flex flex-col items-center justify-center border border-border/50"
                  >
                    <div className="w-20 h-20 flex items-center justify-center">
                      <img src={skill.logo} alt={skill.name} className="max-w-full max-h-full object-contain select-none" />
                    </div>
                    <span className="mt-2 text-sm font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <style>{`
            .marquee { width: 100%; }
            .marquee-track { display: flex; align-items: center; }
            @keyframes marquee-left { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
            @media (prefers-reduced-motion: reduce) { .marquee-track { animation: none !important; } }
            .marquee-track { animation: marquee-left 22s linear infinite; }
            .marquee:hover .marquee-track, .marquee:focus-within .marquee-track { animation-play-state: paused; }
            @media (max-width: 640px) { .marquee-track { animation-duration: 14s; } }
          `}</style>
        </div>
      </div>
    </section>
  );
};

export default About;
