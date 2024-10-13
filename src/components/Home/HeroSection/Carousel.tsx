'use client'; // Deklarasikan bahwa ini adalah komponen client-side

import { useEffect, useState } from 'react';
import CarouselList from './CarouselList';
import { Indicatior, Slider } from './Slider';

export default function Carousel({ topAnime }: { topAnime: any[] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === topAnime.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? topAnime.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  const handleIndicatorClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div
        className="flex transition-transform duration-300 h-full"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        <CarouselList topAnime={topAnime} />
      </div>
      <Indicatior
        topAnime={topAnime}
        activeIndex={activeIndex}
        handleIndicatorClick={handleIndicatorClick}
      />
      <Slider handleNext={handleNext} handlePrev={handlePrev} />
    </div>
  );
}
