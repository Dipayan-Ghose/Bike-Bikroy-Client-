import React from "react";

const Product = ({ bike }) => {
    const model= bike.models;
  const {
    id,
    name,
    image,
    location,
    resale_price,
    original_price,
    year_of_used,
    time_of_post,
    seller_name
  } = bike;
  console.log(bike.models);
  return (
    <div>
        {model.map(info=>
        <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img src={info.image} alt="img" />
        </figure>
        <div className="card-body">
          <h2 className="text-blue-700 font-bold text-xl">{info.name}</h2>
          <p className="text-secondary text-lg font-semibold">Location: {info.location}</p>
          <p className="text-secondary text-lg font-semibold">Buying Price: {info.original_price} Tk</p>
          <p className="text-secondary text-lg font-semibold">Seller Name: {info.seller_name}</p>
          <p className="text-secondary text-lg font-semibold">Date of Post: {info.time_of_post}</p>
          <p className="text-secondary text-lg font-semibold">Used Almost {info.year_of_used} years</p>
          <p className="text-green-600 text-lg font-semibold">Selling Price: {info.resale_price} Tk</p>

          <div className="card-actions justify-center">
            <button className="btn btn-primary ">Buy Now</button>
        </div>
       </div>
      </div>    
            
        )}
      
    </div>
  );
};

export default Product;
