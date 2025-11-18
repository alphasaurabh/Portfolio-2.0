import { useState } from "react";
import { ExternalLink, Github, ChevronRight, Dice1 } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import a1 from "@/assets/projects/a1.png";
import a2 from "@/assets/projects/a2.png";
import a3 from "@/assets/projects/a3.png";
import a4 from "@/assets/projects/a4.png";
import a5 from "@/assets/projects/a5.png";
import b1 from "@/assets/projects/b1.png";
import c1 from "@/assets/projects/c1.png";
import d1 from "@/assets/projects/d1.png";

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  thumbnail: string;
  featured?: boolean;
  caseStudy?: {
    heroImage: string;
    problem: string;
    role: string;
    tools: string[];
    duration: string;
    highlights: string[];
    metrics?: string[];
    gallery: string[];
  };
  liveUrl?: string;
  repoUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Online Learning & Education Platform",
    description:
      "A responsive landing page designed for an online learning platform brand.",
    tags: ["React", "TypeScript", "Tailwind"],
    thumbnail: a1,
    featured: true,
    caseStudy: {
      heroImage: a1,
      problem:
        "It delivers a polished front-end experience for introducing an online learning brand.",
      role: " Frontend Developer & UI Designer",
      tools: ["React", "TypeScript", "Tailwind CSS"],
      duration: "2 months",
      highlights: [
        "Built a modern and responsive landing page for an education platform",
        "Designed a clean UI with smooth animations and interactions",
        "Implemented modular and reusable React components",
        "Deployed the front-end on Vercel for fast and reliable performance",

      ],
      metrics: ["Built and Deployed"],
      gallery: [a2, a3, a4, a5],
    },
    liveUrl: "https://acadify-mu.vercel.app/",
  },
   {
    id: 2,
    title: "ShortenX",
    description: "A modern, full-stack URL shortener and QR code generator built with Next.js 14 and MongoDB, featuring real-time click tracking and instant redirects.",
    tags: ["HTML", "CSS", "JavaScript" , "MongoDB" , "Postman" , "API"],
    thumbnail: d1,
    liveUrl: "https://github.com/alphasaurabh/ShortenX"
  },
  {
    id: 3,
    title: "Portfolio 1.0",
    description: "Developed a beginner portfolio site using HTML, CSS, and JavaScript to display my projects and practice front-end fundamentals.",
    tags: ["HTML", "CSS", "JavaScript"],
    thumbnail: c1,
    liveUrl: "https://github.com/alphasaurabh/Portfolio-1.0"
  },
  {
    id: 4,
    title: "Netflix Clone",
    description: "Built a basic Netflix-style UI using only HTML & CSS to practice layout and responsive design.",
    tags: ["HTML", "CSS", "UI"],
    thumbnail: b1,
    liveUrl: "https://github.com/alphasaurabh/Netflix-Clone"
  },
];

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: Project) => {
    if (project.caseStudy) {
      setSelectedProject(project);
      setIsModalOpen(true);
    } else if (project.liveUrl) {
      window.open(project.liveUrl, "_blank");
    }
  };

  const featuredProject = projects.find(p => p.featured);
  const regularProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-24 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-slide-up" style={{ animationDelay: "0.1s", opacity: 0 }}>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Featured <span className="text-gradient-electric">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
            Some of my recent design & development work.
          </p>
        </div>

        {/* Featured Project */}
        {featuredProject && (
          <div
            className="mb-12 animate-fade-slide-up cursor-pointer"
            style={{ animationDelay: "0.2s", opacity: 0 }}
            onClick={() => handleProjectClick(featuredProject)}
            onKeyDown={(e) => e.key === "Enter" && handleProjectClick(featuredProject)}
            tabIndex={0}
            role="button"
            aria-label={`Open ${featuredProject.title}`}
          >
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-8 md:p-12 shadow-soft hover:shadow-strong transition-all duration-300 group border border-border/50 hover:border-transparent">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="aspect-video bg-white rounded-2xl flex items-center justify-center overflow-hidden shadow-soft group-hover:scale-[1.02] transition-transform">
                  {/* Render image properly */}
                  {typeof featuredProject.thumbnail === "string" && featuredProject.thumbnail.endsWith(".png") ? (
                    <img
                      src={featuredProject.thumbnail}
                      alt={`${featuredProject.title} thumbnail`}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-6xl">{featuredProject.thumbnail}</span>
                  )}
                </div>
                <div className="space-y-4">
                  <div className="inline-block px-3 py-1 bg-gradient-electric text-white text-xs font-semibold rounded-full mb-2">
                    FEATURED
                  </div>
                  <h3 className="text-3xl font-heading font-bold group-hover:text-gradient-electric transition-all">
                    {featuredProject.title}
                  </h3>
                  <p className="text-foreground/70 font-body leading-relaxed">
                    {featuredProject.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {featuredProject.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-white rounded-full text-xs font-body font-medium shadow-soft"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-primary font-body font-semibold group-hover:gap-3 transition-all">
                    View Case Study
                    <ChevronRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regularProjects.map((project, index) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-strong transition-all duration-300 group cursor-pointer border border-border/50 hover:border-primary/30 animate-fade-slide-up"
              style={{ animationDelay: `${0.3 + index * 0.1}s`, opacity: 0 }}
              onClick={() => handleProjectClick(project)}
              onKeyDown={(e) => e.key === "Enter" && handleProjectClick(project)}
              tabIndex={0}
              role="button"
              aria-label={`Open ${project.title}`}
            >
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform">
                {/* Render thumbnail or emoji */}
                {typeof project.thumbnail === "string" && project.thumbnail.endsWith(".png") ? (
                  <img src={project.thumbnail} alt={`${project.title} thumbnail`} className="w-full h-full object-cover" />
                ) : (
                  <span className="text-6xl">{project.thumbnail}</span>
                )}
              </div>
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-heading font-bold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-muted rounded-full text-xs font-body"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-2 text-primary font-body text-sm font-medium pt-2">
                  {project.caseStudy ? "View Case Study" : "View Project"}
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedProject?.caseStudy && (
            <div className="space-y-6">
              <DialogHeader>
                <DialogTitle className="text-3xl font-heading font-bold">
                  {selectedProject.title}
                </DialogTitle>
              </DialogHeader>

              {/* Hero Image */}
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center overflow-hidden">
                {typeof selectedProject.caseStudy.heroImage === "string" &&
                  selectedProject.caseStudy.heroImage.endsWith(".png") ? (
                  <img
                    src={selectedProject.caseStudy.heroImage}
                    alt={`${selectedProject.title} hero`}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                ) : (
                  <span className="text-9xl">{selectedProject.caseStudy.heroImage}</span>
                )}
              </div>

              {/* Project Info Grid */}
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-muted rounded-xl p-4">
                  <h4 className="font-heading font-semibold text-sm mb-1 text-muted-foreground">Role</h4>
                  <p className="font-body text-sm">{selectedProject.caseStudy.role}</p>
                </div>
                <div className="bg-muted rounded-xl p-4">
                  <h4 className="font-heading font-semibold text-sm mb-1 text-muted-foreground">Duration</h4>
                  <p className="font-body text-sm">{selectedProject.caseStudy.duration}</p>
                </div>
                <div className="bg-muted rounded-xl p-4">
                  <h4 className="font-heading font-semibold text-sm mb-1 text-muted-foreground">Tools</h4>
                  <p className="font-body text-sm">{selectedProject.caseStudy.tools.join(", ")}</p>
                </div>
              </div>

              {/* Problem */}
              <div>
                <h3 className="font-heading font-bold text-xl mb-3">The Challenge</h3>
                <p className="font-body text-foreground/80 leading-relaxed">
                  {selectedProject.caseStudy.problem}
                </p>
              </div>

              {/* Highlights */}
              <div>
                <h3 className="font-heading font-bold text-xl mb-3">Key Highlights</h3>
                <ul className="space-y-2">
                  {selectedProject.caseStudy.highlights.map((highlight, index) => (
                    <li key={index} className="flex gap-3 font-body text-foreground/80">
                      <span className="text-primary font-bold">✓</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Metrics */}
              {selectedProject.caseStudy.metrics && (
                <div className="flex gap-4 justify-center py-6">
                  {selectedProject.caseStudy.metrics.map((metric, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl font-heading font-bold text-gradient-electric">
                        {metric}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Gallery */}
              <div>
                <h3 className="font-heading font-bold text-xl mb-3">Gallery</h3>
                <div className="grid grid-cols-2 gap-4">
                  {selectedProject.caseStudy.gallery.map((image, index) => (
                    <div
                      key={index}
                      className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl flex items-center justify-center overflow-hidden"
                    >
                      {typeof image === "string" && image.endsWith(".png") ? (
                        <img src={image} alt={`${selectedProject.title} gallery ${index + 1}`} className="w-full h-full object-cover rounded-xl" />
                      ) : (
                        <span className="text-6xl">{image}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 pt-4">
                {selectedProject.liveUrl && (
                  <Button
                    size="lg"
                    className="flex-1 bg-gradient-electric text-white shadow-strong hover:shadow-strong hover:scale-104 transition-all"
                    onClick={() => window.open(selectedProject.liveUrl, "_blank")}
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Open Live Demo
                  </Button>
                )}
                {selectedProject.repoUrl && (
                  <Button
                    size="lg"
                    variant="outline"
                    className="flex-1 border-2 border-primary text-primary hover:bg-primary hover:text-white"
                    onClick={() => window.open(selectedProject.repoUrl, "_blank")}
                  >
                    <Github className="w-5 h-5 mr-2" />
                    View Code
                  </Button>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};
