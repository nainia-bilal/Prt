import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Mail, MapPin, Github, Copy, Check, Phone } from "lucide-react";
import { BRAND } from "../data";

export const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(BRAND.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy", err);
    }
  };

  return (
    <section id="contact" className="py-40 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-12 h-px bg-purple-500/50" />
              <h2 className="text-purple-400 font-medium uppercase tracking-widest text-[10px]">Let's Connect</h2>
              <div className="w-12 h-px bg-purple-500/50" />
            </div>
            
            <h2 className="text-5xl md:text-7xl lg:text-[5.5rem] font-heading font-extrabold text-white mb-8 tracking-tighter leading-tight">
              Have an idea?
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-600">Let's build it.</span>
            </h2>
            
            <p className="text-xl text-white/50 font-medium mb-12 max-w-2xl mx-auto leading-relaxed">
              I'm currently available for freelance work and full-time opportunities. If you're looking for an engineer to bring your vision to life with precision and style, I'd love to hear from you.
            </p>

            <motion.a
              href={`mailto:${BRAND.email}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-10 py-5 bg-white text-black rounded-full font-bold text-lg hover:bg-gradient-to-r hover:from-purple-500 hover:to-indigo-500 hover:text-white transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(168,85,247,0.4)] group"
            >
              Start a Project
              <ArrowUpRight className="group-hover:rotate-45 transition-transform duration-300" size={24} />
            </motion.a>

            <div className="mt-20 flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 sm:gap-6">
              <motion.div 
                whileHover={{ y: -5 }}
                className="flex items-center gap-3 px-6 py-3 glass-panel rounded-full border-white/5 bg-white/[0.02] transition-all duration-300 w-full sm:w-auto justify-center"
              >
                <div className="p-2 bg-purple-500/20 rounded-full text-purple-400">
                  <MapPin size={16} />
                </div>
                <span className="text-white/70 text-sm font-medium">{BRAND.location}</span>
              </motion.div>
              
              <motion.button 
                whileHover={{ y: -5 }}
                onClick={handleCopy}
                className="relative flex items-center gap-3 px-6 py-3 glass-panel rounded-full border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-purple-500/30 transition-all duration-300 group w-full sm:w-auto justify-center shadow-lg hover:shadow-purple-500/10 cursor-pointer"
              >
                <div className="p-2 bg-purple-500/20 rounded-full text-purple-400 group-hover:bg-purple-500/30 group-hover:text-purple-300 transition-colors">
                  {copied ? <Check size={16} /> : <Copy size={16} />}
                </div>
                <span className="text-white/70 text-sm font-medium group-hover:text-white transition-colors">{BRAND.email}</span>
                
                <AnimatePresence>
                  {copied && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.8 }}
                      animate={{ opacity: 1, y: -45, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.8 }}
                      className="absolute top-0 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-purple-500 text-white text-xs font-bold rounded-md shadow-lg pointer-events-none whitespace-nowrap"
                    >
                      Copied!
                      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 border-4 border-transparent border-t-purple-500" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
              
              <motion.a 
                whileHover={{ y: -5 }}
                href={BRAND.github} 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center gap-3 px-6 py-3 glass-panel rounded-full border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-purple-500/30 transition-all duration-300 group w-full sm:w-auto justify-center shadow-lg hover:shadow-purple-500/10"
              >
                <div className="p-2 bg-purple-500/20 rounded-full text-purple-400 group-hover:bg-purple-500/30 group-hover:text-purple-300 transition-colors">
                  <Github size={16} />
                </div>
                <span className="text-white/70 text-sm font-medium group-hover:text-white transition-colors">GitHub</span>
              </motion.a>
              <motion.a 
                whileHover={{ y: -5 }}
                href={`https://wa.me/212687755912`} 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center gap-3 px-6 py-3 glass-panel rounded-full border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-purple-500/30 transition-all duration-300 group w-full sm:w-auto justify-center shadow-lg hover:shadow-purple-500/10"
              >
                <div className="p-2 bg-purple-500/20 rounded-full text-purple-400 group-hover:bg-purple-500/30 group-hover:text-purple-300 transition-colors">
                  <Phone size={16} />
                </div>
                <span className="text-white/70 text-sm font-medium group-hover:text-white transition-colors">{BRAND.whatsapp}</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
