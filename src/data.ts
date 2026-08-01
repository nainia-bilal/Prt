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
  BrainCircuit
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
  whatsapp: "+212 687755912"
};

export const PROJECTS = [
  {
    title: "MediConnect",
    description: "A comprehensive healthcare platform connecting patients with medical professionals.",
    challenge: "Fragmented communication between patients and doctors leading to inefficient care.",
    solution: "Developed a real-time telemedicine platform with secure messaging and video consultations.",
    result: "Reduced average response time by 40% and served over 10,000 active users.",
    tech: ["React", "Node.js", "MongoDB", "Express", "Socket.io"],
    liveUrl: "#",
    githubUrl: "#",
    caseStudyUrl: "#",
    image: "https://images.unsplash.com/photo-1576091160550-2173ff9e5eb4?auto=format&fit=crop&q=80&w=2000",
  },
  {
    title: "MC Victori",
    description: "Premium digital experience for a luxury lifestyle brand.",
    challenge: "The brand lacked a digital presence that reflected its high-end physical products.",
    solution: "Designed and built an immersive, animation-driven e-commerce experience.",
    result: "Increased online conversion rates by 25% within the first quarter.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveUrl: "#",
    githubUrl: "#",
    caseStudyUrl: "#",
    image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=2000",
  },
  {
    title: "Luxury Portfolio",
    description: "Award-winning creative portfolio with WebGL and advanced animations.",
    challenge: "Standing out in a saturated market of standard template portfolios.",
    solution: "Implemented custom WebGL shaders and complex GSAP scroll animations for a unique identity.",
    result: "Featured on multiple design award sites and increased inbound client leads.",
    tech: ["React", "Three.js", "GSAP", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
    caseStudyUrl: "#",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2000",
  },
  {
    title: "Perfume E-commerce",
    description: "High-end e-commerce platform for boutique fragrances.",
    challenge: "Creating a sensory experience for a product that relies heavily on smell.",
    solution: "Utilized rich visuals, detailed scent profiles, and smooth transitions to evoke emotion.",
    result: "Achieved a 30% reduction in bounce rate and higher average order value.",
    tech: ["React", "Redux", "Node.js", "Stripe", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
    caseStudyUrl: "#",
    image: "https://images.unsplash.com/photo-1594035910387-fea477274976?auto=format&fit=crop&q=80&w=2000",
  },
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
      { name: "GSAP", slug: "greensock" }
    ] 
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
      { name: "GraphQL", slug: "graphql" }
    ] 
  },
  { 
    category: "Data & AI", 
    items: [
      { name: "Python", slug: "python" },
      { name: "OpenCV", slug: "opencv" },
      { name: "Pandas", slug: "pandas" },
      { name: "TensorFlow", slug: "tensorflow" },
      { name: "OpenAI API", slug: "openai" },
      { name: "Gemini API", slug: "googlegemini" }
    ]
  },
  { 
    category: "DevOps & Cloud", 
    items: [
      { name: "Git", slug: "git" },
      { name: "Docker", slug: "docker" },
      { name: "AWS", slug: "amazonwebservices" },
      { name: "Linux", slug: "linux" },
      { name: "Vercel", slug: "vercel" }
    ] 
  },
  {
    category: "Design",
    items: [
      { name: "Figma", slug: "figma" },
      { name: "Sketch", slug: "sketch" },
      { name: "Framer", slug: "framer" },
      { name: "Webflow", slug: "webflow" }
    ]
  }
];

export const EXPERIENCE = [
  {
    role: "Senior Full Stack Engineer",
    company: "Tech Innovators",
    period: "2023 - Present",
    description: "Leading the development of enterprise-scale web applications using the MERN stack. Mentoring junior developers and implementing AI-driven features.",
  },
  {
    role: "Full Stack Developer",
    company: "Digital Craftsmen",
    period: "2021 - 2023",
    description: "Developed and maintained multiple client projects. Specialized in creating high-performance, accessible user interfaces with React and Tailwind CSS.",
  },
  {
    role: "Frontend Developer",
    company: "Creative Agency X",
    period: "2019 - 2021",
    description: "Crafted award-winning digital experiences with focus on animation, responsive design, and modern web standards.",
  },
];

export const EDUCATION = [
  {
    degree: "Master's in Computer Science",
    institution: "Tech University",
    period: "2017 - 2019",
    description: "Specialized in Software Engineering and Artificial Intelligence. Graduated with honors.",
  },
  {
    degree: "Bachelor's in Information Technology",
    institution: "State University",
    period: "2013 - 2017",
    description: "Foundational studies in programming, database management, and system architecture.",
  }
];
