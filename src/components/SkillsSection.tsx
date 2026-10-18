import React, { useState } from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

const bentoCategories = [
  {
    title: 'CORE RUNES & LANGUAGES',
    badge: 'ANCIENT RUNES',
    items: ['JavaScript (ES6+)', 'TypeScript', 'Java', 'SQL'],
    description: 'Mastery of expressive, strictly typed languages and asynchronous runtime engines powering high-throughput enterprise backends and frontends.',
    stat: 'TYPE-SAFE & ROBUST',
    colSpan: 'lg:col-span-6',
  },
  {
    title: 'FRONTEND SORCERY & UI',
    badge: 'TRANSMUTATION',
    items: ['React.js', 'Next.js', 'TailwindCSS', 'Material UI', 'Redux', 'Bootstrap', 'HTML5 / CSS3', 'Storybook'],
    description: 'Crafting responsive client platforms, reusable component libraries, reactive state stores, and fluid user experiences with zero layout lag.',
    stat: '100% RESPONSIVE',
    colSpan: 'lg:col-span-6',
  },
  {
    title: 'DISTRIBUTED BACKEND & CHARMS',
    badge: 'POWER INCANTATIONS',
    items: ['Node.js', 'Express.js', 'NestJS', 'Kafka', 'BullMQ', 'GraphQL', 'REST APIs', 'Kong API Gateway'],
    description: 'Decomposing monolithic workflows into event-driven Kafka and BullMQ microservices, high-throughput GraphQL APIs, and Kong routing with sub-30ms latency.',
    stat: '< 30ms API LATENCY',
    colSpan: 'lg:col-span-7',
  },
  {
    title: 'DATA VAULTS & CACHING',
    badge: 'IMMUTABLE VAULTS',
    items: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis'],
    description: 'Engineering optimized relational schemas, high-velocity NoSQL document stores, and Redis sub-millisecond caching layers cutting latency across 10+ services.',
    stat: 'ACID & IN-MEMORY',
    colSpan: 'lg:col-span-5',
  },
  {
    title: 'CLOUD, DEVOPS & INFRASTRUCTURE',
    badge: 'SUMMONING CHARMS',
    items: ['AWS (S3)', 'Google Cloud Run', 'Pub/Sub', 'Docker', 'Kong Gateway', 'Git', 'CI/CD'],
    description: 'Containerized Docker deployments, Google Cloud Run serverless orchestrations, AWS S3 storage vaults, and Google Cloud Pub/Sub message buses.',
    stat: 'CLOUD-NATIVE & DOCKER',
    colSpan: 'lg:col-span-6',
  },
  {
    title: 'AI SPELLCRAFT & METHODOLOGY',
    badge: 'DIVINATION & PATTERNS',
    items: ['Microservices Architecture', 'RBAC & JWE / OAuth', 'Agile / Scrum', 'GitHub Copilot', 'Cursor', 'ChatGPT', 'Claude', 'DeepSeek'],
    description: 'Harnessing modern AI coding copilots, enterprise multi-portal RBAC authentication protocols, and rigorous Agile sprint execution.',
    stat: 'SCALABLE & RESILIENT',
    colSpan: 'lg:col-span-6',
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const SkillsSection: React.FC = () => {
  const [, setHoveredIdx] = useState<number | null>(null);

  return (
    <section
      id="skills"
      className="relative w-screen bg-[#07040D] text-[#E9D5FF] font-sans selection:bg-[#7e22ce]/40 selection:text-[#fef08a] pt-12 pb-28 px-6 sm:px-12 lg:px-20 overflow-hidden flex flex-col justify-center"
    >
      {/* Ambient Purple & Gold Magical Glows */}
      <div className="absolute top-1/3 left-1/4 w-[34rem] h-[34rem] bg-purple-900/15 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[28rem] h-[28rem] bg-[#D4AF37]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">

        {/* Eyebrow Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center space-x-4 mb-7"
        >
          <span
            className="text-[11px] font-semibold tracking-[0.35em] uppercase text-[#D4AF37] flex items-center gap-2"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            <span>✦</span> 03 / SPELLBOOK &amp; RUNES
          </span>
          <div className="w-24 h-[1px] bg-gradient-to-r from-[#D4AF37]/80 via-purple-500/50 to-transparent" />
        </motion.div>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <h2
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight uppercase leading-[0.85] select-none"
            style={{ fontFamily: "'Cinzel', 'Bebas Neue', serif" }}
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#E9D5FF] to-[#7E22CE] drop-shadow-[0_4px_12px_rgba(126,34,206,0.6)]">
              TECHNICAL ARSENAL.
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FEF08A] via-[#D4AF37] to-[#78350F] drop-shadow-[0_8px_25px_rgba(212,175,55,0.35)]">
              MASTERED DISCIPLINES.
            </span>
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6"
        >
          {bentoCategories.map((block, idx) => (
            <motion.div
              key={block.title}
              variants={cardVariants}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              whileHover={{ y: -5, transition: { duration: 0.25 } }}
              className={`${block.colSpan} relative p-8 sm:p-9 rounded-xl border border-purple-500/35 bg-[#0F0721]/90 backdrop-blur-xl overflow-hidden transition-all duration-500 hover:border-[#D4AF37]/80 hover:shadow-[0_16px_45px_rgba(168,85,247,0.22)] cursor-pointer group`}
            >
              {/* Top Border Lumos Flare */}
              <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#C084FC] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Corner Antique Gold Pins */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#D4AF37]/50 group-hover:border-[#D4AF37] transition-colors duration-300" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#D4AF37]/50 group-hover:border-[#D4AF37] transition-colors duration-300" />

              {/* Card Meta Header */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#D4AF37] group-hover:text-[#FEF08A] transition-colors flex items-center gap-1.5">
                  <span>✦</span> {block.badge}
                </span>
                <span className="text-[10px] font-mono px-2.5 py-0.5 border border-purple-500/40 text-[#D8B4FE] bg-[#170B2F] group-hover:border-[#D4AF37]/60 group-hover:text-[#FEF08A] transition-all rounded">
                  {block.stat}
                </span>
              </div>

              {/* Title */}
              <h3
                className="text-2xl sm:text-3xl font-semibold tracking-wide text-white mb-3 group-hover:text-[#FEF08A] transition-colors"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                {block.title}
              </h3>

              {/* Description */}
              <p
                className="text-xs sm:text-sm text-[#D8B4FE]/80 font-light leading-relaxed mb-7 max-w-xl group-hover:text-[#F3E8FF] transition-colors"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {block.description}
              </p>

              {/* Interactive Tag Chips */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-purple-500/20">
                {block.items.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-[10px] font-mono tracking-wider uppercase rounded border border-purple-500/30 bg-[#160B2C] text-[#E9D5FF] group-hover:border-[#D4AF37]/40 group-hover:text-[#FEF08A] transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default SkillsSection;