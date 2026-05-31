import { motion } from 'framer-motion';
import { MapPin, Sparkles, TrendingUp, Globe, Rocket, Check, Circle } from 'lucide-react';

const phases = [
  {
    phase: 'Phase 1',
    title: 'MVP Launch',
    icon: Sparkles,
    color: 'green',
    items: [
      { text: 'AI predictions', done: true },
      { text: 'Community game', done: true },
      { text: 'Odds tools', done: true },
      { text: 'Basic dashboard', done: false },
    ],
  },
  {
    phase: 'Phase 2',
    title: 'Growth',
    icon: TrendingUp,
    color: 'cyan',
    items: [
      { text: 'Leaderboards', done: false },
      { text: 'Bankroll tools', done: false },
      { text: 'Smart Acca Builder', done: false },
      { text: 'Live alerts', done: false },
    ],
  },
  {
    phase: 'Phase 3',
    title: 'Web3 Expansion',
    icon: Globe,
    color: 'gold',
    items: [
      { text: 'Token utility', done: false },
      { text: 'Staking access', done: false },
      { text: 'Public track record', done: false },
      { text: 'API access', done: false },
    ],
  },
  {
    phase: 'Phase 4',
    title: 'Global Scaling',
    icon: Rocket,
    color: 'purple',
    items: [
      { text: 'More sports', done: false },
      { text: 'More partners', done: false },
      { text: 'More languages', done: false },
      { text: 'AI optimization', done: false },
    ],
  },
];

const colorMap: Record<string, { border: string; glow: string; icon: string; line: string; badge: string }> = {
  green: {
    border: 'border-shark-green/20 hover:border-shark-green/40',
    glow: 'shadow-[0_0_20px_rgba(0,245,160,0.1)]',
    icon: 'bg-shark-green/20 text-shark-green',
    line: 'bg-shark-green',
    badge: 'bg-shark-green/10 text-shark-green',
  },
  cyan: {
    border: 'border-shark-cyan/20 hover:border-shark-cyan/40',
    glow: 'shadow-[0_0_20px_rgba(0,217,255,0.1)]',
    icon: 'bg-shark-cyan/20 text-shark-cyan',
    line: 'bg-shark-cyan',
    badge: 'bg-shark-cyan/10 text-shark-cyan',
  },
  gold: {
    border: 'border-shark-gold/20 hover:border-shark-gold/40',
    glow: 'shadow-[0_0_20px_rgba(247,201,72,0.1)]',
    icon: 'bg-shark-gold/20 text-shark-gold',
    line: 'bg-shark-gold',
    badge: 'bg-shark-gold/10 text-shark-gold',
  },
  purple: {
    border: 'border-purple-400/20 hover:border-purple-400/40',
    glow: 'shadow-[0_0_20px_rgba(167,139,250,0.1)]',
    icon: 'bg-purple-400/20 text-purple-400',
    line: 'bg-purple-400',
    badge: 'bg-purple-400/10 text-purple-400',
  },
};

export function Roadmap() {
  return (
    <section id="roadmap" className="relative py-20 lg:py-28">
      <div className="absolute inset-0 radial-glow-cyan opacity-50" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium glass rounded-full text-shark-cyan border-shark-cyan/20 mb-4">
            <MapPin className="w-3.5 h-3.5" />
            Roadmap
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-shark-white">
            Our <span className="gradient-text">Roadmap</span>
          </h2>
        </motion.div>

        {/* Desktop: Horizontal timeline */}
        <div className="hidden lg:block">
          {/* Timeline line */}
          <div className="relative mb-8">
            <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-shark-green/40 via-shark-cyan/40 to-shark-gold/40" />
            <div className="relative flex justify-between">
              {phases.map((phase, i) => {
                const colors = colorMap[phase.color];
                const doneCount = phase.items.filter(item => item.done).length;
                const isActive = doneCount > 0 && doneCount < phase.items.length;
                const isComplete = doneCount === phase.items.length;
                return (
                  <motion.div
                    key={phase.phase}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 }}
                    className={`w-10 h-10 rounded-full ${colors.icon} flex items-center justify-center border-2 ${isComplete ? 'border-shark-green' : isActive ? 'border-shark-cyan' : 'border-white/10'} bg-shark-black z-10`}
                  >
                    {isComplete ? <Check className="w-5 h-5" /> : <phase.icon className="w-5 h-5" />}
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Phase cards */}
          <div className="grid grid-cols-4 gap-6">
            {phases.map((phase, i) => {
              const colors = colorMap[phase.color];
              return (
                <motion.div
                  key={phase.phase}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className={`glass rounded-2xl p-5 border ${colors.border} ${colors.glow} transition-all hover:-translate-y-1`}
                >
                  <span className={`inline-block text-xs px-2 py-1 rounded-full ${colors.badge} mb-3`}>
                    {phase.phase}
                  </span>
                  <h3 className="text-lg font-semibold text-shark-white mb-4">{phase.title}</h3>
                  <ul className="space-y-2.5">
                    {phase.items.map((item) => (
                      <li key={item.text} className="flex items-center gap-2.5">
                        {item.done ? (
                          <Check className="w-4 h-4 text-shark-green flex-shrink-0" />
                        ) : (
                          <Circle className="w-4 h-4 text-shark-muted flex-shrink-0" />
                        )}
                        <span className={`text-sm ${item.done ? 'text-shark-white' : 'text-shark-muted'}`}>
                          {item.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile: Vertical timeline */}
        <div className="lg:hidden space-y-6">
          {phases.map((phase, i) => {
            const colors = colorMap[phase.color];
            return (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative glass rounded-2xl p-5 border ${colors.border} pl-12`}
              >
                {/* Timeline dot */}
                <div className={`absolute left-4 top-6 w-8 h-8 rounded-full ${colors.icon} flex items-center justify-center`}>
                  <phase.icon className="w-4 h-4" />
                </div>
                {/* Vertical line */}
                {i < phases.length - 1 && (
                  <div className={`absolute left-7 top-14 w-px h-[calc(100%+24px)] ${colors.line} opacity-20`} />
                )}
                
                <span className={`inline-block text-xs px-2 py-1 rounded-full ${colors.badge} mb-2`}>
                  {phase.phase}
                </span>
                <h3 className="text-lg font-semibold text-shark-white mb-3">{phase.title}</h3>
                <ul className="space-y-2">
                  {phase.items.map((item) => (
                    <li key={item.text} className="flex items-center gap-2">
                      {item.done ? (
                        <Check className="w-4 h-4 text-shark-green flex-shrink-0" />
                      ) : (
                        <Circle className="w-4 h-4 text-shark-muted flex-shrink-0" />
                      )}
                      <span className={`text-sm ${item.done ? 'text-shark-white' : 'text-shark-muted'}`}>
                        {item.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
