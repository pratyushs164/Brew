import { StrictMode } from "react";
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
import Watchlist from "./components/Watchlist.jsx";
import Blogs from "./components/Blogs.jsx";
import Community from "./components/Community.jsx";
import RatingsReviews from "./components/RatingsReviews.jsx";
import Trending from "./components/Trending.jsx";
import RecentlyVisited from "./components/RecentlyVisited.jsx";

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
    </Route>,
  ),
);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
