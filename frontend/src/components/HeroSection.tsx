import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-dashboard.jpg';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid-pattern">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 py-20 text-center relative z-10">
        {/* Main headline with gradient text */}
        <div className="animate-slide-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
            EduTwin — Your Learning Twin
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed">
            Upload your syllabus. EduTwin's AI agents work like your personal digital interns — 
            creating notes, quizzes, code help, schedules, and even predicted exam questions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              size="lg" 
              className="gradient-primary text-lg px-8 py-4 glow-hover hover-lift"
            >
              🚀 Get Started Free
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="text-lg px-8 py-4 glass-card hover-lift"
            >
              📖 See Demo
            </Button>
          </div>
        </div>

        {/* Dashboard mockup */}
        <div className="animate-scale-in" style={{ animationDelay: '0.3s' }}>
          <div className="relative max-w-5xl mx-auto">
            <div className="glass-card p-4 hover-tilt">
              <img 
                src={heroImage} 
                alt="EduTwin AI Dashboard showing agent cards" 
                className="w-full rounded-lg shadow-2xl"
              />
            </div>
            
            {/* Floating elements around dashboard */}
            <div className="absolute -top-4 -left-4 w-12 h-12 gradient-primary rounded-full animate-glow-pulse" />
            <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-secondary rounded-full animate-float" />
            <div className="absolute top-1/2 -right-8 w-6 h-6 bg-accent rounded-full animate-glow-pulse" />
          </div>
        </div>
      </div>

      {/* Gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};