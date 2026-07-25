import React, { useEffect, useState } from "react";
import { CardProvider, useCard } from "../context";
import RatingReviewHeader from "../components/RatingReviewHeader";
import { Outlet } from "react-router-dom";

function RatingsReviews() {
  const { setTrending } = useCard();

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
    <>
      <div>
        <RatingReviewHeader />
        <Outlet />
      </div>
    </>
  );
}

export default RatingsReviews;
