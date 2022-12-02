import { toast } from "react-hot-toast";
import React from "react";
import Modal from "./Modal";

const Product = ({ bike }) => {
    const model= bike.models;
  const toast=()=>{
    toast.success('Not Implimented')
  }
  console.log(bike.models);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2">
        {model.map((info,i)=>
        <div className="card lg:card-side bg-base-100 shadow-xl m-4">
        <figure>
          <img className="w-60" src={info.image} alt="img" />
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
            <label htmlFor="book-now" onClick={toast} className="btn btn-primary">Book Now</label>
        </div>
       </div>
       <Modal info={info}></Modal>
      </div>    
            
        )}
      
    </div>
  );
};

export default Product;
