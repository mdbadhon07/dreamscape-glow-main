const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-glass-border/30">
      <div className="max-w-6xl mx-auto">
        <div className="glass-card rounded-2xl p-8">
          <div className="text-center space-y-6">
            {/* Logo and Tagline */}
            <div>
              <h3 className="text-3xl font-bold mb-2 glow-text">
                <span className="bg-gradient-to-r from-purple-primary via-cyan-primary to-pink-primary bg-clip-text text-transparent">
                  Alex Chen
                </span>
              </h3>
              <p className="text-foreground/70">
                Crafting digital dreams into reality
              </p>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6">
              {[
                { name: 'LinkedIn', icon: '💼', href: '#' },
                { name: 'GitHub', icon: '🐙', href: '#' },
                { name: 'Twitter', icon: '🐦', href: '#' },
                { name: 'Instagram', icon: '📸', href: '#' },
                { name: 'Dribbble', icon: '🏀', href: '#' }
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="glass-card glass-card-hover rounded-full w-12 h-12 flex items-center justify-center text-xl hover:scale-110 transition-all duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Quick Links */}
            <div className="flex justify-center space-x-8 text-sm">
              {['Privacy Policy', 'Terms of Service', 'Sitemap'].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-foreground/60 hover:text-primary transition-colors duration-300"
                >
                  {link}
                </a>
              ))}
            </div>

            {/* Copyright */}
            <div className="pt-6 border-t border-glass-border/30">
              <p className="text-foreground/50 text-sm">
                © {currentYear} Alex Chen. All rights reserved. Built with ❤️ and lots of ☕
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;