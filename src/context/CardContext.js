import { useContext, createContext } from "react";

export const CardContext = createContext({
  trending: [
    {
      id: 1,
      title: "Taxi Driver",
      vote_average: 7.1,
      vote_count: 1129,
      poster_path: "/6Q21yptoOCUq4ErwVncesLPVplb.jpg",
    },
  ],
  watchlist: [],
});

export const useCard = () => {
  return useContext(CardContext);
};

export const CardProvider = CardContext.Provider;
