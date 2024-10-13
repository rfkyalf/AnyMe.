import { ChevronsRight } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

export default async function SeasonalList() {
  const response = await fetch('https://api.jikan.moe/v4/seasons/now?limit=5', {
    cache: 'no-store',
  });
  const data = await response.json();
  const seasonalAnime = data.data;

  const title = data.data[0].season + ' ' + data.data[0].year;
  return (
    <div>
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-[35px] text-neutral-50 font-bold">
            Seasonal Anime
          </h1>
          <p className="capitalize text-lg text-violet-500">{title}</p>
        </div>
        <p className="text-lg text-violet-500 flex gap-x-1 items-center">
          Show More <ChevronsRight size={20} />
        </p>
      </div>
      <div className="grid grid-cols-5 gap-x-4 mt-4">
        {seasonalAnime.map((anime: any) => (
          <div key={anime.mal_id} className="relative">
            <Image
              src={anime.images.jpg.large_image_url}
              alt={anime.title}
              width={200}
              height={300}
              className="h-[300px] w-full object-cover"
            />
            <div className="w-full h-full absolute bg-gradient-to-t from-neutral-900 via-neutral-950/5 to-neutral-950/0 top-0"></div>
            <div className="absolute bottom-0 p-2 flex flex-col justify-between h-full w-full">
              <p
                className={`text-base px-2 py-1 w-fit text-neutral-200 self-end ${
                  anime.score < 6
                    ? 'bg-red-600'
                    : anime.score < 8
                    ? 'bg-yellow-600'
                    : 'bg-green-600'
                }`}
              >
                &#9733; {anime.score}
              </p>
              <p className="text-base text-neutral-200">{anime.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
