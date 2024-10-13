import Carousel from './Carousel';

export default async function HeroSection() {
  const response = await fetch(`https://api.jikan.moe/v4/top/anime?limit=5`, {
    cache: 'no-store',
  });
  const upcomingAnime = await response.json();

  return (
    <section>
      <Carousel upcomingAnime={upcomingAnime.data} />
    </section>
  );
}
