import { Calendar, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import SectionHeader from "@/components/SectionHeader";

const BlogsSection = () => {
  const blogs = [
    {
      id: 1,
      title: "Getting Started with Data Science: A Beginner's Guide",
      date: "Oct 23, 2024",
      excerpt: "Explore the fundamentals of data science, from understanding data types to your first machine learning model. This comprehensive guide covers essential concepts, tools, and practical examples to help you begin your data science journey.",
      tags: ["DataScience", "Python", "MachineLearning"],
      image: "/lovable-uploads/8d783da8-8cb9-4b6b-95df-281c0f2a2f36.png",
      readTime: "5 min read"
    }
  ];

  return (
    <section id="blogs" className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <SectionHeader>Featured Blogs 📄</SectionHeader>
        </div>

        <div className="max-w-4xl mx-auto">
          {blogs.map((blog) => (
            <article key={blog.id} className="bg-card rounded-lg border overflow-hidden hover:shadow-lg transition-shadow">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img 
                    src={blog.image} 
                    alt={blog.title}
                    className="w-full h-48 md:h-full object-cover"
                  />
                </div>
                
                <div className="md:w-2/3 p-6 md:p-8">
                  <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>{blog.date}</span>
                    </div>
                    <span>{blog.readTime}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-foreground mb-4 hover:text-primary transition-colors cursor-pointer">
                    {blog.title}
                  </h3>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {blog.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs bg-primary/10 text-primary border-primary/20">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {blog.excerpt}
                  </p>
                  
                  <button className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium">
                    Read more
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;