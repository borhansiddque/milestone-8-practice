import React from "react";
import Link from "./Link";

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

const links = navLinks.map(link => <Link link={link}></Link>)
console.log(links);


const Navbar = () => {
  return (
    <nav className="flex justify-between px-3 py-5">
      <h1 className="font-semibold text-2xl font-mono">React App.</h1>
      <ul className="flex gap-5">{links}</ul>
      <div className="">
        <button className="btn btn-accent">Click me</button>
      </div>
    </nav>
  );
};

export default Navbar;
