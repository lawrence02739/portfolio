import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface RouteStop {
  id: string;
  year: string;
  title: string;
  organization: string;
  description: string;
  tags?: string[];
}

const journey: RouteStop[] = [
  {
    id: '01',
    year: 'JUN 2026 – PRESENT',
    title: 'FULL STACK DEVELOPER',
    organization: 'NORTHSTAR ACADEMY | BENGALURU',
    description:
      'Building LearnEx, an enterprise multi-portal CRM/course-management platform (Admin, Tenant/Partner, Student) using NestJS, React.js, and MongoDB. Designed RBAC and a multi-portal authentication system (JWE cookies, Google OAuth) for secure access across all three portals. Built the course structure builder, AWS S3-backed content library, and partner onboarding with commission-based billing.',
    tags: ['NestJS', 'React.js', 'MongoDB', 'AWS S3', 'RBAC', 'Google OAuth'],
  },
  {
    id: '02',
    year: 'MAY 2023 – JUN 2026',
    title: 'SOFTWARE ENGINEER',
    organization: 'TWILIGHT IT SOLUTION | PUDUCHERRY',
    description:
      'Engineered 4 production applications across healthcare, travel, and pharmacy domains using the MERN stack and NestJS. Built REST and GraphQL APIs raising claims processing throughput by 40%; added Kafka/BullMQ event-driven microservices for fault tolerance. Set up Kong API Gateway and Redis caching across 10+ services, cutting third-party integration effort and API latency.',
    tags: ['MERN Stack', 'NestJS', 'Kafka', 'BullMQ', 'Kong Gateway', 'Redis', 'GraphQL'],
  },
  {
    id: '03',
    year: 'ACCOLADE & HONOR',
    title: 'BEST EMPLOYEE AWARD',
    organization: 'TWILIGHT IT SOLUTION',
    description:
      'Recognised for leading TripVista delivery under tight timelines as Project Lead, resolving critical architectural blockers, and coordinating the engineering squad to ship the high-availability real-time booking engine in 4 months.',
    tags: ['Best Employee Award', 'Project Lead', 'High Concurrency', 'Rapid Delivery'],
  },
  {
    id: '04',
    year: 'GRADUATED 2022',
    title: 'B.TECH IN COMPUTER SCIENCE & ENGINEERING',
    organization: 'SRI MANAKULA VINAYAGAR ENGINEERING COLLEGE',
    description:
      'Graduated with distinction in core software engineering, algorithms, distributed computing, relational & NoSQL databases, and modern full-stack web architecture.',
    tags: ['B.Tech CSE', 'SMVEC', 'Distributed Systems', 'Data Structures'],
  },
];

export const ExperienceSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 70%', 'end 90%'],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section
      id="experience"
      ref={containerRef}
      className="relative w-full bg-[#07040D] text-[#E9D5FF] font-sans selection:bg-[#7e22ce]/40 selection:text-[#fef08a] pt-4 pb-24 px-6 sm:px-12 lg:px-20 overflow-hidden"
    >
      {/* Background Magical Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-purple-900/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto w-full relative z-10">
        
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
            <span>✦</span> 04 / EXPEDITIONS &amp; APPOINTMENTS
          </span>
          <div className="w-24 h-[1px] bg-gradient-to-r from-[#D4AF37]/80 via-purple-500/50 to-transparent" />
        </motion.div>

        {/* Section Headline */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <h2
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight uppercase leading-[0.85] select-none"
            style={{ fontFamily: "'Cinzel', 'Bebas Neue', serif" }}
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#E9D5FF] to-[#7E22CE] drop-shadow-[0_4px_12px_rgba(126,34,206,0.6)]">
              CAREER QUESTS &amp;
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FEF08A] via-[#D4AF37] to-[#78350F] drop-shadow-[0_8px_25px_rgba(212,175,55,0.35)]">
              MILESTONES.
            </span>
          </h2>
        </motion.div>

        {/* Minimalist Route Map */}
        <div className="relative w-full">
          
          {/* Background Track */}
          <div className="absolute left-[19px] md:left-[150px] top-4 bottom-8 w-[1.5px] bg-purple-900/30" />
          
          {/* Animated Gold & Purple Track */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-[19px] md:left-[150px] top-4 w-[2px] bg-gradient-to-b from-[#C084FC] via-[#D4AF37] to-[#FEF08A] shadow-[0_0_12px_rgba(168,85,247,0.8)] origin-top"
          />

          <div className="space-y-12">
            {journey.map((stop, idx) => (
              <motion.div
                key={stop.id}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: idx * 0.08 }}
                className="relative flex flex-col md:flex-row items-start group"
              >
                {/* Desktop Year (Left side of track) */}
                <div className="hidden md:block w-[150px] shrink-0 pr-8 pt-0.5 text-right">
                  <span className="text-[10px] font-mono tracking-[0.2em] text-[#D4AF37] group-hover:text-[#FEF08A] transition-colors">
                    {stop.year}
                  </span>
                </div>

                {/* Route Node */}
                <div className="absolute left-[19px] md:left-[150px] top-1.5 -translate-x-1/2 flex items-center justify-center">
                  <div className="absolute w-6 h-6 rounded-full border border-purple-400/0 group-hover:border-purple-400/60 group-hover:scale-150 transition-all duration-700 ease-out" />
                  <div className="w-3 h-3 rounded-full bg-[#0F0721] border border-[#D4AF37] group-hover:bg-[#C084FC] group-hover:border-[#FEF08A] group-hover:shadow-[0_0_15px_#C084FC] transition-all duration-300" />
                </div>

                {/* Content (Right side of track) */}
                <div className="ml-14 md:ml-12 pl-2 flex-1">
                  {/* Mobile Year */}
                  <div className="md:hidden mb-1.5">
                    <span className="text-[10px] font-mono tracking-[0.2em] text-[#D4AF37]">
                      {stop.year}
                    </span>
                  </div>

                  <h3
                    className="text-2xl sm:text-3xl tracking-wide text-white group-hover:text-[#FEF08A] transition-colors mb-1 leading-tight font-semibold"
                    style={{ fontFamily: "'Cinzel', serif" }}
                  >
                    {stop.title}
                  </h3>

                  <div className="text-[11px] font-mono tracking-wider uppercase text-[#C084FC] mb-3">
                    {stop.organization}
                  </div>

                  <p
                    className="text-xs sm:text-sm font-light text-[#D8B4FE]/80 leading-relaxed mb-4 max-w-xl"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {stop.description}
                  </p>

                  {/* Skills/Tags */}
                  {stop.tags && (
                    <div className="flex flex-wrap gap-1.5">
                      {stop.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 text-[9.5px] font-mono rounded border border-purple-500/20 bg-purple-950/30 text-[#D8B4FE]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default ExperienceSection;