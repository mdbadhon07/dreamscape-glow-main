import heroBackground from '@/assets/hero-background.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-cosmic opacity-50" />
      
      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="glass-hero rounded-3xl p-12 floating">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 glow-text">
            <span className="bg-gradient-to-r from-purple-light via-cyan-primary to-pink-primary bg-clip-text text-transparent">
              Tamim Ahmed
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/90 mb-8 leading-relaxed">
            Crafting digital experiences that blur the line between 
            <span className="text-cyan-primary glow-text"> reality </span>
            and
            <span className="text-pink-primary glow-text"> imagination</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="glass-card glass-card-hover px-8 py-4 rounded-xl text-lg font-medium bg-gradient-glow border-0 glow-pulse">
              View My Work
            </button>
            <button className="glass-card glass-card-hover px-8 py-4 rounded-xl text-lg font-medium border-primary/50 hover:border-primary transition-all duration-300">
              Get In Touch
            </button>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-purple-primary rounded-full opacity-60 floating-delayed shadow-glow" />
      <div className="absolute top-1/3 right-20 w-6 h-6 bg-cyan-primary rounded-full opacity-60 floating-slow shadow-glow" />
      <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-pink-primary rounded-full opacity-60 floating shadow-glow" />
      <div className="absolute bottom-20 right-1/3 w-5 h-5 bg-purple-light rounded-full opacity-60 floating-delayed shadow-glow" />
    </section>
  );
};

export default Hero;