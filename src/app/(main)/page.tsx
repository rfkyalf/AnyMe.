import FeaturedColSection from '@/components/Home/FeaturedSection';
import HeroSection from '@/components/Home/HeroSection';
import SeasonalAnimeSection from '@/components/Home/SeasonalSection';
import TopMoviesSection from '@/components/Home/TopMoviesSection';
import UpcomingSection from '@/components/Home/UpcomingSection';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <SeasonalAnimeSection />
      <FeaturedColSection />
      <UpcomingSection />
      <TopMoviesSection />
    </main>
  );
}
