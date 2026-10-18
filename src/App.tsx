import React from 'react';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ContactSection } from './components/ContactSection';
import { MagicBackground } from './components/MagicBackground';

function App() {
  return (
    <div className="relative w-full min-h-screen bg-[#07040D] text-[#E9D5FF] selection:bg-[#7e22ce]/50 selection:text-[#fef08a]">
      {/* Ambient floating Lumos sparks and purple nebulae */}
      <MagicBackground />

      {/* Main sections */}
      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceSection />
        <ContactSection />
      </div>
    </div>
  );
}

export default App;