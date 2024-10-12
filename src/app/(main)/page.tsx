import FeaturedColSection from '@/components/Home/FeaturedColSection';
import HeroSection from '@/components/Home/HeroSection';
import SeasonalAnimeSection from '@/components/Home/SeasonalAnimeSection';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <SeasonalAnimeSection />
      <FeaturedColSection />
    </main>
  );
}
