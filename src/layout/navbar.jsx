import React from "react";
import { useLocation } from "react-router";

function Navbar() {
  const location = useLocation();

  const title = location.pathname.split("/").pop();

  // location.pathname => "/dashboard/settings" => split("/") => ["", "dashboard", "settings"] => pop() => last index 
  return <div>{title}</div>;
}

export default Navbar;
