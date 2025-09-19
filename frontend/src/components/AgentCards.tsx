import React, { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';

export const AgentCards = () => {
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/agents')
      .then(res => res.json())
      .then(data => setAgents(data))
      .catch(err => console.error('Failed to fetch agents:', err));
  }, []);

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
              key={agent.id || agent.title}
              className={`glass-card hover-lift glow-hover scroll-animate cursor-pointer group relative overflow-hidden`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br from-primary to-primary-light opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              <CardContent className="p-8 text-center relative">
                {/* Icon with glow effect */}
                <div className="text-6xl mb-6 animate-float" style={{ animationDelay: `${index * 0.1}s` }}>
                  <span className="drop-shadow-lg">{agent.icon || '🤖'}</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 gradient-text">
                  {agent.name || agent.title}
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