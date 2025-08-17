import React from "react";
import { useNavigate, useLocation } from "react-router";
import { MdDashboard } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";
import { FaUserAlt } from "react-icons/fa";

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.pathname);

  const isActive = (data) => {
    return location.pathname === data;
  };

  return (
    <div className="w-full h-full bg-white text-black flex items-center flex-col justify-between">
      <div className="w-full flex flex-col items-center gap-20">
        {/* Logo */}
        <div className="w-full h-20 ">
          <img
            src="/public/img/golden-logo.webp"
            alt=""
            className="w-full h-full object-contain"
          />
        </div>

        {/* List Items */}
        <div className="w-full">
          <ul className="flex items-center flex-col gap-2">
            <li
              onClick={() => navigate("/dashboard")}
              className={`flex items-center gap-2 w-full h-14 rounded px-4 cursor-pointer ${
                isActive("/dashboard")
                  ? "bg-blue-500 text-white"
                  : "hover:bg-gray-200"
              }`}
            >
              <MdDashboard />
              Dashboard
            </li>
            <li
              onClick={() => navigate("/dashboard/users")}
              className={`flex items-center gap-2 w-full h-14 rounded px-4 cursor-pointer ${
                isActive("/dashboard/users")
                  ? "bg-blue-500 text-white"
                  : "hover:bg-gray-200"
              }`}
            >
              <FaUserAlt />
              User
            </li>
            <li
              onClick={() => navigate("/dashboard/settings")}
              className={`flex items-center gap-2 w-full h-14 rounded px-4 cursor-pointer ${
                isActive("/dashboard/settings")
                  ? "bg-blue-500 text-white"
                  : "hover:bg-gray-200"
              }`}
            >
              <IoIosSettings />
              Settings
            </li>
          </ul>
        </div>
      </div>

      {/* Logout button */}
      <div className="w-full p-4">
        <button
          onClick={() => navigate("/")}
          className="w-full h-14 bg-red-500 text-white rounded cursor-pointer"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
