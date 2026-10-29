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
    displayPhone: "P : +91 9350349962",
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
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects/" },
    { label: "Bio / Education", href: "/bio-education/" },
    { label: "Development", href: "/development/" },
    { label: "Contact", href: "/contact/" }
  ],
  featuredProjects: [
    {
      id: "ulearnez",
      title: "01: U-Learnez (EdTech Platform)",
      category: "EDTECH PLATFORM • REACT & NEXT.JS",
      summary: "Interactive online learning platform featuring dynamic course catalogs, responsive video lecture interfaces, student enrollment lifecycles, and performance analytics built with React.js and modern styling.",
      url: "https://u-learnez.vercel.app/"
    },
    {
      id: "greengrid",
      title: "02: SYLVRA Clean Power Grid (3D Telemetry)",
      category: "CLEANTECH • 3D TELEMETRY • THREE.JS",
      summary: "Clean power monitoring platform connecting renewable energy hubs with interactive 3D national radar telemetry, Three.js spatial visualizers, and responsive grid telemetry dashboards.",
      url: "https://green-grid-indol.vercel.app/"
    },
    {
      id: "lms",
      title: "03: Library Management System (Django REST)",
      category: "DJANGO REST FRAMEWORK • REACT",
      summary: "Full-stack platform for catalog organization, member management, and book loan tracking built with secure Django REST APIs, normalized relational databases, and a responsive UI.",
      url: "https://librarymanagementsystem-cyan.vercel.app/"
    },
    {
      id: "carcraft",
      title: "04: CarCraft Automotive Hub",
      category: "DJANGO REST • REACT & VITE",
      summary: "Intelligent automotive marketplace featuring multi-vehicle comparison matrices, dynamic inventory filtering, detailed specifications, and seamless Django REST backend integration.",
      url: "https://car-craft-gilt-delta-n2dhq6fwyv.vercel.app/"
    },
    {
      id: "loanwise",
      title: "05: LoanWise Lending Platform",
      category: "FINTECH • REACT & THREE.JS",
      summary: "Loan portfolio management ecosystem with interactive 3D interfaces, real-time EMI amortization calculators, dynamic interest modeling, and clear risk evaluation matrices.",
      url: "https://loan-master-flax.vercel.app/"
    },
    {
      id: "task",
      title: "06: Task Management Command Center",
      category: "STATE ARCHITECTURE • KANBAN UI",
      summary: "Productivity command center with Kanban task lifecycles, draggable status pipelines, sprint prioritizations, and reactive client state updates engineered with React and Redux.",
      url: "https://user-task-management-dashboard.vercel.app/"
    },
    {
      id: "db",
      title: "07: Relational Database Architecture",
      category: "POSTGRESQL & MYSQL • SCHEMA DESIGN",
      summary: "Designing normalized relational schemas and optimized models with PostgreSQL and MySQL. Implementing composite indexing, query optimization, foreign key integrity, and automated Django migrations.",
      url: "/projects/"
    },
    {
      id: "yt",
      title: "08: YouTube Clone Web Experience",
      category: "REACT • TAILWIND CSS • MEDIA UI",
      summary: "Modern video entertainment interface featuring custom video player controls, category filtering, search suggestions, and responsive media card layouts using React and Tailwind CSS.",
      url: "/projects/"
    },
    {
      id: "leafy",
      title: "09: Leafy Green Botanical Showcase",
      category: "E-COMMERCE • RESPONSIVE DESIGN",
      summary: "E-commerce botanical showcase featuring dynamic plant catalogs, detailed care instructions, cart management, and fluid responsive design optimized for mobile and desktop.",
      url: "/projects/"
    },
    {
      id: "rest",
      title: "10: REST API Engineering & Testing",
      category: "DJANGO REST • POSTMAN VALIDATION",
      summary: "Designing, consuming, and testing robust RESTful APIs with Django REST Framework and React. Implementing token authentication, JSON schema validation, error handling, and comprehensive Postman testing.",
      url: "/projects/"
    },
    {
      id: "django",
      title: "11: Clean Architecture & Django Core",
      category: "PYTHON & DJANGO • MODULAR APPS",
      summary: "Architecting clean, modular backends with Python and Django. Structuring reusable apps, class-based views, token authentication, input sanitization, and scalable RESTful API endpoints.",
      url: "/projects/"
    },
    {
      id: "react",
      title: "12: 60fps Interactive UI & React",
      category: "REACT.JS • VITE • TAILWIND CSS",
      summary: "Crafting buttery-smooth 60fps user experiences with React.js, Vite, and Tailwind CSS. Implementing modern component patterns, responsive flexbox/grid layouts, and accessible UI interactions.",
      url: "/projects/"
    }
  ]
};

export default portfolioData;
