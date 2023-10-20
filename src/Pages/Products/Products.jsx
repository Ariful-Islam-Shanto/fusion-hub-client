import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "./Product";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  FreeMode,
  Thumbs,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import Navbar from "../../Components/Navbar/Navbar";

const Products = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true)
  const { name } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/brandProducts`)
      .then((res) => res.json())
      .then((data) => {
        setLoading(true)
        const newData = data.filter(
          (newD) => newD.brand.toLowerCase() === name.toLowerCase()
        );
        setProducts(newData || []);
        setLoading(false);
      });
  }, [name]);

  return (
    <div className="w-full">
        <div className="py-6">
          <Navbar></Navbar>

        { loading ? 
        <div className="flex items-center justify-center h-[100vh]">
        <span className="loading text-center loading-spinner loading-lg"></span> 
        </div>
        :
          <div>
            {
                products.length <= 0 ? 
                
                <div className="h-[80vh] flex items-center justify-center flex-col space-y-6">
                    <img src='https://i.ibb.co/tKT2fjC/26690-removebg-preview-1.png' alt="" className="mb-2"/>
                    <div className="w-2/3">
                    <h1 className="text-5xl text-center mb-6 text-black font-bold ">Discover Our Leading <span className="text-[#ba1f53]">Brand</span> Partners</h1>
                    <p className="text-gray text-2xl text-center uppercase leading-7">
                    At this brand, we're committed to excellence. While we're in the process of bringing you exceptional products from all our brand partners, brand is getting ready to unveil something special. Stay tuned for updates and be the first to experience their exclusive offerings.
                    </p>
                    </div>
                </div>
           
        :
      <>
      <div className="relative h-[40vh] md:h-[70vh] lg:h-[70vh] xl:h-[80vh] mx-auto px-3 md:px-6 lg:px-12 xl:px-24 overflow-hidden">
        <div className="relative h-[40vh] md:h-[70vh] lg:h-[70vh] xl:h-[80vh]">
        <div className="h-[40vh] md:h-[70vh] lg:h-[70vh] xl:h-[80vh]  w-full">
          <Swiper
            loop={true}
            spaceBetween={10}
            navigation={true}
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="w-full h-full bg-cover bg-center"
          >
            <SwiperSlide className="bg-cover h-full w-full bg-center">
              <img className="h-full w-full" src={products[0]?.advImage} />
            </SwiperSlide>
            <SwiperSlide className="bg-cover h-full w-full bg-center">
              <img className="h-full w-full" src={products[1]?.advImage} />
            </SwiperSlide>
            <SwiperSlide className="bg-cover h-full w-full bg-center">
              <img className="h-full w-full " src={products[2]?.advImage} />
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="absolute z-40 bottom-4 right-[12%] md:right-4 lg:right-4 xl:right-4">
          <Swiper
            onSwiper={(swiper) => setThumbsSwiper(swiper)}
            loop={true}
            spaceBetween={10}
            slidesPerView={3}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="w-[300px]"
          >
            <SwiperSlide>
              <img src={products[0]?.advImage} className="h-12 w-full"/>
            </SwiperSlide>
            <SwiperSlide>
              <img src={products[1]?.advImage} className="h-12 w-full"/>
            </SwiperSlide>
            <SwiperSlide>
              <img src={products[2]?.advImage} className="h-12 w-full"/>
            </SwiperSlide>
            <SwiperSlide></SwiperSlide>
            <SwiperSlide></SwiperSlide>
          </Swiper>
        </div>
        </div>
      </div>

      <div className="py-24">
      <h1 className='text-2xl md:text-4xl lg:text-4xl xl:text-4xl text-center text-black font-extrabold py-6 pt-12'>Available products from<span className='text-[#a32650]'>{products[0]?.brand}</span></h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-12 md:gap-4 lg:gap-4 xl:gap-4 py-12 px-3 md:px-6 lg:px-12 xl:px-24 ">
          {products?.map((product) => (
            <Product key={product._id} product={product}></Product>
          ))}
        </div>
      </div>
      </>
       }
  </div>
}
      </div>
    </div>
  );
};

export default Products;
