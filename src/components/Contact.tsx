import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 glow-text">
            <span className="bg-gradient-to-r from-cyan-primary to-purple-primary bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Ready to bring your vision to life? Let's create something extraordinary together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="glass-card rounded-2xl p-8 floating">
              <h3 className="text-2xl font-bold mb-6 glow-text">Let's Connect</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-primary to-cyan-primary flex items-center justify-center text-xl">
                    📧
                  </div>
                  <div>
                    <p className="font-medium text-foreground/90">Email</p>
                    <p className="text-foreground/70">alex.chen@example.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-primary to-pink-primary flex items-center justify-center text-xl">
                    💼
                  </div>
                  <div>
                    <p className="font-medium text-foreground/90">LinkedIn</p>
                    <p className="text-foreground/70">@alexchen-dev</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-primary to-purple-primary flex items-center justify-center text-xl">
                    🐙
                  </div>
                  <div>
                    <p className="font-medium text-foreground/90">GitHub</p>
                    <p className="text-foreground/70">@alexchen-dev</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6 floating-delayed">
              <h4 className="text-lg font-bold mb-4 glow-text">Quick Response Promise</h4>
              <p className="text-foreground/80 text-sm leading-relaxed">
                I typically respond to all inquiries within 24 hours. For urgent projects, 
                feel free to reach out via LinkedIn for faster communication.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card rounded-2xl p-8 floating-slow">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground/90 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full glass-card rounded-lg px-4 py-3 text-foreground bg-transparent border-glass-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                  placeholder="Your full name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground/90 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full glass-card rounded-lg px-4 py-3 text-foreground bg-transparent border-glass-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground/90 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full glass-card rounded-lg px-4 py-3 text-foreground bg-transparent border-glass-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                  placeholder="Project inquiry, collaboration, etc."
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground/90 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full glass-card rounded-lg px-4 py-3 text-foreground bg-transparent border-glass-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project, ideas, or how we can work together..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full glass-card glass-card-hover rounded-lg py-4 text-lg font-medium bg-gradient-glow border-0 glow-pulse hover:scale-105 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;