// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import ProductCard from "../Components/ProductCard";
import AddToCartModal from "../Components/AddToCartModal";
import Header from "../Components/Header";
import Pagination from "../Components/Pagination";
import { FaInstagram, FaLinkedin, FaFacebook, FaYoutube } from "react-icons/fa";
// import { Link } from "react-router-dom";
import plant1 from "../assets/plant1.png";
import plant2 from "../assets/plant2.png";
import plant3 from "../assets/plant3.png";

const data = [
  {
    key: "1",
    title: "Monsterra",
    image: plant1,
    description: "Indoor Plant, Low Maintenance",
    rating: "4.9",
    realPrice: "₹ 359",
    presentPrice: "₹ 299",
  },
  {
    key: "2",
    title: "Monsterra",
    image: plant2,
    description: "Indoor Plant, Low Maintenance",
    rating: "4.9",
    realPrice: "₹ 359",
    presentPrice: "₹ 299",
  },
  {
    key: "3",
    title: "Monsterra",
    image: plant3,
    description: "Indoor Plant, Low Maintenance",
    rating: "4.9",
    realPrice: "₹ 359",
    presentPrice: "₹ 299",
  },
  {
    key: "4",
    title: "Monsterra",
    image: plant1,
    description: "Indoor Plant, Low Maintenance",
    rating: "4.9",
    realPrice: "₹ 359",
    presentPrice: "₹ 299",
  },
  {
    key: "5",
    title: "Monsterra",
    image: plant2,
    description: "Indoor Plant, Low Maintenance",
    rating: "4.9",
    realPrice: "₹ 359",
    presentPrice: "₹ 299",
  },
  {
    key: "6",
    title: "Monsterra",
    image: plant3,
    description: "Indoor Plant, Low Maintenance",
    rating: "4.9",
    realPrice: "₹ 359",
    presentPrice: "₹ 299",
  },
  {
    key: "7",
    title: "Monsterra",
    image: plant1,
    description: "Indoor Plant, Low Maintenance",
    rating: "4.9",
    realPrice: "₹ 359",
    presentPrice: "₹ 299",
  },
  {
    key: "8",
    title: "Monsterra",
    image: plant2,
    description: "Indoor Plant, Low Maintenance",
    rating: "4.9",
    realPrice: "₹ 359",
    presentPrice: "₹ 299",
  },
  {
    key: "9",
    title: "Monsterra",
    image: plant3,
    description: "Indoor Plant, Low Maintenance",
    rating: "4.9",
    realPrice: "₹ 359",
    presentPrice: "₹ 299",
  },
  {
    key: "10",
    title: "Monsterra",
    image: plant1,
    description: "Indoor Plant, Low Maintenance",
    rating: "4.9",
    realPrice: "₹ 359",
    presentPrice: "₹ 299",
  },
  {
    key: "11",
    title: "Monsterra",
    image: plant2,
    description: "Indoor Plant, Low Maintenance",
    rating: "4.9",
    realPrice: "₹ 359",
    presentPrice: "₹ 299",
  },
  {
    key: "12",
    title: "Monsterra",
    image: plant3,
    description: "Indoor Plant, Low Maintenance",
    rating: "4.9",
    realPrice: "₹ 359",
    presentPrice: "₹ 299",
  },
];

