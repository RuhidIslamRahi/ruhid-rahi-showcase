
import { useState } from 'react';
import { Mail, Phone, Send, Linkedin, Github } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission - integrate with an email service in a real app
    console.log('Form submitted:', formData);
    alert('Message sent successfully! (Note: This is a demo)');
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };
  
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container px-4 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Get in Touch</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Let's build something amazing together! Feel free to reach out to me if you have a project in mind or want to collaborate.
          </p>
        </div>
        
        {/* Contact Info */}
        <div className="flex justify-center gap-8 mb-12">
          <div className="flex items-center gap-3">
            <Phone className="text-green-500" size={20} />
            <a href="tel:+8801779059579" className="text-green-500 hover:text-green-600 transition-colors">
              (880) 1779059579
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="text-green-500" size={20} />
            <a href="mailto:ruhidislamrahi@gmail.com" className="text-green-500 hover:text-green-600 transition-colors">
              ruhidislamrahi@gmail.com
            </a>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4 mb-12">
          <a 
            href="https://www.linkedin.com/in/ruhidislam-rahi/"
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700 transition-colors"
          >
            <Linkedin size={24} />
          </a>
          <a 
            href="https://github.com/RuhidIslamRahi"
            target="_blank" 
            rel="noopener noreferrer"
            className="text-foreground hover:text-muted-foreground transition-colors"
          >
            <Github size={24} />
          </a>
        </div>
        
        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Name <span className="text-red-500">*</span>
                </label>
                <input 
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full bg-muted border border-border rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input 
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full bg-muted border border-border rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message"
                rows={6}
                className="w-full bg-muted border border-border rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                required
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              Send Message
              <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
