import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import { BRAND } from "../data";

export const Contact = () => {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-8">
              <Mail size={16} className="text-brand-light" />
              <span className="text-xs font-medium uppercase tracking-wider text-white/80">Let's Connect</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-heading font-bold text-white mb-8 tracking-tighter">
              Have an idea?
              <br />
              <span className="text-white/40">Let's build it.</span>
            </h2>
            
            <p className="text-xl text-white/60 font-light mb-12 max-w-2xl mx-auto">
              I'm currently available for freelance work and full-time opportunities. If you're looking for a developer to bring your vision to life, I'd love to hear from you.
            </p>

            <motion.a
              href="mailto:nainiabilal@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-medium text-lg hover:bg-white/90 transition-colors group"
            >
              Start a Project
              <ArrowUpRight className="group-hover:rotate-45 transition-transform duration-300" size={20} />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
