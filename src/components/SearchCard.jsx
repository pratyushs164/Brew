import React from "react";
import taxidriver from "../assets/taxi_driver.jpeg";
function SearchCard({ movie }) {
  movie = {
    id: movie.id,
    title: movie.title,
    moviePoster: movie.poster_path,
    ratings: movie.vote_average,
    totalReviews: movie.vote_count,
  };
  return (
    <div className="text-white bg-gray-400 h-50 mt-4 p-5 flex justify-around">
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.moviePoster}`}
          alt="movie-poster"
          className="h-40 w-30 border-white border-4"
        />
      </div>

      <div className="w-2xl h-40 bg-black p-4 flex-col justify-around">
        <div className=" text-xl">
          <p>{movie.title}</p>
        </div>

        <div className=" flex gap-4">
          <p>2002</p>
          <p>2h 47m</p>
        </div>

        <div className=" flex items-center gap-4">
          <p>
            {movie.ratings}({movie.totalReviews})
          </p>
          <button className="m-2 bg-gray-500 rounded-4xl h-8 w-30">
            Rate ⭐
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchCard;
