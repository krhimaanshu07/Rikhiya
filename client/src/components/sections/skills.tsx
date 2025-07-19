import { motion } from "framer-motion";
import { 
  Settings, 
  MessageSquare, 
  Laptop, 
  Users, 
  Lightbulb, 
  Clock,
  CheckCircle 
} from "lucide-react";
import { fadeInUp, scaleIn, staggerContainer, staggerItem } from "../../lib/animations";

const skillCategories = [
  {
    title: "Administrative Excellence",
    icon: Settings,
    color: "text-primary",
    skills: [
      "Calendar Management",
      "Travel Coordination", 
      "Document Management",
      "Meeting Coordination"
    ]
  },
  {
    title: "Communication",
    icon: MessageSquare,
    color: "text-secondary",
    skills: [
      "Stakeholder Liaison",
      "Professional Correspondence",
      "Report Preparation",
      "Cross-functional Coordination"
    ]
  },
  {
    title: "Technical Proficiency",
    icon: Laptop,
    color: "text-cyan-500",
    skills: [
      "Microsoft Office Suite",
      "CRM & ERP Systems",
      "Project Management Tools",
      "Data Analysis & Reporting"
    ]
  },
  {
    title: "Leadership & Management",
    icon: Users,
    color: "text-emerald-500",
    skills: [
      "Team Coordination",
      "Process Optimization", 
      "Strategic Planning",
      "Quality Assurance"
    ]
  },
  {
    title: "Problem Solving",
    icon: Lightbulb,
    color: "text-yellow-500",
    skills: [
      "Critical Thinking",
      "Crisis Management",
      "Analytical Skills",
      "Decision Making"
    ]
  },
  {
    title: "Time & Task Management",
    icon: Clock,
    color: "text-purple-500",
    skills: [
      "Priority Management",
      "Deadline Adherence",
      "Multitasking",
      "Efficiency Optimization"
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-4xl font-bold mb-4 text-gradient">Skills & Competencies</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Core competencies and technical skills developed through professional experience
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className="neomorphism p-8 hover:scale-105 transition-all duration-300 group"
              variants={staggerItem}
              whileHover={{ y: -5 }}
            >
              {/* Icon and Title */}
              <div className="text-center mb-6">
                <motion.div
                  className={`inline-flex p-4 rounded-full bg-gradient-to-br from-background to-muted mb-4 ${category.color}`}
                  whileHover={{ 
                    rotate: 360,
                    scale: 1.1
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <category.icon className="h-8 w-8" />
                </motion.div>
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <motion.ul 
                className="space-y-3"
                variants={staggerContainer}
              >
                {category.skills.map((skill, skillIndex) => (
                  <motion.li
                    key={skill}
                    className="flex items-center text-muted-foreground group-hover:text-foreground transition-colors"
                    variants={staggerItem}
                    custom={skillIndex}
                  >
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      transition={{ duration: 0.2 }}
                    >
                      <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                    </motion.div>
                    <span className="text-sm">{skill}</span>
                  </motion.li>
                ))}
              </motion.ul>

              {/* Hover Effect Overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                initial={{ scale: 0.8 }}
                whileHover={{ scale: 1 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills Summary */}
        <motion.div
          className="mt-16 text-center"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="glass-card p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-gradient">
              Professional Expertise Summary
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              With over 3 years of progressive experience in executive support and administration, 
              I have developed a comprehensive skill set that encompasses both traditional administrative 
              excellence and modern digital proficiency. My expertise spans from managing complex executive 
              schedules and coordinating high-level stakeholder relationships to implementing efficient 
              CRM/ERP systems and optimizing organizational processes.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
