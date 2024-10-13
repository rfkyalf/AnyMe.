import { Suspense } from 'react';
import FeaturedList from './FeaturedList';

export default function FeaturedColSection() {
  return (
    <section className="bg-neutral-950 px-20 py-10">
      <Suspense fallback={<div>Loading...</div>}>
        <FeaturedList />
      </Suspense>
    </section>
  );
}
