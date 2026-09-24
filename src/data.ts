import {
  Code2,
  FileJson,
  Globe,
  Layout,
  Paintbrush,
  TerminalSquare,
  Database,
  Server,
  Network,
  Cloud,
  Layers,
  Cpu,
  GitBranch,
  Container,
  CloudLightning,
  Sparkles,
  Bot,
  BrainCircuit,
} from "lucide-react";

export const BRAND = {
  name: "Bilal Nainia",
  arabicName: "بلال انعينيعة",
  title: "Full Stack Developer",
  roles: ["MERN Stack Engineer", "UI/UX Designer", "AI Prompt Engineer"],
  slogan: "Crafting Premium Digital Experiences Through Code & Design",
  location: "Casablanca, Morocco",
  email: "nainiabilal@gmail.com",
  github: "https://github.com/nainia-bilal",
  whatsapp: "+212 687755912",
};

export const PROJECTS = [
 {
    title: "Maroc Safariyat",
    description: "A comprehensive digital tourism platform dedicated to showcasing Moroccan destinations and travel experiences.",
    challenge: "Travelers lacked a centralized, visually engaging platform to discover authentic Moroccan itineraries and local insights.",
    solution: "Developed an interactive and highly responsive web application featuring immersive UI animations and curated travel guides.",
    result: "Delivered a modern, seamless user experience that effectively highlights Moroccan culture and boosts user engagement.",
    tech: ["React", "Tailwind CSS", "JavaScript", "Framer Motion", "Vercel"],
    liveUrl: "https://maroc-safariyat.vercel.app",
    githubUrl: "#",
    caseStudyUrl: "#",
    image: "safary.png",
  },
  {
    title: "MediConnect",
    description: "A comprehensive healthcare platform connecting patients with medical professionals.",
    challenge: "Fragmented communication between patients and doctors leading to inefficient care.",
    solution: "Developed a real-time telemedicine platform with secure messaging and video consultations.",
    result: "Reduced average response time by 40% and served over 10,000 active users.",
    tech: ["React", "Node.js", "MongoDB", "Express", "Socket.io"],
    liveUrl: "https://mediconnect-red.vercel.app",
    githubUrl: "#",
    caseStudyUrl: "#",
    image: "medi.png",
  },
  {
    title: "Douae Elandalosy Portfolio",
    description: "A professional digital portfolio designed to highlight personal projects, skills, and professional achievements.",
    challenge: "The client needed a modern online presence to effectively stand out in a competitive job market.",
    solution: "Designed and built a sleek, responsive portfolio with dark mode support and smooth scroll animations.",
    result: "Created a visually striking digital identity that increased the client's professional visibility.",
    tech: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS"],
    liveUrl: "https://douae-elandalosy.vercel.app",
    githubUrl: "#",
    caseStudyUrl: "#",
    image: "doaae.png",
  },
  {
    title: "Lmrabt Identity",
    description: "A customized web presence for showcasing creative work and professional services.",
    challenge: "Required a minimal yet impactful layout to display diverse digital content without clutter.",
    solution: "Implemented a clean, grid-based UI focusing on typography and high-quality imagery.",
    result: "Achieved a lightning-fast load time and a highly intuitive user interface across all devices.",
    tech: ["React", "Tailwind CSS", "Vite"],
    liveUrl: "https://lmrabt.vercel.app",
    githubUrl: "#",
    caseStudyUrl: "#",
    image: "lmrabt.png",
  },
  {
    title: "Siham Tau Portfolio",
    description: "An elegant and modern personal website tailored for professional branding.",
    challenge: "Needed to translate a unique personal brand into a functional and accessible web interface.",
    solution: "Built a customized frontend experience utilizing modern styling frameworks and accessible HTML.",
    result: "Delivered a pixel-perfect design that accurately represents the client's creative vision.",
    tech: ["JavaScript", "React", "CSS Modules"],
    liveUrl: "https://siham-tau.vercel.app",
    githubUrl: "#",
    caseStudyUrl: "#",
    image: "siham.png",
  },
  {
    title: "Anas Murex Theta",
    description: "A dynamic web project focused on performance and seamless user interaction.",
    challenge: "Handling complex UI states while maintaining smooth transitions and high performance.",
    solution: "Integrated advanced state management and optimized rendering using modern React patterns.",
    result: "Produced a robust, scalable application with zero layout shifts and excellent lighthouse scores.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://anas-murex-theta.vercel.app",
    githubUrl: "#",
    caseStudyUrl: "#",
    image: "anas.png",
  },
  {
    title: "Zack06 Digital Workspace",
    description: "A minimalist digital workspace and portfolio for creative technology projects.",
    challenge: "Integrating various multimedia elements while keeping the design clean and focused.",
    solution: "Developed a custom layout system with lazy-loaded assets and interactive hover effects.",
    result: "Successfully merged aesthetics with performance, providing an engaging browsing experience.",
    tech: ["HTML", "JavaScript", "Tailwind CSS"],
    liveUrl: "https://zack06.vercel.app",
    githubUrl: "#",
    caseStudyUrl: "#",
    image: "zack.png",
  }
];

