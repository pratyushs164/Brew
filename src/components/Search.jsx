import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Navigate, useNavigate } from "react-router-dom";
import { useCard } from "../context";

function Search() {
  const [query, setQuery] = useState("");
  const { setSearch } = useCard();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/search");
  };
  useEffect(() => {
    const getResult = async function () {
      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=da150a5feddba0dd747baccfc97e9f91&query=${query}`,
      );
      const data = await res.json();
      setSearch(data.results.slice(0, 5));
    };
    getResult();
  }, [query]);

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex gap-2 items-center">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          type="text"
          placeholder="Search..."
          className=" text-sm p-2 border-4 h-9 w-60 border-gray-500 rounded-2xl focus:outline-none"
        />
        <button type="submit" className="w-10 text-lg text-center ">
          <FaSearch />
        </button>
      </form>
    </div>
  );
}

export default Search;
