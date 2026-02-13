export interface Project {
  title: string;
  category: string;
  year: string;
  tech: string[];
}

export const projects: Project[] = [
  {
    title: "Urban Loft",
    category: "BRANDING",
    year: "2023",
    tech: ["FIGMA", "ASTRO"],
  },
  {
    title: "Bar Caracalla",
    category: "EXPERIMENT",
    year: "2024",
    tech: ["THREE.JS", "GLSL"],
  },
  {
    title: "Fernando Feijoo",
    category: "INTERACTIVE",
    year: "2025",
    tech: ["REACT", "WEBGL", "GSAP"],
  },
  {
    title: "Asercord Energía",
    category: "CORPORATE",
    year: "2024",
    tech: ["REACT", "TAILWIND", "NODE.JS"],
  },
  {
    title: "Wanda Animalart",
    category: "PLATFORM",
    year: "2024",
    tech: ["NEXT.JS", "SUPABASE"],
  },
];
