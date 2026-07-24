import React from "react";

import SearchCard from "../components/SearchCard";
import { CardProvider, useCard } from "../context";

function SearchPage() {
  const { search } = useCard();
  return (
    <div>
      <div className="m-16 w-4xl">
        <div className="text-white bg-gray-500 h-10">TITLE</div>
        {search.map((movie) => (
          <SearchCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default SearchPage;
