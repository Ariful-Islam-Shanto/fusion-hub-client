import React, { useContext } from "react";
import logo from '../../assets/v1057-element-30.jpg'
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Auth Provider/AuthProvider";

const Navbar = () => {

  const {user, logOut} = useContext(AuthContext);

  const handleLogOut = () => {
    logOut();
  }

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
          <a className="flex items-center gap-2 normal-case text-xl"><img src={logo} alt="" className="w-10"/><p className=""><span className="text-[#a32650] text-bold text-2xl">FUSION</span>HUB</p></a>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1 flex gap-12">
            <NavLink to={'/'}>HOME</NavLink>
            <NavLink to={'/register'}>REGISTER</NavLink>
          {
            user && <>
            <NavLink to={'/addProduct'}>ADD PRODUCT</NavLink>
            <NavLink to={'/myCart'}>MY CART</NavLink>
            </>
          }
            <NavLink to={'/login'}>SIGN IN</NavLink>
          </ul>
        </div>
        <div className="navbar-end">
   
   {
     user ? <><div className='flex flex-col items-center justify-center md:flex-row lg:flex-row xl:flex-row'> 
     <img src={user.photoURL ? user.photoURL : "" } alt="" className="w-10 h-10 rounded-full mr-0 md:mr-4 lg:mr-4 xl:mr-4"/>
     <span className={`${location.pathname === '/' ? 'text-gray-200 '
     : 'text-black'
     } font-bold mr-2 `}>{user.displayName ? user.displayName : user.email}</span> 
     </div>
     <Link to={'/login'} onClick={handleLogOut} className="bg-[#a32650] text-sm  text-white rounded-md py-2 px-4">Signout</Link>
     </>  :
     <Link to={'/login'} className="bg-[#a32650]   text-white rounded-md py-2 px-5">Sign in</Link>
   }
 </div>
      </div>
    </div>
  );
};

export default Navbar;
