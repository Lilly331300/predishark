import { useEffect, useMemo, useState } from 'react';
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
  Radio,
  BarChart3,
  Droplets,
  Clock3,
  Activity,
} from 'lucide-react';

const SHARK_CONTRACT_ADDRESS = '';

const DEXSCREENER_SOLANA_TOKEN_URL = SHARK_CONTRACT_ADDRESS
  ? `https://api.dexscreener.com/token-pairs/v1/solana/${SHARK_CONTRACT_ADDRESS}`
  : '';

type DexScreenerPair = {
  url?: string;
  dexId?: string;
  pairAddress?: string;
  priceUsd?: string | null;
  marketCap?: number | null;
  fdv?: number | null;
  liquidity?: {
    usd?: number;
    base?: number;
    quote?: number;
  } | null;
  volume?: {
    h24?: number;
    h6?: number;
    h1?: number;
  };
  priceChange?: {
    h24?: number;
    h6?: number;
    h1?: number;
  } | null;
};

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
    text: '$SHARK can be used for approved partner access and platform services.',
  },
];

function formatCurrency(value?: number | string | null) {
  if (value === null || value === undefined || value === '') return 'Coming Soon';

  const numericValue = typeof value === 'string' ? Number(value) : value;

  if (!Number.isFinite(numericValue)) return 'Coming Soon';

  if (numericValue < 0.01) {
    return `$${numericValue.toFixed(8)}`;
  }

  if (numericValue < 1) {
    return `$${numericValue.toFixed(6)}`;
  }

  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 4,
  }).format(numericValue);
}

function formatCompactCurrency(value?: number | null) {
  if (value === null || value === undefined || !Number.isFinite(value)) return 'Coming Soon';

  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    notation: 'compact',
    maximumFractionDigits: 2,
  }).format(value);
}

function formatPercent(value?: number | null) {
  if (value === null || value === undefined || !Number.isFinite(value)) return 'Coming Soon';

  const sign = value > 0 ? '+' : '';

  return `${sign}${value.toFixed(2)}%`;
}

function shortenAddress(address: string) {
  if (!address) return 'Contract Address Coming Soon';
  return `${address.slice(0, 6)}...${address.slice(-6)}`;
}

