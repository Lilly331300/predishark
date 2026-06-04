import { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

type IntroGatewayProps = {
  onComplete: () => void;
};

type Particle = {
  id: number;
  x: string;
  y: string;
  size: number;
  delay: number;
  duration: number;
  opacity: number;
  color: string;
};

export function IntroGateway({ onComplete }: IntroGatewayProps) {
  const [entering, setEntering] = useState(false);

  const particles = useMemo<Particle[]>(
    () =>
      Array.from({ length: 34 }, (_, index) => ({
        id: index,
        x: `${Math.random() * 100}%`,
        y: `${Math.random() * 100}%`,
        size: Math.random() * 4 + 2,
        delay: Math.random() * 2.5,
        duration: Math.random() * 4 + 5,
        opacity: Math.random() * 0.45 + 0.25,
        color: index % 3 === 0 ? '#00F5A0' : index % 3 === 1 ? '#00D9FF' : '#F7C948',
      })),
    []
  );

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const handleEnter = () => {
    if (entering) return;

    setEntering(true);

    window.setTimeout(() => {
      document.body.style.overflow = '';
      onComplete();
    }, 2300);
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[999] overflow-hidden bg-shark-black"
        initial={{ opacity: 1 }}
        animate={{ opacity: entering ? 0 : 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.75, delay: entering ? 1.75 : 0 }}
      >
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/assets/gateway/water-gateway-bg.webp')" }}
          initial={{ scale: 1.06 }}
          animate={{
            scale: entering ? 1.34 : [1.06, 1.085, 1.06],
            filter: entering ? 'blur(7px) brightness(0.62)' : 'blur(0px) brightness(0.88)',
          }}
          transition={{
            duration: entering ? 1.55 : 10,
            repeat: entering ? 0 : Infinity,
            ease: 'easeInOut',
          }}
        />

        <motion.div
          className="absolute inset-0 bg-cover bg-center opacity-0"
          style={{ backgroundImage: "url('/assets/gateway/portal-depth-tunnel.webp')" }}
          animate={{
            opacity: entering ? [0, 0.95, 0.15] : 0,
            scale: entering ? [1.18, 1, 1.5] : 1.18,
          }}
          transition={{ duration: 1.65, ease: 'easeInOut' }}
        />

        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {particles.map((particle) => (
            <motion.span
              key={particle.id}
              className="absolute rounded-full"
              style={{
                left: particle.x,
                top: particle.y,
                width: particle.size,
                height: particle.size,
                backgroundColor: particle.color,
                boxShadow: `0 0 ${particle.size * 5}px ${particle.color}`,
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: entering ? 0 : [0, particle.opacity, 0.18, particle.opacity, 0],
                scale: entering ? 0.7 : [0.8, 1.4, 1, 1.6, 0.9],
                x: entering ? 0 : [0, 18, -10, 12, 0],
                y: entering ? -40 : [0, -24, 10, -16, 0],
              }}
              transition={{
                duration: particle.duration,
                delay: particle.delay,
                repeat: entering ? 0 : Infinity,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>

        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {Array.from({ length: 9 }).map((_, index) => (
            <motion.div
              key={index}
              className="absolute h-px w-36 rounded-full bg-gradient-to-r from-transparent via-shark-cyan/70 to-transparent"
              style={{
                top: `${10 + index * 10}%`,
                left: `${index % 2 === 0 ? -20 : 85}%`,
                rotate: index % 2 === 0 ? -22 : 22,
              }}
              animate={{
                x: entering
                  ? index % 2 === 0
                    ? 650
                    : -650
                  : index % 2 === 0
                    ? [0, 180, 0]
                    : [0, -180, 0],
                opacity: entering ? [0.15, 0.6, 0] : [0, 0.4, 0],
              }}
              transition={{
                duration: entering ? 1.2 : 6 + index * 0.35,
                repeat: entering ? 0 : Infinity,
                delay: index * 0.18,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.14)_34%,rgba(0,0,0,0.9)_100%)]" />

        <motion.div
          className="absolute inset-0"
          animate={{
            background: entering
              ? [
                  'radial-gradient(circle at center, rgba(0,245,160,0.09), transparent 36%)',
                  'radial-gradient(circle at center, rgba(0,217,255,0.28), transparent 45%)',
                  'radial-gradient(circle at center, rgba(0,0,0,0.92), transparent 60%)',
                ]
              : [
                  'radial-gradient(circle at 48% 48%, rgba(0,245,160,0.09), transparent 38%)',
                  'radial-gradient(circle at 52% 46%, rgba(0,217,255,0.14), transparent 44%)',
                  'radial-gradient(circle at 50% 50%, rgba(0,245,160,0.09), transparent 38%)',
                ],
          }}
          transition={{
            duration: entering ? 1.3 : 8,
            repeat: entering ? 0 : Infinity,
            ease: 'easeInOut',
          }}
        />

        <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-4 sm:py-5">
          <motion.div
            className="relative w-full max-w-7xl mx-auto flex flex-col items-center text-center origin-center"
            animate={{
              scale: entering ? 1 : 0.9,
            }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
          >
            <motion.div
              className="absolute w-[460px] h-[460px] sm:w-[640px] sm:h-[640px] lg:w-[820px] lg:h-[820px] rounded-full border border-shark-green/20"
              animate={{
                scale: entering ? [1, 1.7, 2.6] : [0.98, 1.04, 0.98],
                opacity: entering ? [0.55, 0.25, 0] : [0.2, 0.42, 0.2],
                rotate: entering ? 38 : [0, 8, 0],
              }}
              transition={{
                duration: entering ? 1.3 : 7.5,
                repeat: entering ? 0 : Infinity,
                ease: 'easeInOut',
              }}
            />

            <motion.div
              className="absolute w-[380px] h-[380px] sm:w-[560px] sm:h-[560px] lg:w-[720px] lg:h-[720px] rounded-full bg-shark-green/10 blur-[90px]"
              animate={{
                scale: entering ? [1, 1.6, 2.2] : [0.96, 1.08, 0.96],
                opacity: entering ? [0.52, 0.28, 0] : [0.26, 0.5, 0.26],
                x: entering ? 0 : [-14, 16, -14],
                y: entering ? 0 : [8, -10, 8],
              }}
              transition={{
                duration: entering ? 1.25 : 7,
                repeat: entering ? 0 : Infinity,
                ease: 'easeInOut',
              }}
            />

            <motion.img
              src="/assets/gateway/water-splash-overlay.png"
              alt=""
              className="absolute w-[540px] sm:w-[740px] lg:w-[940px] opacity-0 pointer-events-none mix-blend-screen"
              animate={{
                opacity: entering ? [0, 0.8, 0] : 0,
                scale: entering ? [0.75, 1.15, 2.15] : 0.75,
                rotate: entering ? [0, -14, -32] : 0,
              }}
              transition={{ duration: 1.15, ease: 'easeOut' }}
            />

            <motion.div
              className="relative z-20"
              initial={{ scale: 0.95, opacity: 0, y: 8 }}
              animate={{
                scale: entering ? [1, 1.14, 0.14] : [1, 1.018, 1],
                opacity: entering ? [1, 1, 0.95] : 1,
                x: entering
                  ? ['0vw', '7vw', 'calc(-50vw + 74px)']
                  : ['0vw', '0.8vw', '-0.6vw', '0vw'],
                y: entering
                  ? ['0vh', '-4vh', 'calc(-50vh + 58px)']
                  : ['0vh', '-0.75vh', '0.4vh', '0vh'],
                rotate: entering ? [0, -7, 0] : [0, 0.9, -0.6, 0],
                filter: entering
                  ? [
                      'drop-shadow(0 0 42px rgba(0,245,160,0.42))',
                      'drop-shadow(0 0 92px rgba(0,217,255,0.9))',
                      'drop-shadow(0 0 18px rgba(0,245,160,0.28))',
                    ]
                  : [
                      'drop-shadow(0 0 36px rgba(0,245,160,0.32))',
                      'drop-shadow(0 0 62px rgba(0,217,255,0.52))',
                      'drop-shadow(0 0 36px rgba(0,245,160,0.32))',
                    ],
              }}
              transition={{
                duration: entering ? 1.65 : 7,
                repeat: entering ? 0 : Infinity,
                ease: 'easeInOut',
              }}
            >
              <img
                src="/assets/branding/predishark-fish-logo.png"
                alt="PrediShark shark logo"
                className="w-[250px] sm:w-[340px] md:w-[390px] lg:w-[455px] xl:w-[500px] mx-auto select-none"
                draggable={false}
              />
            </motion.div>

            <motion.div
              className="relative z-30 mt-0 sm:mt-1 lg:mt-0"
              animate={{
                opacity: entering ? 0 : 1,
                y: entering ? 20 : 0,
                scale: entering ? 0.94 : 1,
              }}
              transition={{ duration: 0.45 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-shark-green/20 text-shark-green text-[10px] sm:text-xs font-semibold uppercase tracking-[0.18em] mb-3"
              >
                <Sparkles className="w-4 h-4" />
                AI Football Prediction + Crypto Utility
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.35 }}
                className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight text-shark-white"
              >
                Enter the <span className="gradient-text">PrediShark</span> World
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.48 }}
                className="mt-3 text-xs sm:text-sm lg:text-base text-shark-muted max-w-2xl mx-auto leading-7"
              >
                Premium football prediction intelligence, live data modules, and the $SHARK
                crypto utility layer in one futuristic ecosystem.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="mt-5 flex justify-center"
              >
                <button
                  onClick={handleEnter}
                  className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl overflow-hidden bg-gradient-to-r from-shark-green to-shark-cyan text-shark-black font-black shadow-[0_0_42px_rgba(0,245,160,0.35)] hover:scale-[1.035] transition-transform"
                >
                  <span className="absolute inset-0 bg-white/25 translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-700 skew-x-12" />
                  <span className="absolute inset-0 rounded-2xl border border-white/30" />
                  <span className="relative z-10">Explore PrediShark</span>
                  <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-shark-black via-shark-black/70 to-transparent"
          animate={{ opacity: entering ? 0 : 1 }}
        />
      </motion.div>
    </AnimatePresence>
  );
}