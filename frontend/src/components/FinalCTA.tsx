import { Button } from '@/components/ui/button';

export const FinalCTA = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-accent/40 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto text-center relative z-10">
        <div className="scroll-animate">
          <h2 className="text-5xl md:text-6xl font-bold gradient-text mb-8">
            Meet your AI study team today.
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Join thousands of students who are already studying smarter with EduTwin's AI agents
          </p>

          <Button 
            size="lg"
            className="gradient-primary text-xl px-12 py-6 glow-primary hover-lift animate-glow-pulse group relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center">
              ✨ Try EduTwin Free
            </span>
            {/* Shimmer effect */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </Button>

          <p className="text-sm text-muted-foreground mt-6">
            No credit card required • Start in 30 seconds • Cancel anytime
          </p>
        </div>

        {/* Decorative elements */}
        <div className="mt-16 relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-16 bg-gradient-to-b from-primary to-secondary opacity-50" />
          <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 w-2 h-2 bg-accent rounded-full animate-glow-pulse" />
        </div>
      </div>
    </section>
  );
};