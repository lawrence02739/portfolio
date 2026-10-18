import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import watermarkImg from '../assets/watermark.png';
import wizardVideo from '../assets/Wizard.mp4';
import resumePdf from '../assets/Lawrence_Resume.pdf';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.2,
    },
  },
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 18, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 1.1,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const navItems = [
  { name: 'PROLOGUE', href: '#about' },
  { name: 'GRIMOIRE', href: '#work' },
  { name: 'SPELLBOOK', href: '#skills' },
  { name: 'EXPEDITIONS', href: '#experience' },
  { name: 'OWL POST', href: '#contact' },
];

export const HeroSection: React.FC = () => {
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative w-screen h-screen overflow-hidden bg-[#07040D] text-[#E9D5FF] font-sans selection:bg-[#7e22ce]/40 selection:text-[#fef08a] cursor-none">
      {/* ================= 1. WAND LUMOS CUSTOM CURSOR ================= */}
      {cursorPos.x >= 0 && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-50 rounded-full border border-purple-400/60 flex items-center justify-center backdrop-blur-[2px] shadow-[0_0_20px_rgba(168,85,247,0.6)]"
          animate={{
            x: cursorPos.x - (isHovered ? 24 : 6),
            y: cursorPos.y - (isHovered ? 24 : 6),
            width: isHovered ? 48 : 12,
            height: isHovered ? 48 : 12,
            backgroundColor: isHovered ? 'rgba(168, 85, 247, 0.2)' : 'rgba(216, 180, 254, 0.95)',
            borderColor: isHovered ? 'rgba(212, 175, 55, 0.8)' : 'rgba(192, 132, 252, 0.8)',
          }}
          transition={{ type: 'spring', damping: 30, stiffness: 350, mass: 0.5 }}
        >
          {isHovered && (
            <span className="w-1.5 h-1.5 rounded-full bg-[#FDE047] shadow-[0_0_10px_#FDE047]" />
          )}
        </motion.div>
      )}

      {/* ================= 2. FIXED CINEMATIC VIDEO WITH PURPLE SPELL OVERLAY ================= */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-[#07040D] flex items-center justify-end">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="h-screen w-auto max-w-none object-contain origin-right scale-95 md:scale-[0.98] lg:scale-100 opacity-95 filter brightness-110 contrast-105"
        >
          <source src={wizardVideo} type="video/mp4" />
        </video>

        {/* Soft left gradient blend to keep headline text readable while keeping the wizard on the right clear and vibrant */}
        <div className="absolute inset-y-0 left-0 w-3/5 md:w-1/2 bg-gradient-to-r from-[#07040D] via-[#07040D]/90 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#07040D] to-transparent pointer-events-none" />
        <div className="absolute top-1/4 right-1/4 w-[350px] h-[350px] bg-purple-900/15 rounded-full blur-[140px] pointer-events-none" />

        {/* Mask bottom-right KlingAI video watermark */}
        <div className="absolute bottom-0 right-0 w-64 h-24 bg-gradient-to-t from-[#07040D] via-[#07040D] to-transparent pointer-events-none z-10" />

        {/* ================= 3. ENCHANTED TALISMAN WATERMARK ================= */}
        <div className="absolute bottom-6 right-6 lg:bottom-10 lg:right-12 pointer-events-none flex items-center justify-center z-10">
          <div className="relative flex items-center justify-center">
            <div className="absolute w-40 h-40 bg-purple-950/80 rounded-full blur-2xl border border-purple-500/20" />

            <motion.div
              animate={{
                y: [-4, 4, -4],
                scale: [1, 1.03, 1],
                rotate: [0, 1.5, 0, -1.5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative flex items-center justify-center"
            >
              <img
                src={watermarkImg}
                alt="Wizardry Insignia"
                className="w-28 h-28 lg:w-32 lg:h-32 object-contain drop-shadow-[0_0_25px_rgba(168,85,247,0.45)] filter hue-rotate-[260deg] brightness-110"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* ================= 4. CONTENT LAYER ================= */}
      <div className="relative z-10 flex flex-col justify-between h-full w-full px-6 sm:px-12 lg:px-16 pt-6 pb-8 pointer-events-none">
        
        {/* Navigation Bar */}
        <header className="relative flex items-center justify-between w-full pointer-events-auto gap-4">
          <a
            href="#"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group flex items-center space-x-2 text-xs sm:text-sm font-bold tracking-[0.25em] uppercase text-[#F3E8FF] hover:text-[#D4AF37] transition-all shrink-0"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            <span className="text-[#C084FC] text-base group-hover:rotate-45 transition-transform duration-300">✦</span>
            <span>LAWRENCE C.</span>
            <span className="hidden xl:inline-block text-[9px] font-mono tracking-widest text-[#D4AF37] px-2 py-0.5 rounded border border-[#D4AF37]/30 bg-purple-950/40">
              CODE WIZARD
            </span>
          </a>

          {/* Navigation Links */}
          <nav
            className="hidden lg:flex items-center space-x-6 xl:space-x-8 text-[11px] tracking-[0.24em] font-medium uppercase text-[#C4B5E0]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="relative group py-1 transition-colors duration-300 hover:text-[#F3E8FF]"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gradient-to-r from-[#C084FC] to-[#D4AF37] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Action: Send Owl / Talk */}
          <a
            href="#contact"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group flex items-center space-x-2 text-[11px] tracking-[0.24em] font-medium uppercase py-2 px-4 border border-purple-500/40 hover:border-[#D4AF37] bg-purple-950/30 text-[#E9D5FF] hover:text-[#FEF08A] transition-all duration-300 backdrop-blur-md ml-auto md:ml-0 shadow-[0_0_15px_rgba(168,85,247,0.15)] hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] shrink-0"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            <span className="text-purple-400 group-hover:text-amber-300 transition-colors">⚡</span>
            <span>SEND OWL</span>
            <span className="transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-xs">
              ↗
            </span>
          </a>
        </header>

        {/* Main Hero Row */}
        <div className="relative flex flex-col md:flex-row items-center justify-between w-full pt-4 pb-2 my-auto">
          
          {/* LEFT: Headline & Actions */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-sm sm:max-w-md md:max-w-lg lg:max-w-[40rem] xl:max-w-[44rem] pointer-events-auto z-20"
          >
            {/* Wizard Badge */}
            <motion.div variants={fadeUpVariants} className="mb-3 inline-flex items-center space-x-2.5 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-950/50 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C084FC] animate-ping" />
              <span className="text-[10px] font-mono tracking-[0.25em] text-[#D8B4FE] uppercase">
                FULL STACK MERN DEVELOPER • 3+ YEARS EXP
              </span>
            </motion.div>

            {/* Massive Enchanted Headline */}
            <motion.div variants={fadeUpVariants} className="relative mb-4 select-none">
              <h1
                className="text-6xl sm:text-7xl md:text-8xl lg:text-[7.2rem] xl:text-[8rem] tracking-tight uppercase leading-[0.84]"
                style={{ fontFamily: "'Cinzel', 'Bebas Neue', serif" }}
              >
                {/* Line 1: I CONJURE */}
                <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#E9D5FF] to-[#7E22CE] drop-shadow-[0_4px_16px_rgba(126,34,206,0.6)]">
                  I CONJURE
                </span>

                {/* Line 2: DIGITAL */}
                <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F5D0FE] via-[#C084FC] to-[#581C87] drop-shadow-[0_8px_30px_rgba(192,132,252,0.4)]">
                  DIGITAL
                </span>

                {/* Line 3: REALMS */}
                <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FEF08A] via-[#D4AF37] to-[#78350F] drop-shadow-[0_10px_35px_rgba(212,175,55,0.45)]">
                  REALMS
                </span>
              </h1>
            </motion.div>

            {/* Subtitle Technologies / Pillars */}
            <motion.div variants={fadeUpVariants} className="mb-4">
              <p
                className="text-[10px] sm:text-[11px] md:text-xs font-medium tracking-[0.28em] uppercase text-[#D8B4FE]"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                FULL STACK MERN <span className="text-[#D4AF37] mx-1">✦</span> NESTJS &amp; KAFKA <span className="text-[#D4AF37] mx-1">✦</span> CLOUD-NATIVE ARCHITECT
              </p>
            </motion.div>

            {/* Resume Summary Description */}
            <motion.div
              variants={fadeUpVariants}
              className="text-xs sm:text-sm md:text-[14px] font-light text-[#C4B5E0] leading-[1.85] tracking-wide max-w-lg mb-7 space-y-1"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              <p>
                Full Stack Developer crafting production-grade cloud-native platforms across EdTech, Healthcare, and Travel domains.
                <br />
                Delivering <span className="text-[#FEF08A] font-normal">40% throughput leaps</span> and <span className="text-[#FEF08A] font-normal">35% reporting speed gains</span> with Kafka-driven microservices and query-optimized APIs.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeUpVariants}
              className="flex flex-row items-center gap-4 sm:gap-6"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              {/* Explore Grimoire CTA */}
              <motion.a
                href="#work"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                whileHover={{ scale: 1.03 }}
                className="relative inline-flex items-center space-x-3 px-6 sm:px-7 py-3.5 border border-purple-500/60 bg-[#160B2C]/90 hover:border-[#D4AF37] text-[#F3E8FF] hover:text-[#FEF08A] text-[11px] font-semibold tracking-[0.24em] uppercase transition-all duration-300 shadow-[0_0_25px_rgba(168,85,247,0.3)] hover:shadow-[0_0_35px_rgba(212,175,55,0.35)] backdrop-blur-sm"
              >
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#C084FC]/60 to-transparent pointer-events-none" />
                <span>EXPLORE GRIMOIRE</span>
                <span className="transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-xs">
                  ↗
                </span>
              </motion.a>

              {/* Download Resume Button */}
              <motion.a
                href={resumePdf}
                download="Lawrence_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                whileHover={{ scale: 1.03 }}
                className="relative inline-flex items-center space-x-2 px-6 sm:px-7 py-3.5 border border-purple-500/30 hover:border-purple-400 bg-purple-950/20 text-[#D8B4FE] hover:text-[#F3E8FF] text-[11px] font-medium tracking-[0.24em] uppercase transition-all duration-300 backdrop-blur-sm shadow-[0_0_15px_rgba(168,85,247,0.15)]"
              >
                <span>SUMMON RESUME</span>
                <span className="transform transition-transform duration-300 group-hover:translate-y-0.5 text-xs text-[#D4AF37]">
                  ↓
                </span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* RIGHT: Floating Wizard Quote & Signature Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:flex flex-col items-start pointer-events-auto pr-16 xl:pr-28 mr-4 z-20 select-none"
          >
            {/* Quote Mark */}
            <span className="text-2xl text-[#D4AF37] leading-none font-serif mb-2">
              “
            </span>

            {/* Compact Two-Line Statement */}
            <div 
              className="text-[10px] font-medium tracking-[0.24em] uppercase text-[#E9D5FF] space-y-1 mb-3"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              <p>ANY ADVANCED CODE IS</p>
              <p className="text-[#C084FC]">INDISTINGUISHABLE FROM MAGIC.</p>
            </div>

            {/* Purple & Gold Accent Line */}
            <div className="w-32 h-[1.5px] bg-gradient-to-r from-[#D4AF37] via-[#C084FC] to-transparent shadow-[0_0_10px_rgba(168,85,247,0.5)] mb-3" />

            {/* Calligraphy Signature */}
            <div 
              className="text-[2.6rem] text-[#FEF08A] font-normal leading-none -ml-0.5 drop-shadow-[0_0_12px_rgba(212,175,55,0.4)]"
              style={{ 
                fontFamily: "'Herr Von Muellerhoff', 'Great Vibes', cursive",
                letterSpacing: '0.04em',
              }}
            >
              Lawrence C
            </div>

            {/* House Emblem Pill */}
            <div className="mt-3 px-3 py-1 border border-purple-500/30 rounded bg-purple-950/40 text-[9px] font-mono tracking-[0.2em] text-[#D8B4FE]">
              HOGWARTS CLASS OF CODE • 3+ YRS
            </div>
          </motion.div>
        </div>

        {/* Bottom Spacer */}
        <div className="h-2" />
      </div>
    </section>
  );
};

export default HeroSection;