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
            className="px-5 py-2.5 font-medium bg-blue-50 hover:bg-blue-100 hover:text-blue-600 text-blue-500 rounded-lg text-sm"
          >
            View Details
          </a>
        </div>
      </div>
    </div>
  );
};

export default SinglePhone;
