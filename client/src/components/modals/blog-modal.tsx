import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Clock, User, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  readTime: string;
  publishDate: string;
  categoryColor: string;
}

interface BlogModalProps {
  post: BlogPost | null;
  isOpen: boolean;
  onClose: () => void;
}

const blogContentMap: Record<number, any> = {
  1: {
    author: "Rikhia Chakraborty",
    content: `
      <h2>Introduction</h2>
      <p>In today's fast-paced corporate environment, effective calendar management has become a cornerstone of executive productivity. As we navigate through 2025, the role of executive assistants in optimizing leadership schedules has never been more critical. This comprehensive guide explores advanced strategies and cutting-edge tools that can transform how we approach executive calendar management.</p>

      <h2>The Evolution of Calendar Management</h2>
      <p>The traditional approach to calendar management—simple appointment booking and basic scheduling—has evolved into a sophisticated discipline that requires strategic thinking, technological proficiency, and deep understanding of business priorities. Modern executive assistants must now function as strategic partners, ensuring that every minute of an executive's time contributes to organizational objectives.</p>
      
      <p>Through my experience managing complex executive schedules at Rashmi Group, I've witnessed firsthand how proper calendar optimization can result in dramatic improvements in productivity and decision-making quality. The key lies in moving beyond reactive scheduling to proactive time architecture.</p>

      <h2>Core Principles of Strategic Calendar Management</h2>
      
      <h3>1. Priority-Based Time Allocation</h3>
      <p>The foundation of effective calendar management rests on understanding and implementing priority-based time allocation. This involves categorizing activities into strategic, operational, and administrative buckets, with clear guidelines for time distribution across each category.</p>
      
      <p>Strategic activities—such as long-term planning sessions, stakeholder meetings, and innovation discussions—should receive prime time slots when executive energy and focus are at their peak. Operational matters can be scheduled during secondary periods, while administrative tasks should be batched and handled during lower-energy periods.</p>

      <h3>2. Energy Management Over Time Management</h3>
      <p>Understanding an executive's natural energy patterns is crucial for optimal scheduling. Some leaders are most effective in early morning hours, while others peak in the afternoon. By aligning high-impact activities with peak energy periods, we can dramatically improve decision quality and meeting effectiveness.</p>

      <h3>3. Buffer Time Architecture</h3>
      <p>One of the most critical elements of modern calendar management is the strategic implementation of buffer time. These aren't empty spaces in the calendar—they're carefully designed periods that allow for reflection, preparation, and handling of urgent matters without disrupting planned activities.</p>

      <h2>Advanced Tools and Technologies</h2>

      <h3>AI-Powered Scheduling Assistants</h3>
      <p>The integration of artificial intelligence in calendar management has revolutionized how we approach scheduling conflicts and optimization. Modern AI tools can analyze patterns, predict conflicts, and suggest optimal meeting times based on participant preferences and historical data.</p>

      <h3>Integration Platforms</h3>
      <p>Seamless integration between calendar systems, email platforms, and project management tools creates a unified ecosystem that enhances visibility and reduces administrative overhead. This integration enables real-time updates and automated conflict resolution.</p>

      <h2>Managing Competing Priorities</h2>
      
      <p>One of the greatest challenges in executive calendar management is handling competing priorities from multiple stakeholders. The solution lies in establishing clear frameworks for priority assessment and stakeholder communication.</p>

      <p>I've developed a systematic approach that involves regular stakeholder communication, transparent priority-setting processes, and established protocols for handling urgent requests. This approach has reduced scheduling conflicts by 95% while improving stakeholder satisfaction.</p>

      <h2>The Human Element</h2>

      <p>While technology provides powerful tools for calendar optimization, the human element remains irreplaceable. Understanding executive preferences, reading between the lines of stakeholder requests, and maintaining flexibility while ensuring structure requires emotional intelligence and professional intuition that no software can replicate.</p>

      <h2>Measuring Success</h2>

      <p>Effective calendar management should be measured not just by the absence of conflicts, but by the quality of outcomes achieved. Key metrics include meeting effectiveness scores, goal achievement rates, and stakeholder feedback on time utilization.</p>

      <h2>Future Trends</h2>

      <p>As we look toward the future of executive support, several trends are emerging: increased emphasis on async communication, virtual-first meeting design, and the integration of wellness considerations into scheduling decisions. Executive assistants who master these evolving requirements will become indispensable strategic partners.</p>

      <h2>Conclusion</h2>

      <p>Mastering executive calendar management in 2025 requires a combination of strategic thinking, technological proficiency, and deep understanding of human dynamics. By implementing the principles and strategies outlined in this guide, executive assistants can transform from schedulers to strategic partners, driving measurable improvements in organizational effectiveness.</p>

      <p>The investment in sophisticated calendar management pays dividends not only in improved productivity but also in enhanced decision-making quality, better stakeholder relationships, and ultimately, superior business outcomes. As the role of executive support continues to evolve, calendar management remains a fundamental skill that separates exceptional assistants from the merely competent.</p>
    `,
    keyTakeaways: [
      "Implement priority-based time allocation for maximum impact",
      "Align activities with natural energy patterns",
      "Use AI-powered tools to optimize scheduling efficiency",
      "Create buffer time architecture for flexibility",
      "Measure success through outcomes, not just conflict avoidance"
    ]
  },
  2: {
    author: "Rikhia Chakraborty",
    content: `
      <h2>The Digital Revolution in Administrative Operations</h2>
      <p>The landscape of administrative operations has undergone a profound transformation in recent years. Digital transformation is no longer a future consideration—it's an immediate necessity for organizations seeking to maintain competitive advantage and operational efficiency. This comprehensive analysis explores how modern CRM and ERP systems are revolutionizing administrative workflows and driving unprecedented levels of organizational effectiveness.</p>

      <h2>Understanding the Digital Imperative</h2>
      <p>Traditional administrative processes, characterized by paper-based workflows, manual data entry, and disconnected systems, have become significant barriers to organizational growth. The COVID-19 pandemic accelerated the adoption of digital solutions, but many organizations still struggle with fragmented approaches that fail to deliver promised efficiencies.</p>
      
      <p>Through my experience implementing comprehensive CRM and ERP solutions at Griffins International School, I've witnessed the transformative power of integrated digital systems. The key to success lies not just in technology adoption, but in strategic implementation that aligns with organizational objectives and change management principles.</p>

      <h2>The CRM Revolution</h2>
      
      <h3>Beyond Contact Management</h3>
      <p>Modern Customer Relationship Management systems have evolved far beyond simple contact databases. Today's CRM platforms serve as comprehensive relationship orchestration tools that provide 360-degree visibility into all stakeholder interactions, enabling personalized engagement strategies and data-driven decision making.</p>

      <p>In educational settings, CRM implementation has transformed how institutions manage prospective student relationships, from initial inquiry through enrollment and beyond. The ability to track interaction history, preferences, and engagement patterns enables highly personalized communication strategies that significantly improve conversion rates and satisfaction levels.</p>

      <h3>Automated Workflow Optimization</h3>
      <p>The implementation of automated workflows within CRM systems eliminates repetitive manual tasks while ensuring consistent process execution. Lead scoring algorithms automatically prioritize prospects based on engagement levels and demographic criteria, enabling staff to focus efforts on the highest-potential opportunities.</p>

      <h2>ERP Systems: The Organizational Nervous System</h2>

      <h3>Integrated Data Architecture</h3>
      <p>Enterprise Resource Planning systems function as the organizational nervous system, connecting disparate departments and processes through unified data architecture. This integration eliminates data silos, reduces redundancy, and ensures that all stakeholders operate with consistent, real-time information.</p>

      <p>The implementation of ERP systems requires careful attention to data migration strategies, user training programs, and change management protocols. Success depends on achieving buy-in from all stakeholders and ensuring that the system supports rather than constrains existing workflows.</p>

      <h3>Real-Time Analytics and Reporting</h3>
      <p>Perhaps the most transformative aspect of modern ERP systems is their ability to provide real-time analytics and reporting capabilities. Decision-makers no longer need to wait for monthly reports or rely on intuition—they can access current performance metrics and trend analyses at any moment.</p>

      <h2>Implementation Strategies for Success</h2>

      <h3>Phased Deployment Approach</h3>
      <p>Successful digital transformation requires a phased approach that minimizes disruption while building confidence and competency. I recommend beginning with pilot programs in specific departments or processes, allowing for refinement and optimization before organization-wide deployment.</p>

      <h3>Change Management Excellence</h3>
      <p>Technology adoption fails without proper change management. This involves comprehensive training programs, clear communication about benefits and expectations, and ongoing support structures that help users adapt to new processes and capabilities.</p>

      <h2>Measuring Digital Transformation Success</h2>

      <p>The success of digital transformation initiatives should be measured through multiple metrics: efficiency gains, error reduction, user satisfaction, and ultimately, business outcomes. Key performance indicators should be established before implementation and monitored consistently throughout the transformation process.</p>

      <h3>Quantitative Metrics</h3>
      <ul>
        <li>Processing time reduction percentages</li>
        <li>Error rate improvements</li>
        <li>Cost savings achieved</li>
        <li>User adoption rates</li>
      </ul>

      <h3>Qualitative Indicators</h3>
      <ul>
        <li>Staff satisfaction and confidence levels</li>
        <li>Customer/stakeholder feedback improvements</li>
        <li>Process consistency and reliability</li>
        <li>Decision-making speed and quality</li>
      </ul>

      <h2>Overcoming Common Implementation Challenges</h2>

      <h3>Resistance to Change</h3>
      <p>Resistance to change represents one of the most significant challenges in digital transformation. This resistance often stems from fear of job displacement, concerns about increased complexity, or skepticism about promised benefits. Addressing these concerns requires transparent communication, comprehensive training, and demonstration of quick wins.</p>

      <h3>Data Quality and Migration</h3>
      <p>Legacy data often exists in inconsistent formats across multiple systems. Successful transformation requires thorough data auditing, cleaning, and validation processes before migration. This phase, while time-consuming, is critical for ensuring system reliability and user confidence.</p>

      <h2>Future Trends and Considerations</h2>

      <h3>Artificial Intelligence Integration</h3>
      <p>The next evolution in CRM and ERP systems involves deeper integration of artificial intelligence capabilities. Predictive analytics, automated decision-making, and intelligent process optimization will further enhance efficiency and effectiveness.</p>

      <h3>Mobile-First Design</h3>
      <p>As remote and hybrid work models become permanent features of organizational structure, mobile-first system design becomes essential. Modern CRM and ERP platforms must provide full functionality across all device types and connectivity conditions.</p>

      <h2>The Strategic Advantage</h2>

      <p>Organizations that successfully implement comprehensive digital transformation gain significant competitive advantages: improved customer satisfaction, enhanced operational efficiency, better decision-making capabilities, and increased agility in responding to market changes.</p>

      <h2>Conclusion</h2>

      <p>Digital transformation through modern CRM and ERP implementation represents more than technological upgrade—it's a fundamental reimagining of how organizations operate and deliver value. Success requires strategic planning, careful implementation, and ongoing optimization based on user feedback and performance metrics.</p>

      <p>The organizations that embrace this transformation thoughtfully and comprehensively will find themselves better positioned for growth, more efficient in operations, and more responsive to stakeholder needs. The question is not whether to pursue digital transformation, but how quickly and effectively it can be achieved.</p>
    `,
    keyTakeaways: [
      "Digital transformation requires strategic planning beyond technology adoption",
      "Integrated CRM/ERP systems eliminate data silos and improve efficiency",
      "Phased implementation with strong change management ensures success",
      "Real-time analytics enable data-driven decision making",
      "Future trends include AI integration and mobile-first design"
    ]
  },
  3: {
    author: "Rikhia Chakraborty",
    content: `
      <h2>The Foundation of Organizational Success</h2>
      <p>In the interconnected business environment of 2025, the ability to build and maintain effective stakeholder relationships has become a critical differentiator for organizational success. Stakeholder relationship management extends far beyond traditional customer service or vendor relations—it encompasses a comprehensive approach to understanding, engaging, and aligning diverse groups whose interests and actions can significantly impact organizational outcomes.</p>

      <h2>Understanding the Stakeholder Ecosystem</h2>
      <p>Modern organizations operate within complex stakeholder ecosystems that include customers, employees, suppliers, regulators, community members, investors, and partners. Each group brings unique perspectives, expectations, and levels of influence that must be carefully considered and managed through tailored engagement strategies.</p>
      
      <p>Through my experience managing multi-stakeholder projects involving 15+ diverse participants, I've learned that successful relationship building requires deep understanding of stakeholder motivations, communication preferences, and success criteria. This understanding forms the foundation for developing authentic, mutually beneficial relationships that withstand challenges and drive collective success.</p>

      <h2>Core Principles of Effective Stakeholder Relationship Management</h2>
      
      <h3>1. Authentic Engagement Over Transactional Interactions</h3>
      <p>The most successful stakeholder relationships are built on authentic engagement rather than purely transactional interactions. This means taking genuine interest in stakeholder perspectives, understanding their challenges and objectives, and finding ways to create mutual value beyond immediate business needs.</p>
      
      <p>Authentic engagement requires active listening, empathy, and the ability to see situations from multiple perspectives. It involves regular check-ins that go beyond project status updates to include broader discussions about goals, concerns, and opportunities for collaboration.</p>

      <h3>2. Proactive Communication Architecture</h3>
      <p>Effective stakeholder relationship management relies on proactive communication architecture that anticipates information needs and provides regular, relevant updates before they're requested. This approach builds trust and demonstrates respect for stakeholder time and priorities.</p>

      <p>Proactive communication includes structured reporting schedules, escalation protocols for issues, and celebration of successes. It also involves creating multiple communication channels to accommodate different preferences and urgency levels.</p>

      <h3>3. Transparency and Trust Building</h3>
      <p>Trust forms the cornerstone of all effective stakeholder relationships. Building trust requires consistent transparency, reliable follow-through on commitments, and honest communication about both successes and challenges.</p>

      <h2>Stakeholder Mapping and Analysis</h2>

      <h3>Influence and Interest Assessment</h3>
      <p>Successful stakeholder relationship management begins with comprehensive mapping that assesses each stakeholder's level of influence and interest in various organizational activities. This analysis enables strategic prioritization of engagement efforts and customization of communication approaches.</p>

      <h3>Communication Preference Profiling</h3>
      <p>Understanding how different stakeholders prefer to receive and share information is crucial for effective engagement. Some prefer detailed written reports, others value face-to-face discussions, and still others work best through visual presentations or informal conversations.</p>

      <h2>Strategic Communication Frameworks</h2>

      <h3>The RACI Model for Clarity</h3>
      <p>Implementing RACI (Responsible, Accountable, Consulted, Informed) frameworks provides clear understanding of roles and expectations in stakeholder relationships. This clarity reduces confusion, prevents duplication of effort, and ensures that all stakeholders understand their involvement level in different activities.</p>

      <h3>Regular Feedback Loops</h3>
      <p>Establishing regular feedback loops enables continuous improvement in stakeholder relationships. These loops should capture both formal feedback through surveys and meetings, and informal feedback through casual conversations and observation.</p>

      <h2>Managing Diverse Perspectives and Conflicts</h2>

      <h3>Conflict as Opportunity</h3>
      <p>Stakeholder conflicts, when managed effectively, can become opportunities for innovation and improvement. The key lies in reframing conflicts as diverse perspectives that, when properly synthesized, can lead to superior solutions.</p>

      <p>Effective conflict management requires neutral facilitation, clear process frameworks, and focus on shared objectives rather than individual positions. It also involves helping stakeholders understand how their success is interconnected with others' success.</p>

      <h3>Cultural Sensitivity and Adaptation</h3>
      <p>In increasingly global and diverse business environments, cultural sensitivity becomes essential for effective stakeholder relationship management. This includes understanding communication styles, decision-making processes, and relationship-building norms across different cultures and generations.</p>

      <h2>Technology-Enabled Relationship Management</h2>

      <h3>CRM Systems for Stakeholder Engagement</h3>
      <p>Modern CRM systems extend beyond customer management to encompass comprehensive stakeholder relationship tracking. These systems can maintain interaction histories, preference profiles, and engagement analytics that inform relationship strategies.</p>

      <h3>Digital Communication Platforms</h3>
      <p>Digital platforms enable more frequent and varied stakeholder engagement opportunities. Virtual meetings, collaborative workspaces, and social networking tools create new avenues for relationship building and maintenance.</p>

      <h2>Measuring Relationship Effectiveness</h2>

      <h3>Quantitative Metrics</h3>
      <ul>
        <li>Stakeholder satisfaction scores</li>
        <li>Engagement frequency and quality metrics</li>
        <li>Response times to stakeholder inquiries</li>
        <li>Project success rates with different stakeholder groups</li>
      </ul>

      <h3>Qualitative Indicators</h3>
      <ul>
        <li>Trust levels and relationship depth</li>
        <li>Collaborative spirit and willingness to support initiatives</li>
        <li>Quality of feedback and ideas shared</li>
        <li>Conflict resolution effectiveness</li>
      </ul>

      <h2>Building Long-Term Partnership Mindset</h2>

      <p>The most successful stakeholder relationships are built on partnership mindset rather than vendor-client dynamics. This involves understanding stakeholder long-term objectives, identifying mutual opportunities for growth, and investing in relationship development even when immediate returns aren't apparent.</p>

      <h3>Shared Value Creation</h3>
      <p>Effective stakeholder relationship management focuses on shared value creation—finding ways to achieve organizational objectives while also advancing stakeholder interests. This approach transforms relationships from zero-sum games to collaborative partnerships.</p>

      <h2>Crisis Management and Relationship Resilience</h2>

      <p>Strong stakeholder relationships provide organizational resilience during challenging periods. Stakeholders who trust the organization and feel valued are more likely to provide support during difficulties and maintain engagement through challenging times.</p>

      <h3>Communication During Crisis</h3>
      <p>Crisis periods test stakeholder relationships and provide opportunities to demonstrate commitment to transparency and mutual support. Effective crisis communication maintains regular updates, acknowledges challenges honestly, and focuses on collaborative problem-solving.</p>

      <h2>Future Evolution of Stakeholder Relations</h2>

      <h3>Increased Stakeholder Activism</h3>
      <p>Stakeholders are becoming more active in expressing expectations for organizational behavior, environmental responsibility, and social impact. Modern relationship management must account for these evolving expectations and find ways to align organizational actions with stakeholder values.</p>

      <h3>Digital-First Relationship Building</h3>
      <p>The shift toward digital-first interactions requires new approaches to relationship building that create meaningful connections through virtual channels. This includes leveraging data analytics to personalize digital interactions and creating virtual experiences that foster genuine relationship development.</p>

      <h2>Conclusion</h2>

      <p>Building effective stakeholder relationships represents one of the most valuable investments organizations can make. These relationships provide the foundation for successful collaboration, crisis resilience, and sustainable growth. Success requires strategic approach, consistent effort, and genuine commitment to mutual value creation.</p>

      <p>As the business environment continues to evolve, organizations with strong stakeholder relationship capabilities will find themselves better positioned to navigate uncertainty, access opportunities, and achieve sustainable success. The principles and strategies outlined in this guide provide a framework for developing these critical organizational capabilities.</p>
    `,
    keyTakeaways: [
      "Authentic engagement builds stronger relationships than transactional interactions",
      "Proactive communication architecture demonstrates respect and builds trust",
      "Stakeholder mapping enables strategic prioritization of relationship efforts",
      "Conflicts can become innovation opportunities with proper management",
      "Partnership mindset creates shared value and long-term success"
    ]
  }
};

