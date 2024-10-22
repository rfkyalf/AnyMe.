import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default async function TopMoviesSection() {
  const response = await fetch(
    `https://api.jikan.moe/v4/top/anime?type=movie&limit=12`
  );
  const data = await response.json();
  const topMovies = data.data;
  console.log(topMovies);

  if (topMovies === undefined) {
    return <div>Loading...</div>;
  }

  return (
    <section className="bg-neutral-950 px-20 py-10 text-white relative">
      <h1 className="text-[35px] text-neutral-50 font-bold mb-4">Top Movies</h1>
      <div className="grid grid-cols-6 gap-x-4">
        {topMovies &&
          topMovies.map((movie: any) => (
            <div key={movie.anime_mal_id} className="h-[260px] relative">
              <div className="absolute h-full w-full z-10 bg-gradient-to-t from-neutral-950 from-5% to-neutral-950/0"></div>
              <Image
                src={movie.images.jpg.large_image_url}
                alt={movie.title}
                width={500}
                height={500}
                className="absolute object-cover w-full h-full"
              />
              <h2 className="absolute bottom-0 z-20 p-2 text-base text-neutral-200">
                {movie.title}
              </h2>
              <p className="absolute top-0 right-0 m-2 px-2 py-1 z-20 text-base text-neutral-200 bg-violet-700">
                &#9733; {movie.score}
              </p>
            </div>
          ))}
      </div>
      <div className="flex items-center justify-center mt-4">
        <Button className="bg-violet-900 rounded-none hover:bg-violet-950">
          Show More
        </Button>
      </div>
    </section>
  );
}
