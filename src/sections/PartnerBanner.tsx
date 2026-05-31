import { motion } from 'framer-motion';
import { ExternalLink, Handshake, Sparkles } from 'lucide-react';

export function PartnerBanner() {
  return (
    <section id="partners" className="relative py-20 lg:py-28">
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

          <h2 className="text-3xl lg:text-4xl font-bold text-shark-white">
            Megasino.win <span className="gradient-text">Partner Hub</span>
          </h2>

          <p className="mt-4 text-shark-muted max-w-2xl mx-auto leading-8">
            A premium entertainment partner experience connecting sports betting, casino action,
            live games, and high-energy digital rewards.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[32px] border border-shark-green/25 shadow-[0_0_60px_rgba(0,245,160,0.14)]"
        >
          <div className="relative aspect-[21/9] min-h-[360px] lg:min-h-[430px]">
            <img
              src="/assets/sections/partner-megasino-banner.webp"
              alt="Megasino.win partner banner"
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-shark-black/45 via-transparent to-shark-black/35" />
            <div className="absolute inset-0 bg-gradient-to-t from-shark-black/70 via-transparent to-transparent" />

            <motion.div
              animate={{ x: ['-120%', '120%'] }}
              transition={{ duration: 9, repeat: Infinity, ease: 'linear' }}
              className="absolute top-0 left-0 h-full w-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"
            />

            <div className="absolute left-5 right-5 bottom-5 lg:left-8 lg:right-8 lg:bottom-8">
              <div className="glass-strong rounded-3xl border border-white/10 p-5 lg:p-6">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-shark-green/10 border border-shark-green/20 text-shark-green text-[11px] font-semibold uppercase tracking-[0.18em]">
                        <Sparkles className="w-3.5 h-3.5" />
                        Partner Banner
                      </span>
                    </div>

                    <h3 className="text-2xl lg:text-3xl font-black text-shark-white">
                      Sports. Casino. Live Entertainment.
                    </h3>

                    <p className="mt-2 text-sm lg:text-base text-shark-muted max-w-2xl leading-7">
                      A polished gaming destination built for users who want action, variety,
                      and a premium entertainment experience.
                    </p>
                  </div>

                  <a
                    href="http://megasino.win/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-shark-green to-shark-cyan text-shark-black font-bold whitespace-nowrap hover:opacity-90 transition-opacity"
                  >
                    Visit Megasino
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}