import { motion } from 'framer-motion';
import {
  Sparkles,
  Calculator,
  Activity,
  BarChart3,
  ExternalLink,
  ShieldCheck,
} from 'lucide-react';

const liveModules = [
  {
    icon: Sparkles,
    title: 'AI Prediction Engine',
    subtitle:
      'Live prediction cards, match context, market insights, and AI-powered football analysis.',
    iframe: 'https://betpredictor.live/predictions/embed',
    image: '/assets/sections/widget-daily-predictions.webp',
    accent: 'green',
    height: 760,
  },
  {
    icon: Calculator,
    title: 'Mathematical Prediction System',
    subtitle: 'Advanced probability-based prediction view for today’s football markets.',
    iframe: 'https://betpredictor.live/profi/embed?datum=today',
    image: '/assets/sections/widget-odds-calculator.webp',
    accent: 'gold',
    height: 760,
  },
  {
    icon: BarChart3,
    title: 'Real-Time Statistics',
    subtitle: 'Live statistical context, football data signals, and performance movement.',
    iframe: 'https://betpredictor.live/statistic/embed',
    image: '/assets/sections/widget-prediction-history.webp',
    accent: 'cyan',
    height: 760,
  },
  {
    icon: Activity,
    title: 'Football LiveTicker',
    subtitle: 'Live scores, match flow, cards, events, and in-play football context.',
    iframe: 'https://betpredictor.live/live-ticker/embed',
    image: '/assets/sections/widget-football-liveticker.webp',
    accent: 'green',
    height: 760,
  },
];

const accentMap: Record<
  string,
  {
    border: string;
    badge: string;
    icon: string;
    glow: string;
    line: string;
  }
> = {
  green: {
    border: 'border-shark-green/20',
    badge: 'bg-shark-green/10 text-shark-green border border-shark-green/20',
    icon: 'bg-shark-green/15 text-shark-green border border-shark-green/20',
    glow: 'shadow-[0_0_60px_rgba(0,245,160,0.12)]',
    line: 'from-transparent via-shark-green/80 to-transparent',
  },
  cyan: {
    border: 'border-shark-cyan/20',
    badge: 'bg-shark-cyan/10 text-shark-cyan border border-shark-cyan/20',
    icon: 'bg-shark-cyan/15 text-shark-cyan border border-shark-cyan/20',
    glow: 'shadow-[0_0_60px_rgba(0,217,255,0.12)]',
    line: 'from-transparent via-shark-cyan/80 to-transparent',
  },
  gold: {
    border: 'border-shark-gold/20',
    badge: 'bg-shark-gold/10 text-shark-gold border border-shark-gold/20',
    icon: 'bg-shark-gold/15 text-shark-gold border border-shark-gold/20',
    glow: 'shadow-[0_0_60px_rgba(247,201,72,0.12)]',
    line: 'from-transparent via-shark-gold/80 to-transparent',
  },
};

export function PredictionWidgets() {
  return (
    <section id="predictions" className="relative py-16 lg:py-20">
      <style>
        {`
          .predishark-iframe-wrapper {
            scrollbar-width: thin;
            scrollbar-color: #00F5A0 #08131A;
          }

          .predishark-iframe-wrapper::-webkit-scrollbar {
            width: 10px;
            height: 10px;
          }

          .predishark-iframe-wrapper::-webkit-scrollbar-track {
            background: #08131A;
            border-radius: 999px;
          }

          .predishark-iframe-wrapper::-webkit-scrollbar-thumb {
            background: linear-gradient(180deg, #00F5A0, #00D9FF);
            border-radius: 999px;
            border: 2px solid #08131A;
          }

          @media (max-width: 640px) {
            .predishark-iframe-wrapper iframe {
              height: 680px !important;
            }
          }
        `}
      </style>

      <div className="absolute inset-0 radial-glow-cyan opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] glass rounded-full text-shark-cyan border border-shark-cyan/20 mb-4">
            <Sparkles className="w-4 h-4" />
            Live Product Modules
          </span>

          <h2 className="text-3xl lg:text-5xl font-black text-shark-white">
            Prediction <span className="gradient-text">Engine</span>
          </h2>

          <p className="mt-4 text-shark-muted max-w-3xl mx-auto leading-8">
            All core prediction tools are displayed here: AI predictions, mathematical analysis,
            real-time statistics, and live match tracking.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:gap-10">
          {liveModules.map((module, index) => {
            const colors = accentMap[module.accent];
            const Icon = module.icon;

            return (
              <motion.div
                key={module.title}
                initial={{ opacity: 0, y: 34 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className={`relative overflow-hidden rounded-[28px] border ${colors.border} glass-strong ${colors.glow}`}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-20"
                  style={{ backgroundImage: `url('${module.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-shark-card/95 via-shark-navy/92 to-shark-black/98" />
                <div className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${colors.line}`} />

                <div className="relative z-10 p-4 sm:p-6 lg:p-7">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 mb-6">
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-12 h-12 min-w-12 rounded-2xl flex items-center justify-center ${colors.icon}`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>

                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-3">
                          <span
                            className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-full text-[11px] font-semibold uppercase tracking-[0.18em] ${colors.badge}`}
                          >
                            <ShieldCheck className="w-3.5 h-3.5" />
                            Live Integration
                          </span>

                          <span className="inline-flex items-center px-3.5 py-2 rounded-full bg-white/[0.04] border border-white/10 text-[11px] font-semibold uppercase tracking-[0.18em] text-shark-muted">
                            Iframe Module
                          </span>
                        </div>

                        <h3 className="text-2xl lg:text-3xl font-black text-shark-white">
                          {module.title}
                        </h3>

                        <p className="mt-2 text-sm lg:text-base text-shark-muted max-w-3xl leading-7">
                          {module.subtitle}
                        </p>
                      </div>
                    </div>

                    <a
                      href={module.iframe}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl glass border border-white/10 text-shark-white font-semibold hover:border-shark-green/30 transition-all whitespace-nowrap"
                    >
                      Open Module
                      <ExternalLink className="w-4 h-4 text-shark-green" />
                    </a>
                  </div>

                  <div className="predishark-iframe-wrapper relative overflow-hidden rounded-[24px] border border-white/10 bg-shark-black/90">
                    <iframe
                      src={module.iframe}
                      width="100%"
                      height={module.height}
                      style={{
                        border: 0,
                        colorScheme: 'dark',
                        backgroundColor: '#04070A',
                      }}
                      loading="lazy"
                      title={module.title}
                      className="block w-full bg-shark-black"
                    />
                  </div>

                  <p className="mt-4 text-xs text-shark-muted/70 leading-6">
                    If this module appears empty, it may only show full data when live matches or provider data are available.
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}