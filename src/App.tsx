import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from '@/components/ui/custom/Navbar';
import { Hero } from '@/sections/Hero';
import { StatsCards } from '@/sections/StatsCards';
import { PredictionWidgets } from '@/sections/PredictionWidgets';
import { Whitepaper } from '@/sections/Whitepaper';
import { TokenSection } from '@/sections/TokenSection';
import { AIIntelligence } from '@/sections/AIIntelligence';
import { CryptoUtility } from '@/sections/CryptoUtility';
import { PartnerBanner } from '@/sections/PartnerBanner';
import { Roadmap } from '@/sections/Roadmap';
import { ResponsibleUse } from '@/sections/ResponsibleUse';
import { Footer } from '@/sections/Footer';
import { ArrowUp, Activity } from 'lucide-react';

function LiveTicker() {
  const matches = [
    { league: 'PL', home: 'Man City', away: 'Arsenal', score: '2 - 1', time: "72'", live: true },
    { league: 'LL', home: 'Real Madrid', away: 'Barcelona', score: '1 - 1', time: "58'", live: true },
    { league: 'SA', home: 'Juventus', away: 'AC Milan', score: '0 - 0', time: "35'", live: true },
    { league: 'BL', home: 'Bayern', away: 'Dortmund', score: '3 - 2', time: "89'", live: true },
    { league: 'UCL', home: 'PSG', away: 'Man City', score: '1 - 2', time: "45'", live: true },
    { league: 'PL', home: 'Liverpool', away: 'Chelsea', score: '2 - 0', time: "67'", live: true },
  ];

  return (
    <div className="relative overflow-hidden bg-shark-navy/80 border-y border-white/5 backdrop-blur-sm">
      <div className="flex items-center">
        <div className="flex-shrink-0 px-4 py-2.5 bg-shark-green/10 border-r border-white/5">
          <div className="flex items-center gap-2">
            <Activity className="w-4 h-4 text-shark-green animate-pulse" />
            <span className="text-xs font-semibold text-shark-green uppercase tracking-[0.22em]">
              Live
            </span>
          </div>
        </div>

        <div className="flex-1 overflow-hidden">
          <motion.div
            animate={{ x: [0, -50 * matches.length * 2] }}
            transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            className="flex items-center gap-8 py-2.5 whitespace-nowrap"
          >
            {[...matches, ...matches, ...matches, ...matches].map((match, i) => (
              <div key={i} className="flex items-center gap-3 text-sm">
                <span className="text-xs font-medium px-1.5 py-0.5 rounded bg-white/5 text-shark-muted">
                  {match.league}
                </span>
                <span className="text-shark-white font-medium">{match.home}</span>
                <span className="font-mono text-shark-green font-semibold">{match.score}</span>
                <span className="text-shark-white font-medium">{match.away}</span>
                <span className="text-xs text-shark-cyan">{match.time}</span>
                {match.live && <span className="w-2 h-2 rounded-full bg-shark-green animate-pulse" />}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

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

function AnimatedSection({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function App() {
  return (
    <div className="relative min-h-screen bg-shark-black text-shark-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <LiveTicker />

      <AnimatedSection>
        <StatsCards />
      </AnimatedSection>

      <AnimatedSection>
        <PredictionWidgets />
      </AnimatedSection>

      <AnimatedSection>
        <Whitepaper />
      </AnimatedSection>

      <AnimatedSection>
        <TokenSection />
      </AnimatedSection>

      <AnimatedSection>
        <AIIntelligence />
      </AnimatedSection>

      <AnimatedSection>
        <CryptoUtility />
      </AnimatedSection>

      <AnimatedSection>
        <PartnerBanner />
      </AnimatedSection>

      <AnimatedSection>
        <Roadmap />
      </AnimatedSection>

      <AnimatedSection>
        <ResponsibleUse />
      </AnimatedSection>

      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;