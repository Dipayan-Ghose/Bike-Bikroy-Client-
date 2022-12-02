import React from "react";
import { Link } from "react-router-dom";

const LoadCategory = ({ data }) => {
  const { _id, brand, brand_img } = data;
  
  console.log(data.models);
  return (
    <div>
      <div className="card card-compact w-64 bg-base-100 shadow-xl mx-auto">
        <figure>
          <img className="w-36 mt-3 p-0" src={brand_img} alt="" />
        </figure>
        <div className="card-body mx-auto ">
          <h2 className="text-2xl text-blue-700 font-bold text-center">{brand}</h2>
          <div className="card-actions justify-end">
            <button className="btn btn-primary ">
             <Link to={`category/${_id}`}> View Models</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadCategory;
