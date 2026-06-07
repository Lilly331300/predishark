import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from '@/components/ui/custom/Navbar';
import { Hero } from '@/sections/Hero';
import { PredictionWidgets } from '@/sections/PredictionWidgets';
import { TokenSection } from '@/sections/TokenSection';
import { PartnerBanner } from '@/sections/PartnerBanner';
import { Roadmap } from '@/sections/Roadmap';
import { Footer } from '@/sections/Footer';
import { IntroGateway } from '@/components/IntroGateway';
import { ArrowUp, Activity, Wifi, AlertCircle } from 'lucide-react';

type ActiveSection = 'predictions' | 'partners' | 'roadmap' | null;

type LiveTickerFeedItem = {
  match_id?: number;
  date?: string;
  time?: string;
  country?: string;
  league?: string;
  home_team?: string;
  away_team?: string;
  home_score?: number | null;
  away_score?: number | null;
  score?: string | null;
  status?: string;
  marquee_text?: string;
};

type LiveTickerFeedResponse = {
  updated_at?: string;
  updated_at_formatted?: string;
  refresh_interval_seconds?: number;
  count?: number;
  items?: LiveTickerFeedItem[];
};

const LIVE_TICKER_FEED_URL = 'https://betpredictor.live/api/live-ticker/feed';

function LiveTickerMarquee() {
  const [items, setItems] = useState<LiveTickerFeedItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [lastUpdated, setLastUpdated] = useState('');
  const [matchCount, setMatchCount] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const intervalRef = useRef<number | null>(null);

  const fallbackItems: LiveTickerFeedItem[] = [
    {
      match_id: 1,
      country: 'PrediShark',
      league: 'Live Feed',
      home_team: 'AI Match Intelligence',
      away_team: 'Football LiveTicker',
      status: 'Loading',
      marquee_text: 'PrediShark.ai live football ticker is loading real-time match data...',
    },
    {
      match_id: 2,
      country: 'Live',
      league: 'Prediction Engine',
      home_team: 'Football Data',
      away_team: 'AI Signals',
      status: 'Updating',
      marquee_text:
        'Live fixtures, leagues, scores, and match status update automatically from the live ticker feed.',
    },
  ];

  const normalizeFeed = (data: unknown): LiveTickerFeedResponse => {
    if (!data || typeof data !== 'object') {
      return { items: [] };
    }

    const feed = data as LiveTickerFeedResponse;

    if (Array.isArray(feed.items)) {
      return feed;
    }

    if (Array.isArray(data)) {
      return {
        items: data as LiveTickerFeedItem[],
      };
    }

    return {
      ...feed,
      items: [],
    };
  };

  const getItemText = (item: LiveTickerFeedItem) => {
    if (item.marquee_text) return item.marquee_text;

    const time = item.time || '--:--';
    const league = item.league || 'Football';
    const home = item.home_team || 'Home';
    const away = item.away_team || 'Away';
    const status = item.status || 'Status pending';

    if (item.score) {
      return `${time} | ${league} | ${home} vs ${away} | ${item.score} | ${status}`;
    }

    if (
      item.home_score !== null &&
      item.home_score !== undefined &&
      item.away_score !== null &&
      item.away_score !== undefined
    ) {
      return `${time} | ${league} | ${home} ${item.home_score} - ${item.away_score} ${away} | ${status}`;
    }

    return `${time} | ${league} | ${home} vs ${away} | ${status}`;
  };

  const fetchFeed = async () => {
    try {
      const response = await fetch(LIVE_TICKER_FEED_URL, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
        cache: 'no-store',
      });

      if (!response.ok) {
        throw new Error(`Live ticker request failed with status ${response.status}`);
      }

      const data = await response.json();
      const normalized = normalizeFeed(data);
      const feedItems = normalized.items || [];

      if (feedItems.length > 0) {
        setItems(feedItems);
        setHasError(false);
        setMatchCount(normalized.count || feedItems.length);
        setLastUpdated(
          normalized.updated_at_formatted ||
            new Date().toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
            })
        );
      } else {
        setItems(fallbackItems);
        setMatchCount(null);
        setHasError(true);
      }

      return normalized.refresh_interval_seconds || 30;
    } catch (error) {
      console.error('PrediShark live ticker feed error:', error);
      setItems(fallbackItems);
      setMatchCount(null);
      setHasError(true);
      return 30;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreen();
    window.addEventListener('resize', checkScreen);

    return () => {
      window.removeEventListener('resize', checkScreen);
    };
  }, []);

  useEffect(() => {
    let mounted = true;

    const startFeed = async () => {
      const refreshSeconds = await fetchFeed();

      if (!mounted) return;

      const safeRefreshSeconds =
        Number.isFinite(refreshSeconds) && refreshSeconds > 0 ? refreshSeconds : 30;

      if (intervalRef.current) {
        window.clearInterval(intervalRef.current);
      }

      intervalRef.current = window.setInterval(() => {
        fetchFeed();
      }, safeRefreshSeconds * 1000);
    };

    startFeed();

    return () => {
      mounted = false;

      if (intervalRef.current) {
        window.clearInterval(intervalRef.current);
      }
    };
  }, []);

  const displayItems = items.length > 0 ? items : fallbackItems;
  const repeatedItems = [...displayItems, ...displayItems, ...displayItems, ...displayItems];

  const marqueeDuration = isMobile
    ? displayItems.length > 80
      ? 10
      : displayItems.length > 30
        ? 8
        : 6
    : displayItems.length > 80
      ? 22
      : displayItems.length > 30
        ? 16
        : 12;

  return (
    <section className="relative z-20 overflow-hidden border-y border-white/5 bg-shark-navy/80 backdrop-blur-xl">
      <div className="absolute inset-0 bg-gradient-to-r from-shark-green/5 via-transparent to-shark-cyan/5" />

      <div className="relative flex items-center">
        <div className="relative z-10 flex-shrink-0 px-3 sm:px-5 py-3 bg-shark-black/70 border-r border-white/10">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-shark-green opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-shark-green" />
            </span>

            <Activity className="hidden sm:block w-4 h-4 text-shark-green" />

            <span className="text-[10px] sm:text-xs font-black text-shark-green uppercase tracking-[0.18em] whitespace-nowrap">
              Live Feed
            </span>
          </div>
        </div>

        <div className="relative flex-1 overflow-hidden">
          <motion.div
            key={`${isMobile ? 'mobile' : 'desktop'}-${displayItems.length}`}
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              duration: marqueeDuration,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="flex items-center gap-5 sm:gap-8 py-3 whitespace-nowrap"
          >
            {repeatedItems.map((item, index) => (
              <div
                key={`${item.match_id || 'match'}-${index}`}
                className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm"
              >
                <span className="inline-flex items-center px-2 py-1 rounded-lg bg-white/[0.05] border border-white/10 text-[9px] sm:text-[10px] uppercase tracking-[0.12em] sm:tracking-[0.14em] text-shark-cyan font-semibold">
                  {item.country || 'Live'}
                </span>

                <span className="text-shark-white/90 font-medium">{getItemText(item)}</span>

                <span
                  className={`inline-flex items-center px-2 py-1 rounded-lg text-[9px] sm:text-[10px] uppercase tracking-[0.12em] sm:tracking-[0.14em] font-semibold ${
                    item.status === 'Not Started' || item.status === 'Planned'
                      ? 'bg-shark-gold/10 text-shark-gold border border-shark-gold/20'
                      : 'bg-shark-green/10 text-shark-green border border-shark-green/20'
                  }`}
                >
                  {item.status || 'Live'}
                </span>

                <span className="w-1.5 h-1.5 rounded-full bg-shark-green shadow-[0_0_12px_rgba(0,245,160,0.8)]" />
              </div>
            ))}
          </motion.div>

          <div className="absolute inset-y-0 left-0 w-10 sm:w-14 bg-gradient-to-r from-shark-navy to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-10 sm:w-14 bg-gradient-to-l from-shark-navy to-transparent pointer-events-none" />
        </div>

        <div className="hidden md:flex relative z-10 flex-shrink-0 px-4 py-3 bg-shark-black/60 border-l border-white/10">
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.16em] text-shark-muted whitespace-nowrap">
            {hasError ? (
              <>
                <AlertCircle className="w-3.5 h-3.5 text-shark-gold" />
                Fallback
              </>
            ) : (
              <>
                <Wifi className="w-3.5 h-3.5 text-shark-green" />
                {loading
                  ? 'Loading'
                  : matchCount
                    ? `${matchCount} Matches`
                    : lastUpdated
                      ? `Updated ${lastUpdated}`
                      : 'Live'}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 500);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-50 w-11 h-11 glass rounded-full flex items-center justify-center text-shark-green hover:border-shark-green/40 transition-all hover:shadow-glow"
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

function AnimatedSection({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 26 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 26 }}
      transition={{ duration: 0.45 }}
    >
      {children}
    </motion.div>
  );
}

