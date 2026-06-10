import { ExternalLink, Send } from 'lucide-react';

const WHITEPAPER_FILE = '/assets/docs/PrediShark_whitepaper.pdf';
const TELEGRAM_LINK = 'https://t.me/predishark';
const X_LINK = 'https://x.com/predishark';
const MEGASINO_AFFILIATE_LINK =
  'https://tracker.megasinopartners.com/link?btag=105954483_498352';

const footerLinks = [
  { label: 'Predictions', href: 'predictions', type: 'reveal' },
  { label: 'Whitepaper', href: WHITEPAPER_FILE, type: 'external' },
  { label: 'Token', href: '#token', type: 'scroll' },
  { label: 'Partners', href: 'partners', type: 'reveal' },
  { label: 'Roadmap', href: 'roadmap', type: 'reveal' },
];

const socialLinks = [
  { label: 'X', href: X_LINK, type: 'x' as const },
  { label: 'Telegram', href: TELEGRAM_LINK, type: 'telegram' as const },
];

export function Footer() {
  const handleLinkClick = (href: string, type: string) => {
    if (type === 'external') {
      window.open(href, '_blank', 'noopener,noreferrer');
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

  return (
    <footer className="relative py-12 lg:py-16 border-t border-white/5">
      <div className="absolute inset-0 radial-glow opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-10 mb-10">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/assets/branding/predishark-fish-logo.png"
                alt="PrediShark.ai logo"
                className="w-12 h-12 object-contain rounded-xl shadow-glow"
              />

              <span className="text-xl font-black tracking-[0.06em] uppercase">
                <span className="text-shark-white">Predi</span>
                <span className="text-shark-green">Shark</span>
                <span className="text-shark-cyan">.ai</span>
              </span>
            </div>

            <p className="text-shark-muted text-sm max-w-sm mb-5 leading-7">
              Prediction intelligence on the front end. Crypto utility through $SHARK. Clear,
              direct, and built for a premium sports-tech experience.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl glass flex items-center justify-center text-shark-muted hover:text-shark-green hover:border-shark-green/30 transition-all"
                >
                  {social.type === 'x' ? (
                    <span className="text-sm font-black">𝕏</span>
                  ) : (
                    <Send className="w-4 h-4" />
                  )}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-shark-white uppercase tracking-[0.18em] mb-4">
              Quick Links
            </h4>

            <ul className="space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleLinkClick(link.href, link.type)}
                    className="text-sm text-shark-muted hover:text-shark-green transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-shark-white uppercase tracking-[0.18em] mb-4">
              Resources
            </h4>

            <ul className="space-y-2.5">
              <li>
                <a
                  href={WHITEPAPER_FILE}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-shark-muted hover:text-shark-green transition-colors flex items-center gap-1.5"
                >
                  Whitepaper <ExternalLink className="w-3 h-3" />
                </a>
              </li>

              <li>
                <a
                  href={MEGASINO_AFFILIATE_LINK}
                  target="_blank"
                  className="text-sm text-shark-muted hover:text-shark-green transition-colors flex items-center gap-1.5"
                >
                  Megasino Partner <ExternalLink className="w-3 h-3" />
                </a>
              </li>

              <li>
                <a
                  href={X_LINK}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="PrediShark.ai on X"
                  className="text-sm text-shark-muted hover:text-shark-green transition-colors flex items-center gap-2"
                >
                  <span className="text-sm font-black">𝕏</span>
                </a>
              </li>

              <li>
                <a
                  href={TELEGRAM_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-shark-muted hover:text-shark-green transition-colors flex items-center gap-1.5"
                >
                  Telegram <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-shark-muted text-center sm:text-left">
              &copy; {new Date().getFullYear()} PrediShark.ai. All rights reserved.
            </p>

            <p className="text-xs text-shark-muted/70 text-center sm:text-right max-w-md">
              PrediShark.ai provides information and analysis only. Please act responsibly and
              follow local laws.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}