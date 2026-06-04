import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Copy,
  AlertTriangle,
  Coins,
  ShieldCheck,
  Lock,
  RefreshCw,
  Vote,
  Gamepad2,
  TrendingUp,
  ArrowRight,
  CircleDollarSign,
} from 'lucide-react';

const tokenStats = [
  {
    icon: Coins,
    label: 'Token',
    value: '$SHARK',
    detail: 'Native utility token',
  },
  {
    icon: CircleDollarSign,
    label: 'Supply',
    value: '1B',
    detail: 'Fixed total supply',
  },
  {
    icon: Lock,
    label: 'Minting',
    value: 'Fixed',
    detail: 'No additional minting',
  },
  {
    icon: ShieldCheck,
    label: 'Chain',
    value: 'Solana SPL',
    detail: 'Fast scalable token standard',
  },
];

const utilityItems = [
  {
    icon: RefreshCw,
    title: '20% Weekly Buybacks',
    text: '20% of subscription revenue automatically buys back $SHARK every week.',
  },
  {
    icon: Vote,
    title: 'Governance Rights',
    text: 'Vote on features, leagues, platform improvements, and partner direction.',
  },
  {
    icon: Gamepad2,
    title: 'Casino + Platform Use',
    text: '$SHARK can be used for partner casino access and platform services.',
  },
];

export function TokenSection() {
  const [showNotice, setShowNotice] = useState(false);

  return (
    <>
      <section id="token" className="relative py-16 lg:py-20">
        <div className="absolute inset-0 radial-glow opacity-40" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[32px] border border-shark-gold/20 glass-strong"
          >
            <div
              className="absolute inset-0 bg-cover bg-center opacity-20"
              style={{ backgroundImage: "url('/assets/hero/token-hero-card.webp')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-shark-card/95 via-shark-navy/90 to-shark-black/98" />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-shark-gold/80 to-transparent" />

            <div className="relative z-10 p-6 lg:p-8">
              <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-10 items-start">
                <div>
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-shark-gold/10 border border-shark-gold/20 text-shark-gold text-xs font-semibold uppercase tracking-[0.18em] mb-5">
                    <Coins className="w-4 h-4" />
                    $SHARK Token Overview
                  </span>

                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-shark-white leading-tight">
                    PrediShark Native <span className="gradient-text">Utility Token</span>
                  </h2>

                  <p className="mt-5 text-shark-muted text-base leading-8">
                    PrediShark introduces <span className="text-shark-white font-semibold">$SHARK</span> as
                    its native utility token on the Solana blockchain. It serves as the economic
                    backbone of the PrediShark ecosystem.
                  </p>

                  <div className="mt-6 rounded-3xl border border-white/10 bg-white/[0.035] p-5">
                    <p className="text-xs uppercase tracking-[0.18em] text-shark-muted">
                      Contract Address CA
                    </p>

                    <div className="mt-3 flex flex-col sm:flex-row sm:items-center gap-3">
                      <code className="flex-1 text-sm text-shark-white break-all bg-shark-black/50 border border-white/10 rounded-2xl px-4 py-3">
                        [INSERT CONTRACT ADDRESS HERE]
                      </code>

                      <button
                        onClick={() => setShowNotice(true)}
                        className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-gradient-to-r from-shark-green to-shark-cyan text-shark-black font-bold whitespace-nowrap"
                      >
                        <Copy className="w-4 h-4" />
                        Copy
                      </button>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {tokenStats.map((item) => (
                      <div
                        key={item.label}
                        className="rounded-2xl border border-white/10 bg-white/[0.035] p-4"
                      >
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 rounded-2xl bg-shark-green/10 border border-shark-green/20 flex items-center justify-center">
                            <item.icon className="w-5 h-5 text-shark-green" />
                          </div>

                          <div>
                            <p className="text-[10px] uppercase tracking-[0.18em] text-shark-muted">
                              {item.label}
                            </p>
                            <p className="mt-1 text-lg font-black text-shark-white">{item.value}</p>
                            <p className="mt-1 text-xs text-shark-muted leading-5">{item.detail}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 grid gap-4">
                    {utilityItems.map((item) => (
                      <div
                        key={item.title}
                        className="rounded-2xl border border-white/10 bg-white/[0.035] p-4"
                      >
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 rounded-2xl bg-shark-cyan/10 border border-shark-cyan/20 flex items-center justify-center">
                            <item.icon className="w-5 h-5 text-shark-cyan" />
                          </div>

                          <div>
                            <h4 className="text-base font-bold text-shark-white">{item.title}</h4>
                            <p className="mt-1 text-sm text-shark-muted leading-7">{item.text}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-3xl border border-shark-cyan/20 bg-shark-cyan/5 p-5">
                <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-shark-cyan/10 border border-shark-cyan/20 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-shark-cyan" />
                  </div>

                  <div className="flex-1">
                    <p className="text-xs uppercase tracking-[0.18em] text-shark-cyan font-semibold">
                      Growth Flywheel
                    </p>
                    <p className="mt-2 text-lg lg:text-xl font-black text-shark-white leading-8">
                      More subscribers → more revenue → larger weekly buybacks → stronger token → more users.
                    </p>
                  </div>

                  <ArrowRight className="hidden lg:block w-6 h-6 text-shark-green" />
                </div>
              </div>
            </div>
          </motion.div>
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
                  <h3 className="text-xl font-bold text-shark-white">Contract Address Coming Soon</h3>
                  <p className="text-sm text-shark-muted">Please wait for the official launch notice.</p>
                </div>
              </div>

              <div className="space-y-4 text-sm text-shark-muted leading-7">
                <p className="text-shark-white font-medium">Coming soon!</p>
                <p>
                  The official PrediShark.ai contract address is not live yet. Please only use the
                  address announced through official PrediShark.ai channels.
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