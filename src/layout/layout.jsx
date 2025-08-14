import React from "react";
import Sidebar from "./sidebar";
import Navbar from "./navbar";
import { Outlet } from "react-router";

function Layout() {
  return (
    <div className="w-full h-screen bg-zinc-500 flex items-center ">
      <div className="h-full w-80 bg-red-400 p-4">
        <Sidebar />
      </div>
      <div className="h-full flex-1 bg-blue-400 ">
        <div className="bg-orange-400 w-full h-20 p-4">
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
