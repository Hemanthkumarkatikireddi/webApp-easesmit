// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";

const Thankyou = () => {
  return (
    <div className="flex-col w-full font-mono h-[6px]">
      <div className="border-b-2 flex justify-center ">
        <div className=" px-5 py-10">
          <span className="text-4xl text-green-700">Your Cart</span>
        </div>
      </div>
      <div className="flex-col justify-center items-center text-center w-full my-5 min-h-[300px]">
        <h1 className="text-4xl font-extrabold text-green-700">
          Congratulations <br /> Order Placed!
        </h1>
        <div className=" flex justify-center my-10">
          <img
            src="https://s3-alpha-sig.figma.com/img/da30/c60d/14d6293522911d4a2548b9b1cf65a33a?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZgKKIrx1v2QUz4fX2mBvb3nPC3aOp2RcHYU7~TgXtlP4G4lDYmL0xuOY7DKJKdhum-USfGEqnBwhWQZ1nqspzsS8tmvwwkqXSHQoA7p3jz5L1sVJfMMbHBBLleqQpbQbNwTLtaEuEnYK5~sLf~p-nuYM8RLyt5KvfMwFOgM~UylWTzJOSmInN47VMWplVhiGENFa3Bl8MtN6A6cosEVsCZF~oosEu4IYdGCxnl69-nex04r6gR3ZoReAVb4ND0084qLGAwKXwNRfJPlT8MlEC1s2CZJArhC6Tw3CKWGQ2wz0Fr9y6xQlBLFXrKTrbMaXcgJps09Yvxi9EZ4zPgKRqg__"
            alt="img"
          />
        </div>
        <p className="font-poppins text-green-700 text-3xl">
          Thank you for choosing Chaperone services. <br /> We will soon get in
          touch with you!
        </p>
        <div className="flex align-middle justify-center my-10">
          <Link to="/" className="focus:outline-none">
            <button
              className="bg-green-700 text-white font-extrabold text-3xl px-20 py-5 my-8"
              type="button"
            >
              Continue Shoping
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Thankyou;
