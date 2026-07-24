import React, { useEffect, useState } from "react";
import { CardProvider } from "../context";
import Card from "./Card";

function RatingsReviews() {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    const getData = async function () {
      const res = await fetch(
        `https://api.themoviedb.org/3/trending/movie/week?api_key=da150a5feddba0dd747baccfc97e9f91`,
      );

      const response = await res.json();

      setTrending(response.results.slice(0, 4));
    };
    getData();
  }, []);

  return (
    <CardProvider value={{ trending }}>
      <div className="flex justify-center">
        {trending.map((movie) => (
          <div key={movie.id} className="mx-8">
            <Card movie={movie} />
          </div>
        ))}
      </div>
    </CardProvider>
  );
}

export default RatingsReviews;
