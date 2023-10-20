import React from 'react';

const CusReview = () => {

    const url = "https://i.ibb.co/X86D9qy/Customer-review.jpg";
    return (
        <div className='flex items-center justify-center'>
            <div>
            <img src={url} alt="" />
            </div>
            <div>
            <h1 className='text-4xl text-black font-normal leading-10'>“Thank you for all your help. Your Product was excellent and very Fast. Many thanks for you kind and efficient Product. I never try this kind of product and will definitely continue to recommend your Product to others in the future.”</h1>
            <p className='text-sm'>kevin Pietersen, Customer</p>
            </div>
        </div>
    );
};

export default CusReview;