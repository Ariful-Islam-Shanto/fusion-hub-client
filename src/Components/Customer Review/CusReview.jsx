import React from 'react';

const CusReview = () => {

    const url = "https://i.ibb.co/X86D9qy/Customer-review.jpg";
    return (
        <div>
        <div className='grid grid-cols-2 px-24 gap-4 items-center justify-center py-12'>
            <div className='flex items-center justify-end'>
            <img src={url} alt="" className='h-[400px] '/>
            </div>
            <div>
            <h1 className='text-4xl mb-3 text-black font-normal leading-10'>“Thank you for all your help. Your Product was excellent and very Fast. Many thanks for you kind and efficient Product. I never try this kind of product and will definitely continue to recommend your Product to others in the future.”</h1>
            <p className='text-sm'><span className='text-black font-medium'>kevin Pietersen</span>, Customer</p>
            </div>
        </div>
        </div>
    );
};

export default CusReview;