function App() {
  const [activeSection, setActiveSection] = useState<ActiveSection>(null);
  const [introDone, setIntroDone] = useState(() => {
    return sessionStorage.getItem('predishark-intro-seen') === 'true';
  });

  const revealOnlySection = (section: ActiveSection) => {
    setActiveSection(section);

    if (!section) return;

    window.setTimeout(() => {
      const el = document.querySelector(`#${section}`);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 120);
  };

  const scrollToMainSection = (sectionId: string) => {
    setActiveSection(null);

    window.setTimeout(() => {
      const el = document.querySelector(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 80);
  };

  const completeIntro = () => {
    sessionStorage.setItem('predishark-intro-seen', 'true');
    setIntroDone(true);
  };

  useEffect(() => {
    const handleRevealSection = (event: Event) => {
      const customEvent = event as CustomEvent<ActiveSection>;
      const section = customEvent.detail;

      if (section === 'predictions' || section === 'partners' || section === 'roadmap') {
        revealOnlySection(section);
      }
    };

    const handleScrollSection = (event: Event) => {
      const customEvent = event as CustomEvent<string>;
      scrollToMainSection(customEvent.detail);
    };

    window.addEventListener('predishark:reveal-section', handleRevealSection);
    window.addEventListener('predishark:scroll-section', handleScrollSection);

    return () => {
      window.removeEventListener('predishark:reveal-section', handleRevealSection);
      window.removeEventListener('predishark:scroll-section', handleScrollSection);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-shark-black text-shark-white overflow-x-hidden">
      <Navbar />

      <Hero />

      <LiveTickerMarquee />

      <AnimatedSection>
        <TokenSection />
      </AnimatedSection>

      <AnimatePresence mode="wait">
        {activeSection === 'predictions' && (
          <AnimatedSection key="predictions">
            <PredictionWidgets />
          </AnimatedSection>
        )}

        {activeSection === 'partners' && (
          <AnimatedSection key="partners">
            <PartnerBanner />
          </AnimatedSection>
        )}

        {activeSection === 'roadmap' && (
          <AnimatedSection key="roadmap">
            <Roadmap />
          </AnimatedSection>
        )}
      </AnimatePresence>

      <Footer />

      <ScrollToTop />

      <AnimatePresence>
        {!introDone && <IntroGateway onComplete={completeIntro} />}
      </AnimatePresence>
    </div>
  );
}

export default App;