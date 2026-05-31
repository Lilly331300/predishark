import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Brain, Globe, Target } from 'lucide-react';

interface StatCardProps {
  icon: React.ElementType;
  title: string;
  numericValue: number;
  suffix: string;
  description: string;
  delay: number;
  color: 'green' | 'cyan' | 'gold';
  image: string;
}

function AnimatedCounter({
  value,
  suffix,
  inView,
}: {
  value: number;
  suffix: string;
  inView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const duration = 1800;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current * 10) / 10);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [inView, value]);

  const displayValue = value % 1 !== 0 ? count.toFixed(1) : Math.floor(count).toString();

  return (
    <span>
      {displayValue}
      {suffix}
    </span>
  );
}

function StatCard({
  icon: Icon,
  title,
  numericValue,
  suffix,
  description,
  delay,
  color,
  image,
}: StatCardProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const accentMap = {
    green: {
      ring: 'border-shark-green/20',
      iconBg: 'bg-shark-green/15',
      iconText: 'text-shark-green',
      number: 'text-shark-green',
    },
    cyan: {
      ring: 'border-shark-cyan/20',
      iconBg: 'bg-shark-cyan/15',
      iconText: 'text-shark-cyan',
      number: 'text-shark-cyan',
    },
    gold: {
      ring: 'border-shark-gold/20',
      iconBg: 'bg-shark-gold/15',
      iconText: 'text-shark-gold',
      number: 'text-shark-gold',
    },
  };

  const accent = accentMap[color];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay }}
      className={`group relative overflow-hidden rounded-[26px] border ${accent.ring} min-h-[320px]`}
    >
      <div
        className="absolute inset-0 bg-cover bg-center scale-100 group-hover:scale-105 transition-transform duration-700"
        style={{ backgroundImage: `url('${image}')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-shark-card/35 via-shark-card/70 to-shark-black/95" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/45 to-transparent" />

      <div className="relative z-10 h-full p-6 lg:p-7 flex flex-col justify-between">
        <div className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl ${accent.iconBg}`}>
          <Icon className={`w-6 h-6 ${accent.iconText}`} />
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-shark-muted mb-3">{title}</p>

          <p className={`text-4xl lg:text-5xl font-black ${accent.number}`}>
            <AnimatedCounter value={numericValue} suffix={suffix} inView={inView} />
          </p>

          <p className="mt-3 text-sm text-shark-muted max-w-xs leading-7">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}

const stats = [
  {
    icon: Brain,
    title: 'Daily AI Predictions',
    numericValue: 20,
    suffix: '',
    description: 'A sharp daily stream of AI-powered football insights for fast decision-making.',
    color: 'green' as const,
    image: '/assets/sections/stats-daily-predictions.webp',
  },
  {
    icon: Globe,
    title: 'Football Leagues Covered',
    numericValue: 800,
    suffix: '+',
    description: 'Wide football data coverage built for scale, speed, and market depth.',
    color: 'cyan' as const,
    image: '/assets/sections/stats-leagues-covered.webp',
  },
  {
    icon: Target,
    title: 'AI Accuracy Rate',
    numericValue: 56.7,
    suffix: '%',
    description: 'A benchmark snapshot of model performance within the prediction engine.',
    color: 'gold' as const,
    image: '/assets/sections/stats-accuracy-rate.webp',
  },
];

export function StatsCards() {
  return (
    <section className="relative py-18 lg:py-24">
      <div className="absolute inset-0 radial-glow" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-shark-white">
            PrediShark.ai <span className="gradient-text">at a Glance</span>
          </h2>

          <p className="mt-3 text-shark-muted max-w-2xl mx-auto">
            A premium overview of the product vision, scale, and prediction intelligence direction.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <StatCard key={stat.title} {...stat} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}