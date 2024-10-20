/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faMagnifyingGlass,
  faUser,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

const Header = (props) => {
  const cart = props.cartCount;
  return (
    <div className="flex-col justify-center items-center py-2">
      <div className="flex mx-4 justify-between align-middle">
        <div className="flex justify-center items-center p-2">
          <img
            className="h-[61px] w-[60px] p-0.5"
            src="https://s3-alpha-sig.figma.com/img/7220/1328/eefc66cd70960daab6449206c3540858?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IZj9rZ8pk0DIPcS2gKzcDeslH6xchJ--XbU~C~owkS5n12psMSHEc5JLnmtBqZj7Vn~PDRKvvfd3LMAAqOLeS8rUSTIaBpqfw1IH~RarF6TEPIpWDQcLG4mPhvhaGl52L0aF7TV5uyRtFDsS3r0eqIy6sM8vBwxGiPHU0NUoV9ryEbIuJz4StnWANiDRBUP5-niwgRODOkPjFHOLb-2mnal4LB9Gz104NjhXPLD4qI-l79aNCrAfVhZAMCsyksp6liOQ5gM1cl-KIp2J0o6gs6SOhmmHmrjz25yGvb9mNGsWoUxa25a6sLeVS4mYChjxGFOL0rsZ-GZ663dYfGLLNg__"
            alt="logo"
          />
          <span className="p-2 text-2xl font-semibold text-green-700">
            Chaperone
          </span>
        </div>
        <ul className="flex justify-center items-center">
          <li className="px-3 font-semibold text-l hover:text-orange-400 border-b-2 hover:border-b-2 border-transparent hover:border-orange-400">
            Home
          </li>
          <li className="px-3 font-semibold text-orange-400 text-l hover:text-orange-400 border-b-2 hover:border-b-2 border-transparent hover:border-orange-400">
            Plants & Products
          </li>
          <li className="px-3 font-semibold text-l hover:text-orange-400 border-b-2 hover:border-b-2 border-transparent hover:border-orange-400">
            Tools
            <span>
              <FontAwesomeIcon className="pl-1" icon={faChevronDown} />
            </span>
          </li>
          <li className="px-3 font-semibold text-l hover:text-orange-400 border-b-2 hover:border-b-2 border-transparent hover:border-orange-400">
            Our Services
            <span>
              <FontAwesomeIcon className="pl-1" icon={faChevronDown} />
            </span>
          </li>
          <li className="px-3 font-semibold text-l hover:text-orange-400 border-b-2 hover:border-b-2 border-transparent hover:border-orange-400">
            Blog
          </li>
          <li className="px-3 font-semibold text-l hover:text-orange-400 border-b-2 hover:border-b-2 border-transparent hover:border-orange-400">
            Our Story
          </li>
          <li className="px-3 font-semibold text-l hover:text-orange-400 border-b-2 hover:border-b-2 border-transparent hover:border-orange-400">
            FAQs
          </li>
        </ul>
        <ul className="flex justify-center items-center">
          <li className="px-2 py-2 flex-col justify-center items-center">
            <div className="text-center">
              <FontAwesomeIcon className="h-5" icon={faUser} />
            </div>
            <h2 className="font-semibold hover:text-orange-400 border-b-2 hover:border-b-2 border-transparent hover:border-orange-400 cursor-pointer">
              My Profile
            </h2>
          </li>
          <li className="px-2">
            <div className="text-center">
              <FontAwesomeIcon className="h-5 " icon={faCartShopping} />
              {cart > 0 && (
                <span className="absolute top-0 right-0 bg-yellow-300 rounded-full text-xs w-5 h-5 mx-2 my-1 flex items-center justify-center">
                  {cart}
                </span>
              )}
            </div>
            <h2 className="font-semibold hover:text-orange-400 border-b-2 hover:border-b-2 border-transparent hover:border-orange-400 cursor-pointer ">
              Cart
            </h2>
          </li>
        </ul>
      </div>
      <div className="flex items-center justify-center mb-5">
        <div className="flex items-center justify-center border-b ">
          <div>
            <FontAwesomeIcon className="pr-2  mt-4" icon={faMagnifyingGlass} />
          </div>
          <input
            type="text"
            placeholder="Search Plant"
            className=" border-gray-300 focus:outline-none focus:border-blue-500  mt-4 text-lg"
          />
          <img
            className="h-[22px] w-[30px] mt-4"
            src="https://s3-alpha-sig.figma.com/img/3a30/d80e/594c268f203b8704f61985100fae62d6?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ECIAJtsSLBVXgl2YF31TxKtq5s0LuX-WtEAzq6FqsAwtmZqiS-DsBkPIwI7mmd0ENoIRLeFKfIjRs5lPiIOarypWJhPEpdI2MHEdJkN1xO7rPxfi6Fivh6LStPxif7cKgwH6k8~PerjWx0Mh5He89Sd3dhBBzSoVHJbRu3RrNjEiGdnLBB7zqjdkw-G736mL7wI656dFi0pWcNGgWTzpC8Gx8DZC4Xf34jdHqhDOfR4kbBMTDGR6JUiDdCwChwHow27J6anCaHgCGyxB2hSvt1vhj2sGVI2cstk7qHKKBVKVoJwELI3jKy9S17QquNjtZWTSwgOnlOFdC1vmzV3X6w__"
            alt="search"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
