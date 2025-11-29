// app/landingPage/page.tsx
import { Header } from 'components/landingPageHeader';
import { HeroSection } from 'components/heroSection';
import { AboutSection } from 'components/aboutSection';
import { TutorialSection } from 'components/tutorialSection';
import { FaqSection } from 'components/faqSection';
import { ContactSection } from 'components/contactSection';

export default function LandingPage() {
  return (
    <main>
      <Header />
      <HeroSection />
      <AboutSection />
      <TutorialSection />
      <FaqSection />
      <ContactSection />
      
    </main>
  );
}