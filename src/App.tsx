import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from '@/components/ui/custom/Navbar';
import { Hero } from '@/sections/Hero';
import { PredictionWidgets } from '@/sections/PredictionWidgets';
import { TokenSection } from '@/sections/TokenSection';
import { PartnerBanner } from '@/sections/PartnerBanner';
import { Roadmap } from '@/sections/Roadmap';
import { Footer } from '@/sections/Footer';
import { IntroGateway } from '@/components/IntroGateway';
import { ArrowUp } from 'lucide-react';

type ActiveSection = 'predictions' | 'partners' | 'roadmap' | null;

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 500);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-50 w-11 h-11 glass rounded-full flex items-center justify-center text-shark-green hover:border-shark-green/40 transition-all hover:shadow-glow"
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

function AnimatedSection({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 26 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 26 }}
      transition={{ duration: 0.45 }}
    >
      {children}
    </motion.div>
  );
}

function App() {
  const [activeSection, setActiveSection] = useState<ActiveSection>(null);
  const [introDone, setIntroDone] = useState(() => {
    return sessionStorage.getItem('predishark-intro-seen') === 'true';
  });

  const revealOnlySection = (section: ActiveSection) => {
    setActiveSection(section);

    if (!section) return;

    window.setTimeout(() => {
      const el = document.querySelector(`#${section}`);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 120);
  };

  const scrollToMainSection = (sectionId: string) => {
    setActiveSection(null);

    window.setTimeout(() => {
      const el = document.querySelector(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 80);
  };

  const completeIntro = () => {
    sessionStorage.setItem('predishark-intro-seen', 'true');
    setIntroDone(true);
  };

  useEffect(() => {
    const handleRevealSection = (event: Event) => {
      const customEvent = event as CustomEvent<ActiveSection>;
      const section = customEvent.detail;

      if (section === 'predictions' || section === 'partners' || section === 'roadmap') {
        revealOnlySection(section);
      }
    };

    const handleScrollSection = (event: Event) => {
      const customEvent = event as CustomEvent<string>;
      scrollToMainSection(customEvent.detail);
    };

    window.addEventListener('predishark:reveal-section', handleRevealSection);
    window.addEventListener('predishark:scroll-section', handleScrollSection);

    return () => {
      window.removeEventListener('predishark:reveal-section', handleRevealSection);
      window.removeEventListener('predishark:scroll-section', handleScrollSection);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-shark-black text-shark-white overflow-x-hidden">
      <Navbar />

      <Hero />

      <AnimatedSection>
        <TokenSection />
      </AnimatedSection>

      <AnimatePresence mode="wait">
        {activeSection === 'predictions' && (
          <AnimatedSection key="predictions">
            <PredictionWidgets />
          </AnimatedSection>
        )}

        {activeSection === 'partners' && (
          <AnimatedSection key="partners">
            <PartnerBanner />
          </AnimatedSection>
        )}

        {activeSection === 'roadmap' && (
          <AnimatedSection key="roadmap">
            <Roadmap />
          </AnimatedSection>
        )}
      </AnimatePresence>

      <Footer />

      <ScrollToTop />

      <AnimatePresence>{!introDone && <IntroGateway onComplete={completeIntro} />}</AnimatePresence>
    </div>
  );
}

export default App;