import { useEffect, useRef, useState } from "react";
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Instagram, 
  Code2,
  Database,
  FileCode,
  Terminal,
  Braces,
  Box
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface IconNode {
  id: string;
  Icon: LucideIcon;
  x: number
  y: number;
  size: number;
  animationDelay: number;
  animationDuration: number;
}

const iconNodes: IconNode[] = [
  { id: "github", Icon: Github, x: 12, y: 18, size: 28, animationDelay: 0, animationDuration: 15 },
  { id: "linkedin", Icon: Linkedin, x: 8, y: 52, size: 24, animationDelay: 1.2, animationDuration: 17 },
  { id: "twitter", Icon: Twitter, x: 15, y: 75, size: 26, animationDelay: 2.4, animationDuration: 19 },
  { id: "instagram", Icon: Instagram, x: 6, y: 35, size: 22, animationDelay: 3.6, animationDuration: 16 },
  { id: "codepen", Icon: Code2, x: 88, y: 22, size: 30, animationDelay: 1.8, animationDuration: 18 },
  { id: "stackoverflow", Icon: FileCode, x: 92, y: 45, size: 26, animationDelay: 0.6, animationDuration: 20 },
  { id: "vscode", Icon: Terminal, x: 85, y: 68, size: 28, animationDelay: 2.8, animationDuration: 17 },
  { id: "html", Icon: Braces, x: 91, y: 88, size: 24, animationDelay: 1.4, animationDuration: 19 },
  { id: "js", Icon: Box, x: 82, y: 12, size: 25, animationDelay: 3.2, animationDuration: 16 },
  { id: "db", Icon: Database, x: 10, y: 62, size: 23, animationDelay: 2.0, animationDuration: 18 },
  { id: "code", Icon: Code2, x: 18, y: 28, size: 22, animationDelay: 1.5, animationDuration: 20 },
  { id: "terminal2", Icon: Terminal, x: 88, y: 58, size: 24, animationDelay: 3.0, animationDuration: 17 },
];

export const NetworkEffect = () => {
  const [dimensions, setDimensions] = useState({ width: 1200, height: 800 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const parent = containerRef.current.parentElement;
        if (parent) {
          setDimensions({
            width: parent.offsetWidth,
            height: parent.offsetHeight,
          });
        }
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const getNodePosition = (node: IconNode) => ({
    x: (node.x / 100) * dimensions.width,
    y: (node.y / 100) * dimensions.height,
  });

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
      {/* Icon Nodes */}
      {iconNodes.map((node) => {
        const pos = getNodePosition(node);
        const Icon = node.Icon;

        return (
          <div
            key={node.id}
            className="absolute"
            style={{
              left: `${pos.x}px`,
              top: `${pos.y}px`,
              transform: "translate(-50%, -50%)",
            }}
          >
            <Icon
              className="text-black/20 motion-safe:animate-float"
              style={{
                width: `${node.size}px`,
                height: `${node.size}px`,
                animationDelay: `${node.animationDelay}s`,
                animationDuration: `${node.animationDuration}s`,
              }}
            />
          </div>
        );
      })}
    </div>
  );
};
