import React from "react";
import { FaSearch } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import Search from "./Search";
import { useAuth } from "../context/AuthContext";
import LogoutBtn from "./LogoutBtn";

function Navbar() {
  const { userData } = useAuth();
  const authStatus = userData.status;
  const navigate = useNavigate();

  const navItems = [
    { name: "Login", slug: "./login", active: !authStatus },
    { name: "Signup", slug: "./signup", active: !authStatus },
  ];
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
          <ul>
            {navItems.map((item) =>
              item.ative ? (
                <li>
                  <button
                    onClick={() => navigate(item.slug)}
                    className="'inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'"
                  >
                    {item.name}
                  </button>
                </li>
              ) : null,
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </div>
        <Search />
      </div>
    </div>
  );
}
export default Navbar;
