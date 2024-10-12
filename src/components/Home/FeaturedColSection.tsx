import Image from 'next/image';

export default async function FeaturedColSection() {
  const response1 = await fetch(
    `https://api.jikan.moe/v4/anime?genres=1&order_by=popularity&limit=3`
  );

  const data1 = await response1.json();

  const top10ActionAnime1 = data1.data;

  const response2 = await fetch(
    `https://api.jikan.moe/v4/anime?genres=24&order_by=popularity&limit=3`
  );

  const data2 = await response2.json();

  const top10ActionAnime2 = data2.data;

  const response3 = await fetch(
    `https://api.jikan.moe/v4/anime?genres=22&order_by=popularity&limit=3`
  );

  const data3 = await response3.json();

  const top10ActionAnime3 = data3.data;

  return (
    <section className="bg-neutral-950 px-20 py-10">
      <div>
        <h1 className="text-[35px] text-neutral-50 font-bold">
          Featured Collections
        </h1>
        <div className="grid grid-cols-3 gap-x-4 ">
          <div className="w-full h-[250px] bg-violet-900/20 relative overflow-hidden">
            <h2 className="text-[20px] text-neutral-50 font-semibold text-center py-8">
              Top 10 Action Anime
            </h2>
            <div className="flex absolute">
              {top10ActionAnime1?.map((anime: any) => (
                <div key={anime.mal_id} className="feature-card">
                  <Image
                    src={anime.images.jpg.large_image_url}
                    alt={anime.title}
                    width={1000}
                    height={1000}
                    className="w-[150px] h-[200px] object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="w-full h-[250px] bg-violet-900/20 relative overflow-hidden">
            <h2 className="text-[20px] text-neutral-50 font-semibold text-center py-8">
              Top 10 Sci-Fi Anime
            </h2>
            <div className="flex absolute">
              {top10ActionAnime2?.map((anime: any) => (
                <div key={anime.mal_id} className="feature-card">
                  <Image
                    src={anime.images.jpg.large_image_url}
                    alt={anime.title}
                    width={1000}
                    height={1000}
                    className="w-[150px] h-[200px] object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="w-full h-[250px] bg-violet-900/20 relative overflow-hidden">
            <h2 className="text-[20px] text-neutral-50 font-semibold text-center py-8">
              Top 10 Romance Anime
            </h2>
            <div className="flex absolute">
              {top10ActionAnime3?.map((anime: any) => (
                <div key={anime.mal_id} className="feature-card">
                  <Image
                    src={anime.images.jpg.large_image_url}
                    alt={anime.title}
                    width={1000}
                    height={1000}
                    className="w-[150px] h-[200px] object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
