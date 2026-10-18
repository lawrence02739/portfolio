import React, { useRef, useState } from 'react';
import type { Variants } from 'framer-motion';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import wizardImg from '../assets/Wizard.jpg';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.15,
    },
  },
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const AboutSection: React.FC = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isCardHovered, setIsCardHovered] = useState(false);

  // Motion Values for 3D card tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const spotlightX = useMotionValue(200);
  const spotlightY = useMotionValue(200);

  // Springs for 3D Physics
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [14, -14]), { damping: 18, stiffness: 220 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-14, 14]), { damping: 18, stiffness: 220 });

  // Spotlight Background with Lumos Purple & Gold Glow
  const spotlightBg = useTransform(
    [spotlightX, spotlightY],
    ([x, y]) => `radial-gradient(circle 260px at ${x}px ${y}px, rgba(192,132,252,0.3), rgba(212,175,55,0.18), transparent 80%)`
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
    spotlightX.set(e.clientX - rect.left);
    spotlightY.set(e.clientY - rect.top);
  };

  const handleMouseEnter = () => setIsCardHovered(true);

  const handleMouseLeave = () => {
    setIsCardHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      id="about"
      className="relative w-screen min-h-screen bg-[#07040D] text-[#E9D5FF] font-sans selection:bg-[#7e22ce]/40 selection:text-[#fef08a] py-24 lg:py-32 px-6 sm:px-12 lg:px-20 overflow-hidden flex items-center"
    >
      {/* Background Magical Nebulae */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.12, 0.22, 0.12] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 left-1/6 w-[34rem] h-[34rem] bg-purple-700 rounded-full blur-[180px] pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.08, 0.18, 0.08] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-1/6 right-1/4 w-[30rem] h-[30rem] bg-[#D4AF37] rounded-full blur-[190px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto w-full relative z-10">

        {/* Eyebrow Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center space-x-4 mb-10"
        >
          <span
            className="text-[11px] font-semibold tracking-[0.35em] uppercase text-[#D4AF37] flex items-center gap-2"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            <span>✦</span> 01 / THE WIZARD'S PROLOGUE
          </span>
          <div className="w-24 h-[1px] bg-gradient-to-r from-[#D4AF37]/80 via-purple-500/50 to-transparent" />
        </motion.div>

        {/* Main Grid: Content + Portrait */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* ================= LEFT CONTENT (7 COLS) ================= */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Cinematic Headline */}
            <motion.div variants={fadeUpVariants} className="relative mb-6 select-none">
              <h2
                className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.4rem] tracking-tight uppercase leading-[0.88]"
                style={{ fontFamily: "'Cinzel', 'Bebas Neue', serif" }}
              >
                <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#E9D5FF] to-[#7E22CE] drop-shadow-[0_4px_12px_rgba(126,34,206,0.5)]">
                  NOT JUST CODE.
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FEF08A] via-[#D4AF37] to-[#78350F] drop-shadow-[0_8px_25px_rgba(212,175,55,0.35)]">
                  PURE DIGITAL ALCHEMY.
                </span>
              </h2>
            </motion.div>

            {/* Concise Bio Paragraph from Resume */}
            <motion.p
              variants={fadeUpVariants}
              className="text-xs sm:text-sm md:text-[14.5px] font-light text-[#D8B4FE]/80 leading-[1.85] tracking-wide mb-8 max-w-xl"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              I'm <span className="text-[#FEF08A] font-medium">Lawrence C</span>, a Full Stack MERN Developer with 3+ years of experience building and shipping production-grade, cloud-native applications across EdTech, healthcare, and travel domains. Delivered measurable results including a <span className="text-[#FEF08A] font-medium">40% improvement in claims throughput</span> and <span className="text-[#FEF08A] font-medium">35% gains in reporting speed</span> using Kafka microservices and query-optimized APIs. Experienced in leading delivery, owning backend systems, and driving end-to-end feature execution.
            </motion.p>

            {/* 4-Item Achievement Metrics Grid */}
            <motion.div
              variants={fadeUpVariants}
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 pb-6 border-t border-purple-500/20"
            >
              {/* Stat 1 */}
              <div className="flex flex-col p-3 rounded bg-purple-950/20 border border-purple-500/20 backdrop-blur-sm">
                <span
                  className="text-3xl sm:text-4xl font-normal text-[#F3E8FF] tracking-tight"
                  style={{ fontFamily: "'Cinzel', 'Bebas Neue', serif" }}
                >
                  3+ YRS
                </span>
                <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-[#C084FC] mt-0.5">
                  Production Exp
                </span>
              </div>

              {/* Stat 2 */}
              <div className="flex flex-col p-3 rounded bg-purple-950/20 border border-purple-500/20 backdrop-blur-sm">
                <span
                  className="text-3xl sm:text-4xl font-normal text-[#FEF08A] tracking-tight"
                  style={{ fontFamily: "'Cinzel', 'Bebas Neue', serif" }}
                >
                  +40%
                </span>
                <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-[#D8B4FE] mt-0.5">
                  Claims Throughput
                </span>
              </div>

              {/* Stat 3 */}
              <div className="flex flex-col p-3 rounded bg-purple-950/20 border border-purple-500/20 backdrop-blur-sm">
                <span
                  className="text-3xl sm:text-4xl font-normal text-[#F3E8FF] tracking-tight"
                  style={{ fontFamily: "'Cinzel', 'Bebas Neue', serif" }}
                >
                  35%
                </span>
                <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-[#C084FC] mt-0.5">
                  Reporting Gains
                </span>
              </div>

              {/* Stat 4 */}
              <div className="flex flex-col p-3 rounded bg-purple-950/20 border border-purple-500/20 backdrop-blur-sm">
                <span
                  className="text-3xl sm:text-4xl font-normal text-[#FEF08A] tracking-tight"
                  style={{ fontFamily: "'Cinzel', 'Bebas Neue', serif" }}
                >
                  4+
                </span>
                <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-[#D8B4FE] mt-0.5">
                  Shipped Systems
                </span>
              </div>
            </motion.div>

            {/* Honors & Accolades Banner */}
            <motion.div
              variants={fadeUpVariants}
              className="mt-2 p-4 rounded border border-[#D4AF37]/40 bg-[#160B2C]/80 backdrop-blur-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-[0_0_20px_rgba(168,85,247,0.15)]"
            >
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full border border-[#D4AF37] bg-[#D4AF37]/10 flex items-center justify-center text-amber-300 text-sm">
                  🏆
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-[#FEF08A] tracking-wide" style={{ fontFamily: "'Cinzel', serif" }}>
                    BEST EMPLOYEE AWARD — TWILIGHT IT SOLUTION
                  </h4>
                  <p className="text-[11px] text-[#D8B4FE]/80 font-light" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    Awarded for leading TripVista delivery under tight timelines and clearing critical blockers.
                  </p>
                </div>
              </div>
              <div className="shrink-0 px-2.5 py-1 rounded border border-purple-500/30 text-[10px] font-mono text-[#D8B4FE] bg-purple-950/40">
                GRADUATED 2022
              </div>
            </motion.div>

          </motion.div>

          {/* ================= RIGHT PORTRAIT FRAME (3D INTERACTIVE LUMOS MIRROR) ================= */}
          <div className="lg:col-span-5 flex items-center justify-center relative perspective-[1400px]">
            <motion.div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={{
                rotateX,
                rotateY,
                transformStyle: 'preserve-3d',
              }}
              className="relative w-full max-w-[380px] sm:max-w-[420px] rounded-xl border border-purple-500/50 bg-[#120724] p-4 shadow-[0_20px_60px_rgba(0,0,0,0.9),0_0_40px_rgba(168,85,247,0.25)] transition-shadow duration-500 group overflow-hidden"
            >
              {/* Dynamic Lumos Spotlight */}
              {isCardHovered && (
                <motion.div
                  style={{ background: spotlightBg }}
                  className="absolute inset-0 pointer-events-none z-20 transition-opacity duration-300"
                />
              )}

              {/* Runic Corner Crosshairs in Antique Gold */}
              <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#D4AF37] z-30" />
              <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[#D4AF37] z-30" />
              <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[#D4AF37] z-30" />
              <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[#D4AF37] z-30" />

              {/* Image Container */}
              <div className="relative w-full aspect-[3/4] overflow-hidden rounded-lg bg-black">
                <img
                  src={wizardImg}
                  alt="Lawrence C - Full Stack Developer & Code Wizard"
                  className="w-full h-full object-cover object-center filter contrast-105 group-hover:scale-105 transition-transform duration-700"
                />

                {/* Violet Edge Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#07040D] via-transparent to-transparent opacity-80 pointer-events-none" />

                {/* Talisman Plaque Overlay */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-lg bg-[#0F071D]/90 backdrop-blur-md border border-purple-500/40 z-30 flex items-center justify-between">
                  <div>
                    <h3 className="text-xs font-bold text-[#F3E8FF] tracking-wider uppercase" style={{ fontFamily: "'Cinzel', serif" }}>
                      LAWRENCE C
                    </h3>
                    <p className="text-[10px] text-[#D4AF37] font-mono tracking-widest uppercase">
                      FULL STACK CODE WIZARD
                    </p>
                  </div>
                  <div className="text-purple-400 text-lg">✦</div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;