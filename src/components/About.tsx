import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles, Zap, BrainCircuit } from "lucide-react";
import { MagicCard } from "./MagicCard";

export const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const text = "I am a multi-disciplinary developer blending code and design to craft award-winning digital experiences. I specialize in the MERN stack and AI Prompt Engineering, focusing on performance, accessibility, and modern aesthetics.";
  const words = text.split(" ");

  return (
    <section id="about" ref={containerRef} className="relative py-40 overflow-hidden min-h-screen flex items-center">
      {/* Background Effects */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/2 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div style={{ y, opacity }} className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-px bg-purple-500/50" />
            <h2 className="text-purple-400 font-medium uppercase tracking-widest text-[10px]">The Story</h2>
          </div>
          
          <h3 className="text-3xl md:text-5xl lg:text-[4rem] font-heading font-light leading-[1.1] tracking-tight text-white/90">
            {words.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0.1, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.4, delay: i * 0.03, ease: "easeOut" }}
                className="inline-block mr-[0.3em] mb-2"
              >
                {word}
              </motion.span>
            ))}
          </h3>

          <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Design", desc: "Crafting beautiful, intuitive interfaces with a focus on premium aesthetics and micro-interactions.", icon: Sparkles },
              { title: "Engineering", desc: "Building scalable, high-performance applications with modern React, TypeScript, and Node.js.", icon: Zap },
              { title: "AI Integration", desc: "Leveraging LLMs and Prompt Engineering to create smart, next-generation features.", icon: BrainCircuit }
            ].map((item, i) => {
              const Icon = item.icon;
              return (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: i * 0.15 }}
                className="h-full"
              >
                <MagicCard
                  className="glass-panel p-8 group hover:bg-white/[0.05] transition-all duration-500 border-white/5 hover:border-brand/30 h-full w-full"
                  gradientColor="rgba(147, 51, 234, 0.15)"
                >
                  <div className="mb-8 opacity-70 group-hover:opacity-100 transition-all duration-300">
                    <div className="inline-flex p-3.5 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-brand/10 group-hover:border-brand/30 group-hover:shadow-[0_0_20px_rgba(147,51,234,0.2)] transition-all duration-500">
                      <Icon size={32} className="text-white/70 group-hover:text-brand-light transition-colors duration-500" />
                    </div>
                  </div>
                  <h4 className="text-2xl font-heading font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-brand-light group-hover:to-brand transition-all duration-300">{item.title}</h4>
                  <p className="text-white/50 font-light leading-relaxed">{item.desc}</p>
                </MagicCard>
              </motion.div>
            )})}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
