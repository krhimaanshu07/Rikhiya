import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Twitter, Instagram, Heart } from "lucide-react";
import { fadeInUp, staggerContainer, staggerItem } from "../../lib/animations";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Blog", href: "#blog" },
  ];

  const services = [
    "Executive Support",
    "Administrative Management", 
    "Project Coordination",
    "Stakeholder Relations",
  ];

  const socialLinks = [
    { icon: Mail, href: "mailto:rikhiachakraborty3@gmail.com", label: "Email" },
    { icon: Phone, href: "tel:+919064067827", label: "Phone" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-slate-400 py-12 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/5 rounded-full blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: -5
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {/* Brand Section */}
          <motion.div 
            className="md:col-span-2"
            variants={staggerItem}
          >
            <motion.h3 
              className="text-2xl font-bold text-white mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-gradient bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Rikhia Chakraborty
              </span>
            </motion.h3>
            <p className="mb-6 max-w-md leading-relaxed">
              Professional Executive Assistant and Administrator dedicated to organizational 
              excellence and stakeholder success. Committed to delivering exceptional support 
              and driving operational efficiency.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="text-slate-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  title={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={staggerItem}>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <motion.li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href.replace('#', ''))}
                    className="hover:text-white transition-colors hover:translate-x-1 transform duration-200 text-left"
                  >
                    {link.label}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={staggerItem}>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <motion.li 
                  key={service}
                  className="hover:text-white transition-colors"
                  whileHover={{ x: 5 }}
                >
                  {service}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Professional Credentials */}
        <motion.div
          className="mt-8 pt-8 border-t border-slate-800 grid grid-cols-1 md:grid-cols-2 gap-6"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={staggerItem}>
            <h4 className="text-white font-semibold mb-2">Current Education</h4>
            <p className="text-sm">
              MBA in International Business - Chandigarh University (2023-2025)
            </p>
          </motion.div>
          
          <motion.div variants={staggerItem}>
            <h4 className="text-white font-semibold mb-2">Professional Experience</h4>
            <p className="text-sm">
              3+ Years in Executive Support & Administration
            </p>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          className="border-t border-slate-800 mt-8 pt-8 text-center"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <p className="flex items-center justify-center gap-2 text-sm">
            © {currentYear} Rikhia Chakraborty. All rights reserved. | Built with 
            <motion.span
              className="inline-flex items-center gap-1"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Heart className="h-3 w-3 text-red-500 fill-current" />
            </motion.span>
            and precision.
          </p>
          <motion.p 
            className="mt-2 text-xs text-slate-500"
            variants={fadeInUp}
          >
            Designed for excellence in administrative and executive support
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
}
