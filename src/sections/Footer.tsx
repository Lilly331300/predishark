import { ExternalLink, MessageCircle } from 'lucide-react';

const footerLinks = [
  { label: 'Predictions', href: '#predictions' },
  { label: 'Whitepaper', href: '#whitepaper' },
  { label: 'Token', href: '#token' },
  { label: 'Partners', href: '#partners' },
  { label: 'Roadmap', href: '#roadmap' },
  { label: 'Responsible Use', href: '#responsible-use' },
];

const socialLinks = [
  { label: 'X', href: 'https://x.com/', type: 'x' as const },
  { label: 'Telegram', href: 'https://t.me/', type: 'telegram' as const },
];

export function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 lg:py-16 border-t border-white/5">
      <div className="absolute inset-0 radial-glow opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-10 mb-10">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/assets/branding/logo-mark.png"
                alt="PrediShark.ai logo"
                className="w-10 h-10 object-contain rounded-xl shadow-glow"
              />
              <span className="text-lg font-bold tracking-[0.08em] uppercase">
                <span className="text-shark-white">Predi</span>
                <span className="text-shark-green">Shark</span>
                <span className="text-shark-cyan">.ai</span>
              </span>
            </div>

            <p className="text-shark-muted text-sm max-w-sm mb-5 leading-7">
              AI Sports Predictions + Web3 Intelligence. Designed to make football prediction
              experiences feel sharper, cleaner, and more premium.
            </p>

            <div className="flex items-center gap-3">
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
                    <span className="text-sm font-bold tracking-tight">𝕏</span>
                  ) : (
                    <MessageCircle className="w-4 h-4" />
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
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
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
                  href="/assets/docs/predishark-whitepaper.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-shark-muted hover:text-shark-green transition-colors flex items-center gap-1.5"
                >
                  Whitepaper <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="http://megasino.win/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-shark-muted hover:text-shark-green transition-colors flex items-center gap-1.5"
                >
                  Megasino.win <ExternalLink className="w-3 h-3" />
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