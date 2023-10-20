import React from 'react';

const CusReview = () => {

    const url = "https://i.ibb.co/X86D9qy/Customer-review.jpg";
    return (
        <div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2  px-3 md:px-6 lg:px-12 xl:px-24 gap-4 items-center justify-center py-12'>
            <div className='flex items-center justify-end'>
            <img src={url} alt="" className='h-full md:h-[400px] lg:h-[400px] xl:h-[400px] '/>
            </div>
            <div className= 'w-full lg:w-3/4 xl:w-2/3'>
            <h1 className='text-3xl text-center md:text-left lg:text-left xl:text-left md:text-3xl lg:text-3xl xl:text-[32px] mb-3 text-black font-normal leading-10'>“Thank you for all your help. Your <span className='text-[#ba1f53]'>Product</span> was excellent and very Fast. Many thanks for you kind and efficient <span className='text-[#ba1f53]'>Product</span>. I never try this kind of product and will definitely continue to recommend your <span className='text-[#ba1f53] '>Product</span> to others in the future.”</h1>
            <p className='text-sm text-center md:text-left lg:text-left xl:text-left'><span className='text-black font-medium'>kevin Pietersen</span>, Customer</p>
            </div>
        </div>
        </div>
    );
};

export default CusReview;