import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Watchlist from "./components/Watchlist.jsx";
import Blogs from "./components/Blogs.jsx";
import Community from "./components/Community.jsx";
import RatingsReviews from "./components/RatingsReviews.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="ratings&reviews" element={<RatingsReviews />} />
      <Route path="blogs" element={<Blogs />} />
      <Route path="community" element={<Community />} />
      <Route path="watchlist" element={<Watchlist />} />
    </Route>,
  ),
);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
