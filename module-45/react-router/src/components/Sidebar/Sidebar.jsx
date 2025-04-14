import React from "react";
import { Link } from "react-router";

const Sidebar = () => {
  return (
    <div className="bg-white text-gray-800 px-5 py-3">
      <h1 className="font-semibold text-2xl">Sidebar</h1>
      <nav className="flex flex-col mt-5 text-lg font-medium">
        <Link to={"/"}>Home</Link>
        <Link to={"/mobiles"}>Mobiles</Link>
        <Link to={"/laptops"}>Laptops</Link>
        <Link to={"/monitors"}>Monitors</Link>
      </nav>
    </div>
  );
};

export default Sidebar;
