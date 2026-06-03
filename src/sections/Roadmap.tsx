import { motion } from 'framer-motion';
import {
  Brain,
  Trophy,
  BarChart3,
  Languages,
  WalletCards,
  ShieldCheck,
  CreditCard,
  Globe2,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';

const roadmapItems = [
  {
    icon: Brain,
    title: 'Core AI Predictions',
    description: 'AI predictions, Community Game, Odds search, and casino partner integration.',
    accent: 'green',
  },
  {
    icon: BarChart3,
    title: 'Dashboards & Leaderboards',
    description: 'User dashboards, prediction rankings, performance tracking, and Telegram Bot.',
    accent: 'cyan',
  },
  {
    icon: Languages,
    title: 'Multi-Language Support',
    description: 'Starting with German and English, with more languages added as the platform grows.',
    accent: 'gold',
  },
  {
    icon: WalletCards,
    title: 'Bankroll & Acca Tools',
    description: 'Bankroll management, Smart Acca Builder, and live prediction upgrades.',
    accent: 'green',
  },
  {
    icon: ShieldCheck,
    title: 'Public Track Record',
    description: 'Transparent prediction history with independent audit preparation.',
    accent: 'cyan',
  },
  {
    icon: CreditCard,
    title: 'Subscription Rollout',
    description: 'A fair subscription model for users after the free launch experience.',
    accent: 'gold',
  },
  {
    icon: Globe2,
    title: 'API & Global Expansion',
    description: 'Partner API availability, wider market access, and international growth.',
    accent: 'green',
  },
  {
    icon: Sparkles,
    title: 'Continuous Optimization',
    description: 'Ongoing AI improvement, community events, partner campaigns, and ecosystem updates.',
    accent: 'cyan',
  },
];

const accentMap: Record<
  string,
  {
    icon: string;
    border: string;
    glow: string;
    line: string;
    dot: string;
  }
> = {
  green: {
    icon: 'bg-shark-green/15 text-shark-green border-shark-green/20',
    border: 'border-shark-green/20',
    glow: 'hover:shadow-[0_0_36px_rgba(0,245,160,0.13)]',
    line: 'from-shark-green to-shark-cyan',
    dot: 'bg-shark-green',
  },
  cyan: {
    icon: 'bg-shark-cyan/15 text-shark-cyan border-shark-cyan/20',
    border: 'border-shark-cyan/20',
    glow: 'hover:shadow-[0_0_36px_rgba(0,217,255,0.13)]',
    line: 'from-shark-cyan to-shark-green',
    dot: 'bg-shark-cyan',
  },
  gold: {
    icon: 'bg-shark-gold/15 text-shark-gold border-shark-gold/20',
    border: 'border-shark-gold/20',
    glow: 'hover:shadow-[0_0_36px_rgba(247,201,72,0.13)]',
    line: 'from-shark-gold to-shark-green',
    dot: 'bg-shark-gold',
  },
};

export function Roadmap() {
  return (
    <section id="roadmap" className="relative py-20 lg:py-28">
      <div className="absolute inset-0 radial-glow opacity-40" />
      <div className="absolute inset-0 bg-grid-pattern bg-[length:38px_38px] opacity-[0.08]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs font-semibold uppercase tracking-[0.18em] text-shark-green border border-shark-green/15 mb-5">
            <Trophy className="w-4 h-4" />
            Roadmap
          </span>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-shark-white leading-tight">
            Development <span className="gradient-text">Priorities</span>
          </h2>

          <p className="mt-5 text-shark-muted max-w-3xl mx-auto leading-8 text-base lg:text-lg">
            PrediShark.ai will evolve continuously through practical product upgrades, stronger
            prediction tools, trusted performance records, and global community growth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {roadmapItems.map((item, index) => {
            const colors = accentMap[item.accent];
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.05 }}
                className={`group relative overflow-hidden rounded-[28px] border ${colors.border} glass-strong ${colors.glow} transition-all duration-300 hover:-translate-y-1 min-h-[280px]`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.045] via-transparent to-white/[0.015]" />
                <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${colors.line}`} />

                <div className="relative z-10 h-full p-6 flex flex-col">
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-13 h-13 min-w-13 rounded-2xl border flex items-center justify-center ${colors.icon}`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-white/10 bg-white/[0.04] text-[10px] font-semibold uppercase tracking-[0.14em] text-shark-muted">
                      <CheckCircle2 className="w-3.5 h-3.5 text-shark-green" />
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl lg:text-2xl font-black text-shark-white leading-tight">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-sm text-shark-muted leading-7">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center justify-between">
                    <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
                    <div className={`ml-4 w-2.5 h-2.5 rounded-full ${colors.dot} shadow-glow`} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}