export const SKILLS = [
  {
    category: "Frontend",
    items: [
      { name: "HTML5", slug: "html5" },
      { name: "CSS3", slug: "css3" },
      { name: "JavaScript", slug: "javascript" },
      { name: "TypeScript", slug: "typescript" },
      { name: "React 19", slug: "react" },
      { name: "Next.js", slug: "nextdotjs" },
      { name: "Tailwind CSS", slug: "tailwindcss" },
      { name: "Framer Motion", slug: "framer" },
      { name: "GSAP", slug: "greensock" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", slug: "nodedotjs" },
      { name: "Express", slug: "express" },
      { name: "PHP", slug: "php" },
      { name: "Laravel", slug: "laravel" },
      { name: "Ruby", slug: "ruby" },
      { name: "Ruby on Rails", slug: "rubyonrails" },
      { name: "Go", slug: "go" },
      { name: "Rust", slug: "rust" },
      { name: "Swift", slug: "swift" },
      { name: "Kotlin", slug: "kotlin" },
      { name: "Java", slug: "openjdk" },
      { name: "C++", slug: "cplusplus" },
      { name: "MongoDB", slug: "mongodb" },
      { name: "PostgreSQL", slug: "postgresql" },
      { name: "MySQL", slug: "mysql" },
      { name: "GraphQL", slug: "graphql" },
    ],
  },
  {
    category: "Data & AI",
    items: [
      { name: "Python", slug: "python" },
      { name: "OpenCV", slug: "opencv" },
      { name: "Pandas", slug: "pandas" },
      { name: "TensorFlow", slug: "tensorflow" },
      { name: "OpenAI API", slug: "openai" },
      { name: "Gemini API", slug: "googlegemini" },
    ],
  },
  {
    category: "DevOps & Cloud",
    items: [
      { name: "Git", slug: "git" },
      { name: "Docker", slug: "docker" },
      { name: "AWS", slug: "amazonwebservices" },
      { name: "Linux", slug: "linux" },
      { name: "Vercel", slug: "vercel" },
    ],
  },
  {
    category: "Design",
    items: [
      { name: "Figma", slug: "figma" },
      { name: "Sketch", slug: "sketch" },
      { name: "Framer", slug: "framer" },
      { name: "Webflow", slug: "webflow" },
    ],
  },
];

export const EXPERIENCE = [
  {
    role: "Freelance Front-End & Full-Stack Developer",
    company: "Self-Employed / Freelance",
    period: "2025 - 2026",
    description:
      "Developing and deploying web applications like 'Maroc Safariyat' and e-commerce platforms ('Maison Bilal', 'RAID', 'BILAL WATCH'). Specialized in React, Tailwind CSS, JavaScript, and creating animations with Framer Motion and GSAP.",
  },
  {
    role: "Full Stack Web Developer",
    company: "Freelance",
    period: "2025 - Present",
    description:
      "Developed and deployed 'Maroc Safariyat', a comprehensive tourism web application. Managed code structure, version control with Git/GitHub, and handled seamless production deployment using Vercel.",
  },
  {
    role: "Front-End Engineer & UI Specialist",
    company: "E-commerce Concept Projects",
    period: "2025 - 2026",
    description:
      "Architected and built interactive e-commerce platforms including 'Maison Bilal', 'RAID', and 'BILAL WATCH'. Implemented modern UI/UX principles, dark mode toggles, and advanced web animations using GSAP and Framer Motion.",
  },
  {
    role: "Digital Asset & UI Designer",
    company: "Freelance",
    period: "2025 - 2026",
    description:
      "Optimized user interfaces and digital assets for web platforms. Utilized AI image generation, advanced photo retouching, and color grading to create compelling, high-quality visual experiences.",
  },
];

export const EDUCATION = [
  {
    degree: "Web Development Training",
    institution: "Nouaceur Wings Tech",
    period: "2026 - Present",
    description:
      "Intensive training in modern web development technologies and best practices.",
  },
  {
    degree: "Bachelor's Student (Private Law / Management)",
    institution: "Hassan II University (Ain Chock)",
    period: "2025 - Present",
    description:
      "Initially studied Management, currently in the process of transferring to Private Law in Arabic.",
  },
  {
    degree: "Baccalaureate in Physical Sciences (French Option)",
    institution: "Lycée Taha Hussein (ثانوية طه حسين)",
    period: "2024 - 2025",
    description:
      "Completed high school education with a focus on physical sciences.",
  },
];
