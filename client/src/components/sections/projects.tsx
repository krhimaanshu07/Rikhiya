import { motion } from "framer-motion";
import { useState } from "react";
import { ExternalLink, Calendar, Plane, GraduationCap, Database, Users, Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { fadeInUp, staggerContainer, staggerItem } from "../../lib/animations";
import ProjectModal from "../modals/project-modal";

const projectFilters = [
  { id: "all", label: "All Projects" },
  { id: "executive", label: "Executive Support" },
  { id: "admin", label: "Administration" },
  { id: "coordination", label: "Coordination" },
];

const projects = [
  {
    id: 1,
    title: "Executive Calendar Optimization",
    description: "Implemented comprehensive calendar management system for President, resulting in 40% increase in meeting efficiency and strategic alignment.",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    category: "executive",
    tags: ["Calendar Management", "Stakeholder Coordination"],
    company: "Rashmi Group",
    icon: Calendar
  },
  {
    id: 2,
    title: "Travel Coordination Excellence", 
    description: "Managed complex multi-destination travel arrangements with 25% cost reduction while maintaining quality standards and executive preferences.",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    category: "executive",
    tags: ["Travel Management", "Budget Optimization"],
    company: "Rashmi Group",
    icon: Plane
  },
  {
    id: 3,
    title: "School Operations Overhaul",
    description: "Streamlined administrative processes at Griffins International School, improving operational efficiency by 35% and student satisfaction scores.",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    category: "admin",
    tags: ["Process Optimization", "CRM Management"],
    company: "Griffins International",
    icon: GraduationCap
  },
  {
    id: 4,
    title: "ERP System Implementation",
    description: "Led successful implementation of integrated CRM/ERP system, reducing manual processes by 60% and improving data accuracy to 98%.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    category: "admin",
    tags: ["ERP Systems", "Data Management"],
    company: "Griffins International", 
    icon: Database
  },
  {
    id: 5,
    title: "Cross-Functional Team Leadership",
    description: "Coordinated multi-departmental projects involving 15+ stakeholders, achieving 95% on-time delivery rate and improved communication flow.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    category: "coordination",
    tags: ["Project Management", "Team Leadership"],
    company: "Multi-Organization",
    icon: Users
  },
  {
    id: 6,
    title: "Strategic Event Management",
    description: "Orchestrated high-profile corporate events and stakeholder meetings, managing budgets up to $50K with 100% client satisfaction rating.",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    category: "coordination",
    tags: ["Event Management", "Budget Management"],
    company: "Various Clients",
    icon: Award
  }
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const handleProjectClick = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-4xl font-bold mb-4 text-gradient">Professional Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Key projects and achievements demonstrating expertise and impact
          </p>
        </motion.div>

        {/* Project Filters */}
        <motion.div
          className="flex justify-center mb-12"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="glass-card rounded-full p-1 inline-flex">
            {projectFilters.map((filter) => (
              <Button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                variant={activeFilter === filter.id ? "default" : "ghost"}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === filter.id 
                    ? "bg-primary text-primary-foreground shadow-md" 
                    : "hover:bg-primary/10"
                }`}
              >
                {filter.label}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          key={activeFilter} // Key prop to trigger re-animation on filter change
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              className="glass-card rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 group"
              variants={staggerItem}
              layout
              whileHover={{ y: -5 }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <motion.div
                  className="absolute top-4 right-4 p-2 glass-card rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ scale: 1.1, rotate: 15 }}
                >
                  <project.icon className="h-5 w-5 text-primary" />
                </motion.div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="secondary" className="text-xs font-medium">
                    {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                  </Badge>
                  <span className="text-sm text-muted-foreground">{project.company}</span>
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Project Link */}
                <div className="flex items-center justify-between">
                  <motion.button
                    onClick={() => handleProjectClick(project)}
                    className="flex items-center text-sm text-primary hover:text-primary/80 cursor-pointer"
                    whileHover={{ x: 5 }}
                  >
                    <span className="mr-2">View Details</span>
                    <ExternalLink className="h-4 w-4" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* No projects message for empty filters */}
        {filteredProjects.length === 0 && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-muted-foreground">No projects found for the selected filter.</p>
          </motion.div>
        )}
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
}
