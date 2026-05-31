import { motion } from 'framer-motion';
import { PieChart, TrendingUp, Users, Megaphone, Code2, Lock, Landmark } from 'lucide-react';

const segments = [
  { label: 'Liquidity', color: '#00F5A0', icon: TrendingUp },
  { label: 'Community Rewards', color: '#00D9FF', icon: Users },
  { label: 'Marketing', color: '#F7C948', icon: Megaphone },
  { label: 'Development', color: '#FF6B6B', icon: Code2 },
  { label: 'Staking / Ecosystem', color: '#A78BFA', icon: Lock },
  { label: 'Treasury', color: '#FB923C', icon: Landmark },
];

// SVG Donut Chart Component
function DonutChart() {
  const radius = 80;
  const strokeWidth = 24;
  const circumference = 2 * Math.PI * radius;
  
  // Equal segments for placeholder
  const segmentSize = circumference / segments.length;
  const gap = 4;
  const actualSegmentSize = segmentSize - gap;
  
  return (
    <div className="relative w-64 h-64 mx-auto">
      <svg className="w-full h-full -rotate-90" viewBox="0 0 200 200">
        {/* Background circle */}
        <circle
          cx="100"
          cy="100"
          r={radius}
          fill="none"
          stroke="#0B1820"
          strokeWidth={strokeWidth}
        />
        
        {/* Segments */}
        {segments.map((segment, i) => {
          const offset = i * segmentSize + gap / 2;
          return (
            <motion.circle
              key={segment.label}
              cx="100"
              cy="100"
              r={radius}
              fill="none"
              stroke={segment.color}
              strokeWidth={strokeWidth}
              strokeDasharray={`${actualSegmentSize} ${circumference - actualSegmentSize}`}
              strokeDashoffset={-offset}
              strokeLinecap="round"
              initial={{ strokeDasharray: `0 ${circumference}` }}
              whileInView={{ 
                strokeDasharray: `${actualSegmentSize} ${circumference - actualSegmentSize}`,
                strokeDashoffset: -offset
              }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 + i * 0.1, ease: 'easeOut' }}
              className="drop-shadow-lg"
              style={{ filter: `drop-shadow(0 0 6px ${segment.color}40)` }}
            />
          );
        })}
        
        {/* Center text */}
        <text
          x="100"
          y="95"
          textAnchor="middle"
          className="fill-shark-white text-sm font-semibold"
        >
          Allocation
        </text>
        <text
          x="100"
          y="115"
          textAnchor="middle"
          className="fill-shark-muted text-xs"
        >
          TBA
        </text>
      </svg>
      
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-shark-green/5 to-shark-cyan/5 blur-xl -z-10" />
    </div>
  );
}

export function Tokenomics() {
  return (
    <section id="tokenomics" className="relative py-20 lg:py-28">
      <div className="absolute inset-0 radial-glow-cyan opacity-50" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium glass rounded-full text-shark-green border-shark-green/20 mb-4">
            <PieChart className="w-3.5 h-3.5" />
            Distribution
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-shark-white">
            <span className="gradient-text">Tokenomics</span>
          </h2>
          <p className="mt-3 text-shark-muted max-w-lg mx-auto">
            Full allocation details coming soon.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Donut Chart */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <DonutChart />
          </motion.div>

          {/* Legend */}
          <div className="grid grid-cols-2 gap-4">
            {segments.map((segment, i) => (
              <motion.div
                key={segment.label}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-xl p-4 border border-white/5 hover:border-white/10 transition-all card-hover"
              >
                <div className="flex items-center gap-3">
                  <div 
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${segment.color}20`, color: segment.color }}
                  >
                    <segment.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-shark-white">{segment.label}</p>
                    <p className="text-xs" style={{ color: segment.color }}>TBA %</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Coming Soon Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-shark-gold border-shark-gold/20 text-sm">
            <PieChart className="w-4 h-4" />
            Detailed tokenomics will be published before launch
          </span>
        </motion.div>
      </div>
    </section>
  );
}
