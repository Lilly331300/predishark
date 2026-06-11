import { useEffect, useMemo, useState } from 'react';
import {
  SHARK_CONTRACT_ADDRESS,
  SHARK_DEX_REFRESH_MS,
  SHARK_DEXSCREENER_TOKEN_URL,
} from '@/config/sharkToken';

export type DexScreenerPair = {
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

export function formatCurrency(value?: number | string | null) {
  if (value === null || value === undefined || value === '') return 'Loading';

  const numericValue = typeof value === 'string' ? Number(value) : value;

  if (!Number.isFinite(numericValue)) return 'Loading';

  if (numericValue < 0.01) return `$${numericValue.toFixed(8)}`;
  if (numericValue < 1) return `$${numericValue.toFixed(6)}`;

  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 4,
  }).format(numericValue);
}

export function formatCompactCurrency(value?: number | null) {
  if (value === null || value === undefined || !Number.isFinite(value)) return 'Loading';

  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    notation: 'compact',
    maximumFractionDigits: 2,
  }).format(value);
}

export function formatPercent(value?: number | null) {
  if (value === null || value === undefined || !Number.isFinite(value)) return 'Loading';

  const sign = value > 0 ? '+' : '';
  return `${sign}${value.toFixed(2)}%`;
}

export function shortenAddress(address: string) {
  if (!address) return 'Official CA loading';
  return `${address.slice(0, 6)}...${address.slice(-6)}`;
}

export function useSharkDexData() {
  const [pair, setPair] = useState<DexScreenerPair | null>(null);
  const [loading, setLoading] = useState(Boolean(SHARK_CONTRACT_ADDRESS));
  const [error, setError] = useState(false);
  const [lastUpdated, setLastUpdated] = useState('');

  const hasContractAddress = Boolean(SHARK_CONTRACT_ADDRESS);

  useEffect(() => {
    if (!hasContractAddress) {
      setLoading(false);
      return;
    }

    let mounted = true;

    const fetchTokenPrice = async () => {
      try {
        setError(false);

        const response = await fetch(SHARK_DEXSCREENER_TOKEN_URL, {
          headers: {
            Accept: 'application/json',
          },
          cache: 'no-store',
        });

        if (!response.ok) {
          throw new Error(`DEX request failed with status ${response.status}`);
        }

        const data = (await response.json()) as DexScreenerPair[];

        if (!mounted) return;

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
        console.error('Unable to load $SHARK market data:', err);

        if (!mounted) return;

        setError(true);
        setPair(null);
      } finally {
        if (mounted) setLoading(false);
      }
    };

    fetchTokenPrice();

    const interval = window.setInterval(fetchTokenPrice, SHARK_DEX_REFRESH_MS);

    return () => {
      mounted = false;
      window.clearInterval(interval);
    };
  }, [hasContractAddress]);

  const values = useMemo(() => {
    const marketCap = pair?.marketCap || pair?.fdv || null;

    return {
      price: pair?.priceUsd ? formatCurrency(pair.priceUsd) : loading ? 'Loading' : 'Awaiting Market Data',
      marketCap: marketCap ? formatCompactCurrency(marketCap) : loading ? 'Loading' : 'Awaiting Market Data',
      liquidity: pair?.liquidity?.usd
        ? formatCompactCurrency(pair.liquidity.usd)
        : loading
          ? 'Loading'
          : 'Awaiting Market Data',
      change24h:
        pair?.priceChange?.h24 !== undefined
          ? formatPercent(pair.priceChange.h24)
          : loading
            ? 'Loading'
            : 'Awaiting Market Data',
      volume24h: pair?.volume?.h24
        ? formatCompactCurrency(pair.volume.h24)
        : loading
          ? 'Loading'
          : 'Awaiting Market Data',
      pairUrl: pair?.url || '',
    };
  }, [pair, loading]);

  const statusText = loading
    ? 'Loading Market Data'
    : error
      ? 'Awaiting DEX Market Data'
      : lastUpdated
        ? `Updated ${lastUpdated}`
        : 'Live Market Feed';

  return {
    pair,
    values,
    loading,
    error,
    lastUpdated,
    statusText,
    hasContractAddress,
    contractAddress: SHARK_CONTRACT_ADDRESS,
  };
}