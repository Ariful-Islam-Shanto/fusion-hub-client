import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import Product from './Product';
import { Navigation, Pagination, Scrollbar, A11y, FreeMode, Thumbs } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import Navbar from '../../Components/Navbar/Navbar';

const Products = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [products, setProducts] = useState([]);
    const {name} = useParams();

    // console.log(name);
    // useEffect(() => {
    //     fetch(`http://localhost:5000/products/${name}`)
    //     .then(res => res.json())
    //     .then(data => setProducts(data ));
    // },[name])
    useEffect(() => {
        fetch(`http://localhost:5000/brandProducts`)
        .then(res => res.json())
        .then(data => {
            const newData = data.filter(newD => newD.brand.toLowerCase() === name.toLowerCase());
            setProducts(newData || []);
        })
    },[name]);

    console.log(products);
    return (
        <div className='w-full'>


<div className="relative h-[100vh] w-[90vw] mx-auto overflow-hidden">
        <Navbar></Navbar>
      <div className="h-[100vh] w-full" >
        <Swiper
       
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="w-full h-full bg-cover bg-center"
      >
        <SwiperSlide className="bg-cover h-full w-full bg-center">
          <img className="h-full w-full" src={products[0]?.advImage} />
        </SwiperSlide>
        <SwiperSlide  className="bg-cover h-full w-full bg-center">
          <img className="h-full w-full" src={products[1]?.advImage} />
        </SwiperSlide>
        <SwiperSlide  className="bg-cover h-full w-full bg-center">
          <img className="h-full w-full " src={products[2]?.advImage} />
        </SwiperSlide>
     
      </Swiper>
      </div>

      <div className="absolute z-40 bottom-0 right-0">
      <Swiper
        onSwiper={ swiper => setThumbsSwiper(swiper)}
        loop={true}
        spaceBetween={10}
        slidesPerView={3}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="w-[300px] "
      >
        <SwiperSlide>
          <img src={products[0]?.advImage} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={products[1]?.advImage} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={products[2]?.advImage} />
        </SwiperSlide>
        <SwiperSlide>
        </SwiperSlide>
        <SwiperSlide>
        </SwiperSlide>
      
       
      </Swiper>
      </div>

      </div>

<div>


            <div className='grid grid-cols-2 gap-4 py-12 px-24'>
                {
                    products.map(product => <Product key={product._id} product={product}></Product>)
                }
            </div>
            </div>
        </div>
    );
};

export default Products;