export interface Award {
  id: string;
  title: string;
  image: string;
  description: string;
  link: string;
  date?: string;
  issuer?: string;
}

export const awards: Award[] = [
  {
    id: "national-sains-olympiad",
    title: "Top 1 - National Sains Olympiad (Informatics)",
    image: "/awards.webp",
    description: "Highest award in the National Science Olympiad for Informatics category, demonstrating excellence in programming and problem-solving skills.",
    link: "https://www.linkedin.com/in/malikashkl/details/featured/1635550991999/single-media-viewer/?profileId=ACoAAD0wJn4BNShVktM_5xYO90hGobMjWQKvfw0",
    date: "2023",
    issuer: "Ministry of Education",
  },
  {
    id: "best-design-structure",
    title: "Top 1 - Best Design Structure For Web App",
    image: "/awards.webp",
    description: "Recognition for outstanding web app design structure, acknowledging expertise in frontend architecture and user experience design.",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7365386417952215040/",
    date: "2024",
    issuer: "Tech Competition",
  },
  {
    id: "best-mentor-tech",
    title: "Best Mentor Tech",
    image: "/awards.webp",
    description: "Award for excellence as a technology mentor, demonstrating dedication in guiding and developing young talent in the tech industry.",
    link: "https://www.instagram.com/p/DJzHz98PCEH/?img_index=1",
    date: "2024",
    issuer: "Tech Community",
  },
  {
    id: "design-system-excellence",
    title: "Design System Excellence",
    image: "/awards.webp",
    description: "Recognition for excellence in creating consistent and scalable design systems for modern web applications.",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7364174726551793665/",
    date: "2024",
    issuer: "Design Awards",
  },
  {
    id: "coding-challenge-top2",
    title: "Top 2 - Coding Challenge Faculty of Computer Science",
    image: "/awards.webp",
    description: "Second place award in faculty-level coding competition, demonstrating strong algorithmic skills and implementation capabilities.",
    link: "https://www.instagram.com/p/DBXg9ptzvJg/?img_index=2",
    date: "2023",
    issuer: "Faculty of Computer Science",
  },
  {
    id: "game-developer-top2",
    title: "Top 2 - Game Developer for a Web App",
    image: "/awards.webp",
    description: "Second place award for web game development, showcasing creativity and technical skills in game development.",
    link: "https://www.linkedin.com/in/malikashkl/overlay/1731311114920/single-media-viewer/?profileId=ACoAAD0wJn4BNShVktM_5xYO90hGobMjWQKvfw0",
    date: "2023",
    issuer: "Game Dev Competition",
  },
  {
    id: "best-web-portfolio",
    title: "Best Web Portfolio with Three JS",
    image: "/awards.webp",
    description: "Award for best web portfolio using Three.js, demonstrating expertise in 3D graphics and creative web design.",
    link: "https://malikashkl.vercel.app",
    date: "2023",
    issuer: "Portfolio Awards",
  },
  {
    id: "most-innovative-ai",
    title: "Most Innovative Web App AI",
    image: "/awards.webp",
    description: "Recognition for the most innovative AI web application, acknowledging contributions in integrating AI technology into web applications.",
    link: "https://orbix.msync.my.id",
    date: "2024",
    issuer: "AI Innovation Awards",
  },
  {
    id: "youngest-it-expert",
    title: "Youngest IT Expert",
    image: "/awards.webp",
    description: "Award recognizing outstanding achievements in information technology at a young age, demonstrating exceptional expertise and innovation.",
    link: "https://testy.msync.my.id",
    date: "2024",
    issuer: "IT Excellence Awards",
  },
  {
    id: "best-intern",
    title: "Best Intern",
    image: "/awards.webp",
    description: "Award for best intern, demonstrating dedication, hard work, and significant contributions during the internship program.",
    link: "https://www.linkedin.com/in/malikashkl/details/experience/2417799819/multiple-media-viewer/?profileId=ACoAAD0wJn4BNShVktM_5xYO90hGobMjWQKvfw0&treasuryMediaId=1729999980210",
    date: "2023",
    issuer: "Company",
  },
];
