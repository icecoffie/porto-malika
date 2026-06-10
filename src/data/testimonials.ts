export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  image: string;
  quote: string;
  achievement: string;
  category: "job-placement" | "competition-winner" | "general-mentorship";
  date: string;
  linkedIn?: string;
}

export interface Screenshot {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
}

export const screenshots: Screenshot[] = [
  {
    id: "teaching-session-1",
    title: "Interactive Coding Session",
    description: "One-on-one React development session with real-time code review and debugging",
    image: "/screenshots/placeholder-1.webp",
    category: "Teaching Session"
  },
  {
    id: "portfolio-review",
    title: "Portfolio Review Session",
    description: "Detailed portfolio analysis and improvement recommendations for job applications",
    image: "/screenshots/placeholder-2.webp",
    category: "Portfolio Review"
  },
  {
    id: "group-workshop",
    title: "Group Workshop - System Design",
    description: "Interactive group session covering scalable architecture patterns and best practices",
    image: "/screenshots/placeholder-3.webp",
    category: "Group Workshop"
  },
  {
    id: "success-story",
    title: "Student Success Celebration",
    description: "Celebrating student achievements and career milestones in our mentorship program",
    image: "/screenshots/placeholder-4.webp",
    category: "Success Story"
  }
];

export const testimonials: Testimonial[] = [
  // Job Placement Success Stories
  {
    id: "sarah-frontend",
    name: "Sarah Chen",
    role: "Frontend Developer",
    company: "Tech Startup",
    image: "/testimonials/placeholder.webp",
    quote: "Malika's mentorship was game-changing. Her practical approach to React and modern frontend development helped me land my dream job. The portfolio review sessions were incredibly valuable!",
    achievement: "Landed Frontend Developer role with 40% salary increase",
    category: "job-placement",
    date: "2024",
    linkedIn: "#"
  },
  {
    id: "david-fullstack",
    name: "David Rodriguez",
    role: "Full Stack Developer",
    company: "Fintech Company",
    image: "/testimonials/placeholder.webp", 
    quote: "The way Malika teaches system design and architecture thinking really set me apart in interviews. Her real-world experience in building scalable applications was exactly what I needed.",
    achievement: "Secured Full Stack position at leading fintech company",
    category: "job-placement",
    date: "2024",
    linkedIn: "#"
  },
  {
    id: "maya-uiux",
    name: "Maya Patel",
    role: "UI/UX Designer",
    company: "Design Agency",
    image: "/testimonials/placeholder.webp",
    quote: "Malika's design system expertise and user-centered approach helped me transition from graphic design to UX. Her portfolio guidance was spot-on!",
    achievement: "Career transition from Graphic to UX Design",
    category: "job-placement",
    date: "2024",
    linkedIn: "#"
  },
  
  // Competition Winners
  {
    id: "alex-hackathon",
    name: "Alex Thompson",
    role: "Computer Science Student",
    company: "University",
    image: "/testimonials/placeholder.webp",
    quote: "Malika taught me advanced JavaScript patterns and system architecture. The problem-solving techniques she shared were crucial in winning the national hackathon!",
    achievement: "Won National Programming Competition 2024",
    category: "competition-winner",
    date: "2024",
    linkedIn: "#"
  },
  {
    id: "priya-designcon",
    name: "Priya Sharma",
    role: "Design Student",
    company: "Design Institute",
    image: "/testimonials/placeholder.webp",
    quote: "Her mentorship on design thinking and user research methodology helped me create award-winning designs. The feedback sessions were incredibly detailed and actionable.",
    achievement: "First Place in UI/UX Design Competition",
    category: "competition-winner",
    date: "2024",
    linkedIn: "#"
  },
  {
    id: "ryan-coding",
    name: "Ryan Kim",
    role: "Software Engineering Student",
    company: "Tech University",
    image: "/testimonials/placeholder.webp",
    quote: "The algorithmic thinking and clean code practices Malika taught me were game-changers. Won 2nd place in the regional coding olympiad thanks to her guidance!",
    achievement: "2nd Place Regional Coding Olympiad",
    category: "competition-winner",
    date: "2024",
    linkedIn: "#"
  },

  // General Mentorship Success
  {
    id: "lisa-career",
    name: "Lisa Zhang",
    role: "Junior Developer",
    company: "Software Company",
    image: "/testimonials/placeholder.webp",
    quote: "Malika's career guidance and technical mentorship helped me grow from junior to mid-level developer in just 8 months. Her practical insights are invaluable.",
    achievement: "Promoted to Mid-Level Developer",
    category: "general-mentorship",
    date: "2024",
    linkedIn: "#"
  },
  {
    id: "james-startup",
    name: "James Wilson",
    role: "Tech Entrepreneur",
    company: "Startup Founder",
    image: "/testimonials/placeholder.webp",
    quote: "Her product development and tech leadership advice was crucial in building our MVP. The architectural decisions we made together saved months of development time.",
    achievement: "Successfully launched tech startup",
    category: "general-mentorship",
    date: "2024",
    linkedIn: "#"
  },
  {
    id: "emma-freelancer",
    name: "Emma Johnson",
    role: "Freelance Designer",
    company: "Independent",
    image: "/testimonials/placeholder.webp",
    quote: "Malika helped me price my services correctly and build processes that scaled. My freelance income tripled after implementing her business strategies.",
    achievement: "Tripled freelance income in 6 months",
    category: "general-mentorship",
    date: "2024",
    linkedIn: "#"
  }
];