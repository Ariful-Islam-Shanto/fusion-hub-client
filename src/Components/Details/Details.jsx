import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch("http://localhost:5000/brandProducts")
      .then((res) => res.json())
      .then((data) => {
        const details = data.find((newData) => newData._id === id);
        setProduct(details);
      });
  }, [id]);

  const { img, brand, type, price, name, details } = product || {};

  const handleAddToCart = () => {
    fetch('/cart', {
        method: "POST",
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(product)
    })
  }

  console.log(id);
  return (
    <div className="w-full h-100vh">
      <div className="flex w-full  h-[100vh] items-center justify-between gap-2">
        <div className="w-full h-[80vh] my-auto flex-1">
        <img src={img} alt="" className="w-full h-full hover:-translate-y-3 transition-all ease-in-out rounded-md drop-shadow-md hover:drop-shadow-lg" />
        </div>
        <div className="flex-1 space-y-2">
          <div className="flex gap-6 flex-col w-full items-left justify-between">
            <h1 className="text-6xl text-black font-bold">{name}</h1>
            <p className="text-2xl font-medium">{price}</p>
          </div>
          <div className="flex flex-col gap-6  w-full items-left justify-between">
            <p> Brand: {brand}</p>
            <p> Type: {type}</p>
          </div>
          <p>{details}</p>
          <div className='w-full'>
            <button onClick={handleAddToCart}  className='px-5 py-2 bg-emerald-700 rounded-md hover:bg-emerald-700 hover:text-white text-white '>Add to cart</button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
