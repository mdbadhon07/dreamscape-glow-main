const Projects = () => {
  const projects = [
    {
      title: "Ethereal Dashboard",
      description: "A glassmorphism admin dashboard with real-time analytics and beautiful data visualizations",
      tech: ["React", "TypeScript", "D3.js", "Node.js"],
      gradient: "from-purple-primary to-cyan-primary",
      status: "Live Project"
    },
    {
      title: "Cosmic E-commerce",
      description: "Futuristic shopping experience with 3D product previews and immersive interactions",
      tech: ["Next.js", "Three.js", "Stripe", "PostgreSQL"],
      gradient: "from-cyan-primary to-pink-primary",
      status: "In Development"
    },
    {
      title: "Neural Network Visualizer",
      description: "Interactive tool for visualizing and understanding machine learning algorithms",
      tech: ["Python", "TensorFlow", "React", "WebGL"],
      gradient: "from-pink-primary to-purple-primary",
      status: "Open Source"
    },
    {
      title: "Dreamscape Portfolio",
      description: "A collection of creative web experiences pushing the boundaries of modern design",
      tech: ["React", "Framer Motion", "GSAP", "WebGL"],
      gradient: "from-purple-light to-cyan-light",
      status: "Portfolio"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 glow-text">
            <span className="bg-gradient-to-r from-purple-primary to-pink-primary bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Showcasing my passion for creating extraordinary digital experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="glass-card glass-card-hover rounded-2xl p-8 floating-delayed group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Header */}
              <div className="mb-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-2xl font-bold glow-text">
                    <span className={`bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                      {project.title}
                    </span>
                  </h3>
                  <span className="glass-card rounded-full px-3 py-1 text-xs font-medium text-cyan-primary">
                    {project.status}
                  </span>
                </div>
                <p className="text-foreground/80 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Tech Stack */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-foreground/70 mb-3">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="glass-card rounded-lg px-3 py-1 text-sm font-medium hover:scale-105 transition-transform duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Actions */}
              <div className="flex gap-3">
                <button className="flex-1 glass-card glass-card-hover rounded-lg py-3 text-sm font-medium hover:shadow-glow transition-all duration-300">
                  View Project
                </button>
                <button className="flex-1 glass-card glass-card-hover rounded-lg py-3 text-sm font-medium hover:shadow-glow transition-all duration-300">
                  Live Demo
                </button>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${project.gradient} opacity-10 blur-xl`} />
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <button className="glass-card glass-card-hover rounded-xl px-8 py-4 text-lg font-medium bg-gradient-glow border-0 glow-pulse">
            Explore All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;