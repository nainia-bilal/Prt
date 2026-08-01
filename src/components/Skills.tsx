import { useState, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { SKILLS } from "../data";
import { cn } from "../lib/utils";

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", ...SKILLS.map(s => s.category)];
  
  const allSkills = SKILLS.flatMap(group => 
    group.items.map(item => ({ ...item, category: group.category }))
  );

  const filteredSkills = activeCategory === "All" 
    ? allSkills 
    : allSkills.filter(s => s.category === activeCategory);

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section id="skills" ref={containerRef} className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div style={{ y }} className="max-w-4xl mx-auto">
          <header className="mb-10 text-center flex flex-col items-center">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-px bg-purple-500/50" />
              <h2 className="text-purple-400 font-medium uppercase tracking-widest text-[10px]">Capabilities</h2>
              <div className="w-12 h-px bg-purple-500/50" />
            </div>
            
            <h2 className="text-4xl md:text-6xl font-heading font-semibold tracking-tight mb-4 text-white">
              Technical <span className="font-serif italic font-light text-white/90">Arsenal</span>
            </h2>
          </header>

          <div className="mb-14 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "rounded-full border px-4 py-1.5 font-mono text-xs transition-colors cursor-pointer",
                  activeCategory === cat
                    ? "border-white bg-white text-black"
                    : "border-white/10 bg-white/5 text-white/50 hover:text-white"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative mx-auto max-w-4xl [perspective:1200px]">
            {/* Glowing dome background */}
            <div 
              className="pointer-events-none absolute top-1/2 left-1/2 h-72 w-[110%] md:w-full -translate-x-1/2 -translate-y-1/2 rounded-[50%] opacity-30 blur-3xl"
              style={{
                background: "conic-gradient(from 0deg, #ff5f9e, #a78bfa, #38bdf8, #34d399, #fbbf24, #fb7185, #ff5f9e)"
              }}
            />
            
            <motion.ul 
              layout
              className="relative flex flex-wrap justify-center gap-3 z-10"
            >
              <AnimatePresence mode="popLayout">
                {filteredSkills.map((skill, idx) => {
                  return (
                    <motion.li
                      layout
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.3, delay: idx * 0.03 }}
                      key={skill.name}
                      className="list-none"
                    >
                      <div className="group flex h-24 w-24 flex-col items-center justify-center gap-2 rounded-2xl border border-white/10 bg-black/40 shadow-lg backdrop-blur-md transition-all duration-300 hover:border-white/30 hover:bg-white/10 hover:shadow-xl hover:-translate-y-1">
                        <img 
                          src={`https://cdn.simpleicons.org/${skill.slug}`} 
                          alt={skill.name} 
                          width={32} 
                          height={32} 
                          loading="lazy" 
                          className="h-8 w-8 transition-all duration-300 hover:scale-110" 
                        />
                        <span className="px-1 text-center font-mono text-[10px] leading-tight text-white/50 transition-colors group-hover:text-white">
                          {skill.name}
                        </span>
                      </div>
                    </motion.li>
                  );
                })}
              </AnimatePresence>
            </motion.ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
