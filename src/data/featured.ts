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

  why: string;
  how: string;
  what: string;
  
  impact: string;
  techStack: string[];
  features: string[];
  
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
    id: "safe-route",
    title: "Safe Route",
    image: "/saferoute.webp",
    link: "https://github.com/icecoffie/safe-route",
    preview: "https://github.com/icecoffie/safe-route",
    status: "Hackathon Project",
    tier: "S",
    tagline: "Real-time safety map that routes you away from crime, riots, and danger",
    description: "Safe Route is a React Native mobile app that maps real-time risk levels across streets and neighborhoods. It routes users away from muggers, riots, and criminal hotspots — and fires an SOS via WhatsApp and Telegram the moment danger strikes.",

    why: "Street crime in Indonesian cities is unpredictable and underreported. Existing maps only care about speed, not safety. Our team at MATA wanted an app that actively protects people before something bad happens, not after.",

    how: "Built with React Native for cross-platform mobile. Integrated crowd-sourced incident reporting and real-time risk scoring. The SOS button sends your live location and a distress message instantly to pre-set emergency contacts via WhatsApp and Telegram APIs, with zero setup needed mid-crisis.",

    what: "A safety navigation app that shows street-level risk tiers in real time, suggests safer alternative routes, and lets you send an emergency SOS to trusted contacts with one tap — all without needing to type anything when you're in danger.",

    impact: "Won 2nd Place at Hackathon 2026 (Innovating Beyond The Code). Judged against 50+ teams. Built and shipped end-to-end within the hackathon window by Team MATA.",

    techStack: ["React Native", "Node.js", "Google Maps API", "WhatsApp API", "Telegram Bot API", "Firebase"],

    features: [
      "Real-time road risk level visualization on map",
      "Safer alternative route suggestions",
      "One-tap SOS button — no typing required",
      "Instant location sharing via WhatsApp & Telegram",
      "Crowd-sourced incident reporting",
      "Emergency contact management",
      "Offline mode for last known risk data",
      "Night-time safety alerts"
    ],

    problem: "People navigating unfamiliar or dangerous areas have no way to know if a street is currently risky — until it is too late. Standard maps prioritize speed, not safety.",

    solution: "Built a mobile-first safety layer on top of maps that aggregates real-time incident data and gives users a one-tap emergency broadcast when they feel threatened.",

    results: [
      { metric: "Hackathon Placement", value: "2nd Place" },
      { metric: "Teams Competed", value: "50+" },
      { metric: "SOS Response Time", value: "< 2s" },
      { metric: "Risk Zones Mapped", value: "Real-time" }
    ],

    timeline: "48 hours (Hackathon)",
    role: "Lead Developer & UI/UX Designer — Team MATA (Malika, Aisyah, Tohari, Ali)",

    challenges: [
      "Aggregating real-time crime data with low latency",
      "Ensuring SOS delivery when internet is slow or spotty",
      "Designing a UI that works under stress with one thumb",
      "Shipping a full working app within 48 hours"
    ],

    learnings: [
      "Safety UX must be idiot-proof — complexity costs lives",
      "WhatsApp API is more reliable than SMS in Indonesian networks",
      "Hackathon pressure is the best product design accelerator",
      "Real problems motivate teams far more than fake ones"
    ]
  },
  {
    id: "skale-orbit",
    title: "Skale Orbit",
    image: "/skaleorbit.webp",
    link: "https://github.com/icecoffie/skaleorbit",
    preview: "https://skaleorbit.vercel.app",
    status: "Live Product",
    tier: "S",
    tagline: "real time learning platform with video calls and screen sharing",
    description: "A complete learning infrastructure built for Skale Academy. This platform handles live mentoring sessions without depending on third party tools.",
    
    why: "I run Skale Academy and needed a reliable WebRTC platform for 1 on 1 mentoring sessions. Existing tools had usage limits, were expensive, and didn't give us control over the learning experience. I wanted something private, unlimited, and easier for students to learn with so I built it myself.",
    
    how: "Built with WebRTC for peer to peer video connections, Socket.io for real time signaling, and React for the interface. The backend handles session scheduling, recording storage, and user management. Everything runs on our own infrastructure for complete privacy and no limits.",
    
    what: "A full-featured video learning platform that powers all mentoring sessions at Skale Academy. Students and mentors can connect instantly, share screens, collaborate on code, and review past sessions all without third-party limitations.",
    
    impact: "Powers 100+ mentoring sessions monthly at Skale Academy. Reduced platform costs by 80% compared to third party solutions.",
    
    techStack: ["React", "WebRTC", "Node.js", "Socket.io", "PostgreSQL", "Redis"],
    
    features: [
      "real time video conferencing with screen sharing",
      "Session recording and playback",
      "Interactive whiteboard for live collaboration",
      "Automated session scheduling and reminders",
      "Built in code editor for technical mentoring",
      "Chat and file sharing during sessions"
    ],
    
    problem: "Skale Academy needed a reliable platform for online mentoring, but existing solutions were expensive and lacked the features we needed for technical education.",
    
    solution: "Built a custom WebRTC based platform that gives us full control over the learning experience while keeping costs low.",
    
    results: [
      { metric: "Monthly Sessions", value: "100+" },
      { metric: "Cost Reduction", value: "80%" },
      { metric: "Uptime", value: "99.8%" },
      { metric: "User Satisfaction", value: "4.8/5" }
    ],
    
    timeline: "3 months",
    role: "Fullstack Developer & Product Designer",
    
    challenges: [
      "Handling WebRTC connection failures and network issues",
      "Optimizing video quality for different bandwidth conditions",
      "Building a reliable session recording system",
      "Managing real time state across multiple users"
    ],
    
    learnings: [
      "WebRTC is powerful but requires careful error handling",
      "real time features need extensive testing across network conditions",
      "User experience matters more than technical complexity",
      "Building your own tools gives you control but requires maintenance"
    ]
  },
  {
    id: "matrix-sync-tech",
    title: "Matrix Sync Tech",
    image: "/msync.webp",
    link: "https://github.com/icecoffie/msync-tech",
    preview: "https://matrixsync.app",
    status: "Live Product",
    tier: "S",
    tagline: "Official tech service company website",
    description: "The official website for Matrix Sync Tech showcases comprehensive technology services and solutions tailored for businesses.",
    
    why: "Every tech company needs a professional online presence that builds trust and clearly communicates their value. Generic templates don't cut it clients need to see expertise and professionalism from the first click.",
    
    how: "Built with Next.js for lightning-fast performance and SEO optimization, styled with Tailwind CSS for modern responsive design, and deployed on VPS for 99.9% uptime and global CDN delivery.",
    
    what: "A high performance company website that showcases Matrix Sync Tech's services, builds credibility, and converts visitors into clients through clear messaging and professional design.",
    
    impact: "Increased client inquiries by 200% in the first 3 months after launch.",
    
    techStack: ["Next.js", "Tailwind CSS", "Vercel", "TypeScript"],
    
    features: [
      "Responsive design for all devices",
      "SEO optimized pages",
      "Service showcase sections",
      "Client portfolio",
      "Contact form with validation",
      "Fast page loading with automatic image optimization"
    ],
    
    problem: "Matrix Sync Tech needed a professional website that would showcase their services and build trust with potential clients.",
    
    solution: "Built a custom Next.js website with modern design, SEO optimization, and fast performance.",
    
    results: [
      { metric: "Client Inquiries", value: "+400%" },
      { metric: "Page Load Time", value: "< 1s" },
      { metric: "SEO Score", value: "95/100" },
      { metric: "Mobile Traffic", value: "+150%" }
    ],
    
    timeline: "6 weeks",
    role: "Fullstack Developer & UI Designer",
    
    challenges: [
      "Balancing visual design with performance",
      "Optimizing for SEO while maintaining design flexibility",
      "Ensuring consistent design across all pages",
      "Making the site easily updatable for future changes"
    ],
    
    learnings: [
      "Performance is a feature, not an afterthought",
      "Good SEO drives organic traffic significantly",
      "Mobile first design is essential for modern users",
      "Clean, clear messaging converts better than complex designs"
    ]
  },
    {
    id: "skale-app",
    title: "Skale App",
    image: "/skaleapp.webp",
    link: "https://github.com/icecoffie/skale-academy",
    preview: "https://skale.web.id",
    status: "Live Product",
    tier: "S",
    tagline: "Learning platform offering courses for tech enthusiasts",
    description: "A comprehensive educational platform that provides structured courses and learning resources for technology enthusiasts at all skill levels.",
    
    why: "Quality tech education should be accessible to everyone, not just those who can afford expensive bootcamps. Learners need structured courses combined with hands on practice.",
    
    how: "Developed with Next.js for optimal performance, integrated Stripe for secure payments, PostgreSQL for course and user management, and built interactive coding environments for practical learning.",
    
    what: "An online learning platform offering comprehensive tech courses with practical projects, helping students develop real-world skills at an affordable price.",
    
    impact: "Helped 200+ students learn new skills and advance their careers.",
    
    techStack: ["Next.js", "React", "Node.js", "PostgreSQL", "Stripe"],
    
    features: [
      "Structured course curriculum",
      "Hands-on projects and assignments",
      "Progress tracking and completion certificates",
      "Secure payment integration",
      "User profiles and dashboards",
      "Discussion forums for learners"
    ],
    
    problem: "Tech enthusiasts needed affordable, structured learning resources that combined theory with practical projects.",
    
    solution: "Built a comprehensive learning platform with structured courses, practical projects, and payment integration.",
    
    results: [
      { metric: "Students Enrolled", value: "200+" },
      { metric: "Courses Completed", value: "500+" },
      { metric: "Satisfaction Rate", value: "4.6/5" },
      { metric: "Completion Rate", value: "75%" }
    ],
    
    timeline: "4 months",
    role: "Fullstack Developer, Product Designer & Founder",
    
    challenges: [
      "Creating engaging course content",
      "Building interactive coding environments",
      "Ensuring smooth payment processing",
      "Managing user progress and motivation"
    ],
    
    learnings: [
      "Education platforms need both content and community",
      "Students learn best with practical, project based work",
      "Motivation and accountability are key to completion",
      "Affordability doesn't mean sacrificing quality"
    ]
  },
  {
    id: "orbit-awards",
    title: "Orbit Awards",
    image: "/orbitawards.webp",
    link: "https://github.com/icecoffie/orbit-awards",
    preview: "https://orbitawards.matrixsync.app",
    status: "Live Product",
    tier: "S",
    tagline: "Platform to showcase and nominate tech projects and talents",
    description: "A comprehensive platform designed to recognize and celebrate outstanding projects and talented individuals within the technology industry.",
    
    why: "The tech community needed a dedicated platform to recognize and celebrate outstanding projects and talented individuals. Recognition drives motivation and helps great work get the visibility it deserves.",
    
    how: "Developed with React and Node.js for the full stack application, MongoDB for storing nominations and votes, and Tailwind CSS for a modern, responsive interface.",
    
    what: "A showcase platform where tech professionals can nominate and vote for the best projects and talents in the industry, fostering community recognition.",
    
    impact: "Helped 500+ projects get recognized and nominated.",
    
    techStack: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    
    features: [
      "Project nomination system",
      "Voting and rating functionality",
      "Profile management for participants",
      "Showcase gallery for top projects",
      "Nomination categories",
      "Leaderboards and statistics"
    ],
    
    problem: "The tech community didn't have a centralized platform to recognize and celebrate outstanding projects and talented individuals.",
    
    solution: "Created a nomination and voting platform that allows the community to showcase and celebrate great work.",
    
    results: [
      { metric: "Projects Nominated", value: "500+" },
      { metric: "Active Users", value: "1,000+" },
      { metric: "Votes Cast", value: "5,000+" },
      { metric: "Community Reach", value: "10,000+" }
    ],
    
    timeline: "3 months",
    role: "Fullstack Developer & Product Designer",
    
    challenges: [
      "Building a fair and transparent voting system",
      "Handling large numbers of concurrent users during voting periods",
      "Creating an intuitive nomination process",
      "Ensuring the platform scales with growth"
    ],
    
    learnings: [
      "Community driven platforms need clear guidelines",
      "Fairness is more important than complexity",
      "User engagement drives platform success",
      "Scaling considerations should be part of initial design"
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
    tagline: "Job platform with AI powered resume optimization",
    description: "A job aggregator that pulls opportunities from multiple sources, combined with an AI tool that helps candidates pass ATS screening systems.",
    
    why: "After mentoring dozens of students, I noticed the problem wasn't their skills but how they presented them. Job applications were getting rejected by automated systems before humans even saw them.",
    
    how: "Built a custom API that aggregates jobs from multiple sources, then added an AI layer using OpenAI to analyze resumes against job descriptions. The system identifies missing keywords, suggests improvements, and scores ATS compatibility.",
    
    what: "A two sided platform that helps job seekers find opportunities and optimize their applications. The AI analyzes resumes, suggests improvements, and shows exactly what ATS systems are looking for.",
    
    impact: "Aggregates 10,000+ tech jobs daily. Users who optimized their resumes saw 3x better callback rates.",
    
    techStack: ["Next.js", "Python", "FastAPI", "OpenAI API", "Redis", "PostgreSQL", "Tailwind CSS"],
    
    features: [
      "Multi source job aggregation with custom API",
      "AI powered resume analysis and optimization",
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
    role: "Full stack Developer & Product Designer",
    
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
];

