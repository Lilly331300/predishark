import { motion } from 'framer-motion';
import { ShieldAlert, Info, FileText } from 'lucide-react';

export function ResponsibleUse() {
  return (
    <section id="responsible-use" className="relative py-16 lg:py-20">
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-8 lg:p-10 border border-shark-gold/20 glow-gold"
        >
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-shark-gold/20 flex items-center justify-center">
              <ShieldAlert className="w-6 h-6 text-shark-gold" />
            </div>
            
            <div>
              <h2 className="text-xl lg:text-2xl font-bold text-shark-white mb-3">
                Responsible Use
              </h2>
              <p className="text-shark-muted leading-relaxed mb-4">
                PrediShark.ai is an information and analysis platform. We do not accept bets or guarantee outcomes. Predictions are data-driven insights only. Final decisions remain the user&apos;s responsibility.
              </p>
              
              <div className="flex items-start gap-2 p-4 rounded-xl bg-shark-navy/50 border border-white/5">
                <Info className="w-5 h-5 text-shark-gold flex-shrink-0 mt-0.5" />
                <p className="text-sm text-shark-muted">
                  Please act responsibly and follow local laws. Gambling involves risk. If you need help, please contact a gambling support organization.
                </p>
              </div>

              <div className="mt-4 flex items-center gap-2 text-xs text-shark-muted">
                <FileText className="w-4 h-4" />
                <span>Full terms and conditions will be available at launch.</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
