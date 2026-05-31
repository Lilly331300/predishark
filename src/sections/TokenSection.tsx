import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Copy,
  AlertTriangle,
  Coins,
  ShieldCheck,
  Sparkles,
  Lock,
  Gift,
  Rocket,
} from 'lucide-react';

const tokenDetails = [
  {
    icon: Coins,
    label: 'Ticker',
    value: 'Coming Soon',
  },
  {
    icon: Rocket,
    label: 'Launch',
    value: 'Coming Soon',
  },
  {
    icon: Lock,
    label: 'Access',
    value: 'Future Staking',
  },
  {
    icon: Gift,
    label: 'Rewards',
    value: 'Community Utility',
  },
];

export function TokenSection() {
  const [showNotice, setShowNotice] = useState(false);

  return (
    <>
      <section id="token" className="relative py-20 lg:py-28">
        <div className="absolute inset-0 radial-glow opacity-40" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[32px] border border-shark-gold/20 glass-strong"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-shark-gold/10 via-shark-green/5 to-shark-cyan/10" />
            <div className="absolute top-0 right-0 w-80 h-80 bg-shark-gold/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-shark-green/10 rounded-full blur-[120px]" />

            <div className="relative z-10 grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center p-6 sm:p-8 lg:p-10">
              <div>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-shark-gold/10 border border-shark-gold/20 text-shark-gold text-xs font-semibold uppercase tracking-[0.18em] mb-5">
                  <Coins className="w-4 h-4" />
                  PrediShark Token
                </span>

                <h2 className="text-3xl lg:text-5xl font-black text-shark-white leading-tight">
                  Token details <span className="gradient-text">coming soon</span>
                </h2>

                <p className="mt-5 text-shark-muted text-base lg:text-lg leading-8 max-w-2xl">
                  The token layer will support future access, staking, rewards, and ecosystem
                  utility for the PrediShark.ai community.
                </p>

                <div className="mt-8">
                  <button
                    onClick={() => setShowNotice(true)}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-shark-green to-shark-cyan text-shark-black font-bold hover:opacity-90 transition-opacity shadow-glow"
                  >
                    <Copy className="w-5 h-5" />
                    Copy Contract
                  </button>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {tokenDetails.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-5 hover:border-shark-green/30 transition-all"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                    <div className="relative z-10">
                      <div className="w-12 h-12 rounded-2xl bg-shark-green/10 border border-shark-green/20 flex items-center justify-center mb-5">
                        <item.icon className="w-6 h-6 text-shark-green" />
                      </div>

                      <p className="text-xs uppercase tracking-[0.18em] text-shark-muted">
                        {item.label}
                      </p>
                      <p className="mt-2 text-xl font-bold text-shark-white">
                        {item.value}
                      </p>
                    </div>
                  </motion.div>
                ))}

                <div className="sm:col-span-2 rounded-2xl border border-shark-gold/20 bg-shark-gold/5 p-5">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-shark-gold/10 flex items-center justify-center">
                      <ShieldCheck className="w-5 h-5 text-shark-gold" />
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-shark-white">
                        Contract not live yet
                      </p>
                      <p className="mt-1 text-sm text-shark-muted leading-7">
                        Only trust contract details shared through official PrediShark.ai channels.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
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
                  <h3 className="text-xl font-bold text-shark-white">
                    Contract Address Coming Soon
                  </h3>
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