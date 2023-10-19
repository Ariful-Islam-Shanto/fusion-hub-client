import React from 'react';
import {useNavigate} from 'react-router-dom';

const Product = ({product}) => {
    const navigate = useNavigate();
    const {name, img, _id, price, rating, brand, type, details} = product || {};

    return (
        <div  className='flex w-full flex-col items-center justify-between gap-2'>
            <img src={img} alt="" className='w-full'/>
            <div className='flex w-full mb-4 items-center justify-between'>
            <h1 className='text-2xl text-black font-bold'>{name}</h1>
            <p className='text-[#c80042] font-bold'>{price}</p>
            </div>
            <div  className='flex w-full mb-2 items-center justify-between'>
                <p> Brand: {brand}</p>
                <p> Type: {type}</p>
            </div>

            <div className='w-full flex justify-between items-center'>
            <button onClick={() => {
            navigate(`/details/${_id}`)
        }} className='px-5 py-2 border-[#c80042] text-black border-2 rounded-md hover:bg-[#c80042]  hover:border-[#c80042] hover:text-white '>View Details</button>
            <button onClick={() => {
            navigate(`/update/${_id}`)
        }} className='px-5 py-2 text-white none rounded-md bg-[#c80042] hover:text-white '>Update</button>
        </div>
        </div>
    );
};

export default Product;