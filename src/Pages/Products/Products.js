import { data } from "autoprefixer";
import React from "react";
import { useLoaderData } from "react-router-dom";
import Product from "./Product";

const Products = () => {
  const products = useLoaderData();
    // console.log(products)
 
  return (
    <div className="max-w-[1200px] my-5 gap-6 grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 mx-auto">
      {products.map((bike) => (
        <Product
        key={bike._id}
        bike={bike}
        ></Product>
      ))}
    </div>
  );
};

export default Products;
