import { motion } from 'framer-motion';
import { FileText, Download, ArrowRight } from 'lucide-react';

const whitepaperFile = '/assets/docs/PrediShark_whitepaper.pdf';

export function Whitepaper() {
  return (
    <section id="whitepaper" className="relative py-20 lg:py-28">
      <div className="absolute inset-0 radial-glow opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[32px] border border-white/10 glass-strong"
        >
          <div
            className="absolute inset-0 bg-cover bg-center opacity-25"
            style={{ backgroundImage: "url('/assets/sections/whitepaper-cover.webp')" }}
          />

          <div className="absolute inset-0 bg-gradient-to-r from-shark-black/95 via-shark-navy/80 to-shark-black/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-shark-black/80 via-transparent to-transparent" />

          <div className="relative z-10 grid lg:grid-cols-[1fr_0.9fr] gap-8 items-center p-6 sm:p-8 lg:p-10">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-shark-gold/10 border border-shark-gold/20 text-shark-gold text-xs font-semibold uppercase tracking-[0.18em] mb-5">
                <FileText className="w-4 h-4" />
                Whitepaper
              </span>

              <h2 className="text-3xl lg:text-5xl font-black text-shark-white leading-tight">
                Read the <span className="gradient-text">PrediShark.ai</span> vision
              </h2>

              <p className="mt-5 text-shark-muted text-base lg:text-lg leading-8 max-w-2xl">
                A clear breakdown of the AI prediction engine, live modules, partner model,
                roadmap, and future Web3 utility.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href={whitepaperFile}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-shark-green to-shark-cyan text-shark-black font-bold hover:opacity-90 transition-opacity"
                >
                  <Download className="w-5 h-5" />
                  Open Whitepaper
                </a>

                <button
                  onClick={() => {
                    const el = document.querySelector('#roadmap');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl glass border border-white/10 text-shark-white font-semibold hover:border-shark-green/30 transition-all"
                >
                  View Roadmap
                  <ArrowRight className="w-5 h-5 text-shark-green" />
                </button>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="relative rounded-[28px] overflow-hidden border border-white/10 bg-shark-black/50 min-h-[420px]">
                <img
                  src="/assets/sections/whitepaper-cover.webp"
                  alt="PrediShark.ai whitepaper preview"
                  className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-shark-black/85 via-shark-black/20 to-transparent" />

                <div className="absolute left-5 right-5 bottom-5 glass-strong rounded-2xl p-5 border border-white/10">
                  <p className="text-xs uppercase tracking-[0.18em] text-shark-green font-semibold">
                    Project Overview
                  </p>

                  <p className="mt-2 text-sm text-shark-muted leading-7">
                    AI predictions, live modules, partner integrations, and future Web3 utility.
                  </p>

                  <a
                    href={whitepaperFile}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-shark-green hover:text-shark-cyan transition-colors"
                  >
                    Open PDF
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="absolute -top-8 -right-8 w-28 h-28 rounded-full bg-shark-cyan/10 blur-3xl" />
              <div className="absolute -bottom-8 -left-8 w-28 h-28 rounded-full bg-shark-green/10 blur-3xl" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}