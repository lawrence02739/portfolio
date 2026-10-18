import React from 'react';
import { motion } from 'framer-motion';
import ScrollStack, { ScrollStackItem } from './ScrollStack';

interface Project {
  number: string;
  title: string;
  category: string;
  description: string;
  githubUrl: string;
  tech: string[];
  metrics: { label: string; value: string }[];
}

const projects: Project[] = [
  {
    number: '01',
    title: 'ASP-RCM Medical Platform',
    category: 'HEALTHCARE / HIGH-THROUGHPUT CLAIMS SYSTEM',
    description:
      'Engineered a dual-portal claims processing system for hospitals and insurers. Decomposed monolithic claims workflows into Kafka-driven event microservices, driving claims throughput up by 40%. Configured granular client-specific workflow access allowing users to traverse the full RCM lifecycle or specific flows based on pricing tiers.',
    githubUrl: 'https://linkedin.com/in/lawrence-c-6ba04b24b',
    tech: [
      'NestJS',
      'GraphQL',
      'PostgreSQL',
      'Kafka',
      'Microservices',
      'Docker',
      'TypeScript',
      'Redis',
      'REST APIs',
    ],
    metrics: [
      { label: 'THROUGHPUT', value: '+40% Improvement' },
      { label: 'ARCHITECTURE', value: 'Kafka Microservices' },
      { label: 'ACCESS CONTROL', value: 'Client Tiered RCM' },
    ],
  },
  {
    number: '02',
    title: 'TripVista – Travel Booking Platform',
    category: 'TRAVEL TECH / REAL-TIME BOOKING ENGINE',
    description:
      'Led end-to-end delivery as Project Lead for a real-time travel booking platform covering lightning search, reservations, and payment processing. Set up Kong API Gateway and Redis caching across 10+ services, drastically cutting integration overhead and API latency. Shipped in 4 months under tight deadlines; earned Twilight IT Solution Best Employee Award.',
    githubUrl: 'https://linkedin.com/in/lawrence-c-6ba04b24b',
    tech: [
      'Node.js',
      'Redis',
      'Kong API Gateway',
      'MySQL',
      'React.js',
      'REST APIs',
      'Redux',
      'BullMQ',
    ],
    metrics: [
      { label: 'TIMELINE', value: 'Shipped in 4 Months' },
      { label: 'RECOGNITION', value: 'Best Employee Award' },
      { label: 'GATEWAY', value: 'Kong + Redis Caching' },
    ],
  },
  {
    number: '03',
    title: 'Hydration Room – Pharmacy Management',
    category: 'HEALTHCARE & PHARMA / INVENTORY PLATFORM',
    description:
      'Built inventory intelligence and reporting dashboards with chart-based data visualization, cutting operational reporting time by 35% and page load speed by 20%. Added an inter-clinic stock transfer flow, letting pharmacists seamlessly transfer inventory from one clinic to another with real-time audit records.',
    githubUrl: 'https://linkedin.com/in/lawrence-c-6ba04b24b',
    tech: [
      'React.js',
      'TailwindCSS',
      'Chart.js',
      'Node.js',
      'Express.js',
      'REST APIs',
      'State Management',
    ],
    metrics: [
      { label: 'REPORTING', value: '35% Faster Speed' },
      { label: 'PAGE LOAD', value: '20% Speed Increase' },
      { label: 'OPERATIONS', value: 'Inter-Clinic Inventory' },
    ],
  },
  {
    number: '04',
    title: 'Healthcare Dollar – Hospital Search Portal',
    category: 'HEALTH-TECH / GEO DISCOVERY & PROCEDURE SEARCH',
    description:
      'Built a hospital discovery and insurance calculation portal with Google Maps API integration for geospatial clinic searches. Tuned PostgreSQL queries with custom indexing for high-speed procedural lookups across thousands of healthcare procedures.',
    githubUrl: 'https://linkedin.com/in/lawrence-c-6ba04b24b',
    tech: [
      'MERN Stack',
      'Google Maps API',
      'PostgreSQL',
      'Express.js',
      'React.js',
      'Node.js',
      'REST APIs',
    ],
    metrics: [
      { label: 'GEO-ENGINE', value: 'Google Maps API' },
      { label: 'DATABASE', value: 'Tuned PostgreSQL Queries' },
      { label: 'STACK', value: 'Production MERN' },
    ],
  },
];

