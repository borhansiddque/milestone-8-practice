import React from "react";

const SinglePhone = ({ phone }) => {
  const {
    id,
    brand,
    name,
    model,
    image,
    price,
    description,
    storage,
    camera_info,
  } = phone;

  return (
    <div className="card border-2 border-gray-300">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {name}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{brand}</div>
          <div className="badge badge-outline">{model}</div>
        </div>
        <div className="flex items-center justify-center mt-10">
          <a
            href="#_"
            class="relative px-5 py-3 overflow-hidden font-medium text-gray-700 bg-gray-300 border border-gray-100 rounded-lg shadow-inner group"
          >
            <span class="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
            <span class="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
            <span class="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
            <span class="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
            <span class="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
            <span class="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
              View Details
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SinglePhone;