function LiveTokenPriceCard() {
  const [pair, setPair] = useState<DexScreenerPair | null>(null);
  const [loading, setLoading] = useState(Boolean(SHARK_CONTRACT_ADDRESS));
  const [error, setError] = useState(false);
  const [lastUpdated, setLastUpdated] = useState('');

  const hasContractAddress = Boolean(SHARK_CONTRACT_ADDRESS);

  const priceCards = useMemo(
    () => [
      {
        icon: CircleDollarSign,
        label: 'Live Price',
        value: pair?.priceUsd ? formatCurrency(pair.priceUsd) : 'Coming Soon',
        tone: 'green',
      },
      {
        icon: BarChart3,
        label: 'Market Cap',
        value: pair?.marketCap
          ? formatCompactCurrency(pair.marketCap)
          : pair?.fdv
            ? formatCompactCurrency(pair.fdv)
            : 'After Launch',
        tone: 'cyan',
      },
      {
        icon: Droplets,
        label: 'Liquidity',
        value: pair?.liquidity?.usd ? formatCompactCurrency(pair.liquidity.usd) : 'After DEX',
        tone: 'gold',
      },
      {
        icon: Activity,
        label: '24h Change',
        value: pair?.priceChange?.h24 !== undefined ? formatPercent(pair.priceChange.h24) : 'After Launch',
        tone: 'green',
      },
    ],
    [pair]
  );

  useEffect(() => {
    if (!hasContractAddress) {
      setLoading(false);
      return;
    }

    const fetchTokenPrice = async () => {
      try {
        setError(false);

        const response = await fetch(DEXSCREENER_SOLANA_TOKEN_URL, {
          headers: {
            Accept: 'application/json',
          },
          cache: 'no-store',
        });

        if (!response.ok) {
          throw new Error(`DEX Screener request failed with status ${response.status}`);
        }

        const data = (await response.json()) as DexScreenerPair[];

        if (!Array.isArray(data) || data.length === 0) {
          setPair(null);
          setError(true);
          return;
        }

        const bestPair = data
          .filter((item) => item.priceUsd)
          .sort((a, b) => (b.liquidity?.usd || 0) - (a.liquidity?.usd || 0))[0];

        setPair(bestPair || data[0]);
        setLastUpdated(
          new Date().toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
          })
        );
      } catch (err) {
        console.error('Unable to load $SHARK token price:', err);
        setError(true);
        setPair(null);
      } finally {
        setLoading(false);
      }
    };

    fetchTokenPrice();

    const interval = window.setInterval(() => {
      fetchTokenPrice();
    }, 60_000);

    return () => window.clearInterval(interval);
  }, [hasContractAddress]);

  const statusText = !hasContractAddress
    ? 'Waiting for official contract address'
    : loading
      ? 'Loading live price'
      : error
        ? 'Waiting for pair data'
        : lastUpdated
          ? `Updated ${lastUpdated}`
          : 'Live';

  return (
    <div className="relative overflow-hidden rounded-[28px] border border-shark-green/20 bg-white/[0.035] p-5 lg:p-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,245,184,0.14),transparent_34%),radial-gradient(circle_at_90%_30%,rgba(0,184,255,0.12),transparent_34%)]" />

      <div className="relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-5">
          <div>
            <span className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-shark-green/10 border border-shark-green/20 text-shark-green text-[11px] font-semibold uppercase tracking-[0.16em] mb-4">
              <Radio className="w-3.5 h-3.5" />
              Live Token Feed
            </span>

            <h3 className="text-2xl lg:text-3xl font-black text-shark-white">
              $SHARK Live Price
            </h3>

            <p className="mt-2 text-sm text-shark-muted leading-7 max-w-2xl">
              Live price tracking will activate once the official $SHARK contract address is
              available. Market cap and liquidity can be shown after pair data becomes available.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-shark-black/50 px-4 py-3 text-xs uppercase tracking-[0.16em] text-shark-muted whitespace-nowrap">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-shark-green opacity-75 animate-ping" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-shark-green" />
            </span>
            {statusText}
          </div>
        </div>

        <div className="mb-5 rounded-2xl border border-white/10 bg-shark-black/40 p-4">
          <p className="text-[10px] uppercase tracking-[0.18em] text-shark-muted">
            Official Contract Address
          </p>

          <p className="mt-2 text-sm font-semibold text-shark-white break-all">
            {shortenAddress(SHARK_CONTRACT_ADDRESS)}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {priceCards.map((card) => (
            <div
              key={card.label}
              className="rounded-2xl border border-white/10 bg-shark-black/40 p-4"
            >
              <div className="flex items-start gap-3">
                <div
                  className={`w-10 h-10 rounded-2xl border flex items-center justify-center ${
                    card.tone === 'green'
                      ? 'bg-shark-green/10 border-shark-green/20 text-shark-green'
                      : card.tone === 'cyan'
                        ? 'bg-shark-cyan/10 border-shark-cyan/20 text-shark-cyan'
                        : 'bg-shark-gold/10 border-shark-gold/20 text-shark-gold'
                  }`}
                >
                  <card.icon className="w-5 h-5" />
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-[0.18em] text-shark-muted">
                    {card.label}
                  </p>

                  <p className="mt-1 text-base font-black text-shark-white">
                    {card.value}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 rounded-2xl border border-shark-cyan/20 bg-shark-cyan/5 p-4">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-2xl bg-shark-cyan/10 border border-shark-cyan/20 flex items-center justify-center">
              <Clock3 className="w-5 h-5 text-shark-cyan" />
            </div>

            <div>
              <p className="text-sm font-bold text-shark-white">
                Upcoming Development Task
              </p>
              <p className="mt-1 text-sm text-shark-muted leading-7">
                Add live $SHARK token price from the official contract address, then extend the
                card with market cap, liquidity, volume, and 24h change after DEX migration.
              </p>
            </div>
          </div>
        </div>

        {pair?.url && (
          <a
            href={pair.url}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl glass border border-white/10 text-shark-white font-semibold hover:border-shark-green/30 transition-all"
          >
            View Pair
            <ArrowRight className="w-4 h-4 text-shark-green" />
          </a>
        )}
      </div>
    </div>
  );
}

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
                      <div className="flex-1 text-sm text-shark-white bg-shark-black/50 border border-white/10 rounded-2xl px-4 py-3">
                        {SHARK_CONTRACT_ADDRESS || 'Contract Address Coming Soon'}
                      </div>

                      <button
                        onClick={() => setShowNotice(true)}
                        className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-gradient-to-r from-shark-green to-shark-cyan text-shark-black font-bold whitespace-nowrap hover:opacity-90 transition-opacity"
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
                            <p className="mt-1 text-lg font-black text-shark-white">
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
                        className="rounded-2xl border border-white/10 bg-white/[0.035] p-4"
                      >
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 rounded-2xl bg-shark-cyan/10 border border-shark-cyan/20 flex items-center justify-center">
                            <item.icon className="w-5 h-5 text-shark-cyan" />
                          </div>

                          <div>
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