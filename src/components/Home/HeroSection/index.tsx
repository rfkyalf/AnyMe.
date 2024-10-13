import { Suspense } from 'react';
import Carousel from './Carousel';

export default async function HeroSection() {
  const response = await fetch(`https://api.jikan.moe/v4/top/anime?limit=5`, {
    cache: 'no-store',
  });
  const topAnime = await response.json();

  return (
    <section>
      <Suspense fallback={<div>Loading...</div>}>
        <Carousel topAnime={topAnime.data} />
      </Suspense>
    </section>
  );
}
