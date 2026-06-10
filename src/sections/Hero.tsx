import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  Copy,
  AlertTriangle,
  TrendingUp,
  Target,
  RefreshCw,
  Gamepad2,
  CalendarDays,
  Sparkles,
  Wallet,
  Send,
} from 'lucide-react';
import { ParticleBackground } from '@/components/ui/custom/ParticleBackground';

const TELEGRAM_LINK = 'https://t.me/predishark';
const X_LINK = 'https://x.com/predishark';

const cryptoUtilities = [
  {
    icon: Copy,
    label: 'Token Address',
    value: 'Copy contract address',
    helper: 'Official $SHARK CA will be added once launch details are confirmed.',
    type: 'copy',
    accent: 'green',
  },
  {
    icon: RefreshCw,
    label: 'Rewards',
    value: '20% weekly buybacks',
    helper: '20% of subscription revenue is used for $SHARK buybacks.',
    type: 'info',
    accent: 'cyan',
  },
  {
    icon: Gamepad2,
    label: 'Casino Utility',
    value: 'Partner platform use',
    helper: '$SHARK supports approved casino, partner, and platform utility.',
    type: 'info',
    accent: 'gold',
  },
  {
    icon: CalendarDays,
    label: 'Community Events',
    value: 'Regular reward events',
    helper: 'Community campaigns, prediction events, and ecosystem activity.',
    type: 'info',
    accent: 'green',
  },
];

const accentMap: Record<string, { icon: string; label: string; border: string }> = {
  green: {
    icon: 'bg-shark-green/10 border-shark-green/20 text-shark-green',
    label: 'text-shark-green',
    border: 'hover:border-shark-green/30',
  },
  cyan: {
    icon: 'bg-shark-cyan/10 border-shark-cyan/20 text-shark-cyan',
    label: 'text-shark-cyan',
    border: 'hover:border-shark-cyan/30',
  },
  gold: {
    icon: 'bg-shark-gold/10 border-shark-gold/20 text-shark-gold',
    label: 'text-shark-gold',
    border: 'hover:border-shark-gold/30',
  },
};

