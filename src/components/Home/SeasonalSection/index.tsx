import { Suspense } from 'react';
import SeasonalList from './SeasonalList';

export default function SeasonalAnimeSection() {
  return (
    <section className=" bg-neutral-950 px-20 py-10">
      <Suspense fallback={<div>Loading...</div>}>
        <SeasonalList />
      </Suspense>
    </section>
  );
}
