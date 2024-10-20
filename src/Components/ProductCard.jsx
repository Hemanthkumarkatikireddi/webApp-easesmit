/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";

const ProductCard = (props) => {
  const Product = props.productData;
  const onAddToCart = props.onAddToCart;

  const { image, description, title, rating, realPrice, presentPrice } =
    Product;
  //   console.log(image);

  return (
    <div className="bg-white shadow-md overflow-hidden  ">
      <div className="flex flex-col col-span-1 w-full ">
        <div className="relative inline-block">
          <div className="flex justify-center items-center">
            <img src={image} alt={image} className="w-[280px] h-[321px] pb-5" />
          </div>
          <div className="absolute top-2 right-2">
            <FontAwesomeIcon
              className="bg-white p-1 text-gray-200 hover:text-red-400"
              icon={faHeart}
            />
          </div>
        </div>
        <Link to="/thankyou">
          <div className="bg-green-600 text-white p-1 text-center font-semibold text-l">
            View Product
          </div>
        </Link>
      </div>
      <div className="p-2">
        <h2 className="mt-1 text-xl text-left font-bold">{title}</h2>
        <p className="text-sm text-left opacity-40 font-bold">{description}</p>
        <div className="flex  items-center">
          <FontAwesomeIcon className="text-yellow-300" icon={faStar} />
          <FontAwesomeIcon className="text-yellow-300" icon={faStar} />
          <FontAwesomeIcon className="text-yellow-300" icon={faStar} />
          <FontAwesomeIcon className="text-yellow-300" icon={faStar} />
          <FontAwesomeIcon className="text-yellow-300" icon={faStar} />
          <span className="pl-2">{rating}</span>
        </div>

        <div className="flex">
          <p className="font-bold line-through opacity-50 ">{realPrice} </p>
          <p className="font-bold px-5">{presentPrice}</p>
        </div>
        <div className="flex justify-between">
          <div
            className="bg-green-600 text-white rounded-xl p-1 px-2.5 text-center font-bold cursor-pointer"
            onClick={onAddToCart}
          >
            - Add to cart +
          </div>
          <div className="text-green-600 border-green-600 rounded-xl border-2 p-1 px-2.5 text-center font-bold">
            Buy on Rent
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
