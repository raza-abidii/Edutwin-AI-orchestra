import { useEffect } from 'react';
import { HeroSection } from '@/components/HeroSection';
import { AgentCards } from '@/components/AgentCards';
import { HowItWorks } from '@/components/HowItWorks';
import { DemoPreview } from '@/components/DemoPreview';
import { WhyEduTwin } from '@/components/WhyEduTwin';
import { FinalCTA } from '@/components/FinalCTA';
import { Footer } from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Scroll-triggered animation observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.scroll-animate');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <AgentCards />
      <HowItWorks />
      <DemoPreview />
      <WhyEduTwin />
      <FinalCTA />
      <Footer />
    </main>
  );
};

export default Index;