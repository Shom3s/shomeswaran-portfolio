import { AboutSection } from './sections/AboutSection';
import { CertificatesSection } from './sections/CertificatesSection';
import { ContactSection } from './sections/ContactSection';
import { HeroSection } from './sections/HeroSection';
import { MarqueeSection } from './sections/MarqueeSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { ResumeSection } from './sections/ResumeSection';
import { ServicesSection } from './sections/ServicesSection';
import { TechnicalSkillsSection } from './sections/TechnicalSkillsSection';
import { TestimonialsSection } from './sections/TestimonialsSection';

export default function App() {
  return (
    <main
      className="min-h-screen bg-[#0C0C0C] font-kanit"
      style={{ overflowX: 'clip' }}
    >
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <TechnicalSkillsSection />
      <ProjectsSection />
      <TestimonialsSection />
      <CertificatesSection />
      <ResumeSection />
      <ContactSection />
    </main>
  );
}
