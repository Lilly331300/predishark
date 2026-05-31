import { motion } from 'framer-motion';
import { Lock, Gift, Coins, Users2, ArrowUpRight } from 'lucide-react';

const utilities = [
  {
    icon: Lock,
    title: 'Stake for Access',
    description: 'Future staking access for premium tools.',
    color: 'green',
    gradient: 'from-shark-green to-emerald-400',
  },
  {
    icon: Gift,
    title: 'Community Rewards',
    description: 'Earn from prediction battles and leaderboards.',
    color: 'cyan',
    gradient: 'from-shark-cyan to-blue-400',
  },
  {
    icon: Coins,
    title: 'Token Utility',
    description: 'Unlock ecosystem benefits as the platform grows.',
    color: 'gold',
    gradient: 'from-shark-gold to-orange-400',
  },
  {
    icon: Users2,
    title: 'Web3 Community',
    description: 'Built for fans, analysts, and crypto-native users.',
    color: 'purple',
    gradient: 'from-purple-400 to-pink-400',
  },
];

const colorMap: Record<string, { border: string; glow: string; icon: string }> = {
  green: {
    border: 'border-shark-green/20 hover:border-shark-green/40',
    glow: 'hover:shadow-[0_0_30px_rgba(0,245,160,0.15)]',
    icon: 'text-shark-green',
  },
  cyan: {
    border: 'border-shark-cyan/20 hover:border-shark-cyan/40',
    glow: 'hover:shadow-[0_0_30px_rgba(0,217,255,0.15)]',
    icon: 'text-shark-cyan',
  },
  gold: {
    border: 'border-shark-gold/20 hover:border-shark-gold/40',
    glow: 'hover:shadow-[0_0_30px_rgba(247,201,72,0.15)]',
    icon: 'text-shark-gold',
  },
  purple: {
    border: 'border-purple-400/20 hover:border-purple-400/40',
    glow: 'hover:shadow-[0_0_30px_rgba(167,139,250,0.15)]',
    icon: 'text-purple-400',
  },
};

export function CryptoUtility() {
  return (
    <section className="relative py-20 lg:py-28">
      <div className="absolute inset-0 radial-glow-cyan opacity-50" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium glass rounded-full text-shark-cyan border-shark-cyan/20 mb-4">
            <Coins className="w-3.5 h-3.5" />
            Web3 Ecosystem
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-shark-white">
            More Than <span className="gradient-text">Predictions</span>
          </h2>
          <p className="mt-3 text-shark-muted max-w-lg mx-auto">
            A sports intelligence platform designed for Web3 community growth.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {utilities.map((util, i) => {
            const colors = colorMap[util.color];
            return (
              <motion.div
                key={util.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`group glass rounded-2xl p-6 border ${colors.border} ${colors.glow} transition-all duration-300 hover:-translate-y-1 cursor-pointer`}
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${util.gradient} bg-opacity-20 mb-4`}>
                  <util.icon className={`w-6 h-6 ${colors.icon}`} />
                </div>

                <h3 className="text-lg font-semibold text-shark-white mb-2 group-hover:gradient-text transition-all">
                  {util.title}
                </h3>
                <p className="text-sm text-shark-muted mb-4">{util.description}</p>

                <div className="flex items-center gap-1 text-xs text-shark-muted group-hover:text-shark-green transition-colors">
                  <span>Learn more</span>
                  <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
