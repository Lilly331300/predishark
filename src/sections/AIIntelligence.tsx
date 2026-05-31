import { motion } from 'framer-motion';
import { Brain, BarChart3, Swords, Stethoscope, CloudSun, Scale, Flame, TrendingUp, Activity, CalendarDays } from 'lucide-react';

const signals = [
  { icon: BarChart3, label: 'xG & xGA', description: 'Expected goals for and against' },
  { icon: Flame, label: 'Current Form', description: 'Recent performance trends' },
  { icon: Swords, label: 'Head-to-Head', description: 'Historical matchups' },
  { icon: Stethoscope, label: 'Injuries', description: 'Squad availability' },
  { icon: CloudSun, label: 'Weather', description: 'Match conditions' },
  { icon: Scale, label: 'Referee Data', description: 'Official statistics' },
  { icon: Flame, label: 'Team Motivation', description: 'Stakes and drive' },
  { icon: TrendingUp, label: 'Market Sentiment', description: 'Public betting trends' },
  { icon: Activity, label: 'Odds Movement', description: 'Line changes and value' },
  { icon: CalendarDays, label: 'Fixture Congestion', description: 'Schedule density' },
];

const iconColors = [
  'text-shark-green bg-shark-green/10 border-shark-green/20',
  'text-shark-cyan bg-shark-cyan/10 border-shark-cyan/20',
  'text-shark-gold bg-shark-gold/10 border-shark-gold/20',
  'text-purple-400 bg-purple-400/10 border-purple-400/20',
  'text-pink-400 bg-pink-400/10 border-pink-400/20',
];

export function AIIntelligence() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 radial-glow" />
      
      {/* Background pattern */}
      <div className="absolute inset-0 dot-pattern opacity-30" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium glass rounded-full text-shark-green border-shark-green/20 mb-4">
            <Brain className="w-3.5 h-3.5" />
            AI Analysis
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-shark-white">
            Built on Real <span className="gradient-text">Football Intelligence</span>
          </h2>
          <p className="mt-3 text-shark-muted max-w-xl mx-auto">
            PrediShark.ai analyzes the signals that shape match outcomes.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {signals.map((signal, i) => {
            const colorClass = iconColors[i % iconColors.length];
            return (
              <motion.div
                key={signal.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className={`group glass rounded-xl p-5 border ${colorClass} hover:shadow-lg transition-all cursor-default`}
              >
                <signal.icon className={`w-6 h-6 mb-3 ${colorClass.split(' ')[0]}`} />
                <p className="text-sm font-semibold text-shark-white group-hover:gradient-text transition-all">
                  {signal.label}
                </p>
                <p className="mt-1 text-xs text-shark-muted">{signal.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom decorative element */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 flex justify-center"
        >
          <div className="flex items-center gap-4 px-6 py-3 glass rounded-full border-shark-green/10">
            <div className="flex -space-x-2">
              {signals.slice(0, 4).map((s, i) => (
                <div
                  key={i}
                  className={`w-8 h-8 rounded-full flex items-center justify-center border-2 border-shark-black ${iconColors[i]}`}
                >
                  <s.icon className="w-4 h-4" />
                </div>
              ))}
            </div>
            <span className="text-sm text-shark-muted">
              <span className="text-shark-green font-semibold">10+</span> data signals analyzed per match
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
