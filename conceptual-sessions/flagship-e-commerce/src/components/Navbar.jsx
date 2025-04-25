import React from "react";
import { NavLink } from "react-router";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm px-5 md:px-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center">
          <div className="">
            <img src={logo} alt="" className="h-8" />
          </div>
          <a className="text-xl font-bold font-mono">Flagship</a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex gap-5 px-1">
          <li>
            <NavLink
              className={({ isActive }) =>
                `font-bold font-mono text-lg ${
                  isActive ? "text-orange-600" : "text-gray-700"
                }`
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `font-bold font-mono text-lg ${
                  isActive ? "text-orange-600" : "text-gray-700"
                }`
              }
              to={"about"}
            >
              About
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default Navbar;
