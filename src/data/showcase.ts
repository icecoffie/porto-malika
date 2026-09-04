export interface ShowcaseItem {
  id: string;
  link: string;
  text: string;
  image: string;
  category: "Hackathon" | "Mentoring" | "Teaching" | "Competition" | "Project" | "Workshop" | "Event";
  description: string;
  date?: string;
}

export const showcaseItems: ShowcaseItem[] = [
  {
    id: "saferoute2",
    link: "/showcase/saferoute2",
    text: "Team MATA at Komdigi Event",
    image: "/saferoute2.webp",
    category: "Event",
    description: "From hundreds of teams that submitted projects, only four were selected to receive a booth at the Komdigi event as part of the Techno Science Park program. Safe Route, built by Team MATA, was one of the four projects chosen to be showcased at the Garuda Sparks booth.",
  },
  {
    id: "hackathon-team",
    link: "/showcase/hackathon-team",
    text: "Hackathon Team",
    image: "/hackathon-team.webp",
    category: "Hackathon",
    description: "I competed in the Innovating Beyond the Code hackathon with Team MATA and won second place. We built Safe Route, a mobile safety navigation app that visualizes real-time risk levels, suggests safer routes, and sends an SOS with the user's location through WhatsApp and Telegram.",
  },
  {
    id: "juara2-coding",
    link: "/showcase/juara2-coding",
    text: "Faculty Coding Competition",
    image: "/juara2-coding.webp",
    category: "Competition",
    description: "I won second place in the 2024 coding competition organized by the Faculty of Computer Science.",
    date: "2024",
  },
  {
    id: "labshare",
    link: "/showcase/labshare",
    text: "Labshare E-commerce Project",
    image: "/labshare.webp",
    category: "Project",
    description: "I worked with a team to build Labshare, an e-commerce platform for the Faculty of Economics and Business, specifically for the Islamic Management department.",
  },
  {
    id: "mentor",
    link: "/showcase/mentor",
    text: "ISC Mentor Introduction",
    image: "/mentor.webp",
    category: "Mentoring",
    description: "I spoke to new ISC members and introduced myself as their UI/UX mentor, sharing how I could support their learning and growth.",
  },
  {
    id: "mentor2",
    link: "/showcase/mentor2",
    text: "Kartini Day Speaker",
    image: "/mentor2.webp",
    category: "Event",
    description: "I was invited to speak at my former school, SMKN 1 Jakarta, for Kartini Day. I shared my personal experiences to inspire younger students to pursue their ambitions.",
  },
  {
    id: "mentor3",
    link: "/showcase/mentor3",
    text: "ISC UI/UX Class",
    image: "/mentor3.webp",
    category: "Teaching",
    description: "This was a UI/UX class where I taught students the fundamentals of designing clear, useful, and user-centered digital experiences.",
  },
  {
    id: "saferoute1",
    link: "/showcase/saferoute1",
    text: "Safe Route Hackathon in Progress",
    image: "/saferoute1.webp",
    category: "Hackathon",
    description: "A behind the scenes moment from the hackathon while Team MATA was actively developing and refining Safe Route under a tight deadline.",
  },
  {
    id: "workshop",
    link: "/showcase/workshop",
    text: "Workshop Q&A",
    image: "/workshop.webp",
    category: "Workshop",
    description: "I asked the speaker a question about the seminar material during the workshop, taking the opportunity to explore the topic in greater depth.",
  },
];
