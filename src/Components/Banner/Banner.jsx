import React from "react";
import bg1 from "../../assets/svg (1).png";
import img1 from "../../assets/image1.jpg";
import img2 from "../../assets/image2.jpg";
import img3 from "../../assets/image3.jpg";

const Banner = () => {
  const url = "https://i.ibb.co/8Xtcfnw/6f5b5dc8c22e32c6a73f9d8f1cf3b2cc.jpg";
  return (
    <div className="">
      <div

        className=" px-3 md:px-6 lg:px-12 xl:px-24 flex flex-col md:flex-row-reverse lg:flex-row-reverse xl:flex-row-reverse gap-12 items-center justify-center h-full md:py-8 lg:py-12 xl:py-12"
      >
        <div className="flex-1 md:h-[450px] lg:h-[500px] xl:h-[500px] w-2/3">
            <img src={url} alt="" className="h-full rounded-md rounded-bl-[50px] w-full"/>
        </div>
       
        <div className="flex-1 flex items-center md:items-start lg:items-start xl:items-start flex-col md:flex-col lg:flex-col xl:flex-col space-y-8">
          <h1 className="text-center md:text-left lg:text-left xl:text-left text-5xl md:text-6xl lg:text-6xl xl:text-6xl text-black font-extrabold">
            {" "}
            LET’S EXPLORE UNIQUE FASHION.
          </h1>
          <p>
          Live for Influential and Innovative fashion!
          </p>
          <button className="bg-[#ba1f53] text-white px-5 py-2 border-none">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
