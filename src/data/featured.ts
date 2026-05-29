export interface HighlightProject {
  id: string;
  title: string;
  image: string;
  link: string;
  preview: string;
  status: string;
  tier: "S" | "A";
  tagline: string;
  description: string;
  
  // Why-How-What Circle
  why: string;
  how: string;
  what: string;
  
  impact: string;
  techStack: string[];
  features: string[];
  
  // Case Study Details
  problem: string;
  solution: string;
  results: {
    metric: string;
    value: string;
  }[];
  timeline: string;
  role: string;
  challenges: string[];
  learnings: string[];
}

export const highlightProjects: HighlightProject[] = [
  {
    id: "skale-orbit",
    title: "SkaleOrbit",
    image: "/skaleorbit.webp",
    link: "https://github.com/icecoffie/skaleorbit",
    preview: "https://skaleorbit.vercel.app",
    status: "Live Product",
    tier: "S",
    tagline: "Real-time learning platform with video calls and screen sharing",
    description: "A complete learning infrastructure built for Skale Academy. This platform handles live mentoring sessions without depending on third-party tools.",
    
    why: "I run Skale Academy and needed a reliable WebRTC platform for 1-on-1 mentoring sessions. Existing tools had usage limits, were expensive, and didn't give us control over the learning experience. I wanted something private, unlimited, and easier for students to learn with—so I built it myself.",
    
    how: "Built with WebRTC for peer-to-peer video connections, Socket.io for real-time signaling, and React for the interface. The backend handles session scheduling, recording storage, and user management. Everything runs on our own infrastructure for complete privacy and no limits.",
    
    what: "A full-featured video learning platform that powers all mentoring sessions at Skale Academy. Students and mentors can connect instantly, share screens, collaborate on code, and review past sessions—all without third-party limitations.",
    
    impact: "Powers 100+ mentoring sessions monthly at Skale Academy. Reduced platform costs by 80% compared to third-party solutions.",
    
    techStack: ["React", "WebRTC", "Node.js", "Socket.io", "PostgreSQL", "Redis"],
    
    features: [
      "Real-time video conferencing with screen sharing",
      "Session recording and playback",
      "Interactive whiteboard for live collaboration",
      "Automated session scheduling and reminders",
      "Built-in code editor for technical mentoring",
      "Chat and file sharing during sessions"
    ],
    
    problem: "Skale Academy needed a reliable platform for online mentoring, but existing solutions were expensive and lacked the features we needed for technical education.",
    
    solution: "Built a custom WebRTC-based platform that gives us full control over the learning experience while keeping costs low.",
    
    results: [
      { metric: "Monthly Sessions", value: "100+" },
      { metric: "Cost Reduction", value: "80%" },
      { metric: "Uptime", value: "99.8%" },
      { metric: "User Satisfaction", value: "4.8/5" }
    ],
    
    timeline: "3 months",
    role: "Full-stack Developer & Product Designer",
    
    challenges: [
      "Handling WebRTC connection failures and network issues",
      "Optimizing video quality for different bandwidth conditions",
      "Building a reliable session recording system",
      "Managing real-time state across multiple users"
    ],
    
    learnings: [
      "WebRTC is powerful but requires careful error handling",
      "Real-time features need extensive testing across network conditions",
      "User experience matters more than technical complexity",
      "Building your own tools gives you control but requires maintenance"
    ]
  },
  {
    id: "worcket",
    title: "Worcket",
    image: "/worcket.webp",
    link: "https://github.com/icecoffie/worcket",
    preview: "https://worcket.vercel.app",
    status: "In Development",
    tier: "S",
    tagline: "Job platform with AI-powered resume optimization",
    description: "A job aggregator that pulls opportunities from multiple sources, combined with an AI tool that helps candidates pass ATS screening systems.",
    
    why: "After mentoring dozens of students, I noticed the problem wasn't their skills but how they presented them. Job applications were getting rejected by automated systems before humans even saw them.",
    
    how: "Built a custom API that aggregates jobs from multiple sources, then added an AI layer using OpenAI to analyze resumes against job descriptions. The system identifies missing keywords, suggests improvements, and scores ATS compatibility.",
    
    what: "A two-sided platform that helps job seekers find opportunities and optimize their applications. The AI analyzes resumes, suggests improvements, and shows exactly what ATS systems are looking for.",
    
    impact: "Aggregates 10,000+ tech jobs daily. Users who optimized their resumes saw 3x better callback rates.",
    
    techStack: ["Next.js", "Python", "FastAPI", "OpenAI API", "Redis", "PostgreSQL", "Tailwind CSS"],
    
    features: [
      "Multi-source job aggregation with custom API",
      "AI-powered resume analysis and optimization",
      "ATS compatibility scoring",
      "Keyword extraction and matching",
      "Application tracking dashboard",
      "Job alert notifications"
    ],
    
    problem: "Talented developers were getting rejected by automated screening systems before recruiters could see their applications.",
    
    solution: "Built a platform that aggregates jobs and uses AI to help candidates optimize their resumes for ATS systems.",
    
    results: [
      { metric: "Jobs Aggregated", value: "10,000+" },
      { metric: "Callback Rate Improvement", value: "3x" },
      { metric: "Active Users", value: "200+" },
      { metric: "Resume Optimizations", value: "500+" }
    ],
    
    timeline: "4 months (ongoing)",
    role: "Full-stack Developer & Product Designer",
    
    challenges: [
      "Building reliable job aggregation across different APIs",
      "Training AI to understand ATS requirements",
      "Balancing automation with human readability",
      "Handling rate limits from job board APIs"
    ],
    
    learnings: [
      "ATS systems are more predictable than they seem",
      "Good data aggregation is harder than it looks",
      "Users need guidance, not just tools",
      "AI works best when combined with human judgment"
    ]
  },
  {
    id: "freedoom",
    title: "Freedoom",
    image: "/freedoom.webp",
    link: "https://github.com/icecoffie/freedoom",
    preview: "https://freedoom.vercel.app",
    status: "Live Product",
    tier: "S",
    tagline: "Complete freelance business toolkit with one-time payment",
    description: "Everything freelancers need to run their business professionally. Create proposals, generate invoices, build rate cards, and manage clients. No subscriptions, just tools that work.",
    
    why: "I freelanced for years and hated juggling multiple tools for proposals, invoices, and client management. Most tools had expensive subscriptions for features I rarely used. I wanted something simple that I could own.",
    
    how: "Built with React and Node.js, using PDF generation for documents and Stripe for one-time payments. The app runs entirely in the browser after purchase, with optional cloud sync for backups.",
    
    what: "A complete freelance toolkit that helps independent workers create professional proposals, track projects, generate invoices, and manage client relationships. Pay once, use forever.",
    
    impact: "Used by 500+ freelancers. Average time saved per proposal is 2 hours. No subscription fatigue.",
    
    techStack: ["React", "Node.js", "Stripe", "MongoDB", "PDF Generation API", "Tailwind CSS"],
    
    features: [
      "Professional proposal templates",
      "Dynamic rate card calculator",
      "Automated invoice generation",
      "Client brief questionnaire builder",
      "Contract template library",
      "Payment tracking dashboard",
      "Expense tracking",
      "Time tracking integration"
    ],
    
    problem: "Freelancers were paying for expensive subscription tools with features they didn't need, or using multiple disconnected apps.",
    
    solution: "Created an all-in-one toolkit with a one-time payment model that gives freelancers everything they need without recurring costs.",
    
    results: [
      { metric: "Active Users", value: "500+" },
      { metric: "Time Saved per Proposal", value: "2 hours" },
      { metric: "User Retention", value: "85%" },
      { metric: "Revenue Generated", value: "$15k+" }
    ],
    
    timeline: "2 months",
    role: "Full-stack Developer & Product Designer",
    
    challenges: [
      "Building reliable PDF generation for different document types",
      "Creating flexible templates that work for various industries",
      "Implementing offline-first functionality",
      "Balancing features with simplicity"
    ],
    
    learnings: [
      "Freelancers value simplicity over features",
      "One-time payment models build trust",
      "Good templates save more time than customization options",
      "Users prefer ownership over subscriptions"
    ]
  },
  {
    id: "cybersec-portfolio",
    title: "CyberSec Portfolio",
    image: "/cybersec.webp",
    link: "https://github.com/icecoffie/cybersec",
    preview: "https://cybersec.vercel.app",
    status: "Live",
    tier: "S",
    tagline: "Interactive portfolio template for cybersecurity professionals",
    description: "A portfolio template designed for security professionals who want to showcase their work with interactive visualizations and threat simulations.",
    
    why: "Most cybersecurity portfolios are boring PDFs or plain websites. Security professionals have interesting work but struggle to present it visually. I wanted to create something that showcases both technical skills and design thinking.",
    
    how: "Built with React and Three.js for 3D visualizations, D3.js for data charts, and Framer Motion for smooth animations. The template includes pre-built components for threat maps, vulnerability timelines, and security metrics.",
    
    what: "A portfolio template that helps cybersecurity professionals present their work in an engaging, visual way. Includes interactive demos, animated security concepts, and customizable components.",
    
    impact: "Downloaded by 150+ security professionals. Featured in cybersecurity design communities.",
    
    techStack: ["React", "Three.js", "D3.js", "Framer Motion", "TypeScript", "Tailwind CSS"],
    
    features: [
      "3D network topology visualization",
      "Interactive threat intelligence dashboard",
      "Animated security concept explainers",
      "CTF challenge showcase",
      "Vulnerability timeline with impact metrics",
      "Customizable color schemes",
      "Dark mode optimized"
    ],
    
    problem: "Cybersecurity professionals struggled to present their technical work in a visually engaging way that non-technical recruiters could appreciate.",
    
    solution: "Created a portfolio template with interactive visualizations that make security concepts accessible and impressive.",
    
    results: [
      { metric: "Downloads", value: "150+" },
      { metric: "GitHub Stars", value: "200+" },
      { metric: "Community Features", value: "5+" },
      { metric: "User Satisfaction", value: "4.7/5" }
    ],
    
    timeline: "6 weeks",
    role: "Frontend Developer & UI Designer",
    
    challenges: [
      "Making complex security concepts visually understandable",
      "Optimizing 3D performance for different devices",
      "Creating flexible components that work for various use cases",
      "Balancing visual appeal with professional credibility"
    ],
    
    learnings: [
      "Good visualization makes technical work accessible",
      "Security professionals appreciate design quality",
      "Templates need flexibility without complexity",
      "Performance matters for interactive features"
    ]
  },
  {
    id: "mavenclaw",
    title: "MavenClaw",
    image: "/mavenclaw.webp",
    link: "https://github.com/icecoffie/mavenclaw",
    preview: "https://mavenclaw.vercel.app",
    status: "Beta",
    tier: "S",
    tagline: "AI-powered knowledge base for developers",
    description: "A personal knowledge management system that helps developers save code snippets, document solutions, and find exactly what they need using AI-powered search.",
    
    why: "I kept solving the same problems repeatedly because I couldn't remember where I saved the solution. I needed an external brain for code that was searchable, organized, and actually useful.",
    
    how: "Built with Next.js and Supabase for data storage, integrated OpenAI for semantic search that understands context, not just keywords. Added automatic tagging, syntax highlighting, and version history.",
    
    what: "A knowledge base that learns from your code. Save snippets, document solutions, and let AI help you find them later. Works like a second brain that actually remembers things.",
    
    impact: "Saves me 10+ hours monthly. Now used by 50+ developers in closed beta.",
    
    techStack: ["Next.js", "TypeScript", "Supabase", "OpenAI API", "Tailwind CSS", "PostgreSQL"],
    
    features: [
      "AI-powered semantic search across snippets",
      "Automatic tagging and categorization",
      "Code syntax highlighting for 50+ languages",
      "Version history for snippets",
      "Team collaboration features",
      "Browser extension for quick saves",
      "Markdown support",
      "Code execution preview"
    ],
    
    problem: "Developers waste time re-solving problems they've already solved because they can't find their previous solutions.",
    
    solution: "Built a knowledge base with AI-powered search that understands context and finds relevant code even when you don't remember the exact keywords.",
    
    results: [
      { metric: "Time Saved Monthly", value: "10+ hours" },
      { metric: "Beta Users", value: "50+" },
      { metric: "Snippets Saved", value: "2,000+" },
      { metric: "Search Accuracy", value: "92%" }
    ],
    
    timeline: "3 months (ongoing)",
    role: "Full-stack Developer",
    
    challenges: [
      "Building accurate semantic search with AI",
      "Organizing code snippets without rigid categories",
      "Making search fast with large datasets",
      "Balancing features with simplicity"
    ],
    
    learnings: [
      "AI search is powerful but needs good data structure",
      "Developers want quick access over perfect organization",
      "Version history is more important than I thought",
      "Browser extensions increase usage significantly"
    ]
  }
];

// Tier A projects (client work) - these stay in projects.ts
// Tier S projects (original products) - highlighted here
