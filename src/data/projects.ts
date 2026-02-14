export interface Project {
  title: string;
  category: string;
  year: string;
  tech: string[];
  url?: string;
}

export const projects: Project[] = [
{
    title: "Urban Loft",
    category: "BRANDING",
    year: "2023",
    tech: ["ASTRO", "FIGMA"],
    url: "https://urban-loft.vercel.app/",
  },
{
    title: "Bar Caracalla",
    category: "EXPERIMENT",
    year: "2024",
    tech: ["ASTRO", "GLSL"],
    url: "https://barcaracalla.com/",
  },
{
    title: "Fernando Feijoo",
    category: "INTERACTIVE",
    year: "2025",
    tech: ["ASTRO", "WEBGL", "GSAP"],
    url: "https://fernando-feijoo.vercel.app/",
  },
{
    title: "Asercord Energía",
    category: "CORPORATE",
    year: "2024",
    tech: ["ASTRO", "TAILWIND", "NODE.JS"],
    url: "https://asercordenergia.netlify.app/",
  },
{
    title: "Wanda Animalart",
    category: "PLATFORM",
    year: "2024",
    tech: ["ASTRO"],
    url: "https://www.wanda-animalart.com/",
  },
];
