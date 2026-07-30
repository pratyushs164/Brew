import React from "react";
import authService from "../appwrite/auth";
import { useAuth } from "../context/AuthContext";

function LogoutBtn() {
  const logoutUser = useAuth().logout;
  const logoutHandler = () => {
    authService.logout().then(() => {
      logoutUser();
    });
  };
  return (
    <button
      className="inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
      onClick={logoutHandler}
    >
      Logout
    </button>
  );
}

export default LogoutBtn;
