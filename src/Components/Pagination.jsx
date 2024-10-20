/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const Pagination = (props) => {
  const loadMore = props.loadMore;
  return (
    <div className="flex justify-center mt-4">
      <button
        onClick={loadMore}
        className="px-8 py-1.5 bg-green-600 text-white  rounded-full"
      >
        View More
      </button>
    </div>
  );
};
export default Pagination;
