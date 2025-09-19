import { Separator } from '@/components/ui/separator';

const footerLinks = {
  product: [
    { name: 'About', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Demo', href: '#' },
    { name: 'Contact', href: '#' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Cookie Policy', href: '#' },
  ],
};

const socialLinks = [
  { name: 'GitHub', icon: '🐙', href: '#' },
  { name: 'LinkedIn', icon: '💼', href: '#' },
  { name: 'Twitter', icon: '🐦', href: '#' },
];

export const Footer = () => {
  return (
    <footer className="py-16 px-6 bg-glass-light/10 border-t border-glass-border/50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand section */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold gradient-text mb-4">
              EduTwin
            </h3>
            
            <p className="text-muted-foreground mb-6 max-w-md">
              Your AI-powered learning companion. Five specialized agents working together 
              to transform your study experience.
            </p>

            {/* Social links */}
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover-lift glow-hover text-lg"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Product links */}
          <div>
            <h4 className="font-semibold mb-4 gradient-text">Product</h4>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal links */}
          <div>
            <h4 className="font-semibold mb-4 gradient-text">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="mb-8" />

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            © 2024 EduTwin. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-2 group">
            <span className="text-sm text-muted-foreground">EduTwin — Study Smarter. Together.</span>
            <div className="w-2 h-2 bg-accent rounded-full animate-glow-pulse group-hover:scale-125 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </footer>
  );
};