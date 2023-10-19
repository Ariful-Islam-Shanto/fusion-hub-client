import React, { useEffect, useState } from 'react';
import Product from '../Products/Product';
import Navbar from '../../Components/Navbar/Navbar';

const MyCart = () => {

    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/cart')
        .then(res => res.json())
        .then(data => setCart(data))
    })

    return (
        <div className='max-w-screen-xl'>
            <Navbar></Navbar>
            <div className='grid grid-cols-1  py-12 gap-6'>
                        <div className="overflow-x-auto">
  <table  className="table" >
    {/* head */}
    <thead className='flex-1'>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Brand</th>
        <th>Type</th>
        <th></th>
      </tr>
    </thead>
    { cart?.map(singleCart =>  
    <tbody key={singleCart._id} className=''>
      {/* row 1 */}
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={singleCart?.img} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
          </div>
        </td>
        <td className=''>
         {singleCart?.brand}
          <br/>
          <span className="badge badge-ghost badge-sm">{singleCart?.type}</span>
        </td>
        <td>{singleCart.type}</td>
        <th>
          <button className="btn btn-ghost btn-xs">Delete</button>
        </th>
      </tr>
    </tbody>
    )}
  </table>
</div>
           
            </div>
        </div>
    );
};

export default MyCart;