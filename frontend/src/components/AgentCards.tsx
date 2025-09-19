import { Card, CardContent } from '@/components/ui/card';

const agents = [
  {
    icon: '📖',
    title: 'StudyAgent',
    description: 'Quizzes, flashcards, summaries',
    gradient: 'from-primary to-primary-light',
    delay: '0s'
  },
  {
    icon: '📝',
    title: 'NotesAgent', 
    description: 'Clean, structured notes from PDFs/lectures',
    gradient: 'from-secondary to-secondary-light',
    delay: '0.1s'
  },
  {
    icon: '💻',
    title: 'CodeAgent',
    description: 'Explains code, generates starter programs',
    gradient: 'from-accent to-accent-glow',
    delay: '0.2s'
  },
  {
    icon: '📅',
    title: 'PlannerAgent',
    description: 'Smart schedules & deadline tracking',
    gradient: 'from-primary-light to-secondary',
    delay: '0.3s'
  },
  {
    icon: '📑',
    title: 'ExamPaperPredictionAgent',
    description: 'Mock tests & predicted questions',
    gradient: 'from-secondary-light to-accent',
    delay: '0.4s'
  }
];

export const AgentCards = () => {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Meet Your AI Study Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Five specialized AI agents working together to revolutionize your learning experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {agents.map((agent, index) => (
            <Card 
              key={agent.title}
              className={`glass-card hover-lift glow-hover scroll-animate cursor-pointer group relative overflow-hidden`}
              style={{ animationDelay: agent.delay }}
            >
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${agent.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              <CardContent className="p-8 text-center relative">
                {/* Icon with glow effect */}
                <div className="text-6xl mb-6 animate-float" style={{ animationDelay: agent.delay }}>
                  <span className="drop-shadow-lg">{agent.icon}</span>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 gradient-text">
                  {agent.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {agent.description}
                </p>

                {/* Shimmer effect on hover */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Decorative elements */}
        <div className="relative mt-16">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-16 bg-gradient-to-b from-primary to-secondary" />
          <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 w-3 h-3 bg-accent rounded-full animate-glow-pulse" />
        </div>
      </div>
    </section>
  );
};