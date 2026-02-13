export interface Experiment {
  title: string;
  type: string;
  date: string;
  status: "LIVE" | "WIP" | "ARCHIVED";
}

export const experiments: Experiment[] = [
  { title: "GLITCH MANIFESTO", type: "VISUAL", date: "2025.02", status: "LIVE" },
  { title: "NOISE FIELD #47", type: "GENERATIVE", date: "2025.01", status: "WIP" },
  { title: "BROKEN GRID", type: "LAYOUT", date: "2024.12", status: "ARCHIVED" },
  { title: "PIXEL DECAY", type: "SHADER", date: "2024.11", status: "LIVE" },
  { title: "TYPE DESTROYER", type: "TYPOGRAPHY", date: "2024.10", status: "WIP" },
  { title: "RAW INPUT", type: "INTERACTIVE", date: "2024.09", status: "LIVE" },
];
