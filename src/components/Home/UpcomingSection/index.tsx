import Image from 'next/image';

export default async function UpcomingSection() {
  const response = await fetch(
    `https://api.jikan.moe/v4/top/anime?filter=upcoming&limit=1`
  );
  const data = await response.json();

  const upcomingAnime = data.data;
  console.log(upcomingAnime);

  return (
    <section className="bg-neutral-950 px-20 py-10">
      <div>
        <h1 className="text-[35px] text-neutral-50 font-bold mb-4">
          Upcoming Anime
        </h1>
        <div className="grid grid-cols-[2fr_1fr] gap-x-8">
          {upcomingAnime?.map((anime: any) => (
            <div key={anime.mal_id} className="flex flex-col gap-4">
              <iframe
                src={anime.trailer.embed_url}
                title={anime.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="h-[500px] w-full"
              />
              <div>
                <div className="flex gap-x-4">
                  <Image
                    src={anime.images.jpg.large_image_url}
                    alt={anime.title}
                    width={1000}
                    height={1000}
                    className="w-[150px] h-[200px] object-cover"
                  />
                  <div>
                    <h2 className="text-xl font-medium text-neutral-50">
                      {anime.title}
                    </h2>
                    <div className="text-neutral-300 text-sm">
                      <p>Japanese Title : {anime.title_japanese}</p>
                      <p>Type : {anime.type}</p>
                      <p>Source : {anime.source}</p>
                      <p>Rating : {anime.rating}</p>
                      <div className="flex gap-x-1">
                        Genre :
                        {anime.genres.map((genre: any) => (
                          <p key={genre.mal_id}>{genre.name}</p>
                        ))}
                      </div>
                      <div className="flex flex-col">
                        Synopsis : <p>{anime.synopsis.substring(0, 200)}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="text-white p-4 h-fit border-2 border-neutral-950">
            <h2>Top Upcoming Anime</h2>
            <div className="flex flex-col gap-y-4 mt-4">
              <div className="border border-neutral-900 p-2">CONTENT</div>
              <div className="border border-neutral-900 p-2">CONTENT</div>
              <div className="border border-neutral-900 p-2">CONTENT</div>
              <div className="border border-neutral-900 p-2">CONTENT</div>
              <div className="border border-neutral-900 p-2">CONTENT</div>
              <div className="border border-neutral-900 p-2">CONTENT</div>
              <div className="border border-neutral-900 p-2">CONTENT</div>
              <div className="border border-neutral-900 p-2">CONTENT</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
