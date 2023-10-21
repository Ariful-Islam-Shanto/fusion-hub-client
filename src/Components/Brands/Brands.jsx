import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../../Auth Provider/AuthProvider';
const Brands = () => {
    const [brands, setBrands] = useState([]);
    const {modeTheme} = useContext(AuthContext);


    useEffect(() => {
        fetch('https://fusion-hub-server.vercel.app/brands')
        .then(res => res.json())
        .then(data => setBrands(data))
    }, [])
    

    const navigate = useNavigate();

    console.log(brands);
    return (
        <div className=' px-3 md:px-6 lg:px-12 xl:px-24 py-12 space-y-12'>
            <div className='w-2/3 mx-auto space-y-6'>
            <h1 className={`${modeTheme === 'dark' ? 'text-white' : 'text-black'} text-2xl md:text-4xl lg:text-4xl xl:text-4xl text-center  font-extrabold`}>Discover Our Prestigious <span className='text-[#a32650]'>Brand </span>Collaborations.</h1>
            <p className='leading-6 text-center'> Embark on a Journey of Excellence. From Fashion to Technology, Trust in the Best.</p>
            </div>
            <div className={`grid grid-cols-3 gap-[1px]  items-center justify-center ${modeTheme === 'dark' ? '' : 'bg-[#f6eaee]'}`}>
            {
                brands.map(brand =>    
                <div onClick={() => {
                    navigate(`/products/${brand.name}`)
                }}  key={brand._id} className={`${modeTheme === 'dark' ? 'bg-white hover:shadow-md hover:shadow-[#a32650]' : 'bg-white'} flex items-center justify-center  drop-shadow-sm hover:drop-shadow-md flex-col py-4 gap-4`}>
                    <img src={brand.img} alt="" srcSet="" className='w-16 h-16' />
                    <h1 className='text-xl text-center text-black font-medium'>{brand.name}</h1>
                </div>)
            }
         </div>
        </div>
    );
};

export default Brands;