import Meta from "@/components/Meta";
import Image from "next/image";

import axios from "axios";
import { server } from "@/config";

export async function generateStaticParams() {
  
  const res = await axios(
    `${server}/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`
  );
  const movies = res.data.results;
  const ids = movies.map((movie) => movie.id);

  return ids.map((id) => ({
    id: id.toString(),
  }));
}

async function getMovie(id) {
  const res = await axios(
    `${server}/movie/${id}?api_key=${process.env.API_KEY}&language=en-US`
  );
  return res.data;
}

const page = async ({ params }) => {
  const movie = await getMovie(params.id);
  return (
    <div className=" container mx-auto max-w-4xl pt-6">
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
