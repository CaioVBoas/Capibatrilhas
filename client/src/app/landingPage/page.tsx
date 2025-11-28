// app/landingPage/page.tsx
import { Header } from 'components/landingPageHeader';
import { HeroSection } from 'components/heroSection';
import { AboutSection } from 'components/aboutSection';

export default function LandingPage() {
  return (
    <main>
      <Header />
      <HeroSection />
      <AboutSection />
      
    </main>
  );
}