import React from 'react';

const Product = ({product}) => {

    const {name, img, _id, price, rating, brand, type, details} = product || {};

    return (
        <div className='flex w-full flex-col items-center justify-between gap-2'>
            <img src={img} alt="" className='w-full'/>
            <div className='flex w-full items-center justify-between'>
            <h1 className='text-2xl text-black font-bold'>{name}</h1>
            <p>{price}</p>
            </div>
            <div  className='flex w-full items-center justify-between'>
                <p> Brand: {brand}</p>
                <p> Type: {type}</p>
            </div>
        </div>
    );
};

export default Product;