import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SKILLS } from "../data";

export const Skills = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section id="skills" ref={containerRef} className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div style={{ y }} className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <div className="w-12 h-px bg-brand-light" />
            <h2 className="text-brand-light font-medium uppercase tracking-widest text-sm">Technical Arsenal</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {SKILLS.map((skillGroup, groupIdx) => (
              <div key={groupIdx} className="flex flex-col gap-6">
                <motion.h3 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: groupIdx * 0.2 }}
                  className="text-2xl font-heading font-medium text-white"
                >
                  {skillGroup.category}
                </motion.h3>
                <div className="flex flex-col gap-3">
                  {skillGroup.items.map((skill, i) => {
                    const Icon = skill.icon;
                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: (groupIdx * 0.2) + (i * 0.1) }}
                        className="group relative flex items-center gap-4 p-4 glass-panel rounded-xl overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-brand/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="relative z-10 p-2 bg-white/5 rounded-lg group-hover:bg-brand/20 transition-colors">
                          <Icon size={18} className="text-white/60 group-hover:text-brand-light transition-colors" />
                        </div>
                        <span className="relative z-10 text-white/80 group-hover:text-white transition-colors">{skill.name}</span>
                        <div className="relative z-10 ml-auto w-2 h-2 rounded-full bg-white/20 group-hover:bg-brand-light transition-colors" />
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
