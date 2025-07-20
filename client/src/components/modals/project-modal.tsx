import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Users, Target, CheckCircle2, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  tags: string[];
  company: string;
  icon: any;
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const projectDetailsMap: Record<number, any> = {
  1: {
    duration: "Sept 2023 - Present",
    objectives: [
      "Optimize executive calendar efficiency by 40%",
      "Implement strategic meeting alignment protocols",
      "Reduce scheduling conflicts and maximize productive time",
      "Establish clear priority-based scheduling framework"
    ],
    challenges: [
      "Managing competing priorities from multiple stakeholders",
      "Coordinating across different time zones and availability",
      "Balancing urgent requests with strategic planning sessions",
      "Maintaining flexibility while ensuring structured approach"
    ],
    solutions: [
      "Developed comprehensive calendar management system using advanced scheduling tools",
      "Implemented color-coded priority system for different meeting types",
      "Created automated reminder systems for key stakeholders",
      "Established clear protocols for emergency schedule changes"
    ],
    outcomes: [
      "40% increase in meeting efficiency and productivity",
      "95% reduction in scheduling conflicts",
      "Improved stakeholder satisfaction with meeting coordination",
      "Enhanced strategic alignment of executive time allocation"
    ],
    fullDescription: `This comprehensive project involved redesigning the entire calendar management approach for the President of Rashmi Group. The initiative began with a thorough analysis of existing scheduling patterns and identification of key inefficiencies. Through careful stakeholder consultation and process mapping, I developed a robust system that transformed how executive time is managed and allocated.

The implementation involved multiple phases, starting with establishing clear categorization of meetings based on strategic importance, operational necessity, and stakeholder value. I introduced a sophisticated color-coding system that allows immediate visual recognition of meeting types and priorities. Advanced scheduling tools were integrated to automate routine tasks while maintaining human oversight for complex decisions.

Key innovations included the development of buffer time protocols to handle urgent matters without disrupting planned activities, implementation of rolling agenda systems for recurring meetings, and creation of stakeholder communication frameworks that ensure all parties are informed of schedule changes well in advance.

The project's success was measured through multiple metrics including meeting effectiveness scores, stakeholder feedback, and time utilization analysis. The 40% efficiency improvement was achieved through reduced meeting preparation time, elimination of scheduling conflicts, and better alignment of meeting purposes with available time slots.

This initiative has become a template for executive support best practices within the organization and has been recognized as a significant contribution to operational excellence. The system continues to evolve with regular reviews and updates based on changing business needs and stakeholder requirements.`
  },
  2: {
    duration: "Sept 2023 - Present",
    objectives: [
      "Reduce travel costs by 25% while maintaining quality",
      "Streamline multi-destination travel coordination",
      "Ensure executive preferences and comfort standards",
      "Implement sustainable travel practices where possible"
    ],
    challenges: [
      "Complex multi-destination itineraries with tight timelines",
      "Last-minute changes due to business priorities",
      "Balancing cost optimization with comfort requirements",
      "Coordinating with international partners and venues"
    ],
    solutions: [
      "Established partnerships with preferred travel vendors for better rates",
      "Developed comprehensive travel preference profiles",
      "Implemented digital travel management platform",
      "Created contingency planning protocols for travel disruptions"
    ],
    outcomes: [
      "25% reduction in travel costs without compromising quality",
      "100% on-time travel execution with zero missed connections",
      "Enhanced travel experience through personalized arrangements",
      "Improved expense tracking and budget management"
    ],
    fullDescription: `The Travel Coordination Excellence project represents a complete transformation of how executive travel is planned, executed, and managed within Rashmi Group. This initiative emerged from the need to optimize travel investments while ensuring that executive productivity and comfort remain uncompromised.

The project began with a comprehensive analysis of existing travel patterns, cost structures, and stakeholder satisfaction levels. Through detailed vendor negotiations and relationship building, I established strategic partnerships with airlines, hotels, and ground transportation providers to secure preferential rates and service levels.

A key innovation was the development of detailed executive travel preference profiles that capture everything from seating preferences and dietary requirements to preferred meeting locations and accommodation standards. This systematic approach ensures consistency across all travel arrangements while enabling rapid decision-making for time-sensitive bookings.

The implementation of a digital travel management platform streamlined the entire process from initial request to expense reconciliation. This system provides real-time tracking, automated approvals for standard requests, and comprehensive reporting capabilities that enable continuous optimization.

Risk management became a critical component, with comprehensive contingency planning for weather disruptions, flight changes, and emergency situations. The development of alternative routing options and backup accommodation arrangements ensures business continuity regardless of travel challenges.

The 25% cost reduction was achieved through strategic vendor partnerships, advance booking optimization, and careful analysis of travel patterns to identify consolidation opportunities. This success has positioned the travel management approach as a best practice model within the organization.`
  },
  3: {
    duration: "Apr 2021 - Sept 2023",
    objectives: [
      "Improve operational efficiency by 35%",
      "Enhance student and parent satisfaction scores",
      "Streamline administrative processes across departments",
      "Implement modern CRM systems for better data management"
    ],
    challenges: [
      "Legacy systems requiring comprehensive updates",
      "Resistance to change from long-term staff members",
      "Multiple departments with varying workflows",
      "Limited technology infrastructure for modernization"
    ],
    solutions: [
      "Conducted comprehensive process mapping and analysis",
      "Implemented phased change management approach",
      "Introduced integrated CRM/ERP system for school operations",
      "Developed training programs for staff adaptation"
    ],
    outcomes: [
      "35% improvement in operational efficiency",
      "90% increase in parent satisfaction scores",
      "Reduced administrative processing time by 50%",
      "Enhanced data accuracy and reporting capabilities"
    ],
    fullDescription: `The School Operations Overhaul at Griffins International School represented one of the most comprehensive administrative transformation projects in the institution's history. This two-and-a-half-year initiative touched every aspect of school operations, from admissions and enrollment to student records management and parent communication.

The project commenced with an extensive analysis of existing processes, identifying bottlenecks, redundancies, and opportunities for improvement. Through stakeholder interviews with teachers, staff, parents, and students, I developed a clear understanding of pain points and areas requiring immediate attention.

A critical component was the implementation of an integrated CRM/ERP system that unified previously disparate administrative functions. This system transformation involved careful data migration, staff training, and process reengineering to ensure seamless adoption across all departments.

Change management played a vital role in the project's success. I developed comprehensive training programs tailored to different user groups, established feedback mechanisms for continuous improvement, and created support structures to help staff adapt to new processes and technologies.

The admissions process received particular attention, with the development of streamlined workflows that reduced processing time from weeks to days while improving the overall experience for prospective families. Parent communication systems were enhanced to provide real-time access to student information and school updates.

The 35% efficiency improvement was achieved through process automation, elimination of redundant steps, and better information flow between departments. This transformation has become a reference model for other educational institutions seeking similar improvements.`
  },
  4: {
    duration: "Apr 2021 - Sept 2023",
    objectives: [
      "Reduce manual processes by 60%",
      "Improve data accuracy to 98%",
      "Enhance reporting capabilities for management decisions",
      "Create integrated workflows across all departments"
    ],
    challenges: [
      "Complex data migration from legacy systems",
      "Staff training requirements for new technology",
      "Integration with existing educational platforms",
      "Ensuring data security and privacy compliance"
    ],
    solutions: [
      "Phased implementation approach to minimize disruption",
      "Comprehensive staff training and support programs",
      "Custom integration solutions for educational platforms",
      "Robust data security protocols and backup systems"
    ],
    outcomes: [
      "60% reduction in manual processing requirements",
      "98% data accuracy achievement across all modules",
      "Real-time reporting capabilities for management",
      "Improved compliance with educational regulations"
    ],
    fullDescription: `The ERP System Implementation project at Griffins International School was a transformative initiative that modernized the entire technology infrastructure and administrative processes. This comprehensive project involved selecting, customizing, and implementing an enterprise-grade system capable of handling all aspects of school management.

The project began with extensive requirements gathering across all departments to understand specific needs and workflows. Through careful vendor evaluation and proof-of-concept testing, I identified a solution that could meet the diverse needs of educational administration while providing scalability for future growth.

Data migration represented one of the most critical and complex phases of the project. Working with years of historical data across multiple legacy systems, I developed comprehensive mapping strategies and validation processes to ensure complete accuracy in the transition. Multiple backup and rollback procedures were established to mitigate any potential data loss.

Staff training was approached as a multi-phase initiative with role-specific modules designed to build confidence and competency gradually. I created user manuals, video tutorials, and hands-on workshops tailored to different skill levels and responsibilities within the organization.

The system's reporting capabilities transformed how management makes data-driven decisions. Custom dashboards were developed to provide real-time insights into enrollment trends, academic performance, financial metrics, and operational efficiency indicators.

Security and compliance considerations were paramount throughout the implementation. I worked closely with IT specialists to ensure that all data protection requirements were met and that the system aligned with educational privacy regulations and best practices.

The achievement of 98% data accuracy and 60% reduction in manual processes has fundamentally changed how the school operates, creating more time for educators to focus on teaching and learning rather than administrative tasks.`
  },
  5: {
    duration: "Multi-Organization Experience",
    objectives: [
      "Achieve 95% on-time delivery rate for projects",
      "Improve communication flow between departments",
      "Establish clear accountability frameworks",
      "Create scalable project management processes"
    ],
    challenges: [
      "Coordinating across multiple departments with different priorities",
      "Managing stakeholder expectations and communication",
      "Balancing competing resource requirements",
      "Ensuring consistent project quality across different teams"
    ],
    solutions: [
      "Implemented standardized project management frameworks",
      "Developed clear communication protocols and channels",
      "Established regular stakeholder review meetings",
      "Created comprehensive project documentation systems"
    ],
    outcomes: [
      "95% on-time delivery rate across all managed projects",
      "Improved stakeholder satisfaction scores by 40%",
      "Enhanced team collaboration and communication",
      "Established replicable project management best practices"
    ],
    fullDescription: `The Cross-Functional Team Leadership initiative represented a strategic approach to improving project outcomes through enhanced coordination and communication across multiple organizational departments. This comprehensive project involved managing teams of 15+ stakeholders from diverse functional areas including operations, finance, marketing, human resources, and technology.

The foundation of this project was the establishment of standardized project management frameworks that could be adapted to different types of initiatives while maintaining consistency in approach and execution. Through careful analysis of organizational needs and industry best practices, I developed templates, processes, and communication protocols that enhanced project visibility and accountability.

Communication flow improvement became a central focus, with the implementation of regular stakeholder meetings, structured reporting mechanisms, and clear escalation procedures. These systems ensured that all team members remained informed of project progress, challenges, and changing requirements while maintaining alignment with organizational objectives.

Resource coordination required sophisticated planning and negotiation skills to balance competing departmental priorities and availability constraints. I developed resource allocation matrices and contingency planning processes that enabled flexible response to changing project needs while maintaining delivery commitments.

The project also emphasized the development of team members' project management capabilities through mentoring, training, and knowledge sharing initiatives. This approach not only improved immediate project outcomes but also built organizational capacity for future initiatives.

Quality assurance processes were integrated throughout the project lifecycle, with regular review points and stakeholder feedback mechanisms ensuring that deliverables met or exceeded expectations. The establishment of clear success metrics and regular performance monitoring enabled continuous improvement and optimization.

The achievement of a 95% on-time delivery rate represents a significant improvement over previous performance levels and has established new standards for project management excellence within the organizations involved.`
  },
  6: {
    duration: "Various Client Engagements",
    objectives: [
      "Achieve 100% client satisfaction rating",
      "Manage event budgets up to $50K effectively",
      "Create memorable and impactful corporate experiences",
      "Establish long-term client relationships"
    ],
    challenges: [
      "Managing multiple simultaneous events with varying requirements",
      "Coordinating with diverse vendor networks",
      "Balancing budget constraints with quality expectations",
      "Handling last-minute changes and emergency situations"
    ],
    solutions: [
      "Developed comprehensive event planning templates and checklists",
      "Established trusted vendor networks for reliable service delivery",
      "Implemented detailed budget tracking and approval processes",
      "Created comprehensive contingency planning for all scenarios"
    ],
    outcomes: [
      "100% client satisfaction rating across all managed events",
      "Consistent delivery within budget parameters",
      "Recognition as preferred event coordinator for repeat business",
      "Successful management of high-profile corporate events"
    ],
    fullDescription: `The Strategic Event Management portfolio encompasses a diverse range of high-profile corporate events and stakeholder meetings that required exceptional attention to detail, creative problem-solving, and flawless execution. This comprehensive body of work demonstrates expertise in managing complex logistics while creating meaningful experiences that drive business objectives.

Each event began with thorough client consultation to understand specific objectives, target audiences, budget parameters, and success metrics. Through detailed planning processes, I developed comprehensive event strategies that aligned with broader business goals while ensuring memorable experiences for all participants.

Vendor management became a critical success factor, with the development of trusted networks of suppliers, venues, catering services, and technical support providers. These relationships enabled consistent quality delivery while optimizing costs and ensuring reliability across different event types and scales.

Budget management required sophisticated tracking and approval processes to ensure that all expenditures aligned with approved parameters while maintaining flexibility for necessary adjustments. Detailed financial reporting provided transparency to clients and enabled informed decision-making throughout the planning process.

Risk management and contingency planning were integral to every event, with comprehensive backup plans for weather issues, venue problems, vendor failures, and other potential disruptions. These preparations ensured that events could proceed successfully regardless of unforeseen challenges.

The coordination of stakeholder meetings required particular attention to protocol, preferences, and business etiquette. Understanding the dynamics between different participants and creating environments conducive to productive discussions became a key differentiator in service delivery.

Post-event analysis and feedback collection enabled continuous improvement and relationship building with clients. The consistent achievement of 100% satisfaction ratings has resulted in significant repeat business and referrals, establishing a strong reputation in the corporate event management field.`
  }
};

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!project) return null;

  const details = projectDetailsMap[project.id];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-card rounded-2xl"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover rounded-t-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-t-2xl" />
              
              <Button
                onClick={onClose}
                variant="ghost"
                size="sm"
                className="absolute top-4 right-4 glass-card p-2 hover:bg-white/20"
              >
                <X className="h-5 w-5 text-white" />
              </Button>

              <div className="absolute bottom-4 left-6 text-white">
                <Badge variant="secondary" className="mb-2">
                  {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                </Badge>
                <h2 className="text-3xl font-bold">{project.title}</h2>
                <p className="text-white/90">{project.company}</p>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              {/* Project Overview */}
              <div className="mb-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    <span className="text-sm text-muted-foreground">{details?.duration}</span>
                  </div>
                  <div className="flex gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              {/* Objectives */}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary" />
                  Project Objectives
                </h3>
                <ul className="space-y-2">
                  {details?.objectives.map((objective: string, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{objective}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Key Challenges */}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">Key Challenges</h3>
                <ul className="space-y-2">
                  {details?.challenges.map((challenge: string, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Solutions Implemented */}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">Solutions Implemented</h3>
                <ul className="space-y-2">
                  {details?.solutions.map((solution: string, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{solution}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Key Outcomes */}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">Key Outcomes</h3>
                <ul className="space-y-2">
                  {details?.outcomes.map((outcome: string, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Detailed Description */}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">Detailed Project Analysis</h3>
                <div className="prose prose-slate dark:prose-invert max-w-none">
                  {details?.fullDescription.split('\n\n').map((paragraph: string, index: number) => (
                    <p key={index} className="text-muted-foreground leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="pt-6 border-t border-border">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-muted-foreground">
                    Estimated reading time: 5-7 minutes
                  </div>
                  <Button
                    onClick={onClose}
                    className="bg-gradient-to-r from-primary to-secondary text-primary-foreground"
                  >
                    Close Details
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}