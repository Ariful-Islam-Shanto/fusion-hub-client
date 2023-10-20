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

        className="px-24 flex flex-row-reverse gap-12 items-center justify-center h-full py-6"
      >
        <div className="flex-1 h-[500px] w-2/3">
            <img src={url} alt="" className="h-full rounded-md rounded-bl-[50px] w-full"/>
        </div>
        {/* <div className="flex-1 grid gap-4 grid-cols-3 h-full w-full">
          <div className="col-span-1 row-span-2 h-full w-full">
            <img src={img1} alt="" className=" h-full w-full" />
          </div>
          <div className="col-span-2 row-span-4 h-full w-full">
            <img src={img2} alt="" className=" h-full w-full" />
          </div>
          <div className="col-span-1 row-span-2 h-full w-full">
            <img src={img3} alt="" className=" h-full w-full" />
          </div>
        </div> */}
        <div className="flex-1 space-y-8">
          <h1 className="text-6xl text-black font-extrabold">
            {" "}
            LET’S EXPLORE UNIQUE CLOTHES.
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
