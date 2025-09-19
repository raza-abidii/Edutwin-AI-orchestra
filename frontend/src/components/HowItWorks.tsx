import { Card, CardContent } from '@/components/ui/card';

const steps = [
  {
    number: '01',
    title: 'Upload Your Syllabus',
    description: 'Simply upload your course syllabus, lecture notes, or study materials',
    icon: '📚'
  },
  {
    number: '02', 
    title: 'Agents Collaborate',
    description: 'Our AI agents analyze and work together to understand your learning needs',
    icon: '🤖'
  },
  {
    number: '03',
    title: 'Get Your Results',
    description: 'Receive personalized study materials, schedules, and practice tests',
    icon: '✨'
  }
];

export const HowItWorks = () => {
  return (
    <section className="py-24 px-6 bg-glass-light/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Three simple steps to transform your studying experience
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-primary via-secondary to-accent" />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={step.number} className="relative scroll-animate" style={{ animationDelay: `${index * 0.2}s` }}>
                <Card className="glass-card hover-lift text-center relative overflow-hidden group">
                  {/* Step number background */}
                  <div className="absolute -top-8 -right-8 text-8xl font-bold text-primary/5 group-hover:text-primary/10 transition-colors duration-500">
                    {step.number}
                  </div>
                  
                  <CardContent className="p-8 relative">
                    {/* Step number badge */}
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-primary text-white font-bold text-xl mb-6 glow-primary">
                      {step.number}
                    </div>
                    
                    {/* Icon */}
                    <div className="text-5xl mb-6 animate-float" style={{ animationDelay: `${index * 0.3}s` }}>
                      {step.icon}
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 gradient-text">
                      {step.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>

                {/* Connection points for larger screens */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-8 z-10">
                    <div className="w-4 h-4 bg-accent rounded-full animate-glow-pulse absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};