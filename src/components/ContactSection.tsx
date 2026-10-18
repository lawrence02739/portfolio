import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <footer
      id="contact"
      className="relative w-full bg-[#07040D] text-[#E9D5FF] font-sans selection:bg-[#7e22ce]/40 selection:text-[#fef08a] pt-20 pb-16 px-6 sm:px-12 lg:px-20 overflow-hidden"
    >
      {/* Background purple glow */}
      <div className="absolute top-1/2 right-1/4 w-[35rem] h-[35rem] bg-purple-900/10 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div>
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
                  <span>✦</span> 05 / OWL POST DISPATCH
                </span>
                <div className="w-16 h-[1px] bg-gradient-to-r from-[#D4AF37]/80 via-purple-500/50 to-transparent" />
              </motion.div>

              {/* Headline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-6"
              >
                <h2
                  className="text-5xl sm:text-6xl md:text-7xl tracking-tight uppercase leading-[0.88] select-none"
                  style={{ fontFamily: "'Cinzel', 'Bebas Neue', serif" }}
                >
                  <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#E9D5FF] to-[#7E22CE] drop-shadow-[0_4px_12px_rgba(126,34,206,0.6)]">
                    SEND AN OWL.
                  </span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FEF08A] via-[#D4AF37] to-[#78350F] drop-shadow-[0_8px_25px_rgba(212,175,55,0.35)]">
                    INITIATE SUMMONS.
                  </span>
                </h2>
              </motion.div>

              <p
                className="text-xs sm:text-[13.5px] font-light text-[#D8B4FE]/80 leading-relaxed max-w-md mb-8"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Have an ambitious microservices system to architect, a high-throughput platform to ship, or an engineering role to explore? Send an enchanted scroll or connect directly.
              </p>

              {/* Direct Channels */}
              <div className="space-y-3.5">
                {/* Email */}
                <a
                  href="mailto:lawrence02739@gmail.com"
                  className="flex items-center space-x-3.5 p-3 rounded-lg border border-purple-500/30 bg-[#0F0721]/80 hover:border-[#D4AF37] hover:bg-purple-950/40 transition-all group backdrop-blur-sm"
                >
                  <div className="w-8 h-8 rounded-full border border-purple-500/40 bg-purple-950/50 flex items-center justify-center text-[#D4AF37] text-xs group-hover:scale-110 transition-transform">
                    ✉
                  </div>
                  <div>
                    <span className="text-[9px] font-mono tracking-widest text-[#D4AF37] uppercase block">
                      DIRECT EMAIL
                    </span>
                    <span className="text-xs text-white group-hover:text-[#FEF08A] transition-colors">
                      lawrence02739@gmail.com
                    </span>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href="tel:+919629926145"
                  className="flex items-center space-x-3.5 p-3 rounded-lg border border-purple-500/30 bg-[#0F0721]/80 hover:border-[#D4AF37] hover:bg-purple-950/40 transition-all group backdrop-blur-sm"
                >
                  <div className="w-8 h-8 rounded-full border border-purple-500/40 bg-purple-950/50 flex items-center justify-center text-[#D4AF37] text-xs group-hover:scale-110 transition-transform">
                    ☎
                  </div>
                  <div>
                    <span className="text-[9px] font-mono tracking-widest text-[#D4AF37] uppercase block">
                      TELEPHONE / WHATSAPP
                    </span>
                    <span className="text-xs text-white group-hover:text-[#FEF08A] transition-colors">
                      +91 9629926145
                    </span>
                  </div>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com/in/lawrence-c-6ba04b24b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3.5 p-3 rounded-lg border border-purple-500/30 bg-[#0F0721]/80 hover:border-[#D4AF37] hover:bg-purple-950/40 transition-all group backdrop-blur-sm"
                >
                  <div className="w-8 h-8 rounded-full border border-purple-500/40 bg-purple-950/50 flex items-center justify-center text-[#D4AF37] text-xs group-hover:scale-110 transition-transform">
                    ✦
                  </div>
                  <div>
                    <span className="text-[9px] font-mono tracking-widest text-[#D4AF37] uppercase block">
                      LINKEDIN DISPATCH
                    </span>
                    <span className="text-xs text-white group-hover:text-[#FEF08A] transition-colors">
                      linkedin.com/in/lawrence-c-6ba04b24b
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Monolith Parchment Form (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 relative w-full rounded-xl border border-purple-500/40 bg-[#0F0721]/95 p-8 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_35px_rgba(168,85,247,0.18)] overflow-hidden backdrop-blur-xl"
          >
            {/* Top Purple-Gold Horizon Edge */}
            <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#C084FC] to-transparent" />
            
            {/* Corner Crosshairs */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#D4AF37]" />
            <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#D4AF37]" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#D4AF37]" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#D4AF37]" />

            {sent ? (
              <div className="py-16 text-center space-y-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-[#D4AF37] text-[#FEF08A] text-lg bg-purple-950/40 shadow-[0_0_20px_rgba(212,175,55,0.4)]">
                  ⚡
                </div>
                <h3 className="text-3xl text-white font-semibold uppercase tracking-wide" style={{ fontFamily: "'Cinzel', serif" }}>
                  OWL DISPATCHED
                </h3>
                <p className="text-xs text-[#D8B4FE]/80 font-light" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  Your transmission scroll has taken flight and will reach Lawrence promptly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <span className="block text-[9.5px] font-mono tracking-[0.2em] uppercase text-[#D4AF37] mb-2 flex items-center gap-1.5">
                      <span>✦</span> SENDER (CALLER NAME)
                    </span>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Albus Dumbledore"
                      className="w-full bg-[#160B2C] border border-purple-500/30 focus:border-[#C084FC] text-xs text-white placeholder-[#D8B4FE]/30 px-4 py-3 outline-none rounded transition-colors shadow-inner"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    />
                  </div>

                  <div>
                    <span className="block text-[9.5px] font-mono tracking-[0.2em] uppercase text-[#D4AF37] mb-2 flex items-center gap-1.5">
                      <span>✦</span> RETURN CHANNEL (EMAIL)
                    </span>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. wizard@ministry.dev"
                      className="w-full bg-[#160B2C] border border-purple-500/30 focus:border-[#C084FC] text-xs text-white placeholder-[#D8B4FE]/30 px-4 py-3 outline-none rounded transition-colors shadow-inner"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    />
                  </div>
                </div>

                <div>
                  <span className="block text-[9.5px] font-mono tracking-[0.2em] uppercase text-[#D4AF37] mb-2 flex items-center gap-1.5">
                    <span>✦</span> SCROLL OF TRANSMISSION (PAYLOAD)
                  </span>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your architecture requirements, mission, or summons..."
                    className="w-full bg-[#160B2C] border border-purple-500/30 focus:border-[#C084FC] text-xs text-white placeholder-[#D8B4FE]/30 p-4 outline-none rounded transition-colors resize-none shadow-inner"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 border border-purple-500/60 bg-[#1A0B36] hover:border-[#D4AF37] hover:bg-[#D4AF37] text-[#F3E8FF] hover:text-black text-xs font-semibold tracking-[0.25em] uppercase transition-all duration-300 shadow-[0_4px_25px_rgba(168,85,247,0.3)] hover:shadow-[0_4px_30px_rgba(212,175,55,0.4)] cursor-pointer"
                  style={{ fontFamily: "'Cinzel', serif" }}
                >
                  CAST DISPATCH VIA OWL POST ⚡
                </button>

              </form>
            )}
          </motion.div>

        </div>

        {/* System Footer Line */}
        <div className="pt-16 mt-16 border-t border-purple-500/20 flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-4">
          <span className="text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase flex items-center gap-1.5">
            <span>✦</span> LAWRENCE C // THE CODE WIZARD // 2026 EDITION
          </span>
          <span className="text-[10px] font-mono text-[#D8B4FE]/70">
            © {new Date().getFullYear()} • CRAFTED WITH SPELLCRAFT &amp; ENGINEERING PRECISION
          </span>
        </div>

      </div>
    </footer>
  );
};

export default ContactSection;