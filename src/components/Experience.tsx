import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { EXPERIENCE } from "../data";

export const Experience = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Calculate transform depending on items count, adjust to prevent over-scrolling
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-55%"]);

  return (
    <section id="experience" ref={targetRef} className="relative h-[300vh]">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden py-24">
        
        {/* Header */}
        <div className="container mx-auto px-6 mb-12 md:mb-20 shrink-0">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-px bg-purple-500/50" />
            <h2 className="text-purple-400 font-medium uppercase tracking-widest text-[10px]">Journey</h2>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white tracking-tighter">Experience</h2>
        </div>

        {/* Horizontal scroll container */}
        <div className="container mx-auto px-6">
          <motion.div style={{ x }} className="flex gap-8 md:gap-12 w-max pr-6">
            {EXPERIENCE.map((exp, i) => (
              <div 
                key={i}
                className="w-[85vw] md:w-[500px] lg:w-[600px] shrink-0 glass-panel p-8 md:p-12 rounded-[2rem] relative overflow-hidden group border-white/5 transition-colors duration-500 hover:border-purple-500/30 hover:bg-white/[0.05]"
              >
                {/* Background Glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-600/10 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                
                <div className="relative z-10 flex flex-col h-full justify-between gap-12 md:gap-16">
                  <div>
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                      <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-900/30 border border-purple-500/30 text-purple-400 text-[10px] uppercase tracking-[0.2em] font-semibold self-start shrink-0">
                        {exp.period}
                      </span>
                    </div>
                    
                    <h3 className="text-3xl md:text-4xl font-heading font-bold text-white mb-3 leading-[1.1] tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-indigo-600 transition-all duration-500">
                      {exp.role}
                    </h3>
                    <h4 className="text-xl text-white/60 font-light">{exp.company}</h4>
                  </div>
                  
                  <div>
                    <div className="w-full h-px bg-white/5 mb-8 group-hover:bg-gradient-to-r group-hover:from-purple-500/50 group-hover:to-transparent transition-all duration-500" />
                    <p className="text-white/50 leading-relaxed font-light text-lg">{exp.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};
