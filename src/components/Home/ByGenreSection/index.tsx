export default async function ByGenreSection() {
  const response = await fetch(`https://api.jikan.moe/v4/genres/anime`);
  const data = await response.json();
  const genres = data.data;

  console.log(genres);
  return (
    <section className="bg-neutral-950 px-20 py-10 relative">
      <h1 className="text-[35px] text-neutral-50 font-bold mb-4 text-center">
        Not sure which anime is right for you? Search by genre!
      </h1>
      <div className="grid grid-cols-6 gap-2">
        {genres.map((genre: any) => (
          <div
            key={genre.mal_id}
            className="border border-violet-950 py-1 h-fit text-center text-base text-neutral-100"
          >
            {genre.name}
          </div>
        ))}
      </div>
    </section>
  );
}
