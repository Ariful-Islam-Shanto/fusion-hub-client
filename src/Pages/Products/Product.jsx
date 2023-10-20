import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Rating, Typography } from "@mui/material";

const Product = ({ product }) => {
   
  const navigate = useNavigate();
  const { name, img, _id, price, rating, brand, type, details } = product || {};
  
  return (
    <div className="flex h-[400px] md:h-full lg:h-full xl:h-full w-full flex-col items-center justify-between gap-2">
      <img src={img} alt="" className="w-full h-[270px]  xl:h-full" />
      <div className="flex w-full mb-4 items-center justify-between">
        <h1 className="text-2xl md:text-2xl lg:text-xl xl:text-2xl text-black font-bold">
          {name}
        </h1>
        <p className="text-[#c80042] font-bold">{price}</p>
      </div>
      <div className="flex items-center justify-start w-full">
      <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Rating name="read-only" value={rating} readOnly />
    </Box>
    </div>
      <div className="flex w-full mb-2 items-center justify-between">
        <p className="text-gray-700 font-medium"> Brand: {brand}</p>
        <p className="text-gray-700 font-medium"> Type: {type}</p>
      </div>

      <div className="w-full flex justify-between items-center">
        <button
          onClick={() => {
            navigate(`/details/${_id}`);
          }}
          className="px-5 py-2 bg-[#c80042] text-white rounded-md hover:bg-[#ae1246]  hover:text-white "
        >
          View Details
        </button>
        <button
          onClick={() => {
            navigate(`/update/${_id}`);
          }}
          className="px-5 py-2 text-black  rounded-md border-black border-2 hover:text-white hover:bg-black "
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default Product;
