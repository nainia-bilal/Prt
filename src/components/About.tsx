import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

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
    <section id="about" ref={containerRef} className="relative py-32 overflow-hidden min-h-screen flex items-center">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div style={{ y, opacity }} className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-px bg-brand-light" />
            <h2 className="text-brand-light font-medium uppercase tracking-widest text-sm">About Me</h2>
          </div>
          
          <h3 className="text-3xl md:text-5xl lg:text-6xl font-heading font-light leading-tight text-white/90">
            {words.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0.2 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="inline-block mr-3 mb-2"
              >
                {word}
              </motion.span>
            ))}
          </h3>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Design", desc: "Crafting beautiful, intuitive interfaces with a focus on user experience." },
              { title: "Engineering", desc: "Building scalable, high-performance applications with modern tech." },
              { title: "AI Integration", desc: "Leveraging LLMs and AI to create smart, next-generation features." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                className="glass-panel p-8 rounded-2xl group hover:bg-white/[0.03] transition-colors"
              >
                <h4 className="text-xl font-heading font-medium text-white mb-4 group-hover:text-brand-light transition-colors">{item.title}</h4>
                <p className="text-white/60 font-light leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