export const ProjectsSection: React.FC = () => {
  return (
    <section
      id="work"
      className="relative w-full bg-[#07040D] text-[#E9D5FF] font-sans selection:bg-[#7e22ce]/40 selection:text-[#fef08a] pt-20 pb-32 px-6 sm:px-12 lg:px-20"
    >
      {/* Studio Magical Purple Glows */}
      <div className="absolute top-1/4 left-1/3 w-[36rem] h-[36rem] bg-purple-900/15 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-[#D4AF37]/10 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Eyebrow Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center space-x-4 mb-5"
        >
          <span
            className="text-[11px] font-semibold tracking-[0.35em] uppercase text-[#D4AF37] flex items-center gap-2"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            <span>✦</span> 02 / ENCHANTED ARTIFACTS
          </span>
          <div className="w-24 h-[1px] bg-gradient-to-r from-[#D4AF37]/80 via-purple-500/50 to-transparent" />
        </motion.div>

        {/* Section Headline */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16"
        >
          <h2
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight uppercase leading-[0.85] select-none"
            style={{ fontFamily: "'Cinzel', 'Bebas Neue', serif" }}
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#E9D5FF] to-[#7E22CE] drop-shadow-[0_4px_12px_rgba(126,34,206,0.6)]">
              SELECTED WORKS.
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FEF08A] via-[#D4AF37] to-[#78350F] drop-shadow-[0_8px_25px_rgba(212,175,55,0.35)]">
              MEASURABLE IMPACT.
            </span>
          </h2>

          <p
            className="text-xs sm:text-sm font-light text-[#D8B4FE]/80 max-w-sm mt-4 md:mt-0 leading-relaxed"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Scroll down to unfold the system architecture grimoires. Each platform was engineered to conquer mission-critical operational challenges.
          </p>
        </motion.div>

        {/* Stacking Deck */}
        <ScrollStack
          itemDistance={20}
          itemScale={0.035}
          itemStackDistance={28}
          stackPosition="15%"
          scaleEndPosition="6%"
          baseScale={0.88}
          useWindowScroll={true}
        >
          {projects.map((project) => (
            <ScrollStackItem key={project.title}>
              <div className="relative w-full rounded-2xl border border-purple-500/40 bg-[#0F0721]/95 p-8 sm:p-12 shadow-[0_25px_70px_rgba(0,0,0,0.98),0_0_30px_rgba(168,85,247,0.18)] group overflow-hidden transition-all duration-500 hover:border-[#D4AF37] backdrop-blur-xl">
                
                {/* Top Purple-Gold Horizon Light Flare */}
                <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#C084FC] to-transparent opacity-70 group-hover:opacity-100 transition-opacity" />

                {/* Corner Minimal L-Brackets */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#D4AF37]/70 group-hover:border-[#D4AF37] transition-colors" />
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#D4AF37]/70 group-hover:border-[#D4AF37] transition-colors" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#D4AF37]/70 group-hover:border-[#D4AF37] transition-colors" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#D4AF37]/70 group-hover:border-[#D4AF37] transition-colors" />

                {/* Big Background Watermark Number */}
                <span
                  className="absolute -bottom-6 -right-3 text-8xl sm:text-9xl font-bold text-purple-400/5 select-none pointer-events-none leading-none"
                  style={{ fontFamily: "'Cinzel', 'Bebas Neue', serif" }}
                >
                  {project.number}
                </span>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
                  
                  {/* Left Column (7 Cols) */}
                  <div className="lg:col-span-7 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center space-x-3 mb-4">
                        <span className="text-xs font-mono font-bold text-[#D4AF37]">
                          {project.number} //
                        </span>
                        <span className="text-[10.5px] font-mono tracking-[0.25em] uppercase text-[#C084FC]">
                          {project.category}
                        </span>
                      </div>

                      <h3
                        className="text-4xl sm:text-5xl lg:text-5xl font-semibold tracking-tight text-white mb-4 group-hover:text-[#FEF08A] transition-colors uppercase leading-[0.95]"
                        style={{ fontFamily: "'Cinzel', 'Bebas Neue', serif" }}
                      >
                        {project.title}
                      </h3>

                      <p
                        className="text-xs sm:text-sm md:text-[14px] font-light text-[#D8B4FE]/80 leading-[1.85] tracking-wide mb-8 max-w-2xl"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        {project.description}
                      </p>
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-2 pt-6 border-t border-purple-500/20">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 text-[10px] font-medium tracking-[0.16em] uppercase rounded-sm border border-purple-500/30 bg-[#170933] text-[#E9D5FF] group-hover:border-[#D4AF37]/60 group-hover:text-[#FEF08A] transition-all duration-300"
                          style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Column (5 Cols) */}
                  <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6 lg:pl-6 lg:border-l lg:border-purple-500/25">
                    <div className="space-y-3">
                      <span className="text-[9.5px] font-mono tracking-[0.25em] uppercase text-[#D4AF37] block mb-2">
                        // ARCHITECTURE METRICS
                      </span>
                      {project.metrics.map((m) => (
                        <div
                          key={m.label}
                          className="p-3.5 rounded-sm border border-purple-500/30 bg-[#0B0418] flex items-center justify-between"
                        >
                          <span className="text-[10px] font-mono text-[#C4B5E0]">
                            {m.label}
                          </span>
                          <span className="text-[11px] font-mono font-medium text-[#FEF08A]">
                            {m.value}
                          </span>
                        </div>
                      ))}
                    </div>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center space-x-3 px-6 py-3.5 border border-purple-500/60 bg-[#160B2C] hover:border-[#D4AF37] hover:bg-[#D4AF37] text-[#E9D5FF] hover:text-black text-[11px] font-semibold tracking-[0.24em] uppercase transition-all duration-300 shadow-[0_0_20px_rgba(168,85,247,0.2)]"
                      style={{ fontFamily: "'Cinzel', serif" }}
                    >
                      <span>VIEW ARTIFACT / DETAILS</span>
                      <span className="text-xs">↗</span>
                    </a>
                  </div>

                </div>
              </div>
            </ScrollStackItem>
          ))}
        </ScrollStack>

      </div>
    </section>
  );
};

export default ProjectsSection;