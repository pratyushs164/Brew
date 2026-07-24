import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

//https://api.themoviedb.org/3/trending/movie/week?api_key=da150a5feddba0dd747baccfc97e9f91
function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
