import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  Copy,
  AlertTriangle,
  TrendingUp,
  ShieldCheck,
} from 'lucide-react';
import { ParticleBackground } from '@/components/ui/custom/ParticleBackground';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

export function Hero() {
  const [showNotice, setShowNotice] = useState(false);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
        <ParticleBackground />

        <div className="absolute top-0 left-1/4 w-96 h-96 bg-shark-green/5 rounded-full blur-[128px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-shark-cyan/5 rounded-full blur-[128px]" />
        <div className="absolute inset-0 grid-bg opacity-50" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-0">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div variants={containerVariants} initial="hidden" animate="visible">
              <motion.div
                variants={itemVariants}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-shark-green/20 text-xs font-semibold uppercase tracking-[0.18em] text-shark-green mb-7"
              >
                PrediShark.ai
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.03] tracking-tight"
              >
                Predict Smarter.
                <br />
                <span className="gradient-text">Bet Smarter.</span>
                <br />
                Earn Smarter.
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="mt-6 text-base lg:text-lg text-shark-muted max-w-xl leading-8"
              >
                AI-powered football predictions, premium odds intelligence, transparent
                history, and a crypto-native experience built for sharper sports insight.
              </motion.p>

              <motion.div variants={itemVariants} className="mt-8 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setShowNotice(true)}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-shark-green to-shark-cyan text-shark-black font-semibold shadow-glow"
                >
                  <Copy className="w-5 h-5" />
                  Copy Contract
                </button>

                <button
                  onClick={() => scrollTo('#predictions')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl glass border border-white/10 text-shark-white font-semibold hover:border-shark-green/30 transition-all"
                >
                  Explore Prediction Engine
                  <ArrowRight className="w-5 h-5 text-shark-green" />
                </button>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="mt-8 grid sm:grid-cols-2 gap-4 max-w-2xl"
              >
                <div className="glass rounded-2xl p-4 border border-white/10">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-shark-green/10 flex items-center justify-center">
                      <ShieldCheck className="w-5 h-5 text-shark-green" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-shark-white">
                        Contract Address Coming Soon
                      </p>
                      <p className="text-xs text-shark-muted leading-6 mt-1">
                        Only trust official PrediShark.ai channels for token announcements.
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
                      <p className="text-sm font-semibold text-shark-white">
                        Data Meets Intuition
                      </p>
                      <p className="text-xs text-shark-muted leading-6 mt-1">
                        Football prediction intelligence with a premium product experience.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.25 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-[28px] border border-white/10 glass-strong shadow-2xl">
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-30"
                  style={{ backgroundImage: "url('/assets/hero/hero-main-dashboard.webp')" }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-shark-card/90 via-shark-navy/80 to-shark-black/95" />

                <div className="relative z-10 p-5 lg:p-7">
                  <div className="flex items-center justify-between mb-5">
                    <div>
                      <p className="text-xs uppercase tracking-[0.22em] text-shark-green font-semibold">
                        AI Match Spotlight
                      </p>
                      <h3 className="text-xl lg:text-2xl font-bold text-shark-white mt-1">
                        Matchday Confidence Panel
                      </h3>
                    </div>
                    <div className="px-3 py-1.5 rounded-full bg-shark-green/10 border border-shark-green/20 text-shark-green text-xs font-semibold uppercase tracking-[0.18em]">
                      Live Insight
                    </div>
                  </div>

                  <div className="grid gap-4">
                    <div className="glass rounded-2xl border border-white/10 p-4 lg:p-5">
                      <div className="flex items-center justify-between gap-5">
                        <div>
                          <p className="text-xs uppercase tracking-[0.18em] text-shark-muted">
                            Featured Match
                          </p>
                          <div className="mt-4 flex flex-wrap items-center gap-4">
                            <div className="flex items-center gap-3">
                              <img
                                src="/assets/clubs/arsenal.png"
                                alt="Arsenal"
                                className="w-11 h-11 object-contain rounded-full bg-white p-1"
                              />
                              <div>
                                <p className="text-sm font-semibold text-shark-white">Arsenal</p>
                                <p className="text-xs text-shark-muted">Premier League</p>
                              </div>
                            </div>

                            <div className="px-3 py-1 rounded-full bg-white/5 text-shark-cyan text-xs font-semibold">
                              VS
                            </div>

                            <div className="flex items-center gap-3">
                              <img
                                src="/assets/clubs/man-city.png"
                                alt="Manchester City"
                                className="w-11 h-11 object-contain rounded-full bg-white p-1"
                              />
                              <div>
                                <p className="text-sm font-semibold text-shark-white">
                                  Man City
                                </p>
                                <p className="text-xs text-shark-muted">Premier League</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="text-right">
                          <p className="text-xs uppercase tracking-[0.18em] text-shark-muted">
                            Confidence
                          </p>
                          <p className="text-3xl font-black text-shark-green mt-2">78%</p>
                          <p className="text-xs text-shark-muted">Over 2.5 Goals</p>
                        </div>
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="glass rounded-2xl border border-white/10 p-4">
                        <p className="text-xs uppercase tracking-[0.18em] text-shark-muted mb-3">
                          AI Breakdown
                        </p>
                        <div className="space-y-3">
                          <div>
                            <div className="flex justify-between text-xs mb-1">
                              <span className="text-shark-muted">Attack Momentum</span>
                              <span className="text-shark-green">84%</span>
                            </div>
                            <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                              <div className="h-full w-[84%] bg-gradient-to-r from-shark-green to-shark-cyan rounded-full" />
                            </div>
                          </div>
                          <div>
                            <div className="flex justify-between text-xs mb-1">
                              <span className="text-shark-muted">Form Signal</span>
                              <span className="text-shark-cyan">71%</span>
                            </div>
                            <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                              <div className="h-full w-[71%] bg-gradient-to-r from-shark-cyan to-shark-green rounded-full" />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="glass rounded-2xl border border-white/10 p-4">
                        <p className="text-xs uppercase tracking-[0.18em] text-shark-muted mb-3">
                          Odds Snapshot
                        </p>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-shark-muted">Home Win</span>
                            <span className="text-shark-white font-semibold">2.10</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-shark-muted">Draw</span>
                            <span className="text-shark-white font-semibold">3.40</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-shark-muted">Away Win</span>
                            <span className="text-shark-white font-semibold">2.85</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="glass rounded-2xl border border-white/10 p-4 flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <p className="text-xs uppercase tracking-[0.18em] text-shark-muted">
                          Engine Signal
                        </p>
                        <p className="text-sm font-semibold text-shark-white mt-1">
                          Premium match intelligence powering smarter prediction decisions.
                        </p>
                      </div>
                      <span className="px-3 py-2 rounded-xl bg-shark-gold/10 border border-shark-gold/20 text-shark-gold text-xs font-semibold uppercase tracking-[0.18em]">
                        Prediction Ready
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-shark-green/10 blur-3xl" />
              <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-shark-cyan/10 blur-3xl" />
            </motion.div>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {showNotice && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
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
                  <h3 className="text-xl font-bold text-shark-white">Contract Address Coming Soon</h3>
                  <p className="text-sm text-shark-muted">
                    Please wait for the official launch notice.
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-sm text-shark-muted leading-7">
                <p className="text-shark-white font-medium">Coming soon!</p>
                <p>
                  The official PrediShark.ai contract address is not live yet. Please only use
                  the address announced through official PrediShark.ai channels.
                </p>
                <p>
                  Always verify before interacting with any token or contract. Avoid fake
                  addresses, fake airdrops, and unofficial links.
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