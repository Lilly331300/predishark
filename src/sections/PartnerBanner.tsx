import { motion } from 'framer-motion';
import { ExternalLink, Handshake, ShieldCheck, Sparkles } from 'lucide-react';

const MEGASINO_AFFILIATE_LINK =
  'https://tracker.megasinopartners.com/link?btag=105954483_498352';

const MEGASINO_PIXEL =
  'https://tracker.megasinopartners.com/pixel.gif?btag=105954483_498352';

const MEGASINO_BANNER =
  'https://megasinopartners.com/skins/megasino/uploads/banners/banners_1781083383_058c38976200fa0835cf3be3bdddf271.jpg';

function MegasinoExactEmbed() {
  return (
    <>
      <img
        src={MEGASINO_PIXEL}
        alt=""
        aria-hidden="true"
        style={{ position: 'absolute', visibility: 'hidden' }}
      />

      <a href={MEGASINO_AFFILIATE_LINK} target="_blank">
        <img
          src={MEGASINO_BANNER}
          height="50"
          width="320"
          alt="Megasino"
          className="w-[320px] max-w-full h-auto rounded-xl border border-white/10 shadow-[0_0_45px_rgba(0,245,184,0.18)] group-hover:scale-[1.04] transition-transform"
        />
      </a>
    </>
  );
}

export function PartnerBanner() {
  return (
    <section id="partners" className="relative py-16 lg:py-24">
      <div className="absolute inset-0 radial-glow-cyan opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          className="text-center mb-10"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-shark-green/20 text-shark-green text-xs font-semibold uppercase tracking-[0.18em] mb-4">
            <Handshake className="w-4 h-4" />
            Partners
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-shark-white">
            Partner <span className="gradient-text">Network</span>
          </h2>

          <p className="mt-4 text-shark-muted max-w-2xl mx-auto leading-8">
            PrediShark.ai connects football prediction intelligence with selected entertainment,
            casino, and sports-tech partners.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative overflow-hidden rounded-[32px] border border-shark-green/20 glass-strong"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,245,184,0.14),transparent_34%),radial-gradient(circle_at_80%_35%,rgba(0,184,255,0.13),transparent_36%),linear-gradient(135deg,rgba(4,7,10,0.98),rgba(8,19,26,0.94))]" />
          <div className="absolute inset-0 grid-bg opacity-20" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-shark-green/80 to-transparent" />

          <div className="relative z-10 grid lg:grid-cols-[0.85fr_1.15fr] gap-8 lg:gap-12 items-center p-5 sm:p-8 lg:p-10">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-shark-gold/10 border border-shark-gold/20 text-shark-gold text-xs font-semibold uppercase tracking-[0.18em] mb-5">
                <Sparkles className="w-4 h-4" />
                Affiliate Partner
              </span>

              <h3 className="text-3xl lg:text-5xl font-black text-shark-white leading-tight">
                Megasino <span className="gradient-text">Partner Access</span>
              </h3>

              <p className="mt-5 text-shark-muted leading-8 max-w-xl">
                Explore Megasino through the PrediShark partner route — built for users interested
                in sports betting, casino entertainment, live games, and premium gaming access.
              </p>

              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-shark-green/10 border border-shark-green/20 flex items-center justify-center">
                      <ShieldCheck className="w-5 h-5 text-shark-green" />
                    </div>

                    <div>
                      <p className="text-sm font-bold text-shark-white">Partner Route</p>
                      <p className="mt-1 text-xs text-shark-muted leading-5">
                        Direct PartnerMatrix banner connection.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-shark-cyan/10 border border-shark-cyan/20 flex items-center justify-center">
                      <ExternalLink className="w-5 h-5 text-shark-cyan" />
                    </div>

                    <div>
                      <p className="text-sm font-bold text-shark-white">External Access</p>
                      <p className="mt-1 text-xs text-shark-muted leading-5">
                        Opens Megasino in a new tab.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href={MEGASINO_AFFILIATE_LINK}
                target="_blank"
                className="mt-7 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-shark-green to-shark-cyan text-shark-black font-black hover:opacity-90 transition-opacity"
              >
                Visit Megasino
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-shark-black/60 p-4 sm:p-6">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(0,245,184,0.18),transparent_34%)]" />

                <div className="relative z-10 flex flex-col items-center justify-center gap-5 min-h-[280px] sm:min-h-[340px]">
                  <div className="relative group">
                    <MegasinoExactEmbed />
                  </div>

                  <div className="w-full max-w-md rounded-3xl border border-white/10 glass p-5 text-center">
                    <p className="text-xs uppercase tracking-[0.2em] text-shark-green font-black">
                      Megasino
                    </p>

                    <p className="mt-2 text-sm text-shark-muted leading-7">
                      Sports betting, casino games, live gaming, and entertainment access through
                      the PrediShark partner route.
                    </p>
                  </div>

                  <a
                    href={MEGASINO_AFFILIATE_LINK}
                    target="_blank"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl glass border border-white/10 text-shark-white font-semibold hover:border-shark-green/30 transition-all"
                  >
                    Open Partner Link
                    <ExternalLink className="w-4 h-4 text-shark-green" />
                  </a>
                </div>
              </div>

              <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-shark-cyan/10 blur-3xl" />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-shark-green/10 blur-3xl" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}