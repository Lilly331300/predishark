import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Copy, AlertTriangle } from 'lucide-react';

const navLinks = [
  { label: 'HOME', href: '#home' },
  { label: 'PREDICTIONS', href: '#predictions' },
  { label: 'WHITEPAPER', href: '#whitepaper' },
  { label: 'TOKEN', href: '#token' },
  { label: 'PARTNERS', href: '#partners' },
  { label: 'ROADMAP', href: '#roadmap' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showNotice, setShowNotice] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleContractClick = () => {
    setShowNotice(true);
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 lg:h-24">
            <button onClick={() => scrollTo('#home')} className="flex items-center gap-3.5 group">
              <div className="relative">
                <div className="absolute inset-0 rounded-2xl bg-shark-green/20 blur-xl opacity-70 group-hover:opacity-100 transition-opacity" />
                <img
                  src="/assets/branding/logo-mark.png"
                  alt="PrediShark.ai logo"
                  className="relative z-10 w-14 h-14 sm:w-16 sm:h-16 lg:w-[72px] lg:h-[72px] object-contain rounded-2xl"
                />
              </div>

              <span className="text-xl sm:text-2xl lg:text-[28px] font-black tracking-[0.04em] uppercase leading-none">
                <span className="text-shark-white">Predi</span>
                <span className="text-shark-green">Shark</span>
                <span className="text-shark-cyan">.ai</span>
              </span>
            </button>

            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="px-3 py-2 text-xs font-semibold tracking-[0.18em] uppercase text-shark-muted hover:text-shark-white transition-colors rounded-lg hover:bg-white/5"
                >
                  {link.label}
                </button>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={handleContractClick}
                className="flex items-center gap-2 px-4 py-2.5 text-xs font-semibold tracking-[0.18em] uppercase glass rounded-xl hover:border-shark-green/30 transition-all group"
              >
                <Copy className="w-4 h-4 text-shark-green" />
                <span className="text-shark-white">Copy Contract</span>
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
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
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
                      key={link.href}
                      onClick={() => scrollTo(link.href)}
                      className="px-4 py-3 text-left text-base font-semibold tracking-[0.18em] uppercase text-shark-muted hover:text-shark-white hover:bg-white/5 rounded-xl transition-colors"
                    >
                      {link.label}
                    </button>
                  ))}
                </div>

                <div className="mt-5">
                  <button
                    onClick={handleContractClick}
                    className="w-full flex items-center justify-center gap-2 px-4 py-3.5 glass rounded-2xl text-sm font-semibold tracking-[0.16em] uppercase"
                  >
                    <Copy className="w-5 h-5 text-shark-green" />
                    <span>Copy Contract</span>
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