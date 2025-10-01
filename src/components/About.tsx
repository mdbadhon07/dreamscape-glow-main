const About = () => {
  const cards = [
    {
      title: "Creative Vision",
      content: "I believe in creating digital experiences that tell stories, evoke emotions, and leave lasting impressions. Every pixel has purpose.",
      icon: "✨",
      delay: "0s"
    },
    {
      title: "Technical Mastery",
      content: "With years of experience in modern web technologies, I bridge the gap between stunning design and flawless functionality.",
      icon: "⚡",
      delay: "0.2s"
    },
    {
      title: "User-Centric Approach",
      content: "Every project starts with understanding the user. I craft interfaces that are not just beautiful, but intuitive and accessible.",
      icon: "🎯",
      delay: "0.4s"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 glow-text">
            <span className="bg-gradient-to-r from-cyan-primary to-purple-primary bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Passionate developer and designer with a love for creating immersive digital experiences
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div 
              key={index}
              className="glass-card glass-card-hover rounded-2xl p-8 floating-delayed"
              style={{ animationDelay: card.delay }}
            >
              <div className="text-4xl mb-4 text-center">{card.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-center glow-text">
                {card.title}
              </h3>
              <p className="text-foreground/80 leading-relaxed text-center">
                {card.content}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 glass-card rounded-3xl p-8 floating">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4 glow-text">My Journey</h3>
            <p className="text-lg text-foreground/80 leading-relaxed max-w-3xl mx-auto">
              From a curious child taking apart gadgets to a professional crafting digital experiences, 
              my journey has been driven by an insatiable desire to understand how things work and 
              make them better. I specialize in creating applications that not only function flawlessly 
              but inspire and delight users at every interaction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;