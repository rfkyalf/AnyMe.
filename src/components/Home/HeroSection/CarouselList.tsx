import { Button } from '@/components/ui/button';
import { Bookmark, ChevronRight } from 'lucide-react';
import Image from 'next/image';

export default function CarouselList({ topAnime }: { topAnime: any[] }) {
  return (
    <>
      {topAnime.map((anime: any) => (
        <div key={anime.mal_id} className="min-w-full relative">
          <Image
            src={anime.trailer.images.maximum_image_url}
            alt={anime.title}
            width={5000}
            height={5000}
            className="absolute h-full w-full object-cover -z-20"
          />
          <OverlayGradient />
          <div className="px-20 flex flex-col justify-center h-full">
            <h3 className="text-neutral-50 text-base font-medium bg-violet-900 w-fit px-4 py-1 mb-6">
              Top Anime
            </h3>
            <div className="flex gap-x-8">
              <p className="text-neutral-100 text-lg"># {anime.rank}</p>
              <p className="text-neutral-100 text-lg">&#9733; {anime.score}</p>
              {anime.episodes === null ? (
                <p className="text-neutral-100 text-lg">?? Eps</p>
              ) : (
                <p className="text-neutral-100 text-lg">{anime.episodes} Eps</p>
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
    </>
  );
}

const OverlayGradient = () => {
  return (
    <>
      <div className="absolute h-full w-full bg-gradient-to-r from-neutral-950/95 from-1% to-neutral-950/10 -z-10"></div>
      <div className="absolute h-full w-full bg-gradient-to-t from-neutral-950 -z-10"></div>
    </>
  );
};
