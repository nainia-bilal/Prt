import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../lib/utils";
import { Home, User, Briefcase, Code, Mail, LayoutTemplate } from "lucide-react";

const navItems = [
  { id: "hero", label: "Home", icon: Home },
  { id: "about", label: "About", icon: User },
  { id: "skills", label: "Skills", icon: Code },
  { id: "projects", label: "Projects", icon: LayoutTemplate },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "contact", label: "Contact", icon: Mail },
];

export const Navigation = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Simple intersection observer alternative for active section
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* Desktop Navigation (Dynamic Island inspired) */}
      <motion.div
        className={cn(
          "fixed top-6 left-1/2 -translate-x-1/2 z-50 hidden md:flex items-center justify-center transition-all duration-500",
          isScrolled ? "w-auto" : "w-[90%] max-w-5xl justify-between"
        )}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div
          className={cn(
            "flex items-center gap-2 p-2 rounded-full glass-nav transition-all duration-500",
            !isScrolled && "w-full justify-between px-6 bg-transparent border-transparent shadow-none"
          )}
        >
          {!isScrolled && (
            <div className="text-xl font-heading font-bold text-white tracking-tight">BN.</div>
          )}
          <div className="flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="relative px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300"
                >
                  <span className={cn("relative z-10", isActive ? "text-white" : "text-white/60 hover:text-white")}>
                    {item.label}
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-white/10 rounded-full"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
          {!isScrolled && (
            <button 
              onClick={() => scrollTo('contact')}
              className="px-5 py-2 text-sm font-medium text-black bg-white rounded-full hover:bg-white/90 transition-colors"
            >
              Let's Talk
            </button>
          )}
        </div>
      </motion.div>

      {/* Mobile Navigation (Apple Dock inspired) */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 md:hidden w-[90%] max-w-sm">
        <div className="flex items-center justify-around p-3 glass-nav rounded-2xl">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="relative p-3 rounded-xl flex flex-col items-center gap-1"
              >
                <Icon
                  size={20}
                  className={cn("relative z-10 transition-colors", isActive ? "text-brand-light" : "text-white/50")}
                />
                {isActive && (
                  <motion.div
                    layoutId="mobile-nav-pill"
                    className="absolute inset-0 bg-white/10 rounded-xl -z-0"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};
