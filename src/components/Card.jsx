function Card({ movie }) {
  movie = {
    id: movie.id,
    title: movie.title,
    moviePoster: movie.poster_path,
    ratings: movie.vote_average,
    totalReviews: movie.vote_count,
  };
  return (
    <div className="h-165 w-65 text-white border-gray-500 border-5 rounded-2xl border-solid m-3 ">
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.moviePoster}`}
          alt="movie poster"
          className="rounded-2xl w-full h-90 object-cover"
        />
      </div>
      <div className="flex-1 flex flex-col justify-between text-lg">
        <div className="text-center text-2xl m-2">
          <p>{movie.title}</p>
        </div>
        <div className="flex justify-between m-2">
          <p>Ratings</p>
          <p>
            ⭐ {movie.ratings}({movie.totalReviews})
          </p>
        </div>
        <div className="flex gap-1 m-2">
          <p>Director:</p>
          <p>Martin Scorsese</p>
        </div>
        <div className="flex gap-1 m-2">
          <p>Cast:</p>
          <p>Robert De Neiro, Jodie Foster, ...See More</p>
        </div>
        <button className="m-2 bg-gray-500 rounded-4xl h-10">Rate ⭐</button>
      </div>
    </div>
  );
}

export default Card;
