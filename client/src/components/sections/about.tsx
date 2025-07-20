import { motion } from "framer-motion";
import { fadeInUp, slideInLeft, slideInRight, staggerContainer, staggerItem } from "../../lib/animations";

export default function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-4xl font-bold mb-4 text-gradient">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my professional journey and expertise
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={slideInLeft}
          >
            <div className="relative">
              <motion.div
                className="neomorphism overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="https://drive.google.com/uc?export=view&id=10vXFtYHSquCl1moo-balcExPBn9dLg1p"
                  alt="Rikhia Chakraborty - Professional Profile"
                  className="w-full h-auto rounded-2xl"
                />
              </motion.div>
              {/* Floating elements for visual interest */}
              <motion.div
                className="absolute -top-6 -right-6 w-12 h-12 bg-primary/20 rounded-full backdrop-blur-sm"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-8 h-8 bg-secondary/20 rounded-full backdrop-blur-sm"
                animate={{
                  y: [0, 10, 0],
                  rotate: [360, 180, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h3 
              className="text-3xl font-bold mb-6"
              variants={staggerItem}
            >
              Professional Summary
            </motion.h3>
            
            <motion.p 
              className="text-lg text-muted-foreground mb-6 leading-relaxed"
              variants={staggerItem}
            >
              Highly organized and detail-oriented Executive Assistant with proven experience in 
              managing executive calendars, travel arrangements, and coordination of high-level meetings. 
              Proficient in managing confidential documents and acting as a liaison with stakeholders.
            </motion.p>
            
            <motion.p 
              className="text-lg text-muted-foreground mb-8 leading-relaxed"
              variants={staggerItem}
            >
              Excellent at multitasking and prioritizing tasks to ensure smooth functioning and timely 
              delivery of projects. Currently pursuing MBA in International Business while maintaining 
              excellence in executive support roles.
            </motion.p>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-2 gap-6"
              variants={staggerItem}
            >
              <motion.div 
                className="text-center glass-card p-6 rounded-xl"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="text-3xl font-bold text-primary mb-2"
                  animate={{ 
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                >
                  3+
                </motion.div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </motion.div>
              
              <motion.div 
                className="text-center glass-card p-6 rounded-xl"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="text-3xl font-bold text-secondary mb-2"
                  animate={{ 
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: 1
                  }}
                >
                  50+
                </motion.div>
                <div className="text-sm text-muted-foreground">Projects Managed</div>
              </motion.div>
            </motion.div>

            {/* Education Highlight */}
            <motion.div 
              className="mt-8 p-6 glass-card rounded-xl border-l-4 border-primary"
              variants={staggerItem}
            >
              <h4 className="font-semibold text-primary mb-2">Current Education</h4>
              <p className="text-muted-foreground">
                MBA in International Business - Chandigarh University (2023-2025)
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Expanding expertise in global business strategies and management principles
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
