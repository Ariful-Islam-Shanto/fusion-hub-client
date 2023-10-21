import React, { useContext } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
import { AuthContext } from '../../Auth Provider/AuthProvider';

const Features = () => {
    const {modeTheme} = useContext(AuthContext);


    const image1 = "https://i.ibb.co/87dKzqb/Fashion-Image.jpg";
    const image2 = "https://i.ibb.co/LP8xybC/Fashion-Image2.jpg";
    const image3 = "https://i.ibb.co/3pVQFwd/Fashion-Image2.png";
    return (
        <div className='px-3 md:px-6 lg:px-12 xl:px-24 py-24 space-y-10' >
            <h1 className={`text-4xl font-extrabold mb-8 ${modeTheme === 'dark' ? 'text-white' : 'text-gray-800'}`}><span className='text-[#ba1f53]'>NEW</span> ARRIVALS</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-24 md:gap-4 lg:gap-8 xl:gap-8 '>
                <div className=' h-[400px]'>
                    <img src={image1} alt="" className='mb-4 h-full md:h-[300px] lg:h-full xl:h-full w-full'/>
                    <div className='w-full  flex items-center justify-between'>
                        <div>
                    <h1 className={`${modeTheme === 'dark' ? 'text-white' : 'text-gray-800'} text-2xl font-medium`}>Hoodies & Sweetshirt</h1>
                    <p className={`${modeTheme === 'dark' ? 'text-white' : 'text-gray-600'}`}>Explore Now!</p>
                    </div>
                    <FaArrowRight className='text-[#ba1f53]'></FaArrowRight>
                    </div>
                </div>
                <div className='h-[400px]'>
                    <img src={image2} alt=""  className='mb-4 h-full md:h-[300px] lg:h-full xl:h-full w-full'/>
                    <div className='w-full flex items-center justify-between'>
                    <div>
                    <h1 className={`${modeTheme === 'dark' ? 'text-white' : 'text-gray-800'} text-2xl font-medium`}>Coats & Parkas</h1>
                    <p className={`${modeTheme === 'dark' ? 'text-white' : 'text-gray-600'} text-2xl font-medium`}>Explore Now!</p>
                    </div>
                    <FaArrowRight className='text-[#ba1f53]'></FaArrowRight>
                    </div>
                </div>
                <div className='h-[400px]'>
                    <img src={image3} alt=""  className='mb-4  h-full md:h-[300px] lg:h-full xl:h-full w-full'/>
                    <div className='w-full flex items-center justify-between'>
                    <div>
                    <h1 className={`${modeTheme === 'dark' ? 'text-white' : 'text-gray-800'} text-2xl font-medium`}>Tees & T-Shirt</h1>
                    <p className={`${modeTheme === 'dark' ? 'text-white' : 'text-gray-600'} text-2xl font-medium`}>Explore Now!</p>
                    </div>
                    <FaArrowRight className='text-[#ba1f53]'></FaArrowRight>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;