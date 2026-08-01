import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { BRAND } from "../data";
import { cn } from "../lib/utils";
import { useTheme } from "./ThemeProvider";
import { IconCloud } from "./IconCloud";

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

declare global {
  interface Window {
    VANTA: any;
  }
}

const FloatingCard = ({ title, className, delay, dotColor = "bg-blue-400" }: { title: string, className?: string, delay: number, dotColor?: string }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.5, rotate: -15 }}
    animate={{ opacity: 1, scale: 1, rotate: 0 }}
    transition={{ delay, duration: 0.8, type: "spring", bounce: 0.5 }}
    className={cn("absolute hidden lg:block z-30", className)}
  >
    <motion.div
      animate={{ y: [-8, 8, -8] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: delay }}
      className="flex items-center gap-2.5 p-3.5 glass-panel rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.2)] border-white/10 text-[13px] font-semibold text-white backdrop-blur-md cursor-pointer hover:bg-white/10 transition-colors"
      whileHover={{ scale: 1.05, rotate: 2 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className={cn("w-2.5 h-2.5 rounded-full shadow-[0_0_12px_currentColor]", dotColor)}></span>
      <span className="pr-1">{title}</span>
    </motion.div>
  </motion.div>
);

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const vantaRef = useRef<HTMLDivElement>(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);
  const { theme } = useTheme();

  useEffect(() => {
    if (!vantaEffect && window.VANTA && vantaRef.current) {
      setVantaEffect(
        window.VANTA.NET({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0xc084fc, // brand-light
          backgroundColor: theme === "dark" ? 0x000000 : 0xf8fafc,
          points: 12.00,
          maxDistance: 22.00,
          spacing: 18.00
        })
      );
    }
    
    // Update options if effect exists and theme changes
    if (vantaEffect) {
      vantaEffect.setOptions({
        backgroundColor: theme === "dark" ? 0x000000 : 0xf8fafc
      });
    }
  }, [vantaEffect, theme]);

  // Handle unmount destruction
  useEffect(() => {
    return () => {
      if (vantaEffect) {
        vantaEffect.destroy();
      }
    };
  }, [vantaEffect]);

  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -100]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section 
      id="hero" 
      ref={containerRef}
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Vanta Background Container */}
      <div ref={vantaRef} className="absolute inset-0 w-full h-full -z-10 opacity-60" />
      <div className="aurora-bg opacity-40" />
      
      {/* Mesh Gradient Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-dark/20 via-black/0 to-black/0 mix-blend-screen pointer-events-none" />

      <div className="container relative z-10 mx-auto px-6 h-full flex flex-col-reverse lg:flex-row items-center justify-center gap-12 lg:gap-20">
        
        {/* Text Content */}
        <motion.div 
          style={{ y: y1, opacity }}
          className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left z-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, type: "spring", bounce: 0.5 }}
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-900/30 border border-purple-500/30 mb-8 cursor-pointer"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
            </span>
            <span className="text-purple-300 text-[10px] uppercase tracking-[0.2em] font-bold">Available for freelance</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-heading font-extrabold tracking-tighter leading-[1] mb-6 text-white">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="block"
            >
              Crafting
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, y: 20, rotateX: -90 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.8, delay: 0.2, type: "spring", bounce: 0.4 }}
              className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-500 pb-2"
              style={{ transformOrigin: "bottom" }}
            >
              Premium
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="block text-4xl md:text-6xl lg:text-[4.5rem] mt-2 text-white/90"
            >
              Digital Experiences
            </motion.span>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg text-white/60 max-w-lg mb-10 text-balance font-medium leading-relaxed"
          >
            Full Stack MERN & AI Prompt Engineer specializing in high-end interfaces and scalable architectures for world-class brands.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-4 bg-white text-black rounded-full font-bold text-sm hover:bg-gradient-to-r hover:from-purple-500 hover:to-indigo-500 hover:text-white transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(168,85,247,0.5)]"
            >
              Start a Project
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white/20 rounded-full font-bold text-sm transition-all"
            >
              View Case Studies
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Visual Content (Animated Avatar Region) */}
        <motion.div 
          style={{ y: y2, opacity }}
          className="flex-1 relative w-full max-w-md aspect-square lg:aspect-[4/5] flex items-center justify-center"
        >
          {/* Central Holographic Container */}
          <motion.div 
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, type: "spring", bounce: 0.4 }}
            className="relative w-72 h-72 lg:w-80 lg:h-80 flex items-center justify-center"
          >
            {/* Colorful Animated Blobs */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute w-[140%] h-[140%] z-[-1]"
            >
              <div className="absolute top-0 right-10 w-48 h-48 bg-purple-600/40 rounded-full mix-blend-screen filter blur-[50px]" />
              <div className="absolute bottom-10 left-10 w-56 h-56 bg-indigo-600/40 rounded-full mix-blend-screen filter blur-[60px]" />
              <div className="absolute top-20 left-1/2 w-40 h-40 bg-pink-500/30 rounded-full mix-blend-screen filter blur-[40px]" />
            </motion.div>
            
            {/* Orbital Rings */}
            <div className="absolute w-full h-full border-2 border-dashed border-white/20 rounded-full animate-[spin_30s_linear_infinite]" />
            <div className="absolute w-[80%] h-[80%] border-2 border-dotted border-purple-400/30 rounded-full animate-[spin_20s_linear_reverse_infinite]" />
            
            {/* Icon Cloud */}
            <div className="relative z-10 w-full h-full flex items-center justify-center cursor-pointer">
              <IconCloud images={slugs.map((slug) => `https://cdn.simpleicons.org/${slug}/${slug}`)} />
            </div>
          </motion.div>

          {/* Floating Cards */}
          <FloatingCard 
            title="React.js" 
            className="-top-8 -right-4 lg:-top-4 lg:-right-10 rotate-6"
            delay={0.6}
            dotColor="bg-blue-400"
          />
          <FloatingCard 
            title="Node.js" 
            className="top-1/2 -right-8 lg:-right-20 -translate-y-1/2 -rotate-6"
            delay={1.0}
            dotColor="bg-green-400"
          />
          <FloatingCard 
            title="Prompt AI" 
            className="-bottom-4 -left-4 lg:-bottom-8 lg:-left-12 -rotate-12"
            delay={0.8}
            dotColor="bg-purple-400"
          />
          <FloatingCard 
            title="MongoDB" 
            className="top-1/4 -left-12 lg:-left-20 rotate-12"
            delay={1.2}
            dotColor="bg-yellow-400"
          />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 cursor-pointer"
        whileHover={{ y: 5 }}
      >
        <span className="text-[10px] font-bold text-white/50 uppercase tracking-[0.3em]">Scroll</span>
        <div className="w-[2px] h-12 bg-white/10 relative overflow-hidden rounded-full">
          <motion.div 
            className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent via-purple-400 to-transparent rounded-full"
            animate={{ top: ["-50%", "100%"] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </motion.div>
    </section>
  );
};
