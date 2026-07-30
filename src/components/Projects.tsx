import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { PROJECTS } from "../data";
import { ArrowUpRight, Github, Code, ExternalLink } from "lucide-react";

const ProjectCard: React.FC<{ project: any, index: number }> = ({ project, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const isEven = index % 2 === 0;

  return (
    <motion.div 
      ref={cardRef}
      style={{ opacity, scale }}
      className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-16 items-center w-full mb-32 last:mb-0`}
    >
      {/* Image Container */}
      <div className="w-full lg:w-3/5 relative group perspective-[2000px]">
        <motion.div 
          style={{ y: isEven ? y : useTransform(scrollYProgress, [0, 1], [-100, 100]) }}
          className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden glass-panel group-hover:rotate-x-2 group-hover:rotate-y-[-2deg] transition-transform duration-700 ease-out"
        >
          <div className="absolute inset-0 bg-brand/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000"
          />
        </motion.div>
      </div>

      {/* Content */}
      <div className="w-full lg:w-2/5 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, x: isEven ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">{project.title}</h3>
          <p className="text-white/60 font-light leading-relaxed mb-8">{project.description}</p>
          
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tech.map((tech: string, i: number) => (
              <span key={i} className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-white/80">
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a href={project.liveUrl} className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-white/90 transition-colors">
              Live Preview <ArrowUpRight size={16} />
            </a>
            <a href={project.githubUrl} className="flex items-center gap-2 p-3 glass-panel rounded-full hover:bg-white/10 transition-colors text-white/80 hover:text-white">
              <Github size={20} />
            </a>
            <a href={project.caseStudyUrl} className="flex items-center gap-2 p-3 glass-panel rounded-full hover:bg-white/10 transition-colors text-white/80 hover:text-white">
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
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-4 mb-24 max-w-5xl mx-auto">
          <div className="w-12 h-px bg-brand-light" />
          <h2 className="text-brand-light font-medium uppercase tracking-widest text-sm">Selected Works</h2>
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
