import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

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

const GATEWAY_IMAGES = [
  '/assets/gateway/water-gateway-bg.webp',
  '/assets/gateway/portal-depth-tunnel.webp',
  '/assets/gateway/water-splash-overlay.png',
  '/assets/branding/predishark-fish-logo.png',
];

function preloadImages(srcList: string[]) {
  return Promise.allSettled(
    srcList.map(
      (src) =>
        new Promise<void>((resolve) => {
          const img = new Image();
          img.onload = () => resolve();
          img.onerror = () => resolve();
          img.src = src;
        })
    )
  );
}

export function IntroGateway({ onComplete }: IntroGatewayProps) {
  const [entering, setEntering] = useState(false);
  const [assetsReady, setAssetsReady] = useState(false);

  const particles = useMemo<Particle[]>(
    () =>
      Array.from({ length: 30 }, (_, index) => {
        const xSeed = (index * 37) % 100;
        const ySeed = (index * 53) % 100;
        const sizeSeed = (index * 7) % 4;
        const delaySeed = (index * 11) % 25;
        const durationSeed = (index * 13) % 40;

        return {
          id: index,
          x: `${xSeed}%`,
          y: `${ySeed}%`,
          size: sizeSeed + 2,
          delay: delaySeed / 10,
          duration: durationSeed / 10 + 5,
          opacity: 0.25 + ((index * 9) % 40) / 100,
          color: index % 3 === 0 ? '#00F5A0' : index % 3 === 1 ? '#00D9FF' : '#F7C948',
        };
      }),
    []
  );

  useEffect(() => {
    let mounted = true;

    document.body.style.overflow = 'hidden';

    preloadImages(GATEWAY_IMAGES).then(() => {
      if (mounted) {
        setAssetsReady(true);
      }
    });

    return () => {
      mounted = false;
      document.body.style.overflow = '';
    };
  }, []);

  useEffect(() => {
    if (!assetsReady) return;

    const startTimer = window.setTimeout(() => {
      setEntering(true);
    }, 3000);

    const finishTimer = window.setTimeout(() => {
      document.body.style.overflow = '';
      onComplete();
    }, 5300);

    return () => {
      window.clearTimeout(startTimer);
      window.clearTimeout(finishTimer);
    };
  }, [assetsReady, onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[999] overflow-hidden bg-shark-black"
      initial={{ opacity: 1 }}
      animate={{ opacity: entering ? 0 : 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.75, delay: entering ? 1.75 : 0 }}
    >
      <div className="absolute inset-0 bg-shark-black" />

      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/gateway/water-gateway-bg.webp')" }}
        initial={{ opacity: 0, scale: 1.06 }}
        animate={{
          opacity: assetsReady ? 1 : 0,
          scale: entering ? 1.34 : [1.06, 1.085, 1.06],
          filter: entering ? 'blur(7px) brightness(0.62)' : 'blur(0px) brightness(0.88)',
        }}
        transition={{
          opacity: { duration: 0.55, ease: 'easeOut' },
          scale: {
            duration: entering ? 1.55 : 10,
            repeat: entering ? 0 : Infinity,
            ease: 'easeInOut',
          },
          filter: { duration: entering ? 1.55 : 0.55 },
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
              opacity: entering || !assetsReady ? 0 : [0, particle.opacity, 0.18, particle.opacity, 0],
              scale: entering || !assetsReady ? 0.7 : [0.8, 1.4, 1, 1.6, 0.9],
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
            className="absolute h-px w-28 sm:w-36 rounded-full bg-gradient-to-r from-transparent via-shark-cyan/70 to-transparent"
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
              opacity: entering || !assetsReady ? 0 : [0, 0.4, 0],
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
          initial={{ opacity: 0 }}
          animate={{
            opacity: assetsReady ? 1 : 0,
            scale: entering ? 1 : 0.9,
          }}
          transition={{
            opacity: { duration: 0.55, ease: 'easeOut' },
            scale: { duration: 0.45, ease: 'easeOut' },
          }}
        >
          <motion.div
            className="absolute w-[320px] h-[320px] sm:w-[520px] sm:h-[520px] md:w-[640px] md:h-[640px] lg:w-[820px] lg:h-[820px] rounded-full border border-shark-green/20"
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
            className="absolute w-[280px] h-[280px] sm:w-[460px] sm:h-[460px] md:w-[560px] md:h-[560px] lg:w-[720px] lg:h-[720px] rounded-full bg-shark-green/10 blur-[70px] sm:blur-[90px]"
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
            className="absolute w-[380px] sm:w-[560px] md:w-[740px] lg:w-[940px] opacity-0 pointer-events-none mix-blend-screen"
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
              className="w-[210px] sm:w-[300px] md:w-[360px] lg:w-[455px] xl:w-[500px] mx-auto select-none"
              draggable={false}
            />
          </motion.div>

          <motion.div
            className="relative z-30 mt-1 sm:mt-2 lg:mt-1"
            animate={{
              opacity: entering ? 0 : 1,
              y: entering ? 20 : 0,
              scale: entering ? 0.94 : 1,
            }}
            transition={{ duration: 0.45 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: assetsReady ? 1 : 0, y: assetsReady ? 0 : 12 }}
              transition={{ duration: 0.65, delay: 0.15 }}
              className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-full glass border border-shark-green/20 text-shark-green text-[9px] sm:text-xs font-semibold uppercase tracking-[0.14em] sm:tracking-[0.18em] mb-3"
            >
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              AI Football Prediction + Crypto Utility
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: assetsReady ? 1 : 0, y: assetsReady ? 0 : 12 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight text-shark-white"
            >
              Enter the <span className="gradient-text">PrediShark</span> World
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: assetsReady ? 1 : 0, y: assetsReady ? 0 : 12 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mt-3 text-xs sm:text-sm lg:text-base text-shark-muted max-w-2xl mx-auto leading-7 px-2"
            >
              Premium football prediction intelligence, live data modules, and the $SHARK crypto
              utility layer in one futuristic ecosystem.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: assetsReady ? 1 : 0, y: assetsReady ? 0 : 12 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="mt-5 flex items-center justify-center gap-2 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-shark-green"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-shark-green opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-shark-green" />
              </span>
              Entering PrediShark.ai
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-shark-black via-shark-black/70 to-transparent"
        animate={{ opacity: entering ? 0 : 1 }}
      />
    </motion.div>
  );
}