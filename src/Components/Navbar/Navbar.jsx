import React from "react";
import logo from '../../assets/v1057-element-30.jpg'
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="pb-6 px-24 bg-transparent">
      <div className="navbar ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <a className="flex items-center gap-2 normal-case text-xl"><img src={logo} alt="" className="w-10"/><span>FusionHub</span></a>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1 flex gap-12">
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/register'}>Register</NavLink>
            <NavLink to={'/addProduct'}>Add Product</NavLink>
            <NavLink to={'/login'}>Sign in</NavLink>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn bg-[#52b788] text-white"  >Sign in</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
