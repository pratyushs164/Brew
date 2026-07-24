import React from "react";
import { CardProvider, useCard } from "../context";
import Card from "../components/Card";

function Trending() {
  const { trending } = useCard();
  return (
    <div>
      <CardProvider value={{ trending }}>
        <div className="flex justify-center ">
          {trending.map((movie) => (
            <div key={movie.id} className="mx-8">
              <Card movie={movie} />
            </div>
          ))}
        </div>
      </CardProvider>
    </div>
  );
}

export default Trending;
