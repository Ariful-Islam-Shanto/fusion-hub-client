import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';

const Features = () => {

    const image1 = "https://i.ibb.co/87dKzqb/Fashion-Image.jpg";
    const image2 = "https://i.ibb.co/LP8xybC/Fashion-Image2.jpg";
    const image3 = "https://i.ibb.co/3pVQFwd/Fashion-Image2.png";
    return (
        <div className='px-24 py-24 space-y-10' >
            <h1 className='text-4xl font-extrabold mb-8 text-gray-800'>NEW ARRIVALS</h1>
            <div className='grid grid-cols-3 gap-8 '>
                <div className='h-[400px]'>
                    <img src={image1} alt="" className='mb-4 h-full w-full'/>
                    <div className='w-full  flex items-center justify-between'>
                        <div>
                    <h1 className='text-gray-800 text-2xl font-medium'>Hoodies & Sweetshirt</h1>
                    <p className='text-gray-600'>Explore Now!</p>
                    </div>
                    <FaArrowRight></FaArrowRight>
                    </div>
                </div>
                <div className='h-[400px]'>
                    <img src={image2} alt=""  className='mb-4 h-full w-full'/>
                    <div className='w-full flex items-center justify-between'>
                    <div>
                    <h1 className='text-gray-800 text-2xl font-medium'>Coats & Parkas</h1>
                    <p className='text-gray-600'>Explore Now!</p>
                    </div>
                    <FaArrowRight></FaArrowRight>
                    </div>
                </div>
                <div className='h-[400px]'>
                    <img src={image3} alt=""  className='mb-4 h-full w-full'/>
                    <div className='w-full flex items-center justify-between'>
                    <div>
                    <h1 className='text-gray-800 text-2xl font-medium'>Tees & T-Shirt</h1>
                    <p className='text-gray-600'>Explore Now!</p>
                    </div>
                    <FaArrowRight></FaArrowRight>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;