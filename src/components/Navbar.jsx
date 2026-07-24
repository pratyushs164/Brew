import React from "react";
import { FaSearch } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Search from "./Search";

function Navbar() {
  return (
    <div>
      <div className="  h-25 p-4 flex text-white justify-between items-center">
        <div>
          <img src="null" alt="Icon" />
        </div>
        <div className="flex gap-15 text-lg font-semibold">
          <NavLink
            to={"/ratings&reviews"}
            className={({ isActive }) =>
              `${isActive ? "bg-gray-500 rounded-4xl p-2" : "p-2"} `
            }
          >
            Ratings & Reviews
          </NavLink>
          <NavLink
            to={"/blogs"}
            className={({ isActive }) =>
              `${isActive ? "bg-gray-500 rounded-4xl p-2" : "p-2"} `
            }
          >
            Blogs
          </NavLink>
          <NavLink
            to={"/community"}
            className={({ isActive }) =>
              `${isActive ? "bg-gray-500 rounded-4xl p-2" : "p-2"} `
            }
          >
            Community
          </NavLink>
        </div>
        <Search />
      </div>
    </div>
  );
}
export default Navbar;
