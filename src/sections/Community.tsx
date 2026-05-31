import { motion } from 'framer-motion';
import { Users, Swords, Trophy, Share2, Bot, MessageCircle, ArrowUpRight } from 'lucide-react';

const features = [
  {
    icon: Swords,
    title: 'Prediction Battles',
    description: 'Compete head-to-head with other predictors.',
    color: 'green',
  },
  {
    icon: Trophy,
    title: 'Leaderboards',
    description: 'Climb the ranks and showcase your skills.',
    color: 'gold',
  },
  {
    icon: Share2,
    title: 'Referral Rewards',
    description: 'Earn rewards for inviting friends.',
    color: 'cyan',
  },
  {
    icon: Bot,
    title: 'Telegram Bot',
    description: 'Get predictions directly in Telegram.',
    color: 'purple',
  },
  {
    icon: MessageCircle,
    title: 'Social Sharing',
    description: 'Share wins and insights with the community.',
    color: 'pink',
  },
  {
    icon: Users,
    title: 'Community Game Prediction',
    description: 'Join the crowd-sourced prediction game.',
    color: 'blue',
  },
];

const colorMap: Record<string, { bg: string; text: string; border: string }> = {
  green: { bg: 'bg-shark-green/10', text: 'text-shark-green', border: 'border-shark-green/20' },
  gold: { bg: 'bg-shark-gold/10', text: 'text-shark-gold', border: 'border-shark-gold/20' },
  cyan: { bg: 'bg-shark-cyan/10', text: 'text-shark-cyan', border: 'border-shark-cyan/20' },
  purple: { bg: 'bg-purple-400/10', text: 'text-purple-400', border: 'border-purple-400/20' },
  pink: { bg: 'bg-pink-400/10', text: 'text-pink-400', border: 'border-pink-400/20' },
  blue: { bg: 'bg-blue-400/10', text: 'text-blue-400', border: 'border-blue-400/20' },
};

export function Community() {
  return (
    <section id="community" className="relative py-20 lg:py-28">
      <div className="absolute inset-0 radial-glow" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium glass rounded-full text-shark-green border-shark-green/20 mb-4">
            <Users className="w-3.5 h-3.5" />
            Community
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-shark-white">
            Compete With the <span className="gradient-text">AI</span>. Compete With the <span className="text-shark-gold">Community</span>.
          </h2>
          <p className="mt-3 text-shark-muted max-w-xl mx-auto">
            Predictions become more powerful when the community plays, tracks, and improves together.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => {
            const colors = colorMap[feature.color];
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className={`group glass rounded-2xl p-6 border ${colors.border} hover:shadow-lg transition-all cursor-pointer`}
              >
                <div className={`inline-flex items-center justify-center w-11 h-11 rounded-xl ${colors.bg} ${colors.text} mb-4`}>
                  <feature.icon className="w-5 h-5" />
                </div>

                <h3 className="text-lg font-semibold text-shark-white mb-2 group-hover:gradient-text transition-all">
                  {feature.title}
                </h3>
                <p className="text-sm text-shark-muted mb-4">{feature.description}</p>

                <div className="flex items-center gap-1 text-xs text-shark-muted group-hover:text-shark-green transition-colors">
                  <span>Explore</span>
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
