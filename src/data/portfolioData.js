/**
 * PORTFOLIO SOURCE DATA CONFIGURATION
 * 
 * Centralized portfolio data for Chaitanya Pratap Narayan.
 * Run `npm run sync` to propagate all updates across all pages.
 */

export const portfolioData = {
  personal: {
    fullName: "Chaitanya Pratap Narayan",
    shortName: "Chaitanya",
    monogram: "CPN",
    brandTitle: "CHAITANYA PRATAP NARAYAN",
    role: "Python Full Stack & Frontend Developer",
    headline: "Python Full Stack & Frontend Developer",
    subheadline: "Crafting Python Backends & 60fps React Experiences",
    bio: "Specializing in Python Full Stack web development, Django, React.js, and high-performance UI/UX based in Delhi. I build fast, resilient architectures from relational databases to buttery-smooth 60fps client interfaces.",
    extendedBio: "I architect clean, resilient Python backends with Django and Django REST Framework, design normalized relational databases (PostgreSQL/MySQL), and engineer buttery-smooth 60fps client experiences with React.js, Vite, and Tailwind CSS. Frontend Developer Intern at Uncodemy with Master of Computer Applications (MCA) from ISBN University and BCA from Kalinga University.",
    location: "Maujpur, Delhi, India",
    availability: "Available for Worldwide Remote & On-Site Projects"
  },
  contact: {
    email: "cpnsingh2001@gmail.com",
    phone: "+91 9350349962",
    displayPhone: "P : +91 93503 49962",
    whatsappUrl: "https://wa.me/919350349962"
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
      institution: "ISBN University"
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Kalinga University"
    }
  ],
  experience: [
    {
      role: "Frontend Developer Intern",
      company: "Uncodemy",
      period: "Current"
    }
  ],
  navigation: [
    { label: "Chaitanya Pratap Narayan", href: "/" },
    { label: "Development", href: "/development/" },
    { label: "State & APIs", href: "/rag/" },
    { label: "3D & Frontend", href: "/agentic-ai/" },
    { label: "Web Platforms", href: "/data-analysis/" },
    { label: "Contact", href: "/contact/" }
  ],
  featuredProjects: [
    {
      id: "ulearnez",
      title: "U-Learnez",
      category: "EDTECH PLATFORM • REACT & NEXT.JS",
      summary: "Interactive online learning platform featuring dynamic course catalogs and performance analytics.",
      url: "https://u-learnez.vercel.app/"
    },
    {
      id: "greengrid",
      title: "SYLVRA Clean Power Grid",
      category: "CLEANTECH • 3D TELEMETRY • THREE.JS",
      summary: "Clean power monitoring platform connecting renewable energy hubs with interactive 3D national radar telemetry.",
      url: "https://green-grid-indol.vercel.app/"
    },
    {
      id: "lms",
      title: "Library Management System",
      category: "DJANGO REST FRAMEWORK • REACT",
      summary: "Full-stack platform for catalog organization, member management, and book loan tracking with secure Django REST APIs.",
      url: "https://librarymanagementsystem-cyan.vercel.app/"
    },
    {
      id: "carcraft",
      title: "CarCraft Automotive Hub",
      category: "DJANGO REST • REACT & VITE",
      summary: "Intelligent automotive marketplace featuring multi-vehicle comparison matrices and dynamic inventory filtering.",
      url: "https://car-craft-gilt-delta-n2dhq6fwyv.vercel.app/"
    },
    {
      id: "loanwise",
      title: "LoanWise Lending Platform",
      category: "FINTECH • REACT & THREE.JS",
      summary: "Loan portfolio management ecosystem with interactive 3D interfaces and real-time EMI amortization calculators.",
      url: "https://loan-master-flax.vercel.app/"
    },
    {
      id: "task",
      title: "Task Management Command Center",
      category: "STATE ARCHITECTURE • KANBAN UI",
      summary: "Productivity command center with Kanban task lifecycles, status pipelines, and reactive client updates.",
      url: "https://user-task-management-dashboard.vercel.app/"
    }
  ]
};

export default portfolioData;
