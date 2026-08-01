import { BRAND } from "../data";
import { Github, Linkedin, Twitter, Mail, MapPin, Phone } from "lucide-react";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative pt-20 pb-10 border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-900/5 pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-3xl font-heading font-bold text-white tracking-tighter mb-4">
              {BRAND.name}.
            </h2>
            <p className="text-white/50 max-w-sm mb-6 leading-relaxed font-medium">
              {BRAND.slogan}
            </p>
            <div className="flex items-center gap-4">
              <a href={BRAND.github} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all">
                <Github size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all">
                <Twitter size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-6">Navigation</h3>
            <ul className="space-y-3 text-white/50 font-medium">
              <li><a href="#hero" className="hover:text-purple-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-purple-400 transition-colors">Story</a></li>
              <li><a href="#projects" className="hover:text-purple-400 transition-colors">Selected Work</a></li>
              <li><a href="#experience" className="hover:text-purple-400 transition-colors">Journey</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-6">Contact</h3>
            <ul className="space-y-4 text-white/50 font-medium">
              <li className="flex items-center gap-3">
                <Mail size={16} />
                <a href={`mailto:${BRAND.email}`} className="hover:text-purple-400 transition-colors">{BRAND.email}</a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={16} />
                <span>{BRAND.location}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} />
                <a href={`https://wa.me/212687755912`} target="_blank" rel="noreferrer" className="hover:text-purple-400 transition-colors">{BRAND.whatsapp}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5">
          <div className="flex items-center gap-2">
            <span className="text-white/40 text-sm font-medium">
              &copy; {year} {BRAND.name}.
            </span>
            <span className="text-white/20 hidden md:block">|</span>
            <span className="text-white/30 text-sm font-arabic" dir="rtl">
              {BRAND.arabicName}
            </span>
          </div>
          
          <div className="text-white/40 text-sm font-medium flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/5">
            <span>Crafted with</span>
            <span className="text-purple-500 animate-pulse">♥</span>
            <span>in Morocco</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
