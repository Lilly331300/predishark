import { motion } from 'framer-motion';
import { ExternalLink, Handshake, Sparkles, ShieldCheck } from 'lucide-react';

export function PartnerBanner() {
  return (
    <section id="partners" className="relative py-20 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 radial-glow opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] glass rounded-full text-shark-cyan border border-shark-cyan/20 mb-4">
            <Handshake className="w-4 h-4" />
            Official Partner
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-shark-white leading-tight">
            Megasino.win <span className="gradient-text">Partner Hub</span>
          </h2>

          <p className="mt-4 text-shark-muted max-w-2xl mx-auto leading-8 text-sm sm:text-base">
            A premium entertainment partner experience connecting sports betting, casino action,
            live games, and high-energy digital rewards.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[28px] sm:rounded-[34px] border border-shark-green/25 shadow-[0_0_60px_rgba(0,245,160,0.14)]"
        >
          <div className="relative min-h-[620px] sm:min-h-[560px] lg:min-h-[460px]">
            <img
              src="/assets/sections/partner-megasino-banner.webp"
              alt="Megasino.win partner banner"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />

            <div className="absolute inset-0 bg-gradient-to-b from-shark-black/25 via-shark-black/25 to-shark-black/90 lg:bg-gradient-to-r lg:from-shark-black/70 lg:via-shark-black/20 lg:to-shark-black/55" />
            <div className="absolute inset-0 bg-gradient-to-t from-shark-black/95 via-transparent to-transparent" />

            <motion.div
              animate={{ x: ['-120%', '120%'] }}
              transition={{ duration: 9, repeat: Infinity, ease: 'linear' }}
              className="absolute top-0 left-0 h-full w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 pointer-events-none"
            />

            <div className="absolute inset-x-4 bottom-4 sm:inset-x-6 sm:bottom-6 lg:inset-x-8 lg:bottom-8">
              <div className="glass-strong rounded-[24px] sm:rounded-[28px] border border-white/10 p-5 sm:p-6 lg:p-7">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
                  <div className="max-w-3xl">
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-shark-green/10 border border-shark-green/20 text-shark-green text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.16em]">
                        <Sparkles className="w-3.5 h-3.5" />
                        Partner Banner
                      </span>

                      <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-shark-cyan/10 border border-shark-cyan/20 text-shark-cyan text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.16em]">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        Integrated
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-shark-white leading-tight">
                      Sports. Casino. Live Entertainment.
                    </h3>

                    <p className="mt-3 text-sm sm:text-base text-shark-muted max-w-2xl leading-7">
                      A polished gaming destination built for users who want action, variety,
                      and a premium entertainment experience.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3 lg:min-w-[220px]">
                    <a
                      href="http://megasino.win/"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-shark-green to-shark-cyan text-shark-black font-bold whitespace-nowrap hover:opacity-90 transition-opacity"
                    >
                      Visit Megasino
                      <ExternalLink className="w-5 h-5" />
                    </a>

                    <a
                      href="#predictions"
                      onClick={(event) => {
                        event.preventDefault();
                        const el = document.querySelector('#predictions');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl glass border border-white/10 text-shark-white font-semibold whitespace-nowrap hover:border-shark-green/30 transition-all"
                    >
                      View Modules
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-shark-green/70 to-transparent" />
            <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-shark-cyan/50 to-transparent" />
            <div className="absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-shark-green/50 to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}