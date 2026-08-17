export interface Paper {
  id: string;
  title: string;
  description: string;
  authors: string[];
  journal: string;
  year: number;
  link: string;
  type: "Research" | "Academic" | "Development";
  keywords: string[];
}

export const papers: Paper[] = [
  {
    id: "paper-1",
    title: "Visual Data Exploration of Indonesian Society's Socio Economic Resources and Performance through Descriptive Analysis",
    description: "A comprehensive study on visual data exploration techniques for analyzing socio-economic resources and performance indicators of Indonesian society using descriptive analysis methods.",
    authors: ["Malika Azzahra"],
    journal: "Jurnal HST",
    year: 2024,
    link: "https://oaj.jurnalhst.com/index.php/jpim/article/view/13077",
    type: "Research",
    keywords: ["Data Visualization", "Socio-Economic Analysis", "Indonesia", "Descriptive Analysis"],
  },
  {
    id: "paper-2",
    title: "Development of a Web Based Asset Inventory Management System Using the Waterfall Method at SMK Negeri 1 Jakarta",
    description: "Development and implementation of a web-based asset inventory management system for SMK Negeri 1 Jakarta using the Waterfall software development methodology.",
    authors: ["Malika Azzahra"],
    journal: "Garuda - Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi",
    year: 2024,
    link: "https://garuda.kemdiktisaintek.go.id/documents/detail/6352554",
    type: "Academic",
    keywords: ["Web Development", "Asset Management", "Waterfall Method", "SMK Negeri 1 Jakarta"],
  },
  {
    id: "paper-3",
    title: "Analysis of Python Implementation for Inequality Calculations",
    description: "A detailed analysis of Python programming language implementation for performing inequality calculations and mathematical computations with applications in various domains.",
    authors: ["Malika Azzahra"],
    journal: "Newton - Jurnal Mahasiswa",
    year: 2024,
    link: "https://www.ojs.jurnalmahasiswa.com/index.php/newton/article/view/208",
    type: "Development",
    keywords: ["Python", "Inequality Calculations", "Programming", "Mathematical Analysis"],
  },
];
