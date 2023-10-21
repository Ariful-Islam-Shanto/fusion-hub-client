import React, { useContext, useEffect, useState } from "react";
import Product from "../Products/Product";
import Navbar from "../../Components/Navbar/Navbar";
import { FaCross, FaDeleteLeft } from "react-icons/fa6";
import { AuthContext } from "../../Auth Provider/AuthProvider";
import Footer from "../../Components/Footer/Footer";

const MyCart = () => {
  const {user, modeTheme} = useContext(AuthContext);
  const email = user.email;
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch(`https://fusion-hub-server.vercel.app/cart/${email}`)
      .then((res) => res.json())
      .then((data) => setCart(data));
  }, [email]);

  const handleDelete = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`https://fusion-hub-server.vercel.app/delete/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
                swal("Poof! Your product has been deleted!", {
                    icon: "success",
                  });

                  const remaining = cart.filter(newCart => newCart._id !== id);
                  setCart(remaining);
            }
          });
   
      } else {
        swal("Your product is safe!");
      }
    });
  };

  return (
    <div className=" mx-auto py-6">
      <Navbar></Navbar>
      <div className="grid grid-cols-1 px-3 md:px-6 lg:px-12 xl:px-24  py-12 gap-6">
      <h1 className={`text-2xl md:text-4xl lg:text-4xl xl:text-4xl text-center k ${modeTheme === 'dark' ? 'text-white ' : "text-black "} font-extrabold py-6`}>My Shopping Cart</h1>
        <div className="overflow-x-auto ">
          <table className="table">
            {/* head */}
            <thead className="flex-1">
              <tr>
               
                <th className={`text-xl ${modeTheme === 'dark' ? 'text-white' : 'text-gray-700'}  font-bold`}>Image</th>
                <th className={`text-xl ${modeTheme === 'dark' ? 'text-white' : 'text-gray-700'}  font-bold`}>Name</th>
                <th className={`text-xl ${modeTheme === 'dark' ? 'text-white' : 'text-gray-700'}  font-bold`}>Brand</th>
                <th className={`text-xl ${modeTheme === 'dark' ? 'text-white' : 'text-gray-700'}  font-bold`}>Action</th>
              
              </tr>
            </thead>
            {cart?.map((singleCart) => (
              <tbody key={singleCart._id} className="">
                {/* row 1 */}
                <tr>
                 
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={singleCart?.img}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className={` ${modeTheme === 'dark' ? 'text-white' : 'text-black'} font-medium`}>
                    {singleCart?.name}
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      {singleCart?.type}
                    </span>
                  </td>
                  <td className={` ${modeTheme === 'dark' ? 'text-white' : 'text-black'} font-medium`}>{singleCart.brand}</td>
                  <th>
                    <button
                      onClick={() => {
                        handleDelete(singleCart._id);
                      }}
                      className="btn"
                    >
                      <FaDeleteLeft className=" text-xl"></FaDeleteLeft>
                    </button>
                  </th>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MyCart;
