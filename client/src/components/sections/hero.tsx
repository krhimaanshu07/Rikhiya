import { motion } from "framer-motion";
import { ChevronDown, Download, Mail, Phone, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeInUp, fadeIn, staggerContainer, staggerItem } from "../../lib/animations";

export default function Hero() {
  const handleDownloadResume = () => {
    // Direct link to trigger download
    window.open('/api/resume', '_blank');
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden gradient-bg">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            y: [0, 20, 0],
            x: [0, -15, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: -3
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: -1.5
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {/* Profile Image */}
          <motion.div
            variants={staggerItem}
            whileHover={{ scale: 1.05 }}
            className="mb-8"
          >
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-primary to-secondary p-1">
              <img
                src="https://drive.google.com/uc?export=view&id=10vXFtYHSquCl1moo-balcExPBn9dLg1p"
                alt="Rikhia Chakraborty - Professional Profile"
                className="w-full h-full rounded-full object-cover border-4 border-white/20 shadow-2xl"
              />
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white"
            variants={staggerItem}
          >
            <motion.span className="block">Hi, I'm</motion.span>
            <motion.span 
              className="block text-gradient bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Rikhia Chakraborty
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed"
            variants={staggerItem}
          >
            Executive Assistant & Administrator with expertise in organizational management, 
            stakeholder coordination, and operational excellence.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            variants={staggerItem}
          >
            <Button
              onClick={scrollToContact}
              className="glass-card px-8 py-3 text-white font-medium hover:scale-105 transition-transform duration-300 border-0 bg-white/10 backdrop-blur-sm"
              size="lg"
            >
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </Button>
            <Button
              onClick={handleDownloadResume}
              variant="outline"
              className="glass-card px-8 py-3 text-white font-medium hover:scale-105 transition-transform duration-300 border-white/20 hover:bg-white/10"
              size="lg"
            >
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex justify-center space-x-6"
            variants={staggerItem}
          >
            <motion.a
              href="mailto:rikhiachakraborty3@gmail.com"
              className="text-white/80 hover:text-white transition-colors"
              whileHover={{ scale: 1.25 }}
              whileTap={{ scale: 0.9 }}
            >
              <Mail className="h-6 w-6" />
            </motion.a>
            <motion.a
              href="tel:+919064067827"
              className="text-white/80 hover:text-white transition-colors"
              whileHover={{ scale: 1.25 }}
              whileTap={{ scale: 0.9 }}
            >
              <Phone className="h-6 w-6" />
            </motion.a>
            <motion.a
              href="#"
              className="text-white/80 hover:text-white transition-colors"
              whileHover={{ scale: 1.25 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin className="h-6 w-6" />
            </motion.a>
            <motion.a
              href="#"
              className="text-white/80 hover:text-white transition-colors"
              whileHover={{ scale: 1.25 }}
              whileTap={{ scale: 0.9 }}
            >
              <Twitter className="h-6 w-6" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="h-8 w-8 text-white/60" />
      </motion.div>
    </section>
  );
}
