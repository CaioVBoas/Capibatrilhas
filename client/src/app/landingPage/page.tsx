// app/landingPage/page.tsx
import { LandingHeader } from 'components/landingPageHeader';
import { HeroSection } from 'components/heroSection';
import { AboutSection } from 'components/aboutSection';
import { TutorialSection } from 'components/tutorialSection';
import { FaqSection } from 'components/faqSection';
import { ContactSection } from 'components/contactSection';
import { EndingSection } from 'components/endingSection';
import { LandingFooter } from 'components/landingPageFooter';


export default function LandingPage() {
  return (
    <main>
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