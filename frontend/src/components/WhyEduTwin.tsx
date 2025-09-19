const features = [
  {
    icon: '🧠',
    title: 'Multi-Agent Collaboration',
    description: 'Five specialized AI agents work together, each bringing unique expertise to your learning journey',
  },
  {
    icon: '🕸️',
    title: 'Knowledge Graph Memory',
    description: 'Builds interconnected understanding of your subjects, identifying relationships and patterns',
  },
  {
    icon: '🔗',
    title: 'Cross-Platform Integrations',
    description: 'Seamlessly connects with Canvas, Google Classroom, Notion, and your favorite study tools',
  },
  {
    icon: '⚡',
    title: 'Exam Mode',
    description: 'Intensive preparation with predicted questions, mock tests, and performance analytics',
  },
];

export const WhyEduTwin = () => {
  return (
    <section className="py-24 px-6 bg-glass-light/20">
      <div className="container mx-auto">
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Why Choose EduTwin?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Advanced AI technology designed specifically for modern learners
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="scroll-animate group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="glass-card p-8 hover-lift glow-hover h-full">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center text-2xl glow-primary group-hover:animate-glow-pulse">
                      {feature.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3 gradient-text group-hover:scale-105 transition-transform duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            </div>
          ))}
        </div>

        {/* Stats section */}
        <div className="mt-20 scroll-animate" style={{ animationDelay: '0.6s' }}>
          <div className="glass-card p-8 text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="group">
                <div className="text-4xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform duration-300">
                  95%
                </div>
                <p className="text-muted-foreground">Improved Test Scores</p>
              </div>
              <div className="group">
                <div className="text-4xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform duration-300">
                  5hrs
                </div>
                <p className="text-muted-foreground">Average Time Saved Weekly</p>
              </div>
              <div className="group">
                <div className="text-4xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform duration-300">
                  50k+
                </div>
                <p className="text-muted-foreground">Students Worldwide</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};