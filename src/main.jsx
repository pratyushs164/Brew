import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";
import {
  Watchlist,
  Blogs,
  Community,
  RatingsReviews,
  Trending,
  RecentlyVisited,
  SearchPage,
} from "./pages/index.js";
import { CardProvider } from "./context/CardContext.js";

function Root() {
  const [trending, setTrending] = useState([]);
  const [watchlist, setWatchlist] = useState([]);
  const [search, setSearch] = useState([]);
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route path="ratings&reviews" element={<RatingsReviews />}>
          <Route index element={<Navigate to="trending" replace />} />

          <Route path="trending" element={<Trending />} />
          <Route path="recently-visited" element={<RecentlyVisited />} />
          <Route path="watchlist" element={<Watchlist />} />
        </Route>
        <Route path="blogs" element={<Blogs />} />
        <Route path="community" element={<Community />} />
        <Route path="search" element={<SearchPage />} />
      </Route>,
    ),
  );

  return (
    <CardProvider
      value={{
        trending,
        setTrending,
        watchlist,
        setWatchlist,
        search,
        setSearch,
      }}
    >
      <RouterProvider router={router} />
    </CardProvider>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Root />
  </StrictMode>,
);
