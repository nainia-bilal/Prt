import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { PROJECTS } from "../data";
import { ArrowUpRight, Github, Code, ExternalLink, Target, Lightbulb, Trophy } from "lucide-react";
import { PixelImage } from "./PixelImage";

const ProjectCard: React.FC<{ project: any, index: number }> = ({ project, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const isEven = index % 2 === 0;

  return (
    <motion.div 
      ref={cardRef}
      style={{ opacity, scale }}
      className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center w-full mb-40 last:mb-0`}
    >
      {/* Image Container */}
      <div className="w-full lg:w-1/2 relative group perspective-[2000px]">
        <motion.div 
          style={{ y: isEven ? y : useTransform(scrollYProgress, [0, 1], [-100, 100]) }}
          className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden glass-panel group-hover:rotate-x-2 group-hover:rotate-y-[-2deg] transition-transform duration-700 ease-out border-white/5 group-hover:border-purple-500/30 group-hover:shadow-[0_20px_50px_rgba(147,51,234,0.15)]"
        >
          <div className="absolute inset-0 bg-purple-600/10 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          <PixelImage 
            src={project.image} 
            alt={project.title} 
            customGrid={{ rows: 6, cols: 8 }}
            grayscaleAnimation
            className="w-full h-full"
          />
        </motion.div>
      </div>

      {/* Content */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, x: isEven ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <h3 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-indigo-500 transition-all duration-300 inline-block">{project.title}</h3>
          <p className="text-white/60 font-medium text-lg leading-relaxed mb-8">{project.description}</p>
          
          <div className="space-y-6 mb-10">
            <div className="flex gap-4">
              <div className="mt-1 flex-shrink-0 text-purple-400"><Target size={20} /></div>
              <div>
                <h4 className="text-white font-semibold mb-1">The Challenge</h4>
                <p className="text-white/50 text-sm leading-relaxed">{project.challenge}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="mt-1 flex-shrink-0 text-pink-400"><Lightbulb size={20} /></div>
              <div>
                <h4 className="text-white font-semibold mb-1">The Solution</h4>
                <p className="text-white/50 text-sm leading-relaxed">{project.solution}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="mt-1 flex-shrink-0 text-indigo-400"><Trophy size={20} /></div>
              <div>
                <h4 className="text-white font-semibold mb-1">The Result</h4>
                <p className="text-white/50 text-sm leading-relaxed">{project.result}</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-10">
            {project.tech.map((tech: string, i: number) => (
              <span key={i} className="px-3 py-1.5 rounded-full border border-white/5 bg-white/5 text-[11px] uppercase tracking-wider font-semibold text-white/70">
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a href={project.liveUrl} className="flex items-center gap-2 px-6 py-3.5 bg-white text-black rounded-full font-bold text-sm hover:bg-gradient-to-r hover:from-purple-500 hover:to-indigo-500 hover:text-white transition-all shadow-lg hover:shadow-purple-500/25">
              Live Preview <ArrowUpRight size={16} />
            </a>
            <a href={project.githubUrl} className="flex items-center gap-2 p-3.5 glass-panel rounded-full hover:bg-white/10 transition-colors text-white/80 hover:text-white border-white/10 hover:border-white/20">
              <Github size={20} />
            </a>
            <a href={project.caseStudyUrl} className="flex items-center gap-2 p-3.5 glass-panel rounded-full hover:bg-white/10 transition-colors text-white/80 hover:text-white border-white/10 hover:border-white/20">
              <Code size={20} />
            </a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-24 max-w-3xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-px bg-purple-500/50" />
            <h2 className="text-purple-400 font-medium uppercase tracking-widest text-[10px]">Selected Work</h2>
            <div className="w-12 h-px bg-purple-500/50" />
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white tracking-tighter mb-6">Featured Projects</h2>
          <p className="text-white/50 text-lg font-light leading-relaxed">A selection of my recent work focusing on premium design, complex logic, and AI-driven solutions.</p>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};
