import React from 'react';
import bg1 from '../../assets/svg (1).png';
import img1 from '../../assets/image1.jpg';
import img2 from '../../assets/image2.jpg';
import img3 from '../../assets/image3.jpg';

const Banner = () => {
    const bgOne = {
        backgroundImage : `url(${bg1})`
    }
    return (
        <div className=''>
        <div style={bgOne} className='px-24 flex gap-12 items-center justify-center  '>
            
            <div className='flex-1 grid gap-4 grid-cols-3 h-full w-full'>
              <div className='col-span-1 row-span-2 h-full w-full'><img src={img1} alt="" className=' h-full w-full'/></div>
              <div className='col-span-2 row-span-4 h-full w-full'><img src={img2} alt="" className=' h-full w-full'/></div>
              <div className='col-span-1 row-span-2 h-full w-full'><img src={img3} alt="" className=' h-full w-full'/></div>
            </div>
            <div className='flex-1 space-y-8'>
                <h1 className='text-6xl text-black font-bold'> Where <span>Fashion</span> Meets Choice</h1>
                <p>Discover Endless Possibilities in Fashion. Welcome to StyleJunction, where your unique style finds its ultimate expression. Explore the latest trends from Nike, Adidas, Gucci, Zara, H&M, Levi's, and more. Your destination for fashion, your canvas for self-expression.</p>
                <button className='bg-[#23856d] text-white px-5 py-2 border-none'>Shop Now</button>
            </div>
        </div>
</div>
    );
};

export default Banner;