import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Copy, AlertTriangle, Send } from 'lucide-react';
import { SHARK_CONTRACT_ADDRESS } from '@/config/sharkToken';

const WHITEPAPER_FILE = '/assets/docs/PrediShark_whitepaper.pdf';
const TELEGRAM_LINK = 'https://t.me/predishark';
const X_LINK = 'https://x.com/predishark';

const navLinks = [
  { label: 'HOME', href: '#home', type: 'scroll' },
  { label: 'PREDICTIONS', href: 'predictions', type: 'reveal' },
  { label: 'REAL-TIME STATS', href: 'real-time-statistics', type: 'prediction-stats' },
  { label: 'WHITEPAPER', href: WHITEPAPER_FILE, type: 'external' },
  { label: 'TOKEN', href: '#token', type: 'scroll' },
  { label: 'PARTNERS', href: 'partners', type: 'reveal' },
  { label: 'ROADMAP', href: 'roadmap', type: 'reveal' },
];

function findRealTimeStatisticsElement() {
  const directTarget = document.querySelector(
    '#real-time-statistics, #real-time-stats, #realtime-statistics, [data-section="real-time-statistics"], [data-anchor="real-time-statistics"]'
  );

  if (directTarget instanceof HTMLElement) {
    return directTarget;
  }

  const possibleTextElements = Array.from(
    document.querySelectorAll('section, article, div, h1, h2, h3, h4, h5, p, span')
  );

  const headingMatch = possibleTextElements.find((element) => {
    const text = element.textContent?.replace(/\s+/g, ' ').trim().toLowerCase() || '';
    return text === 'real-time statistics' || text.includes('real-time statistics');
  });

  if (headingMatch instanceof HTMLElement) {
    const nearestSection = headingMatch.closest('section');
    if (nearestSection instanceof HTMLElement) return nearestSection;

    const nearestCard = headingMatch.closest('.glass-strong, .glass, [class*="rounded"]');
    if (nearestCard instanceof HTMLElement) return nearestCard;

    return headingMatch;
  }

  return null;
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showNotice, setShowNotice] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToRealTimeStatistics = () => {
    let attempts = 0;

    const tryScroll = () => {
      const statsElement = findRealTimeStatisticsElement();

      if (statsElement) {
        statsElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
        return;
      }

      attempts += 1;

      if (attempts < 18) {
        window.setTimeout(tryScroll, 180);
        return;
      }

      const predictionSection = document.querySelector('#predictions');
      if (predictionSection) {
        predictionSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    };

    window.setTimeout(tryScroll, 260);
  };

  const handleNavClick = (href: string, type: string) => {
    setMobileOpen(false);

    if (type === 'external') {
      window.open(href, '_blank', 'noopener,noreferrer');
      return;
    }

    if (type === 'prediction-stats') {
      window.dispatchEvent(
        new CustomEvent('predishark:reveal-section', {
          detail: 'predictions',
        })
      );

      scrollToRealTimeStatistics();
      return;
    }

    if (type === 'reveal') {
      window.dispatchEvent(
        new CustomEvent('predishark:reveal-section', {
          detail: href,
        })
      );
      return;
    }

    window.dispatchEvent(
      new CustomEvent('predishark:scroll-section', {
        detail: href,
      })
    );
  };

  const copyContractAddress = async () => {
    if (!SHARK_CONTRACT_ADDRESS) {
      setShowNotice(true);
      return;
    }

    await navigator.clipboard.writeText(SHARK_CONTRACT_ADDRESS);
    setCopied(true);

    window.setTimeout(() => {
      setCopied(false);
    }, 1800);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'glass-strong shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="flex items-center justify-between h-20 lg:h-24 gap-4">
            <button
              onClick={() => handleNavClick('#home', 'scroll')}
              className="flex items-center gap-3 group shrink-0"
            >
              <div className="relative">
                <div className="absolute inset-0 rounded-2xl bg-shark-green/20 blur-xl opacity-70 group-hover:opacity-100 transition-opacity" />

                <img
                  src="/assets/branding/predishark-fish-logo.png"
                  alt="PrediShark.ai logo"
                  className="relative z-10 w-14 h-14 sm:w-16 sm:h-16 lg:w-[68px] lg:h-[68px] xl:w-[72px] xl:h-[72px] object-contain rounded-2xl"
                />
              </div>

              <span className="text-xl sm:text-2xl lg:text-[24px] xl:text-[28px] font-black tracking-[0.04em] uppercase leading-none">
                <span className="text-shark-white">Predi</span>
                <span className="text-shark-green">Shark</span>
                <span className="text-shark-cyan">.ai</span>
              </span>
            </button>

            <div className="hidden lg:flex flex-1 items-center justify-center gap-0.5 xl:gap-1 min-w-0">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href, link.type)}
                  className="px-2.5 xl:px-3 py-2 text-[10px] xl:text-xs font-semibold tracking-[0.12em] xl:tracking-[0.16em] uppercase text-shark-muted hover:text-shark-white transition-colors rounded-lg hover:bg-white/5 whitespace-nowrap"
                >
                  {link.label}
                </button>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-2 xl:gap-3 shrink-0">
              <a
                href={X_LINK}
                target="_blank"
                rel="noreferrer"
                aria-label="PrediShark.ai on X"
                className="w-10 h-10 rounded-xl glass flex items-center justify-center text-shark-muted hover:text-shark-green hover:border-shark-green/30 transition-all"
              >
                <span className="text-sm font-black">𝕏</span>
              </a>

              <a
                href={TELEGRAM_LINK}
                target="_blank"
                rel="noreferrer"
                aria-label="PrediShark.ai Telegram"
                className="w-10 h-10 rounded-xl glass flex items-center justify-center text-shark-muted hover:text-shark-cyan hover:border-shark-cyan/30 transition-all"
              >
                <Send className="w-4 h-4" />
              </a>

              <button
                onClick={copyContractAddress}
                className="flex items-center gap-2 px-3 xl:px-4 py-2.5 text-[10px] xl:text-xs font-semibold tracking-[0.14em] uppercase glass rounded-xl hover:border-shark-green/30 transition-all whitespace-nowrap"
              >
                <Copy className="w-4 h-4 text-shark-green" />
                <span className="text-shark-white">{copied ? 'Copied' : 'Copy CA'}</span>
              </button>
            </div>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-shark-muted hover:text-shark-white"
            >
              {mobileOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-shark-black/95 backdrop-blur-xl"
              onClick={() => setMobileOpen(false)}
            />

            <div className="relative pt-24 px-5">
              <div className="glass-strong rounded-3xl border border-white/10 p-4">
                <div className="flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <button
                      key={link.label}
                      onClick={() => handleNavClick(link.href, link.type)}
                      className="px-4 py-3 text-left text-base font-semibold tracking-[0.18em] uppercase text-shark-muted hover:text-shark-white hover:bg-white/5 rounded-xl transition-colors"
                    >
                      {link.label}
                    </button>
                  ))}
                </div>

                <div className="mt-5 grid grid-cols-3 gap-3">
                  <a
                    href={X_LINK}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="PrediShark.ai on X"
                    className="flex items-center justify-center h-12 rounded-2xl glass text-shark-muted hover:text-shark-green transition-all"
                  >
                    <span className="text-sm font-black">𝕏</span>
                  </a>

                  <a
                    href={TELEGRAM_LINK}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="PrediShark.ai Telegram"
                    className="flex items-center justify-center h-12 rounded-2xl glass text-shark-muted hover:text-shark-cyan transition-all"
                  >
                    <Send className="w-4 h-4" />
                  </a>

                  <button
                    onClick={copyContractAddress}
                    className="flex items-center justify-center h-12 rounded-2xl glass text-shark-muted hover:text-shark-green transition-all"
                  >
                    {copied ? (
                      <span className="text-xs font-black text-shark-green">OK</span>
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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