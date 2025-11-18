import { Github, Instagram, Linkedin, Twitter, Code2 } from "lucide-react";
import { useState } from "react";

const socialLinks = [
  { name: "GitHub", icon: Github, url: "https://github.com/alphasaurabh" },
  { name: "Instagram", icon: Instagram, url: "https://www.instagram.com/saurabchandrvanshi/" },
  { name: "LeetCode", icon: Code2, url: "https://leetcode.com/u/chandravanshiwashere/" },
  { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/chandravanshisaurabh/" },
  { name: "Twitter", icon: Twitter, url: "https://x.com/knowwsaurabh" },
];

export const FloatingSocials = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="fixed left-8 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-4">
      {socialLinks.map((social, index) => {
        const Icon = social.icon;
        const isHovered = hoveredIndex === index;
        
        return (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            aria-label={social.name}
            title={social.name}
          >
            <div
              className={`
                flex items-center gap-3 bg-white rounded-full shadow-soft border border-border/50
                transition-all duration-200 ease-out
                hover:shadow-strong hover:border-transparent
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2
                ${isHovered ? 'w-36 bg-gradient-electric' : 'w-10 h-10'}
              `}
              style={{
                height: '40px',
                boxShadow: isHovered ? '0 0 24px rgba(0, 207, 255, 0.3), 0 0 48px rgba(255, 98, 192, 0.2)' : undefined,
              }}
            >
              <div className="flex items-center justify-center w-10 h-10 flex-shrink-0">
                <Icon
                  className={`w-5 h-5 transition-colors duration-200 ${
                    isHovered ? 'text-white' : 'text-foreground'
                  }`}
                />
              </div>
              {isHovered && (
                <span className="text-white font-body font-medium text-sm pr-4 whitespace-nowrap">
                  {social.name}
                </span>
              )}
            </div>
          </a>
        );
      })}
    </div>
  );
};
