import React from "react";
import bannerImage from "../assets/banner.png";

const Hero = () => {
  return (
    <div className="my-10">
      <img src={bannerImage} alt="" className="w-[90%] h-[500px] mx-auto rounded-2xl" />
      <div className="text-center mt-10 space-y-5">
        <h1 className="text-6xl">Browse, Search, View, Buy</h1>
        <p className="text-lg text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          dolorum minima earum rem <br /> velit aut laboriosam asperiores est animi
          dignissimos.
        </p>
        <div className="flex w-1/2 mx-auto gap-5">
          <input type="text" placeholder="Search Phone By Name or Brand" className="flex-1 px-4 border-2 border-gray-400 rounded-lg" />
          <a href="#_" className="relative inline-block text-lg group">
            <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
              <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
              <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
              <span className="relative">Search</span>
            </span>
            <span
              className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
              data-rounded="rounded-lg"
            ></span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