const Home = () => {
  const [visibleProducts, setVisibleProducts] = useState(data.slice(0, 6));
  const [index, setIndex] = useState(4);
  const [cartCount, setCartCount] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const loadMore = () => {
    const newIndex = index + 4;
    const newProducts = data.slice(index, newIndex);
    setVisibleProducts((prevProducts) => [...prevProducts, ...newProducts]);
    setIndex(newIndex);
  };

  const handleAddToCart = (product) => {
    // console.log(product);
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const addToCart = () => {
    setCartCount(cartCount + 1);
    console.log(cartCount);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div>
      {/* <Header></Header> */}
      <Header cartCount={cartCount} />
      {/* <Body></Body> */}
      <div className="flex mx-auto px-5  md:px20 ">
        <div className="flex mt-5 mb-5 min-h-[500px] py-1 w-full justify-between items-center">
          <div className="w-full grid xl:grid-cols-4 lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-4 gap-6 ">
            <div className="col-span-1">
              <ul className="bg-green-100">
                <li className=" px-4 py-3 ">
                  <div className="border-b-2 border-gray-400 flex justify-between pb-3">
                    <h2 className="text-lg text-gray-500 pl-2">Filter</h2>
                    <h2 className="text-xl text-gray-500 pr-2">CLEAR ALL</h2>
                  </div>
                </li>
                <li className=" px-4 py-3 ">
                  <div className="border-b-2 border-gray-400 flex justify-between pb-3">
                    <h2 className="text-lg text-gray-500 pl-2">
                      Type of Plants
                    </h2>
                    <h2 className="text-xl text-gray-500 font-extrabold pr-4">
                      +
                    </h2>
                  </div>
                </li>
                <li className=" px-4 py-3 ">
                  <div className="border-b-2 border-gray-400 flex justify-between pb-3">
                    <h2 className="text-lg text-gray-500 pl-2">Price</h2>
                    <h2 className="text-xl text-gray-500 font-extrabold pr-4">
                      +
                    </h2>
                  </div>
                </li>
                <li className=" px-4 py-3 ">
                  <div className="border-b-2 border-gray-400 flex justify-between pb-3">
                    <h2 className="text-lg text-gray-500 pl-2">Nursery</h2>
                    <h2 className="text-xl text-gray-500 font-extrabold pr-4">
                      +
                    </h2>
                  </div>
                </li>
                <li className=" px-4 py-3 ">
                  <div className="border-b-2 border-gray-400 flex justify-between pb-3">
                    <h2 className="text-lg text-gray-500 pl-2">
                      Ideal Plants Location
                    </h2>
                    <h2 className="text-xl text-gray-500 font-extrabold pr-4">
                      +
                    </h2>
                  </div>
                </li>
                <li className=" px-4 py-3 ">
                  <div className="border-b-2 border-gray-400 flex justify-between pb-3">
                    <h2 className="text-lg text-gray-500 pl-2">
                      Indoor/Outdoor
                    </h2>
                    <h2 className="text-xl text-gray-500 font-extrabold pr-4">
                      +
                    </h2>
                  </div>
                </li>
                <li className=" px-4 py-3 ">
                  <div className="border-b-2 border-gray-400 flex justify-between pb-3">
                    <h2 className="text-lg text-gray-500 pl-2">Maintenance</h2>
                    <h2 className="text-xl text-gray-500 font-extrabold pr-4">
                      +
                    </h2>
                  </div>
                </li>
                <li className=" px-4 py-3 ">
                  <div className="border-b-2 border-gray-400 flex justify-between pb-3">
                    <h2 className="text-lg text-gray-500 pl-2">Plant Size</h2>
                    <h2 className="text-xl text-gray-500 font-extrabold pr-4">
                      +
                    </h2>
                  </div>
                </li>
                <li className=" px-4 py-3 ">
                  <div className=" flex justify-between pb-3">
                    <h2 className="text-lg text-gray-500 pl-2">
                      Water Schedule
                    </h2>
                    <h2 className="text-xl text-gray-500 font-extrabold pr-4">
                      +
                    </h2>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-span-3">
              <div className="grid xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-2 gap-6 ">
                {visibleProducts.map((product) => {
                  return (
                    <ProductCard
                      key={product.key}
                      productData={product}
                      onAddToCart={() => handleAddToCart(product)}
                    />
                  );
                })}
              </div>
              <div className="m-3 mt-5">
                <Pagination loadMore={loadMore} />
              </div>
            </div>

            {/* Modal */}
            {isModalOpen && selectedProduct && (
              <AddToCartModal
                selectedProductData={selectedProduct}
                handleCloseModal={() => handleCloseModal(selectedProduct)}
                onConfirmAddToCart={addToCart}
              />
            )}
          </div>
        </div>
      </div>

      {/* <Footer></Footer> */}
      <div className="bg-green-200 h-auto justify-center items-center">
        <div className="p-10  grid xl:grid-cols-1 justify-center items-center">
          <div className="grid xl:grid-cols-5 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 ">
            <h1 className="font-semibold text-xl py-3">
              SUBSCRIBE TO OUR NEWSLETER
            </h1>
            <h1 className="font-semibold text-xl py-3 ">ABOUT US</h1>
            <h1 className="font-semibold text-xl py-3">OUR SERVICES</h1>
            <h1 className="font-semibold text-xl py-3">USEFULL LINKS</h1>
            <h1 className="font-semibold text-xl py-3">GET IN TOUCH</h1>
          </div>
          <div className="flex-col justify-items-start my-5 py-1 ">
            <div>
              <h1 className="font-semibold text-2xl">CHAPERONE</h1>
              <p>
                Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem
                aut necessitatibus enim ut internos accusantium a numquam autem
                ab rerum omnis. Non molestiae ratione et laborum doloribus aut
                molestiae voluptates ut porro excepturi sit molestiae obcaecati
                qui quis beatae est voluptatem eius. Et architecto nihil id
                labore omnis hic iste deleniti et porro aspernatur.
              </p>
            </div>
            <div className="my-5">
              <h1 className="font-semibold text-2xl">Follow us on</h1>
              <div className="flex border-b-2 border-gray-300 pb-4">
                <FaInstagram className="text-2xl m-2 ml-0 mr-7 text-gray-800 hover:text-orange-700" />
                <FaFacebook className="text-2xl m-2 ml-0 mr-7 text-gray-800 hover:text-orange-700" />
                <FaYoutube className="text-2xl m-2 ml-0 mr-7 text-gray-800 hover:text-orange-700" />
                <FaLinkedin className="text-2xl m-2 mr-7 ml-0 text-gray-800 hover:text-orange-700" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
