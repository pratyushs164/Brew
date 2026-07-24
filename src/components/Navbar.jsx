import React from "react";
import { FaSearch } from "react-icons/fa";
import { NavLink } from "react-router-dom";

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
        <div>
          <form className="flex gap-2 items-center">
            <input
              type="text"
              placeholder="Search..."
              className=" text-sm p-2 border-4 h-9 w-60 border-gray-500 rounded-2xl focus:outline-none"
            />
            <button type="submit" className="w-10 text-lg text-center ">
              <FaSearch />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
