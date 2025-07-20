import { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../theme/theme-provider";
import { useScroll, useActiveSection } from "../../hooks/use-scroll";
import { Sun, Moon, Menu, X, Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const navigationItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#blog", label: "Blog" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const { scrollY } = useScroll();
  const activeSection = useActiveSection(['home', 'about', 'skills', 'projects', 'blog', 'contact']);

  const handleDownloadResume = () => {
    // Direct link to trigger download
    window.open('/api/resume', '_blank');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrollY > 50 
          ? 'glass-card backdrop-blur-md' 
          : 'bg-transparent'
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button
              onClick={() => scrollToSection('home')}
              className="text-2xl font-bold text-gradient cursor-pointer"
            >
              RC
            </button>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigationItems.map((item) => (
                <motion.button
                  key={item.href}
                  onClick={() => scrollToSection(item.href.replace('#', ''))}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                    activeSection === item.href.replace('#', '')
                      ? 'text-primary'
                      : 'hover:text-primary'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            {/* Resume Download */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={handleDownloadResume}
                variant="ghost"
                size="sm"
                className="glass-card hidden sm:flex items-center gap-2"
              >
                <Download className="h-4 w-4" />
                CV
              </Button>
            </motion.div>

            {/* Contact Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={() => scrollToSection('contact')}
                variant="ghost"
                size="sm"
                className="glass-card hidden sm:flex items-center gap-2"
              >
                <Mail className="h-4 w-4" />
                Contact
              </Button>
            </motion.div>

            {/* Theme Toggle */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Button
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                variant="ghost"
                size="sm"
                className="glass-card p-2"
              >
                {theme === "light" ? (
                  <Moon className="h-4 w-4" />
                ) : (
                  <Sun className="h-4 w-4" />
                )}
              </Button>
            </motion.div>

            {/* Mobile menu button */}
            <motion.div
              className="md:hidden"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                variant="ghost"
                size="sm"
                className="glass-card p-2"
              >
                {isMobileMenuOpen ? (
                  <X className="h-4 w-4" />
                ) : (
                  <Menu className="h-4 w-4" />
                )}
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <motion.div
          className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isMobileMenuOpen ? 1 : 0, 
            height: isMobileMenuOpen ? 'auto' : 0 
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="glass-card mt-2 rounded-lg p-2">
            {navigationItems.map((item) => (
              <motion.button
                key={item.href}
                onClick={() => scrollToSection(item.href.replace('#', ''))}
                className={`block w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeSection === item.href.replace('#', '')
                    ? 'text-primary bg-primary/10'
                    : 'hover:text-primary hover:bg-primary/5'
                }`}
                whileHover={{ x: 5 }}
              >
                {item.label}
              </motion.button>
            ))}
            <div className="mt-4 pt-4 border-t border-border/50">
              <motion.button
                onClick={handleDownloadResume}
                className="flex items-center gap-2 w-full px-3 py-2 text-sm font-medium hover:text-primary transition-colors"
                whileHover={{ x: 5 }}
              >
                <Download className="h-4 w-4" />
                Download CV
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}
