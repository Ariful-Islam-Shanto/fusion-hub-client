import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import swal from 'sweetalert';
import Navbar from "../Navbar/Navbar";
import { AuthContext } from "../../Auth Provider/AuthProvider";

const Details = () => {
  const {user, modeTheme} = useContext(AuthContext);
  const email = user.email;
  const [product, setProduct] = useState([]);
  const { id } = useParams();


  useEffect(() => {
    fetch(`https://fusion-hub-server.vercel.app/brandProductss/${id}`)
      .then((res) => res.json())
      .then((data) => {
        // const details = data.find((newData) => newData._id === id);
        // setProduct(details);
        setProduct(data || {});
        console.log(data);
      });
  }, [id]);

  const { img, brand, type, price, name, details } = product || {};

  const handleAddToCart = () => {

    const cartData = {img, brand, type, price, name, details, email};

    fetch('https://fusion-hub-server.vercel.app/cart', {
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

  return (
    <div className="w-full h-full">
        <div className="py-6">
        <Navbar ></Navbar>
        </div>
      <div className="flex flex-col md:flex-col lg:flex-row xl:flex-row px-3 md:px-6 lg:px-12 xl:px-24 mx-auto h-[80vh]  items-end justify-between gap-4 pb-12">
        <div className="w-full h-full my-auto flex-1">
        <img src={img} alt="" className="w-full h-full hover:-translate-y-3 transition-all ease-in-out rounded-md drop-shadow-md hover:drop-shadow-lg" />
        </div>
        <div className="flex-1 space-y-6 ">
          <div className="flex gap-8 flex-col w-full items-left justify-between">
            <h1 className={`text-4xl text-center md:text-left lg:text-left xl:text-left md:text-5xl lg:text-4xl xl:text-5xl ${modeTheme === 'dark' ? 'text-white' : 'text-black'} font-bold`}>{name}</h1>
            <p className="text-2xl text-center md:text-left lg:text-left xl:text-left font-medium text-[#c80042]">Price:{price}</p>
          </div>
          <div className="flex flex-col w-full mb-6  items-left justify-between">
            <p className={`text-2xl text-center md:text-left lg:text-left xl:text-left ${modeTheme === 'dark' ? 'text-white' : 'text-black'}  font-bold`}> Brand: {brand}</p>
            <p className={`text-2xl text-center md:text-left lg:text-left xl:text-left ${modeTheme === 'dark' ? 'text-white' : 'text-gray-700'}  font-bold`}> Type: {type}</p>
          </div>
          <p className={`${modeTheme === 'dark' ? 'text-white' : 'text-gray-600'}  text-2xl text-center md:text-left lg:text-left xl:text-left  font-medium   md:tracking-wide lg:tracking-wider xl:tracking-widest lg:leading-6 xl:leading-8`}>{details}</p>
          <div className='w-full flex items-center justify-center md:justify-start lg:justify-start xl:justify-start'>
            <button onClick={handleAddToCart}  className={`px-7 py-2 border-2 ${modeTheme === 'dark' ? 'text-white border-white hover:bg-white hover:text-black' : 'text-black border-black hover:bg-black hover:text-white'}  rounded-sm    `}>Add to cart</button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
