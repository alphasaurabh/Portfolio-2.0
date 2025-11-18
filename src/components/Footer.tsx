import { Github, Instagram, Linkedin, Twitter, Code2, Heart } from "lucide-react";

const socialLinks = [
  { name: "GitHub", icon: Github, url: "https://github.com/alphasaurabh" },
  { name: "Instagram", icon: Instagram, url: "https://www.instagram.com/saurabchandrvanshi/" },
  { name: "LeetCode", icon: Code2, url: "https://leetcode.com/u/chandravanshiwashere/" },
  { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/chandravanshisaurabh/" },
  { name: "Twitter", icon: Twitter, url: "https://x.com/knowwsaurabh" },
];

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center space-y-6">

          {/* Logo/Name */}
          <div className="text-2xl font-heading font-bold">
            <span className="text-gradient-electric">Chandravanshi.</span>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-background/10 hover:bg-gradient-electric rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                  aria-label={social.name}
                  title={social.name}
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>

          {/* Copyright */}
          <div className="text-center space-y-2">
            <p className="text-sm font-body text-background/70 flex items-center gap-2 justify-center">
               © 2025 Saurabh Chandravanshi. All rights reserved.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};