export default function BlogModal({ post, isOpen, onClose }: BlogModalProps) {
  if (!post) return null;

  const content = blogContentMap[post.id];

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
                src={post.image}
                alt={post.title}
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
                <Badge className={`${post.categoryColor} border-0 mb-2`}>
                  {post.category}
                </Badge>
                <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
                <div className="flex items-center gap-4 text-white/90">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span className="text-sm">{content?.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm">{post.publishDate}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm">{post.readTime}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              {/* Article Content */}
              <div className="prose prose-lg prose-slate dark:prose-invert max-w-none mb-8">
                <div 
                  dangerouslySetInnerHTML={{ __html: content?.content }} 
                  className="leading-relaxed"
                />
              </div>

              {/* Key Takeaways */}
              <div className="glass-card p-6 rounded-xl mb-8">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Quote className="h-5 w-5 text-primary" />
                  Key Takeaways
                </h3>
                <ul className="space-y-2">
                  {content?.keyTakeaways.map((takeaway: string, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Author Bio */}
              <div className="glass-card p-6 rounded-xl mb-8">
                <h3 className="text-lg font-semibold mb-3">About the Author</h3>
                <p className="text-muted-foreground">
                  Rikhia Chakraborty is an experienced Executive Assistant and Administrator with over 3 years 
                  of progressive experience in organizational management, stakeholder coordination, and operational 
                  excellence. Currently pursuing MBA in International Business at Chandigarh University, she 
                  combines academic insight with practical expertise to drive organizational success.
                </p>
              </div>

              {/* Footer */}
              <div className="pt-6 border-t border-border">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-muted-foreground">
                    Thank you for reading • Share your thoughts
                  </div>
                  <Button
                    onClick={onClose}
                    className="bg-gradient-to-r from-primary to-secondary text-primary-foreground"
                  >
                    Close Article
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