import React from 'react';
import {useNavigate} from 'react-router-dom';

const Product = ({product}) => {
    const navigate = useNavigate();
    const {name, img, _id, price, rating, brand, type, details} = product || {};

    return (
        <div  className='flex w-full flex-col items-center justify-between gap-2 space-y-4'>
            <img src={img} alt="" className='w-full'/>
            <div className='flex w-full items-center justify-between'>
            <h1 className='text-2xl text-black font-bold'>{name}</h1>
            <p>{price}</p>
            </div>
            <div  className='flex w-full items-center justify-between'>
                <p> Brand: {brand}</p>
                <p> Type: {type}</p>
            </div>
            <div className='w-full'>
            <p className='text-left'>{details?.slice(0, 70)}</p>
            </div>
            <div className='w-full'>
            <button onClick={() => {
            navigate(`/details/${_id}`)
        }} className='px-5 py-2 border-emerald-800 text-black border-2 rounded-md hover:bg-emerald-500 hover:border-emerald-500 hover:text-white '>View Details</button>
        </div>
        </div>
    );
};

export default Product;