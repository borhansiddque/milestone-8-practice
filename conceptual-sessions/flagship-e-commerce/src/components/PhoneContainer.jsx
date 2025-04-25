import React, { useEffect, useState } from "react";
import SinglePhone from "./SinglePhone";

const PhoneContainer = ({ phones }) => {
  const [displayPhones, setDisplayPhones] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (!isOpen) {
      setDisplayPhones(phones.slice(0, 6));
    } else {
      setDisplayPhones(phones);
    }
  }, [isOpen, phones]);
  console.log(phones);
  

  return (
    <div className="my-20">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {displayPhones.map((phone) => (
          <SinglePhone key={phone.id} phone={phone} />
        ))}
      </div>
      <div className="flex items-center justify-center">
        <a
          onClick={() => setIsOpen((prv) => !prv)}
          href="#_"
          className="relative inline-block text-lg group mt-10"
        >
          <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
            <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
            <span className="relative">
              {isOpen ? "Hide Some" : "Show All" }
            </span>
          </span>
          <span
            className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
            data-rounded="rounded-lg"
          ></span>
        </a>
      </div>
    </div>
  );
};

export default PhoneContainer;
