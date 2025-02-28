import Meta from "@/components/Meta";
import Image from "next/image";


const page = async ({ params }) => {
  // console.log('Params:', params);

  const { id } = params;
  // console.log('ID:', id);

  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}&language=en-US`;
  // console.log('Request URL:', url);

  const res = await fetch(url);

  if (!res.ok) {
    console.error('Failed to fetch movie details:', res.status, res.statusText);
    return <p>Error loading movie details. Status: {res.status}</p>;
  }

  const movie = await res.json();
  return (
    <div className=" container mx-auto max-w-4xl pt-6 mb-72 sm:mb-96 lg:mb-0">
      <Meta title={movie.title} />
      <div className=" px-3">
        <Image
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          width={1000}
          height={600}
          alt="movietitle"
          className=" rounded-md"
        />
        <h1 className=" font-bold font-title text-xl my-2">{movie.title}</h1>
        <p className=" text-slate-600 text-sm mt-4">{movie.overview}</p>
        <p className=" text-slate-600 mt-5 text-sm">
          Genres:{" "}
          <span className=" font-bold font-title">
            {movie.genres.map((genre) => genre.name).join(",")}
          </span>
        </p>
        <p className=" text-slate-600 text-sm">
          Release Date:{" "}
          <span className=" font-bold font-title">{movie.release_date}</span>
        </p>
      </div>
    </div>
  );
};

export default page;
