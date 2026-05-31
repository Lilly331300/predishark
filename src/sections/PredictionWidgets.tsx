import { motion } from 'framer-motion';
import {
  Sparkles,
  History,
  Calculator,
  Activity,
  ArrowUpRight,
  ExternalLink,
} from 'lucide-react';

const widgets = [
  {
    icon: Sparkles,
    title: 'Daily 20 Predictions',
    description:
      'Curated AI football predictions updated daily with a premium engine experience.',
    image: '/assets/sections/widget-daily-predictions.webp',
    color: 'green',
  },
  {
    icon: History,
    title: 'Prediction History',
    description:
      'Track previous predictions, outcome patterns, confidence levels, and performance flow.',
    image: '/assets/sections/widget-prediction-history.webp',
    color: 'cyan',
  },
  {
    icon: Calculator,
    title: 'Math Odds Calculator',
    description:
      'Convert odds, estimate implied probability, and explore value with cleaner logic.',
    image: '/assets/sections/widget-odds-calculator.webp',
    color: 'gold',
  },
];

const colorMap: Record<
  string,
  { border: string; badge: string; icon: string; glow: string }
> = {
  green: {
    border: 'border-shark-green/20',
    badge: 'bg-shark-green/10 text-shark-green border border-shark-green/20',
    icon: 'bg-shark-green/15 text-shark-green',
    glow: 'group-hover:shadow-[0_0_32px_rgba(0,245,160,0.14)]',
  },
  cyan: {
    border: 'border-shark-cyan/20',
    badge: 'bg-shark-cyan/10 text-shark-cyan border border-shark-cyan/20',
    icon: 'bg-shark-cyan/15 text-shark-cyan',
    glow: 'group-hover:shadow-[0_0_32px_rgba(0,217,255,0.14)]',
  },
  gold: {
    border: 'border-shark-gold/20',
    badge: 'bg-shark-gold/10 text-shark-gold border border-shark-gold/20',
    icon: 'bg-shark-gold/15 text-shark-gold',
    glow: 'group-hover:shadow-[0_0_32px_rgba(247,201,72,0.14)]',
  },
};

export function PredictionWidgets() {
  return (
    <section id="predictions" className="relative py-20 lg:py-28">
      <div className="absolute inset-0 radial-glow-cyan opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] glass rounded-full text-shark-cyan border border-shark-cyan/20 mb-4">
            <Sparkles className="w-4 h-4" />
            Prediction Engine
          </span>

          <h2 className="text-3xl lg:text-4xl font-bold text-shark-white">
            AI Prediction <span className="gradient-text">Modules</span>
          </h2>

          <p className="mt-3 text-shark-muted max-w-2xl mx-auto">
            Daily predictions, prediction history, odds tools, and a live football ticker built
            into one premium sports intelligence experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {widgets.map((widget, i) => {
            const colors = colorMap[widget.color];

            return (
              <motion.div
                key={widget.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className={`group relative overflow-hidden rounded-[26px] border ${colors.border} glass-strong ${colors.glow} transition-all duration-300 hover:-translate-y-1`}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-30 group-hover:opacity-40 transition-opacity"
                  style={{ backgroundImage: `url('${widget.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-shark-card/25 via-shark-card/75 to-shark-black/95" />

                <div className="relative z-10 p-6 lg:p-7 min-h-[340px] flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-3 mb-5">
                      <div
                        className={`w-12 h-12 rounded-2xl flex items-center justify-center ${colors.icon}`}
                      >
                        <widget.icon className="w-6 h-6" />
                      </div>

                      <span
                        className={`text-[11px] px-3 py-1.5 rounded-full font-semibold uppercase tracking-[0.16em] ${colors.badge}`}
                      >
                        Coming Soon
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-shark-white mb-3">
                      {widget.title}
                    </h3>

                    <p className="text-sm text-shark-muted leading-7 max-w-md">
                      {widget.description}
                    </p>
                  </div>

                  <div className="mt-8 space-y-4">
                    <div className="grid grid-cols-3 gap-3">
                      <div className="glass rounded-xl p-3 border border-white/5">
                        <p className="text-[10px] uppercase tracking-[0.16em] text-shark-muted">
                          Status
                        </p>
                        <p className="mt-2 text-sm font-semibold text-shark-white">
                          Design Ready
                        </p>
                      </div>

                      <div className="glass rounded-xl p-3 border border-white/5">
                        <p className="text-[10px] uppercase tracking-[0.16em] text-shark-muted">
                          Mode
                        </p>
                        <p className="mt-2 text-sm font-semibold text-shark-white">
                          Placeholder
                        </p>
                      </div>

                      <div className="glass rounded-xl p-3 border border-white/5">
                        <p className="text-[10px] uppercase tracking-[0.16em] text-shark-muted">
                          Launch
                        </p>
                        <p className="mt-2 text-sm font-semibold text-shark-white">
                          Soon
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-shark-green font-medium">
                      <span>Prepared for live integration</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          id="liveticker"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.15 }}
          className="mt-8 lg:mt-10 relative overflow-hidden rounded-[30px] border border-shark-green/20 glass-strong shadow-[0_0_60px_rgba(0,245,160,0.12)]"
        >
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: "url('/assets/sections/widget-football-liveticker.webp')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-shark-card/90 via-shark-navy/90 to-shark-black/95" />

          <div className="relative z-10 p-5 sm:p-6 lg:p-7">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 mb-6">
              <div>
                <span className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-shark-green/10 border border-shark-green/20 text-shark-green text-[11px] font-semibold uppercase tracking-[0.18em] mb-4">
                  <Activity className="w-4 h-4 animate-pulse" />
                  Live Module
                </span>

                <h3 className="text-2xl lg:text-3xl font-black text-shark-white">
                  Football <span className="gradient-text">LiveTicker</span>
                </h3>

                <p className="mt-2 text-sm lg:text-base text-shark-muted max-w-2xl leading-7">
                  Real-time football updates, live match flow, scores, and in-play tracking
                  powered through the embedded live ticker.
                </p>
              </div>

              <a
                href="https://betpredictor.live/live-ticker/embed"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl glass border border-white/10 text-shark-white font-semibold hover:border-shark-green/30 transition-all whitespace-nowrap"
              >
                Open Live Ticker
                <ExternalLink className="w-4 h-4 text-shark-green" />
              </a>
            </div>

            <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-shark-black/80">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-shark-green/70 to-transparent" />

              <iframe
                src="https://betpredictor.live/live-ticker/embed"
                width="100%"
                height="900"
                style={{ border: 0 }}
                loading="lazy"
                title="Football LiveTicker"
                className="block w-full bg-shark-black"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}