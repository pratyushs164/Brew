import React from "react";
import { NavLink } from "react-router-dom";

function RatingReviewHeader() {
  return (
    <>
      <div className="h-15 text-white  flex justify-around items-center text-l  ">
        <NavLink
          to={"trending"}
          className={({ isActive }) =>
            `${isActive ? "p-3 w-65 bg-gray-400 rounded-4xl" : "p-3 w-65  hover:bg-gray-400 rounded-4xl"}`
          }
        >
          Trending Movies
        </NavLink>
        <NavLink
          to={"recently-visited"}
          className={({ isActive }) =>
            `${isActive ? "p-3 w-65 bg-gray-400 rounded-4xl" : "p-3 w-65  hover:bg-gray-400 rounded-4xl"}`
          }
        >
          Recently Visited
        </NavLink>
        <NavLink
          to={"watchlist"}
          className={({ isActive }) =>
            `${isActive ? "p-3 w-65 bg-gray-400 rounded-4xl" : "p-3 w-65  hover:bg-gray-400 rounded-4xl"}`
          }
        >
          Watchlist
        </NavLink>
      </div>
    </>
  );
}

export default RatingReviewHeader;
