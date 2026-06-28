export interface Award {
  id: string;
  title: string;
  image: string;
  description: string;
  link: string;
  date?: string;
  issuer?: string;
  certificates?: string[]; 
}

export const awards: Award[] = [
  {
    id: "national-sains-olympiad",
    title: "Top 1 - National Science Olympiad (Informatics)",
    image: "/sertifikat-komputer4.webp",
    description: "Highest achievement in the National Science Olympiad for Informatics category, demonstrating excellence in programming and algorithmic problem-solving skills. Achieved 1st place nationally among thousands of participants across Indonesia.",
    link: "https://www.linkedin.com/in/malikashkl/details/featured/1635550991999/single-media-viewer/?profileId=ACoAAD0wJn4BNShVktM_5xYO90hGobMjWQKvfw0",
    date: "2023",
    issuer: "Kementerian Pendidikan dan Kebudayaan",
    certificates: [
      "/sertifikat-komputer4.webp",
      "/sertifikat-komputer2.webp", 
      "/sertifikat-komputer5.webp",
      "/sertifikat-komputer1.webp",
    ] 
  },
  {
    id: "best-design-structure",
    title: "Top 1 - Best Design Structure For Web App",
    image: "/sertifikat-bestdesign.webp",
    description: "Recognition for outstanding web app design structure, acknowledging expertise in frontend architecture and user experience design.",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7365386417952215040/",
    date: "2025",
    issuer: "Tech Competition",
  },
  {
    id: "top-global-othello",
    title: "Top 1 Global - Othello Online Game",
    image: "/sertifikat-othello.webp",
    description: "Certificate of Appreciation for achieving and maintaining the verified rank of Top Global 1 in Othello Game Online, with an unprecedented winning streak of 27 consecutive matches, defeating a field of over 2,000 competing players.",
    link: "https://testy.msync.my.id",
    date: "2022",
    issuer: "Othello League",
    certificates: ["/sertifikat-othello.webp"],
  },
  {
    id: "best-mentor-tech",
    title: "Best Mentor Tech",
    image: "/sertifikat-mentor.webp",
    description: "Award for excellence as a technology mentor, demonstrating dedication in guiding and developing young talent in the tech industry.",
    link: "https://www.instagram.com/p/DJzHz98PCEH/?img_index=1",
    date: "2024",
    issuer: "Tech Community",
  },
  {
    id: "coding-challenge-top2",
    title: "Top 2 - Coding Challenge Faculty of Computer Science",
    image: "/sertifikat-coding.webp",
    description: "Second place award in faculty-level coding competition, demonstrating strong algorithmic skills and implementation capabilities.",
    link: "https://www.instagram.com/p/DBXg9ptzvJg/?img_index=2",
    date: "2024",
    issuer: "Faculty of Computer Science",
  },
  {
    id: "hackathon-2026",
    title: "Top 2 - Hackathon 2026 \"Innovating Beyond The Code\"",
    image: "/sertifikat-hackathon.webp",
    description: "2nd Place award at Hackathon 2026 with theme \"Innovating Beyond The Code\" for building Safe Route a realtime safety navigation mobile app that routes users away from crime hotspots and sends instant SOS via WhatsApp & Telegram. Built by Team MATA: Malika, Aisyah, Tohari, and Ali.",
    link: "https://github.com/icecoffie/safe-route",
    date: "2026",
    issuer: "Himtif — Hackathon Committee",
    certificates: ["/sertifikat-hackathon.webp"],
  },
  {
    id: "javascript-mastery",
    title: "JavaScript Programming Mastery",
    image: "/sertifikat-js.webp",
    description: "Certification demonstrating advanced proficiency in JavaScript programming, including modern ES6+ features and frameworks.",
    link: "#",
    date: "2024",
    issuer: "Programming Certification Board",
  },
  {
    id: "ui-ux-profesional",
    title: "UI UX Profesional",
    image: "/sertifikat-uiuxpro.webp",
    description: "Recognition for excellence in creating consistent and scalable design systems for modern web applications.",
    link: "https://uxunicornio.com.br/",
    date: "2024",
    issuer: "Design Awards",
  },
  {
    id: "frontend-development",
    title: "Frontend Development Expert",
    image: "/sertifikat-fe1.webp",
    description: "Advanced certification in frontend development technologies, covering React, Vue, and modern web development practices.",
    link: "#",
    date: "2024",
    issuer: "Web Development Institute",
  },
  {
    id: "web-design-professional",
    title: "Professional Web Design",
    image: "/sertifikat-webdesign.webp",
    description: "Professional certification in web design principles, covering user experience, visual design, and responsive layouts.",
    link: "#",
    date: "2024",
    issuer: "Design Certification Council",
  },
  {
    id: "ui-ux-design-foundation",
    title: "UI/UX Design Foundation",
    image: "/sertifikat-uiux.webp",
    description: "Foundation certification in UI/UX design principles, user research, and design thinking methodologies.",
    link: "#",
    date: "2024",
    issuer: "UX Design Academy",
  },
  {
    id: "design-systems-advanced",
    title: "Advanced Design Systems",
    image: "/sertifikat-design.webp",
    description: "Advanced certification in creating and maintaining scalable design systems for enterprise applications.",
    link: "#",
    date: "2024",
    issuer: "Design Systems Institute",
  },
  {
    id: "technology-leadership",
    title: "Technology Leadership Excellence",
    image: "/sertifikat-tech.webp",
    description: "Recognition for exceptional leadership in technology projects and team management in software development.",
    link: "#",
    date: "2024",
    issuer: "Tech Leadership Council",
  },
];
