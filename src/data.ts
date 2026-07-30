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
  title: "Full Stack Developer",
  roles: ["MERN Stack Engineer", "AI Prompt Engineer"],
  slogan: "Crafting Premium Digital Experiences Through Code & Design",
};

export const PROJECTS = [
  {
    title: "MediConnect",
    description: "A comprehensive healthcare platform connecting patients with medical professionals.",
    tech: ["React", "Node.js", "MongoDB", "Express", "Socket.io"],
    liveUrl: "#",
    githubUrl: "#",
    caseStudyUrl: "#",
    image: "https://images.unsplash.com/photo-1576091160550-2173ff9e5eb4?auto=format&fit=crop&q=80&w=2000",
  },
  {
    title: "MC Victori",
    description: "Premium digital experience for a luxury lifestyle brand.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveUrl: "#",
    githubUrl: "#",
    caseStudyUrl: "#",
    image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=2000",
  },
  {
    title: "Luxury Portfolio",
    description: "Award-winning creative portfolio with WebGL and advanced animations.",
    tech: ["React", "Three.js", "GSAP", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
    caseStudyUrl: "#",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2000",
  },
  {
    title: "Perfume E-commerce",
    description: "High-end e-commerce platform for boutique fragrances.",
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
      { name: "React", icon: Code2 },
      { name: "TypeScript", icon: FileJson },
      { name: "Next.js", icon: Globe },
      { name: "Tailwind CSS", icon: Paintbrush },
      { name: "Framer Motion", icon: Layout },
      { name: "GSAP", icon: TerminalSquare }
    ] 
  },
  { 
    category: "Backend", 
    items: [
      { name: "Node.js", icon: Server },
      { name: "Express", icon: Network },
      { name: "MongoDB", icon: Database },
      { name: "PostgreSQL", icon: Database },
      { name: "REST APIs", icon: Cloud },
      { name: "GraphQL", icon: Layers }
    ] 
  },
  { 
    category: "Tools & AI", 
    items: [
      { name: "Git", icon: GitBranch },
      { name: "Docker", icon: Container },
      { name: "AWS", icon: CloudLightning },
      { name: "AI Prompt Engineering", icon: Sparkles },
      { name: "OpenAI API", icon: Bot },
      { name: "Gemini API", icon: BrainCircuit }
    ] 
  },
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
