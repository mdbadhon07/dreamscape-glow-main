const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Three.js"],
      color: "from-purple-primary to-purple-light",
      icon: "💻"
    },
    {
      title: "Backend",
      skills: ["Node.js", "Python", "GraphQL", "PostgreSQL", "Redis"],
      color: "from-cyan-primary to-cyan-light",
      icon: "⚙️"
    },
    {
      title: "Design",
      skills: ["Figma", "Adobe Suite", "UI/UX", "Motion Design", "3D Modeling"],
      color: "from-pink-primary to-pink-light",
      icon: "🎨"
    },
    {
      title: "Tools",
      skills: ["Git", "Docker", "AWS", "Vercel", "Firebase"],
      color: "from-purple-light to-cyan-primary",
      icon: "🛠️"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 glow-text">
            <span className="bg-gradient-to-r from-pink-primary to-cyan-primary bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            A diverse toolkit for bringing ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="glass-card glass-card-hover rounded-2xl p-6 floating-slow group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center mb-4">
                <div className="text-3xl mb-2">{category.icon}</div>
                <h3 className="text-xl font-bold glow-text">
                  <span className={`bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                    {category.title}
                  </span>
                </h3>
              </div>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="glass-card rounded-lg p-3 text-center text-sm font-medium hover:scale-105 transition-transform duration-300 hover:shadow-glow"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Hologram Effect Skills */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center mb-8 glow-text">Core Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["React", "TypeScript", "Node.js", "GraphQL", "Three.js", "Figma"].map((tech, index) => (
              <div 
                key={index}
                className="glass-card glass-card-hover rounded-full px-6 py-3 text-lg font-medium floating-delayed hover:scale-110 transition-all duration-300 glow-pulse"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="bg-gradient-to-r from-purple-primary via-cyan-primary to-pink-primary bg-clip-text text-transparent">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;