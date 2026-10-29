/**
 * PORTFOLIO SOURCE DATA CONFIGURATION
 * Centralized, reactive source of truth for Chaitanya Pratap Narayan's portfolio.
 */

export const portfolioData = {
  personal: {
    fullName: "Chaitanya Pratap Narayan",
    shortName: "Chaitanya",
    monogram: "CPN",
    brandTitle: "CHAITANYA PRATAP NARAYAN",
    role: "Python Full Stack & Frontend Developer",
    headline: "Python Full Stack & Frontend Developer",
    subheadline: "Crafting Resilient Backends & 60fps Digital Experiences",
    bio: "Specializing in Python Full Stack web development, Django, React.js, and high-performance UI/UX based in Delhi. I engineer fast, secure architectures from normalized relational databases to buttery-smooth 60fps client interfaces.",
    extendedBio: "I architect clean, resilient Python backends with Django and Django REST Framework, design normalized relational databases (PostgreSQL/MySQL), and engineer buttery-smooth 60fps client experiences with React.js, Vite, and Tailwind CSS. Frontend Developer Intern at Uncodemy with Master of Computer Applications (MCA) from ISBN University and BCA from Kalinga University.",
    location: "Maujpur, Delhi, India",
    availability: "Available for Full-time Roles, Remote & On-Site Projects",
    status: "Active & Open for Opportunities"
  },
  contact: {
    email: "cpnsingh2001@gmail.com",
    phone: "+91 9350349962",
    displayPhone: "+91 93503 49962",
    whatsappUrl: "https://wa.me/919350349962",
    address: "Maujpur, Shahdara, Delhi, India - 110053",
    timezone: "IST (UTC+5:30) • Worldwide Collaboration"
  },
  socials: {
    github: "https://github.com/cpn-singh",
    githubDisplay: "github.com/cpn-singh",
    linkedin: "https://www.linkedin.com/in/chaitanya-pratap-narayan-83a42a411/",
    linkedinDisplay: "linkedin.com/in/chaitanya-pratap-narayan-83a42a411",
    instagram: "https://www.instagram.com/_random.click01_/",
    resumeUrl: "https://cpn-resume.vercel.app/"
  },
  education: [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "ISBN University",
      period: "2023 - 2025",
      details: "Advanced software engineering, distributed systems, relational databases, and enterprise architectural patterns."
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Kalinga University",
      period: "2020 - 2023",
      details: "Core computer science foundation, algorithms, data structures, object-oriented programming in Python, and web standards."
    }
  ],
  experience: [
    {
      role: "Frontend Developer Intern",
      company: "Uncodemy",
      period: "2024 - Present",
      location: "Noida / Delhi NCR",
      highlights: [
        "Architecting responsive, high-performance UI components using React.js, Vite, and Tailwind CSS.",
        "Collaborating with backend engineers to integrate Django REST Framework endpoints with optimized payload deserialization.",
        "Implementing 60fps interaction flows, debounced search filters, and smooth client-side state caching."
      ]
    }
  ],
  skills: {
    backend: [
      { name: "Python", level: "Advanced", icon: "🐍" },
      { name: "Django", level: "Advanced", icon: "🌐" },
      { name: "Django REST Framework", level: "Advanced", icon: "⚡" },
      { name: "RESTful API Architecture", level: "Advanced", icon: "🔌" },
      { name: "Authentication & JWT", level: "Intermediate", icon: "🔒" }
    ],
    frontend: [
      { name: "React.js", level: "Advanced", icon: "⚛️" },
      { name: "JavaScript (ES6+)", level: "Advanced", icon: "📜" },
      { name: "Tailwind CSS", level: "Advanced", icon: "🎨" },
      { name: "HTML5 / Semantic DOM", level: "Expert", icon: "📄" },
      { name: "Three.js & WebGL", level: "Intermediate", icon: "🧊" },
      { name: "Vite", level: "Advanced", icon: "🚀" }
    ],
    databases: [
      { name: "PostgreSQL", level: "Advanced", icon: "🐘" },
      { name: "MySQL", level: "Advanced", icon: "🐬" },
      { name: "SQLite", level: "Advanced", icon: "💾" },
      { name: "Data Modeling & Normalization", level: "Advanced", icon: "📊" }
    ],
    tools: [
      { name: "Git & GitHub", level: "Advanced", icon: "🐙" },
      { name: "Postman API Testing", level: "Advanced", icon: "📬" },
      { name: "Agile / Scrum Delivery", level: "Advanced", icon: "🏃" },
      { name: "VS Code", level: "Advanced", icon: "💻" }
    ]
  },
  navigation: [
    { label: "Chaitanya Pratap Narayan", href: "/" },
    { label: "Development", href: "/development/" },
    { label: "State & APIs", href: "/state-apis/" },
    { label: "3D & Frontend", href: "/3d-frontend/" },
    { label: "Web Platforms", href: "/web-platforms/" },
    { label: "Contact", href: "/contact/" }
  ],
  categories: [
    { id: "all", label: "All Works" },
    { id: "fullstack", label: "Python & Full Stack" },
    { id: "frontend", label: "React & 3D Interactive" },
    { id: "apis", label: "Django REST & Databases" }
  ],
  featuredProjects: [
    {
      id: "greengrid",
      title: "SYLVRA Clean Power Grid",
      category: "frontend",
      badge: "CLEANTECH • 3D TELEMETRY • THREE.JS",
      description: "Clean power monitoring platform connecting renewable energy hubs with interactive 3D national radar telemetry.",
      techStack: ["React.js", "Three.js", "WebGL", "Tailwind CSS", "Vite"],
      url: "https://green-grid-indol.vercel.app/",
      github: "https://github.com/cpn-singh",
      featured: true,
      stats: "60 FPS 3D Telemetry"
    },
    {
      id: "lms",
      title: "Library Management System",
      category: "fullstack",
      badge: "DJANGO REST FRAMEWORK • REACT",
      description: "Full-stack platform for catalog organization, member management, and book loan tracking with secure Django REST APIs and relational schema.",
      techStack: ["Python", "Django", "Django REST Framework", "React.js", "PostgreSQL"],
      url: "https://librarymanagementsystem-cyan.vercel.app/",
      github: "https://github.com/cpn-singh",
      featured: true,
      stats: "Normalized PostgreSQL Schema"
    },
    {
      id: "carcraft",
      title: "CarCraft Automotive Hub",
      category: "fullstack",
      badge: "DJANGO REST • REACT & VITE",
      description: "Intelligent automotive marketplace featuring multi-vehicle comparison matrices, dynamic inventory filtering, and instant inquiry forms.",
      techStack: ["Django", "Python", "React.js", "Tailwind CSS", "MySQL"],
      url: "https://car-craft-gilt-delta-n2dhq6fwyv.vercel.app/",
      github: "https://github.com/cpn-singh",
      featured: true,
      stats: "Dynamic Vehicle Compare Matrix"
    },
    {
      id: "loanwise",
      title: "LoanWise Lending Platform",
      category: "frontend",
      badge: "FINTECH • REACT & THREE.JS",
      description: "Loan portfolio management ecosystem with interactive 3D interfaces and real-time EMI amortization calculator.",
      techStack: ["React.js", "Three.js", "Tailwind CSS", "JavaScript"],
      url: "https://loan-master-flax.vercel.app/",
      github: "https://github.com/cpn-singh",
      featured: true,
      stats: "Interactive 3D Visualizer"
    },
    {
      id: "ulearnez",
      title: "U-Learnez",
      category: "frontend",
      badge: "EDTECH PLATFORM • REACT & NEXT.JS",
      description: "Interactive online learning platform featuring dynamic course catalogs, video curriculum modules, and performance analytics.",
      techStack: ["React.js", "Next.js", "Tailwind CSS", "REST API"],
      url: "https://u-learnez.vercel.app/",
      github: "https://github.com/cpn-singh",
      featured: true,
      stats: "Curriculum State Engine"
    },
    {
      id: "task",
      title: "Task Management Command Center",
      category: "apis",
      badge: "STATE ARCHITECTURE • KANBAN UI",
      description: "Productivity command center with Kanban task lifecycles, status pipelines, priority tags, and reactive client updates.",
      techStack: ["React.js", "Django REST", "SQLite", "Tailwind CSS"],
      url: "https://user-task-management-dashboard.vercel.app/",
      github: "https://github.com/cpn-singh",
      featured: false,
      stats: "Reactive State Pipelines"
    }
  ]
};

export default portfolioData;
