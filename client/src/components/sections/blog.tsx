import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { fadeInUp, staggerContainer, staggerItem } from "../../lib/animations";

const blogPosts = [
  {
    id: 1,
    title: "Mastering Executive Calendar Management in 2025",
    excerpt: "Essential strategies and tools for optimizing executive schedules, managing conflicting priorities, and ensuring strategic alignment...",
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    category: "Executive Support",
    readTime: "5 min read",
    publishDate: "Dec 15, 2024",
    categoryColor: "bg-primary/10 text-primary"
  },
  {
    id: 2,
    title: "Digital Transformation in Administrative Operations",
    excerpt: "How modern CRM and ERP systems are revolutionizing administrative workflows and improving organizational efficiency...",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    category: "Technology",
    readTime: "8 min read", 
    publishDate: "Dec 10, 2024",
    categoryColor: "bg-secondary/10 text-secondary"
  },
  {
    id: 3,
    title: "Building Effective Stakeholder Relationships",
    excerpt: "Key strategies for maintaining strong professional relationships and ensuring clear communication across all organizational levels...",
    image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    category: "Leadership",
    readTime: "6 min read",
    publishDate: "Dec 5, 2024", 
    categoryColor: "bg-emerald-500/10 text-emerald-600"
  }
];

export default function Blog() {
  return (
    <section id="blog" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-4xl font-bold mb-4 text-gradient">Insights & Articles</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Sharing knowledge and insights on executive support, administration, and professional development
          </p>
        </motion.div>

        {/* Blog Posts Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {blogPosts.map((post) => (
            <motion.article
              key={post.id}
              className="glass-card rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 group cursor-pointer"
              variants={staggerItem}
              whileHover={{ y: -5 }}
            >
              {/* Featured Image */}
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <Badge className={`${post.categoryColor} border-0`}>
                    {post.category}
                  </Badge>
                </div>
              </div>

              {/* Article Content */}
              <div className="p-6">
                {/* Metadata */}
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{post.publishDate}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Read More Link */}
                <motion.div
                  className="flex items-center text-primary hover:text-primary/80 font-medium text-sm group/link"
                  whileHover={{ x: 5 }}
                >
                  <span className="mr-2">Read More</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                </motion.div>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.article>
          ))}
        </motion.div>

        {/* View All Posts Button */}
        <motion.div
          className="text-center mt-12"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <Button
            variant="outline" 
            size="lg"
            className="glass-card px-8 py-3 hover:scale-105 transition-transform duration-300 group"
          >
            View All Articles
            <motion.div
              className="ml-2"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowRight className="h-4 w-4" />
            </motion.div>
          </Button>
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div
          className="mt-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="glass-card p-8 rounded-2xl text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-gradient">
              Stay Updated
            </h3>
            <p className="text-muted-foreground mb-6">
              Subscribe to get the latest insights on executive support and administrative excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-background/50 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
              />
              <Button className="bg-gradient-to-r from-primary to-secondary text-primary-foreground">
                Subscribe
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
