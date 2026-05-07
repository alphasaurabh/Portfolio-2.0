import { Briefcase, ExternalLink } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  description: string;
  year: string;
  detailUrl: string;
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    title: "Cloud Computing Co-Lead ",
    company: "Microsoft Learn Student Ambassadors (MLSA), Gautam Budhha University",
    description: "As the Cloud Computing Co-Lead at MLSA, I organized and guided cloud-focused learning initiatives for the student community. I collaborated with the core team to plan workshops, hands-on sessions, and knowledge-sharing events centered around Azure and modern cloud technologies. My role involved mentoring peers, preparing learning resources, and helping students get started with practical cloud skills.",
    year: "Oct 2024- Aug 2025",
    detailUrl: "#experience-detail-1"
  },
  {
    id: 2,
    title: "Graphic Designer",
    company: "Google Developer Student Clubs (GDSC), Gautam Budhha University",
    description: "Worked as a Graphic Designer at GDSC, creating visual assets for events, workshops, social media announcements, and community branding. Collaborated with the core team to deliver clean, engaging designs that aligned with GDSC’s visual identity and event themes.",
    year: "Oct 2024- Aug 2025",
    detailUrl: "#experience-detail-2"
  },
  {
    id: 3,
    title: "Contributer",
    company: "GirlScript Summer of Code (GSSoC)",
    description: "Contributed to open-source projects as part of the GirlScript Summer of Code program. Worked collaboratively with maintainers, submitted pull requests, resolved issues, and improved code quality. Gained hands-on experience in Git, GitHub workflows, code reviews, and real-world development practices.",
    year: "Sep 2024 - Dec 2024",
    detailUrl: "#experience-detail-3"
  },
  {
    id: 4,
    title: "AI Summer Trainee",
    company: "Samsung Innovation Campus",
    description: "During my summer training at SIC, I completed their Artificial Intelligence program, where I learned the core foundations of AI and applied them through hands-on projects. The training covered essential concepts such as machine learning, deep learning, neural networks, and real-world AI applications. I worked on practical exercises, implemented algorithms, and gained exposure to industry-relevant tools used in modern AI workflows.",
    year: " Jun 2024 - Sep 2024",
    detailUrl: "#experience-detail-4"
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-slide-up" style={{ animationDelay: "0.1s", opacity: 0 }}>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            <span className="text-gradient-electric">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
            My professional journey building impactful digital products
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-6 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <a
              key={exp.id}
              href={exp.detailUrl}
              className="block group animate-fade-slide-up"
              style={{ animationDelay: `${0.2 + index * 0.1}s`, opacity: 0 }}
            >
              <Card className="transition-all duration-300 hover:shadow-strong hover:scale-[1.02] cursor-pointer border-2 hover:border-primary/20">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4 flex-1">
                      <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                        <Briefcase className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-1 group-hover:text-primary transition-colors">
                          {exp.title}
                        </CardTitle>
                        <CardDescription className="text-base font-medium text-foreground/70">
                          {exp.company}
                        </CardDescription>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground font-medium shrink-0">
                      <span>{exp.year}</span>
                      <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80 font-body leading-relaxed">
                    {exp.description}
                  </p>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
