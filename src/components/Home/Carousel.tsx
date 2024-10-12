'use client'; // Deklarasikan bahwa ini adalah komponen client-side

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '../ui/button';
import { Bookmark, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Carousel({ upcomingAnime }: { upcomingAnime: any[] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  // Fungsi untuk berpindah ke slide berikutnya
  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === upcomingAnime.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Fungsi untuk berpindah ke slide sebelumnya
  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? upcomingAnime.length - 1 : prevIndex - 1
    );
  };

  // Auto-slide setiap 5 detik
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext(); // Pindahkan slide ke item berikutnya
    }, 5000); // Interval 5 detik

    return () => clearInterval(interval); // Bersihkan interval ketika komponen di-unmount
  }, [activeIndex]);

  // Fungsi untuk berpindah ke slide tertentu saat titik di klik
  const handleIndicatorClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div
        className="flex transition-transform duration-300 h-full"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {upcomingAnime.map((anime: any) => (
          <div key={anime.mal_id} className="min-w-full relative">
            <Image
              src={anime.trailer.images.maximum_image_url}
              alt={anime.title}
              width={5000}
              height={5000}
              className="absolute h-full w-full object-cover -z-20"
            />
            <div className="absolute h-full w-full bg-gradient-to-r from-neutral-950/95 from-1% to-neutral-950/10 -z-10"></div>
            <div className="absolute h-full w-full bg-gradient-to-t from-neutral-950 -z-10"></div>
            <div className="px-20 flex flex-col justify-center h-full">
              <h3 className="text-neutral-50 text-base font-medium bg-violet-900 w-fit px-4 py-1 mb-6">
                Top Anime
              </h3>
              <div className="flex gap-x-8">
                <p className="text-neutral-100 text-lg"># {anime.rank}</p>
                <p className="text-neutral-100 text-lg">
                  &#9733; {anime.score}
                </p>
                {anime.episodes === null ? (
                  <p className="text-neutral-100 text-lg">?? Eps</p>
                ) : (
                  <p className="text-neutral-100 text-lg">
                    {anime.episodes} Eps
                  </p>
                )}
                <p className="text-neutral-100 text-lg">{anime.duration}</p>
              </div>
              <div className="max-w-[700px]">
                <h1 className="text-neutral-50 text-[55px] font-bold leading-none">
                  {anime.title}
                </h1>
                <p className="text-violet-500 text-lg font-semibold mb-2">
                  ({anime.title_japanese})
                </p>
                {anime.synopsis.length > 300 ? (
                  <p className="text-neutral-100 text-base max-w-[600px]">
                    {anime.synopsis.substring(0, 300)}...{' '}
                    <span className="font-bold text-violet-500">read more</span>
                  </p>
                ) : (
                  <p className="text-neutral-100 text-base max-w-[600px]">
                    {anime.synopsis}
                  </p>
                )}
                <div className="flex gap-x-8 mt-6">
                  <Button className="bg-violet-900 rounded-none hover:bg-violet-950 flex gap-x-1 items-center justify-center">
                    <span>Learn More</span>
                    <ChevronRight size={20} />
                  </Button>
                  <Button
                    variant="outline"
                    className="rounded-none text-neutral-50 border-neutral-50 border bg-transparent flex gap-x-1 items-center justify-center"
                  >
                    <Bookmark size={20} />
                    <span>Bookmark</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Indicatior
        upcomingAnime={upcomingAnime}
        activeIndex={activeIndex}
        handleIndicatorClick={handleIndicatorClick}
      />
      <Slider handleNext={handleNext} handlePrev={handlePrev} />
    </div>
  );
}

const Slider = ({
  handleNext,
  handlePrev,
}: {
  handleNext: () => void;
  handlePrev: () => void;
}) => {
  return (
    <>
      <button
        onClick={handlePrev}
        className="absolute left-[18px] top-1/2 transform -translate-y-1/2 text-neutral-500 hover:scale-110 transition-all duration-300 ease-in-out hover:text-neutral-300"
      >
        <ChevronLeft size={40} />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-5 top-1/2 transform -translate-y-1/2 text-neutral-500 hover:scale-110 transition-all duration-300 ease-in-out hover:text-neutral-300"
      >
        <ChevronRight size={40} />
      </button>
    </>
  );
};

const Indicatior = ({
  upcomingAnime,
  activeIndex,
  handleIndicatorClick,
}: {
  upcomingAnime: any;
  activeIndex: number;
  handleIndicatorClick: (index: number) => void;
}) => {
  return (
    <div className="absolute bottom-5 left-0 right-0 flex justify-center items-center gap-x-2">
      {upcomingAnime.map((_: any, index: number) => (
        <button
          key={index}
          onClick={() => handleIndicatorClick(index)}
          className={`size-2 rounded-full ${
            activeIndex === index
              ? 'bg-neutral-100 size-[10px]'
              : 'bg-neutral-500'
          }`}
        />
      ))}
    </div>
  );
};
