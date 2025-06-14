import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github, Twitter } from 'lucide-react';
import SectionHeader from "@/components/SectionHeader";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
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
      subject: '',
      message: '',
    });
  };
  
  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container px-4">
        <div className="text-center mb-16">
          <SectionHeader>Get In Touch</SectionHeader>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-bold mb-6 gradient-text">Contact Information</h3>
            <p className="text-gray-300 mb-8">
              Have a project in mind? Looking to collaborate on data science initiatives? Feel free to reach out to me.
              I'm always open to discussing new projects, learning opportunities and data-driven challenges.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-purple-900/30 p-3 rounded-lg">
                  <Mail className="text-purple-500" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-medium">Email</h4>
                  <a href="mailto:ruhidislamrahi@gmail.com" className="text-gray-300 hover:text-purple-400 transition-colors">
                    ruhidislamrahi@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-purple-900/30 p-3 rounded-lg">
                  <Phone className="text-purple-500" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-medium">Phone</h4>
                  <a href="tel:+8801779059579" className="text-gray-300 hover:text-purple-400 transition-colors">
                    +880 1779059579
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-purple-900/30 p-3 rounded-lg">
                  <MapPin className="text-purple-500" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-medium">Location</h4>
                  <p className="text-gray-300">Dhaka, Bangladesh</p>
                </div>
              </div>
              
              <div className="pt-6 border-t border-gray-800">
                <h4 className="text-lg font-medium mb-4">Connect With Me</h4>
                <div className="flex gap-4">
                  <a 
                    href="https://www.linkedin.com/in/ruhidislam-rahi/"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-purple-900/30 p-3 rounded-lg hover:bg-purple-900/50 transition-colors"
                  >
                    <Linkedin className="text-purple-500" size={24} />
                  </a>
                  <a 
                    href="https://github.com/RuhidIslamRahi"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-purple-900/30 p-3 rounded-lg hover:bg-purple-900/50 transition-colors"
                  >
                    <Github className="text-purple-500" size={24} />
                  </a>
                  <a 
                    href="https://x.com/RuhidIslamRahi"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-purple-900/30 p-3 rounded-lg hover:bg-purple-900/50 transition-colors"
                  >
                    <Twitter className="text-purple-500" size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-900 p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-6 gradient-text">Send Me a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <input 
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                />
              </div>
              
              <div className="mb-4">
                <input 
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                />
              </div>
              
              <div className="mb-4">
                <input 
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                />
              </div>
              
              <div className="mb-6">
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows={5}
                  className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="btn btn-primary w-full flex items-center justify-center gap-2"
              >
                Send Message
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
