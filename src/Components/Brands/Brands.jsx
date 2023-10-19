import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
const Brands = () => {
    const [brands, setBrands] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/brands')
        .then(res => res.json())
        .then(data => setBrands(data))
    }, [])
    

    const navigate = useNavigate();

    console.log(brands);
    return (
        <div>
            <h1>brands : {brands.length}</h1>
            <div className='grid grid-cols-6 gap-2 py-24 items-center justify-center px-24'>
            {
                brands.map(brand =>    
                <div onClick={() => {
                    navigate(`/products/${brand.name}`)
                }}  key={brand._id} className='flex items-center justify-center bg-white drop-shadow-sm hover:drop-shadow-md flex-col py-4 gap-4'>
                    <img src={brand.img} alt="" srcSet="" className='w-16 h-16' />
                    <h1 className='text-xl text-center text-black font-medium'>{brand.name}</h1>
                </div>)
            }
         </div>
        </div>
    );
};

export default Brands;