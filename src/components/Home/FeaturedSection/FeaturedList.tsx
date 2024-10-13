import Image from 'next/image';

export default function FeaturedList() {
  return (
    <div>
      <h1 className="text-[35px] text-neutral-50 font-bold mb-4">
        Featured Collections
      </h1>
      <div className="grid grid-cols-3 gap-x-4">
        <FeaturedCard />
      </div>
    </div>
  );
}

const FeaturedCard = () => {
  return (
    <>
      <div className="w-full h-[250px] bg-violet-900/20 relative overflow-hidden">
        <h2 className="text-[20px] text-neutral-50 font-semibold text-center py-8">
          Top 10 Action Anime
        </h2>
        <FeaturedContent genresId={1} />
      </div>
      <div className="w-full h-[250px] bg-violet-900/20 relative overflow-hidden">
        <h2 className="text-[20px] text-neutral-50 font-semibold text-center py-8">
          Top 10 Sci-Fi Anime
        </h2>
        <FeaturedContent genresId={24} />
      </div>
      <div className="w-full h-[250px] bg-violet-900/20 relative overflow-hidden">
        <h2 className="text-[20px] text-neutral-50 font-semibold text-center py-8">
          Top 10 Romance Anime
        </h2>
        <FeaturedContent genresId={22} />
      </div>
    </>
  );
};

const FeaturedContent = async ({ genresId }: { genresId: number }) => {
  const response = await fetch(
    `https://api.jikan.moe/v4/anime?genres=${genresId}&order_by=popularity&limit=3`
  );

  const data = await response.json();

  const top10Anime = data.data;

  return (
    <>
      <div className="flex absolute">
        {top10Anime?.map((anime: any) => (
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
    </>
  );
};
