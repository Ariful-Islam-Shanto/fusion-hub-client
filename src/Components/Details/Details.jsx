import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import swal from 'sweetalert';

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

    const cartData = {img, brand, type, price, name, details};

    fetch('http://localhost:5000/cart', {
        method: "POST",
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(cartData)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if(data.insertedId) {
            swal("Good job!", "Successfully Added to cart!", "success");
        }
    })
  }

  console.log(id);
  return (
    <div className="w-full h-100vh">
      <div className="flex w-[80vw] mx-auto h-[100vh] items-center justify-between gap-4">
        <div className="w-full h-[80vh] my-auto flex-1">
        <img src={img} alt="" className="w-full h-full hover:-translate-y-3 transition-all ease-in-out rounded-md drop-shadow-md hover:drop-shadow-lg" />
        </div>
        <div className="flex-1 space-y-2">
          <div className="flex gap-6 flex-col w-full items-left justify-between">
            <h1 className="text-6xl text-black font-bold">{name}</h1>
            <p className="text-2xl font-medium text-[#c80042]">{price}</p>
          </div>
          <div className="flex flex-col gap-6  w-full items-left justify-between">
            <p> Brand: {brand}</p>
            <p> Type: {type}</p>
          </div>
          <p className="text-gray-600 font-medium tracking-wider">{details}</p>
          <div className='w-full'>
            <button onClick={handleAddToCart}  className='px-7 py-2 border-2 border-black rounded-sm hover:bg-black text-black hover:text-white '>Add to cart</button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
