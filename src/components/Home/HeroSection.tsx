import Carousel from './Carousel';

export default async function HeroSection() {
  const response = await fetch(`${process.env.API_URL}/top/anime?limit=5`, {
    cache: 'no-store',
  });
  const upcomingAnime = await response.json();

  return (
    <section>
      <Carousel upcomingAnime={upcomingAnime.data} />
    </section>
  );
}
