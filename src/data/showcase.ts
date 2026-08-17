export interface ShowcaseItem {
  id: string;
  link: string;
  text: string;
  image: string;
  category: "Hackathon" | "Mentoring" | "Teaching" | "Competition" | "Workshop" | "Event";
  description: string;
  date?: string;
}

export const showcaseItems: ShowcaseItem[] = [
  {
    id: "hackathon-1",
    link: "#",
    text: "Hackathon 2026",
    image: "/showcase/hackathon-1.svg",
    category: "Hackathon",
    description: "Participated in Hackathon 2026 'Innovating Beyond The Code' and won 2nd place with SafeRoute project.",
    date: "2026",
  },
  {
    id: "mentoring-1",
    link: "#",
    text: "Mentoring Session",
    image: "/showcase/mentoring-1.svg",
    category: "Mentoring",
    description: "Guiding students through their learning journey in web development and UI/UX design.",
    date: "2026",
  },
  {
    id: "teaching-1",
    link: "#",
    text: "Teaching at Skale Academy",
    image: "/showcase/teaching-1.svg",
    category: "Teaching",
    description: "Teaching web technologies and modern development practices at Skale Academy.",
    date: "2026",
  },
  {
    id: "workshop-1",
    link: "#",
    text: "Tech Workshop",
    image: "/showcase/workshop-1.svg",
    category: "Workshop",
    description: "Conducting technical workshop on web development best practices.",
    date: "2026",
  },
  {
    id: "event-1",
    link: "#",
    text: "Tech Community Event",
    image: "/showcase/event-1.svg",
    category: "Event",
    description: "Speaking at a tech community event sharing insights on modern web development.",
    date: "2026",
  },
  {
    id: "competition-1",
    link: "#",
    text: "Tech Competition",
    image: "/showcase/competition-1.svg",
    category: "Competition",
    description: "Competing in regional tech competition and networking with peers.",
    date: "2025",
  },
];
