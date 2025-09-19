import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const demoContent = {
  notes: {
    title: 'Smart Notes',
    icon: '📝',
    content: (
      <div className="space-y-4">
        <div className="p-4 bg-glass-light rounded-lg">
          <h4 className="font-semibold mb-2 gradient-text">Chapter 5: Data Structures</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• Arrays: Contiguous memory allocation</li>
            <li>• Linked Lists: Dynamic memory structure</li>
            <li>• Trees: Hierarchical data organization</li>
          </ul>
        </div>
        <div className="flex items-center text-sm text-accent">
          <span className="animate-glow-pulse">✨</span>
          <span className="ml-2">Auto-generated from your lecture PDFs</span>
        </div>
      </div>
    )
  },
  quizzes: {
    title: 'Practice Quizzes',
    icon: '📖',
    content: (
      <div className="space-y-4">
        <div className="p-4 bg-glass-light rounded-lg">
          <h4 className="font-semibold mb-3 gradient-text">Quick Quiz: Arrays vs Linked Lists</h4>
          <div className="space-y-3">
            <div className="p-3 bg-background rounded border-l-4 border-primary">
              <p className="text-sm">What is the time complexity of accessing an element in an array?</p>
              <p className="text-xs text-accent mt-1">A) O(1) - Correct! ✓</p>
            </div>
          </div>
        </div>
        <div className="flex items-center text-sm text-secondary">
          <span className="animate-glow-pulse">🎯</span>
          <span className="ml-2">Adaptive difficulty based on your progress</span>
        </div>
      </div>
    )
  },
  schedule: {
    title: 'Study Plan',
    icon: '📅',
    content: (
      <div className="space-y-4">
        <div className="p-4 bg-glass-light rounded-lg">
          <h4 className="font-semibold mb-3 gradient-text">This Week's Schedule</h4>
          <div className="space-y-2">
            <div className="flex justify-between items-center p-2 bg-background rounded">
              <span className="text-sm">Data Structures Review</span>
              <span className="text-xs text-primary">Mon 2-4 PM</span>
            </div>
            <div className="flex justify-between items-center p-2 bg-background rounded">
              <span className="text-sm">Algorithm Practice</span>
              <span className="text-xs text-secondary">Wed 10-12 PM</span>
            </div>
          </div>
        </div>
        <div className="flex items-center text-sm text-accent-glow">
          <span className="animate-glow-pulse">⚡</span>
          <span className="ml-2">Optimized for your exam timeline</span>
        </div>
      </div>
    )
  }
};

export const DemoPreview = () => {
  const [activeDemo, setActiveDemo] = useState('notes');

  return (
    <section className="py-24 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            See EduTwin in Action
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Interactive preview of how our AI agents transform your study materials
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Demo selector buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 scroll-animate" style={{ animationDelay: '0.2s' }}>
            {Object.entries(demoContent).map(([key, demo]) => (
              <Button
                key={key}
                variant={activeDemo === key ? "default" : "outline"}
                size="lg"
                onClick={() => setActiveDemo(key)}
                className={`
                  ${activeDemo === key 
                    ? 'gradient-primary glow-primary' 
                    : 'glass-card hover-lift'
                  }
                  transition-all duration-300
                `}
              >
                <span className="mr-2">{demo.icon}</span>
                {demo.title}
              </Button>
            ))}
          </div>

          {/* Demo content */}
          <div className="scroll-animate" style={{ animationDelay: '0.4s' }}>
            <Card className="glass-card glow-hover max-w-2xl mx-auto">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl gradient-text flex items-center justify-center gap-3">
                  <span className="text-4xl">{demoContent[activeDemo].icon}</span>
                  {demoContent[activeDemo].title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="animate-scale-in">
                  {demoContent[activeDemo].content}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Floating decorative elements */}
        <div className="relative">
          <div className="absolute -top-12 left-1/4 w-2 h-2 bg-primary rounded-full animate-float" />
          <div className="absolute -bottom-12 right-1/4 w-3 h-3 bg-secondary rounded-full animate-glow-pulse" />
        </div>
      </div>
    </section>
  );
};