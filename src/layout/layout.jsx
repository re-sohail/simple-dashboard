import React from "react";
import Sidebar from "./sidebar";
import Navbar from "./navbar";
import { Outlet } from "react-router";

function Layout() {
  return (
    <div className="w-full h-screen bg-white flex items-center">
      <div className="h-full w-80 border-r border-gray-200 p-4">
        <Sidebar />
      </div>
      <div className="h-full flex-1">
        <div className=" w-full h-20 border-b border-gray-200 p-4">
          <Navbar />
        </div>
        <div className="w-full h-[calc(100%-80px)] p-4 overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;

// // Canmel Case
// appData

// // Pascal Case
// AppData

// // snake case
// app_data

// // kebab-case
// app-data
