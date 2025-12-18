// app/landingPage/page.tsx
import { LandingHeader } from 'components/landingPageHeader';
import { HeroSection } from 'components/heroSection';
import { AboutSection } from 'components/aboutSection';
import { TutorialSection } from 'components/tutorialSection';
import { FaqSection } from 'components/faqSection';
import { ContactSection } from 'components/contactSection';
import { EndingSection } from 'components/endingSection';
import { LandingFooter } from 'components/landingPageFooter';
import { RiverLayer } from 'components/riverLayer';


export default function LandingPage() {
  return (
    <main className="overflow-x-hidden">
      <RiverLayer />
      <LandingHeader />
      <HeroSection />
      <AboutSection />
      <TutorialSection />
      <FaqSection />
      <ContactSection />
      <EndingSection />
      <LandingFooter />
    </main>
  );
}