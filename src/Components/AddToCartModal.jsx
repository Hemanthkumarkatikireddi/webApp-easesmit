/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const AddToCartModal = (props) => {
  const selectedProduct = props.selectedProductData;
  const handleCloseModal = props.handleCloseModal;
  const onConfirmAddToCart = props.onConfirmAddToCart;

  const { image, description, title, rating, realPrice, presentPrice } =
    selectedProduct;

  console.log(selectedProduct);
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg relative">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={handleCloseModal}
        >
          ✖
        </button>

        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <img src={image} alt={title} className="h-32 w-32 object-cover mb-4" />
        <p>{description}</p>
        <div className="flex  items-center">
          <FontAwesomeIcon className="text-yellow-300" icon={faStar} />
          <FontAwesomeIcon className="text-yellow-300" icon={faStar} />
          <FontAwesomeIcon className="text-yellow-300" icon={faStar} />
          <FontAwesomeIcon className="text-yellow-300" icon={faStar} />
          <FontAwesomeIcon className="text-yellow-300" icon={faStar} />
          <h1 className="pl-2">{rating}</h1>
        </div>
        <p className="font-bold mb-4 ">Get This: {presentPrice}</p>
        <p className="font-bold mb-4 line-through ">Price: {realPrice}</p>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          onClick={handleCloseModal}
        >
          <span onClick={onConfirmAddToCart}>Confirm Add to Cart</span>
        </button>
      </div>
    </div>
  );
};

export default AddToCartModal;
