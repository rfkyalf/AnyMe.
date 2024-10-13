import FeaturedColSection from '@/components/Home/FeaturedSection';
import HeroSection from '@/components/Home/HeroSection';
import SeasonalAnimeSection from '@/components/Home/SeasonalSection';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <SeasonalAnimeSection />
      <FeaturedColSection />
    </main>
  );
}
