import { BRAND } from "../data";
import { Github, Linkedin, Twitter } from "lucide-react";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative py-8 border-t border-white/10 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-white/40 text-sm font-light">
            &copy; {year} {BRAND.name}. All rights reserved.
          </div>
          
          <div className="flex items-center gap-6">
            <a href="#" className="text-white/40 hover:text-brand-light transition-colors">
              <Github size={20} />
            </a>
            <a href="#" className="text-white/40 hover:text-brand-light transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-white/40 hover:text-brand-light transition-colors">
              <Twitter size={20} />
            </a>
          </div>

          <div className="text-white/40 text-sm font-light flex items-center gap-2">
            <span>Crafted with</span>
            <span className="text-brand-light">♥</span>
            <span>and Code</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
