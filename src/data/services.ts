export interface Service {
  title: string;
  description: string;
  icon: string;
}

export const services: Service[] = [
  {
    title: "WEB DEVELOPMENT",
    description: "Full-stack applications, SPAs, performance-critical systems",
    icon: "→",
  },
  {
    title: "UI/UX ENGINEERING",
    description: "Design systems, component libraries, interaction design",
    icon: "◈",
  },
  {
    title: "CREATIVE CODING",
    description: "Generative art, WebGL experiments, data visualization",
    icon: "◉",
  },
  {
    title: "TECHNICAL DIRECTION",
    description: "Architecture consulting, code reviews, team mentoring",
    icon: "▣",
  },
];
