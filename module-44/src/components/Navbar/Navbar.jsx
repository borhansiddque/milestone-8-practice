import React, { useState } from "react";
import Link from "./Link";
import { AlignJustify, X } from "lucide-react";

const navLinks = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "About",
    path: "/about",
  },
  {
    id: 3,
    name: "Services",
    path: "/services",
  },
  {
    id: 4,
    name: "Contact",
    path: "/contact",
  },
  {
    id: 5,
    name: "Blog",
    path: "/blog",
  },
];

const links = navLinks.map((link) => <Link link={link}></Link>);

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="flex justify-between px-3 py-5">
      <h1 className="font-semibold text-2xl font-mono">React App.</h1>
      <ul className="gap-5 items-center hidden md:flex">{links}</ul>

      <ul
        className={`md:hidden absolute z-10 ${
          open ? "top-10" : "-top-60"
        } right-12 bg-amber-100 text-gray-800 p-5 duration-700`}
      >
        {links}
      </ul>

      <div className="">
        <button className="btn btn-accent hidden md:block">Click me</button>
        <div className="md:hidden cursor-pointer">
          {open ? (
            <X onClick={() => setOpen(!open)}></X>
          ) : (
            <AlignJustify onClick={() => setOpen(!open)} />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
