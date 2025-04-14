import React from "react";

const Sidebar = () => {
  return (
    <aside className="bg-white text-gray-800 px-5 py-3">
      <h1 className="font-semibold text-2xl">Sidebar</h1>
      <nav className="flex flex-col mt-5 text-lg font-medium">
        <a href="/">Home</a>
        <a href="/">Mobiles</a>
        <a href="/">Laptops</a>
        <a href="/">Monitors</a>
      </nav>
    </aside>
  );
};

export default Sidebar;
