import React from "react";
import MovieCard from "./MovieCard";

const PopularMovie = ({ movies }) => {
  return (
    <div className=" bg-slate-700 container mx-auto max-w-7xl pb-10 px-4">
      <h1 className=" text-yellow-100 font-title text-2xl mt-8 mb-5">
        What's Popular
      </h1>
      <div className=" grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 sm:gap-y-20">
        {movies?.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};

export default PopularMovie;
