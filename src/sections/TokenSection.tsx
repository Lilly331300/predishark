import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Copy,
  AlertTriangle,
  Coins,
  Lock,
  RefreshCw,
  Vote,
  Gamepad2,
  TrendingUp,
  ArrowRight,
  CircleDollarSign,
  Radio,
  BarChart3,
  Droplets,
  Activity,
  Rocket,
  CheckCircle2,
} from 'lucide-react';
import { useSharkDexData, shortenAddress } from '@/hooks/useSharkDexData';

const tokenStats = [
  {
    icon: Coins,
    label: 'Token',
    value: '$SHARK',
    detail: 'PrediShark utility token',
  },
  {
    icon: Rocket,
    label: 'Market Feed',
    value: 'Live',
    detail: 'DEX market data enabled',
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
    text: '$SHARK can be used for approved partner access and platform services.',
  },
];

function LiveTokenPriceCard() {
  const { values, statusText, hasContractAddress, contractAddress } = useSharkDexData();

  const priceCards = useMemo(
    () => [
      {
        icon: CircleDollarSign,
        label: 'Live Price',
        value: values.price,
        tone: 'green',
      },
      {
        icon: BarChart3,
        label: 'Market Cap / FDV',
        value: values.marketCap,
        tone: 'cyan',
      },
      {
        icon: Droplets,
        label: 'Liquidity',
        value: values.liquidity,
        tone: 'gold',
      },
      {
        icon: Activity,
        label: '24h Change',
        value: values.change24h,
        tone: 'green',
      },
    ],
    [values]
  );

  return (
    <div className="relative overflow-hidden rounded-[28px] border border-shark-green/20 bg-white/[0.035] p-4 sm:p-5 lg:p-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,245,184,0.14),transparent_34%),radial-gradient(circle_at_90%_30%,rgba(0,184,255,0.12),transparent_34%)]" />

      <div className="relative z-10 min-w-0">
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 mb-5">
          <div className="min-w-0">
            <span className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-shark-green/10 border border-shark-green/20 text-shark-green text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.14em] sm:tracking-[0.16em] mb-4">
              <Radio className="w-3.5 h-3.5" />
              Live Token Feed
            </span>

            <h3 className="text-2xl lg:text-3xl font-black text-shark-white">
              $SHARK Live Price
            </h3>

            <p className="mt-2 text-sm text-shark-muted leading-7 max-w-2xl">
              Live market data for $SHARK, including price, market cap, liquidity, volume, and 24h
              movement.
            </p>
          </div>

          <div className="inline-flex w-fit max-w-full items-center gap-2 rounded-2xl border border-white/10 bg-shark-black/50 px-3 sm:px-4 py-3 text-[10px] sm:text-xs uppercase tracking-[0.13em] sm:tracking-[0.16em] text-shark-muted">
            <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
              <span className="absolute inline-flex h-full w-full rounded-full bg-shark-green opacity-75 animate-ping" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-shark-green" />
            </span>
            <span className="break-words">{statusText}</span>
          </div>
        </div>

        <div className="mb-5 rounded-2xl border border-white/10 bg-shark-black/40 p-4 min-w-0">
          <p className="text-[10px] uppercase tracking-[0.18em] text-shark-muted">
            Official Contract Address
          </p>

          <p className="mt-2 text-sm font-semibold text-shark-white break-all">
            {shortenAddress(contractAddress)}
          </p>
        </div>

        <div className="grid grid-cols-1 min-[480px]:grid-cols-2 xl:grid-cols-4 gap-3">
          {priceCards.map((card) => (
            <div
              key={card.label}
              className="min-w-0 rounded-2xl border border-white/10 bg-shark-black/40 p-4 overflow-hidden"
            >
              <div className="flex items-start gap-3 min-w-0">
                <div
                  className={`w-10 h-10 rounded-2xl border flex items-center justify-center flex-shrink-0 ${
                    card.tone === 'green'
                      ? 'bg-shark-green/10 border-shark-green/20 text-shark-green'
                      : card.tone === 'cyan'
                        ? 'bg-shark-cyan/10 border-shark-cyan/20 text-shark-cyan'
                        : 'bg-shark-gold/10 border-shark-gold/20 text-shark-gold'
                  }`}
                >
                  <card.icon className="w-5 h-5" />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-[10px] uppercase tracking-[0.16em] text-shark-muted break-words">
                    {card.label}
                  </p>

                  <p className="mt-1 text-sm sm:text-base font-black text-shark-white break-words leading-6">
                    {card.value}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {hasContractAddress && values.pairUrl && (
          <a
            href={values.pairUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl glass border border-white/10 text-shark-white font-semibold hover:border-shark-green/30 transition-all"
          >
            View Market Pair
            <ArrowRight className="w-4 h-4 text-shark-green" />
          </a>
        )}
      </div>
    </div>
  );
}

export function TokenSection() {
  const [showNotice, setShowNotice] = useState(false);
  const [copied, setCopied] = useState(false);
  const { contractAddress } = useSharkDexData();

  const copyContractAddress = async () => {
    if (!contractAddress) {
      setShowNotice(true);
      return;
    }

    await navigator.clipboard.writeText(contractAddress);
    setCopied(true);

    window.setTimeout(() => {
      setCopied(false);
    }, 1800);
  };

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

            <div className="relative z-10 p-5 sm:p-6 lg:p-8">
              <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-10 items-start">
                <div className="min-w-0">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-shark-gold/10 border border-shark-gold/20 text-shark-gold text-xs font-semibold uppercase tracking-[0.18em] mb-5">
                    <Coins className="w-4 h-4" />
                    $SHARK Token Overview
                  </span>

                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-shark-white leading-tight">
                    PrediShark <span className="gradient-text">Utility Token</span>
                  </h2>

                  <p className="mt-5 text-shark-muted text-base leading-8">
                    PrediShark introduces <span className="text-shark-white font-semibold">$SHARK</span> as
                    the utility token powering rewards, buybacks, community activity, and future
                    platform features.
                  </p>

                  <div className="mt-6 rounded-3xl border border-white/10 bg-white/[0.035] p-5 min-w-0">
                    <p className="text-xs uppercase tracking-[0.18em] text-shark-muted">
                      Contract Address CA
                    </p>

                    <div className="mt-3 flex flex-col sm:flex-row sm:items-center gap-3 min-w-0">
                      <div className="flex-1 min-w-0 text-sm text-shark-white bg-shark-black/50 border border-white/10 rounded-2xl px-4 py-3 break-all">
                        {contractAddress}
                      </div>

                      <button
                        onClick={copyContractAddress}
                        className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-gradient-to-r from-shark-green to-shark-cyan text-shark-black font-bold whitespace-nowrap hover:opacity-90 transition-opacity"
                      >
                        {copied ? <CheckCircle2 className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                        {copied ? 'Copied' : 'Copy'}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="min-w-0">
                  <div className="grid sm:grid-cols-2 gap-4">
                    {tokenStats.map((item) => (
                      <div
                        key={item.label}
                        className="rounded-2xl border border-white/10 bg-white/[0.035] p-4 min-w-0"
                      >
                        <div className="flex items-start gap-3 min-w-0">
                          <div className="w-10 h-10 rounded-2xl bg-shark-green/10 border border-shark-green/20 flex items-center justify-center flex-shrink-0">
                            <item.icon className="w-5 h-5 text-shark-green" />
                          </div>

                          <div className="min-w-0">
                            <p className="text-[10px] uppercase tracking-[0.18em] text-shark-muted">
                              {item.label}
                            </p>
                            <p className="mt-1 text-lg font-black text-shark-white break-words">
                              {item.value}
                            </p>
                            <p className="mt-1 text-xs text-shark-muted leading-5">
                              {item.detail}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 grid gap-4">
                    {utilityItems.map((item) => (
                      <div
                        key={item.title}
                        className="rounded-2xl border border-white/10 bg-white/[0.035] p-4 min-w-0"
                      >
                        <div className="flex items-start gap-3 min-w-0">
                          <div className="w-10 h-10 rounded-2xl bg-shark-cyan/10 border border-shark-cyan/20 flex items-center justify-center flex-shrink-0">
                            <item.icon className="w-5 h-5 text-shark-cyan" />
                          </div>

                          <div className="min-w-0">
                            <h4 className="text-base font-bold text-shark-white">
                              {item.title}
                            </h4>
                            <p className="mt-1 text-sm text-shark-muted leading-7">
                              {item.text}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <LiveTokenPriceCard />
              </div>

              <div className="mt-8 rounded-3xl border border-shark-cyan/20 bg-shark-cyan/5 p-5">
                <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-shark-cyan/10 border border-shark-cyan/20 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-shark-cyan" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="text-xs uppercase tracking-[0.18em] text-shark-cyan font-semibold">
                      Growth Flywheel
                    </p>
                    <p className="mt-2 text-lg lg:text-xl font-black text-shark-white leading-8">
                      More subscribers → more revenue → larger weekly buybacks → stronger token → more users.
                    </p>
                  </div>

                  <ArrowRight className="hidden lg:block w-6 h-6 text-shark-green flex-shrink-0" />
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
                <div className="w-12 h-12 rounded-2xl bg-shark-gold/15 flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-6 h-6 text-shark-gold" />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-shark-white">
                    Official Contract Address
                  </h3>
                  <p className="text-sm text-shark-muted">
                    Please use only the official $SHARK CA shown on PrediShark.ai.
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-sm text-shark-muted leading-7">
                <p>
                  Always verify before interacting with any token or contract. Avoid fake addresses,
                  fake airdrops, and unofficial links.
                </p>
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => setShowNotice(false)}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-shark-green to-shark-cyan text-shark-black font-semibold hover:opacity-90 transition-opacity"
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