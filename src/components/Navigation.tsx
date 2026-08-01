import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";
import { Home, User, Briefcase, Code, LayoutTemplate } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { id: "hero", label: "Home", icon: Home },
  { id: "about", label: "Story", icon: User },
  { id: "skills", label: "Capabilities", icon: Code },
  { id: "experience", label: "Journey", icon: Briefcase },
  { id: "projects", label: "Selected Work", icon: LayoutTemplate },
];

export const Navigation = () => {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
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
      {/* Top Header */}
      <div className="fixed top-6 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 pointer-events-none">
        <button 
          onClick={() => scrollTo('hero')}
          className="text-2xl font-heading font-black text-white tracking-widest pointer-events-auto hover:text-white/80 transition-colors"
        >
          BN.
        </button>
        <div className="pointer-events-auto">
          <ThemeToggle />
        </div>
      </div>

      {/* Dock Navigation (Universal) */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-md">
        <div className="flex items-center justify-around p-3 glass-nav rounded-2xl">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            const Icon = item.icon;

            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="relative p-3 rounded-xl flex flex-col items-center gap-1 group"
                title={item.label}
              >
                <Icon
                  size={20}
                  className={cn("relative z-10 transition-colors", isActive ? "text-brand-light" : "text-white/50 group-hover:text-white/80")}
                />
                {isActive && (
                  <motion.div
                    layoutId="dock-nav-pill"
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