export function Hero() {
  const [showNotice, setShowNotice] = useState(false);

  const openPredictionEngine = () => {
    window.dispatchEvent(
      new CustomEvent('predishark:reveal-section', {
        detail: 'predictions',
      })
    );
  };

  return (
    <>
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
        <ParticleBackground />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,245,160,0.12),transparent_32%),radial-gradient(circle_at_80%_30%,rgba(0,217,255,0.11),transparent_34%),radial-gradient(circle_at_50%_90%,rgba(247,201,72,0.07),transparent_30%)]" />
        <div className="absolute inset-0 grid-bg opacity-40" />

        <motion.div
          animate={{ opacity: [0.22, 0.42, 0.22], scale: [1, 1.08, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -top-24 left-1/4 w-[360px] sm:w-[420px] h-[360px] sm:h-[420px] bg-shark-green/10 rounded-full blur-[140px]"
        />

        <motion.div
          animate={{ opacity: [0.18, 0.36, 0.18], scale: [1.05, 1, 1.05] }}
          transition={{ duration: 9, repeat: Infinity }}
          className="absolute bottom-0 right-1/4 w-[360px] sm:w-[460px] h-[360px] sm:h-[460px] bg-shark-cyan/10 rounded-full blur-[150px]"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-14 sm:pt-32 sm:pb-20 lg:py-36">
          <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-10 lg:gap-16 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.1 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-shark-green/20 text-xs font-semibold uppercase tracking-[0.18em] text-shark-green mb-6"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-shark-green opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-shark-green" />
                </span>
                Website Live
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.2 }}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.02] tracking-tight"
              >
                Predict Smarter.
                <br />
                <span className="gradient-text">Bet Smarter.</span>
                <br />
                Decide Smarter.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.3 }}
                className="mt-5 text-base lg:text-lg text-shark-muted max-w-xl leading-8"
              >
                PrediShark.ai is live with AI-powered football prediction intelligence, real-time
                match data, mathematical tools, transparent performance logic, and the $SHARK
                token layer launching through Pump.fun.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.4 }}
                className="mt-7 flex flex-col sm:flex-row gap-4"
              >
                <button
                  onClick={openPredictionEngine}
                  className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-shark-green to-shark-cyan text-shark-black font-bold shadow-glow hover:opacity-90 transition-all hover:-translate-y-0.5"
                >
                  Explore Prediction Engine
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <a
                  href={TELEGRAM_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl glass border border-white/10 text-shark-white font-semibold hover:border-shark-cyan/30 transition-all hover:-translate-y-0.5"
                >
                  Join Our Telegram Community
                  <Send className="w-4 h-4 text-shark-cyan" />
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.48 }}
                className="mt-4 flex flex-wrap items-center gap-3"
              >
                <a
                  href={X_LINK}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="PrediShark.ai on X"
                  className="w-11 h-11 rounded-xl glass border border-white/10 flex items-center justify-center text-shark-white hover:text-shark-green hover:border-shark-green/30 transition-all"
                >
                  <span className="text-base font-black">𝕏</span>
                </a>

                <a
                  href={TELEGRAM_LINK}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="PrediShark.ai Telegram"
                  className="w-11 h-11 rounded-xl glass border border-white/10 flex items-center justify-center text-shark-white hover:text-shark-cyan hover:border-shark-cyan/30 transition-all"
                >
                  <Send className="w-4 h-4" />
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.55 }}
                className="mt-6 grid sm:grid-cols-2 gap-4 max-w-2xl"
              >
                <div className="glass rounded-2xl p-4 border border-shark-green/20">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-shark-green/10 flex items-center justify-center">
                      <Target className="w-5 h-5 text-shark-green" />
                    </div>

                    <div>
                      <p className="text-lg font-black text-shark-green">56–62%</p>
                      <p className="text-xs uppercase tracking-[0.16em] text-shark-muted">
                        Average Success Rate
                      </p>
                    </div>
                  </div>
                </div>

                <div className="glass rounded-2xl p-4 border border-white/10">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-shark-cyan/10 flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-shark-cyan" />
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-shark-white">Prediction First</p>
                      <p className="text-xs text-shark-muted leading-6 mt-1">
                        Football data, AI probability, statistics, and match context at first glance.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 32, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.25 }}
              className="relative"
            >
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="relative overflow-hidden rounded-[28px] sm:rounded-[32px] border border-shark-gold/20 glass-strong shadow-2xl"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-40"
                  style={{ backgroundImage: "url('/assets/hero/token-hero-card.webp')" }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-shark-card/96 via-shark-navy/88 to-shark-black/98" />
                <div className="absolute inset-0 bg-grid-pattern bg-[length:34px_34px] opacity-[0.12]" />

                <motion.div
                  animate={{ x: ['-120%', '120%'] }}
                  transition={{ duration: 8, repeat: Infinity }}
                  className="absolute top-0 left-0 h-full w-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 pointer-events-none"
                />

                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-shark-gold/80 to-transparent" />

                <div className="relative z-10 p-4 sm:p-6 lg:p-7">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-5">
                    <div>
                      <p className="text-xs uppercase tracking-[0.22em] text-shark-gold font-semibold">
                        Crypto Utility Layer
                      </p>

                      <h3 className="text-2xl lg:text-3xl font-black text-shark-white mt-2">
                        $SHARK Token Utility
                      </h3>

                      <p className="mt-2 text-sm text-shark-muted leading-7 max-w-md">
                        $SHARK is the PrediShark utility layer launching through Pump.fun, supporting
                        rewards, buybacks, partner access, and community growth.
                      </p>
                    </div>

                    <span className="inline-flex w-fit items-center justify-center gap-2 px-3.5 py-2 rounded-full bg-shark-gold/10 border border-shark-gold/20 text-shark-gold text-[11px] font-semibold uppercase tracking-[0.16em] whitespace-nowrap">
                      <Sparkles className="w-3.5 h-3.5" />
                      Pump.fun Launch
                    </span>
                  </div>

                  <div className="relative mb-5 overflow-hidden rounded-3xl border border-white/10 bg-black/30 min-h-[150px] sm:min-h-[200px]">
                    <img
                      src="/assets/hero/token-hero-card.webp"
                      alt="PrediShark token utility"
                      className="absolute inset-0 w-full h-full object-cover opacity-80"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-shark-black/85 via-shark-black/15 to-transparent" />

                    <div className="absolute left-4 right-4 bottom-4">
                      <div className="glass rounded-2xl p-4 border border-white/10">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-xl bg-shark-green/10 border border-shark-green/20 flex items-center justify-center">
                            <Wallet className="w-4 h-4 text-shark-green" />
                          </div>

                          <div>
                            <p className="text-xs uppercase tracking-[0.18em] text-shark-green font-semibold">
                              Pump.fun Utility Launch
                            </p>
                            <p className="mt-1 text-sm text-shark-white font-medium">
                              $SHARK powers rewards, buybacks, payments, and community activity.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    {cryptoUtilities.map((item, index) => {
                      const styles = accentMap[item.accent];

                      return (
                        <motion.button
                          key={item.label}
                          type="button"
                          onClick={() => {
                            if (item.type === 'copy') setShowNotice(true);
                          }}
                          initial={{ opacity: 0, y: 14 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.35 + index * 0.08 }}
                          className={`text-left glass rounded-2xl border border-white/10 p-4 ${styles.border} transition-all`}
                        >
                          <div className="flex items-start gap-3">
                            <div
                              className={`w-10 h-10 rounded-2xl border flex items-center justify-center ${styles.icon}`}
                            >
                              <item.icon className="w-5 h-5" />
                            </div>

                            <div>
                              <p
                                className={`text-[10px] uppercase tracking-[0.18em] font-semibold ${styles.label}`}
                              >
                                {item.label}
                              </p>

                              <p className="mt-1 text-sm font-black text-shark-white leading-6">
                                {item.value}
                              </p>

                              <p className="mt-1 text-xs text-shark-muted leading-5">
                                {item.helper}
                              </p>
                            </div>
                          </div>
                        </motion.button>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {showNotice && (
          <motion.div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
            <div
              className="absolute inset-0 bg-black/70 backdrop-blur-md"
              onClick={() => setShowNotice(false)}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 20 }}
              className="relative z-10 max-w-xl w-full glass-strong rounded-3xl p-6 lg:p-8 border border-shark-gold/20"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-shark-gold/15 flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-shark-gold" />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-shark-white">
                    Official Contract Address
                  </h3>
                  <p className="text-sm text-shark-muted">
                    Use only the official PrediShark.ai launch information.
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-sm text-shark-muted leading-7">
                <p className="text-shark-white font-medium">Launch update</p>
                <p>
                  $SHARK is launching through Pump.fun. The official contract address will be shown
                  on PrediShark.ai and official social channels when confirmed.
                </p>
                <p>
                  Always verify before interacting with any token or contract. Avoid fake addresses,
                  fake airdrops, and unofficial links.
                </p>
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => setShowNotice(false)}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-shark-green to-shark-cyan text-shark-black font-semibold"
                >
                  Got it
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}