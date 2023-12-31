import React, { useContext, useEffect, useState } from "react";
import logo from "../../assets/v1057-element-30.jpg";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Auth Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut, handleMode } = useContext(AuthContext);
  const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light');


  useEffect(() => {
    localStorage.setItem('theme', theme);
    const localTheme = localStorage.getItem('theme');

    document.querySelector('html').setAttribute('data-theme', localTheme);

  },[theme]);

  const handleToggle = e => {
   if(e.target.checked) {

     setTheme('dark')
     handleMode('dark')
   } else {
    setTheme('light')
    handleMode('light')
   }

  }

 

  const handleLogOut = () => {
    logOut();
  };


  return (
    <div className="pb-6 px-3 md:px-6 lg:px-12 xl:px-24 bg-transparent">
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
              className="menu menu-sm dropdown-content mt-3 z-[60] p-2 shadow bg-base-100 rounded-box w-52 bg-transparent backdrop-blur-2xl px-10 py-6 flex gap-8 md:gap-8 lg:gap-6 xl:gap-12"
            >
          
                <NavLink
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "text-xs"
                      : isActive
                      ? "text-xs  text-[#ba1f53]"
                      : `text-xs  ${theme === "dark" ? "text-white" : "text-black"}`
                  }
                  to={"/"}
                >
                  HOME
                </NavLink>
                <NavLink
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "text-xs"
                      : isActive
                      ? "text-xs  text-[#ba1f53]"
                      : `text-xs  ${theme === "dark" ? "text-white" : "text-black"}`
                  }
                  to={"/register"}
                >
                  REGISTER
                </NavLink>
                {user && (
                  <>
                    <NavLink
                      className={({ isActive, isPending }) =>
                        isPending
                          ? "text-xs"
                          : isActive
                          ? "text-xs text-[#ba1f53]"
                          : `text-xs  ${theme === "dark" ? "text-white" : "text-black"}`
                      }
                      to={"/addProduct"}
                    >
                      ADD PRODUCT
                    </NavLink>
                    <NavLink
                      className={({ isActive, isPending }) =>
                        isPending
                          ? "text-xs"
                          : isActive
                          ? "text-xs text-[#ba1f53]"
                          : `text-xs  ${theme === "dark" ? "text-white" : "text-black"}`
                      }
                      to={"/myCart"}
                    >
                      MY CART
                    </NavLink>
                  </>
                )}
                <NavLink
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "text-xs"
                      : isActive
                      ? "text-xs text-[#ba1f53]"
                      : `text-xs  ${theme === "dark" ? "text-white" : "text-black"}`
                  }
                  to={"/login"}
                >
                  SIGN IN
                </NavLink>
    
            </ul>
          </div>
          <a className="flex items-center gap-2 normal-case text-xl">
            <svg className="w-6 md:w-6  lg:w-10 xl:w-10 h-6 md:h-6 lg:h-8 xl:h-8"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="23"
              viewBox="0 0 24 23"
              fill="none"
            >
              <path
                d="M23.3816 2.65212C16.3858 0.165151 8.78173 -0.0402604 1.66188 2.0654C1.37887 2.13313 1.11241 2.25718 0.878411 2.43017C0.64441 2.60315 0.447665 2.82151 0.299923 3.07221C0.152181 3.32292 0.0564718 3.60082 0.0185098 3.88933C-0.0194522 4.17784 0.00111142 4.47105 0.0789728 4.75143C0.468656 6.31529 1.03707 8.11209 1.71974 9.74114C1.73146 9.77923 1.74978 9.76091 1.74978 9.72283C1.65089 8.95884 2.23835 7.99415 3.39055 7.64329C8.92776 5.88105 14.8868 5.95995 20.3755 7.86817C20.5779 7.93741 20.7922 7.96542 21.0056 7.95054C21.2191 7.93566 21.4274 7.87819 21.6182 7.78152C21.8091 7.68485 21.9787 7.55094 22.117 7.38769C22.2553 7.22443 22.3595 7.03514 22.4235 6.83097C23.1062 4.6335 23.3816 3.14143 23.4497 2.76786C23.4614 2.69827 23.3999 2.6719 23.3816 2.65286V2.65212ZM6.50289 7.48654C5.66419 7.66161 4.50466 7.93702 3.63447 8.22562C1.89481 8.82553 1.97538 10.9424 2.90198 11.6178C2.9701 11.2252 3.39055 10.6912 3.85934 10.511C5.59607 9.8283 7.46098 9.42031 9.3464 9.25184C8.38831 8.86288 7.45366 8.30546 6.51534 7.48581L6.50289 7.48654ZM20.352 11.7247C17.8527 10.5504 15.1433 9.88902 12.384 9.77969C9.62473 9.67036 6.87152 10.1153 4.28711 11.0882C3.45867 11.401 2.94007 12.4089 3.45867 13.3655C4.36464 15.0034 5.39279 16.5708 6.53438 18.0541C6.37031 17.4857 6.66037 16.4331 7.77375 16.0889C10.8531 15.1425 14.0841 15.5439 16.2318 16.4134C16.8383 16.6573 17.6968 16.5093 18.178 15.7886C18.9987 14.5243 19.7452 13.2134 20.4136 11.8624C20.4436 11.8016 20.4136 11.7562 20.352 11.7247ZM15.3623 19.3133C14.4615 18.8584 13.6377 18.265 12.9209 17.5546C12.5891 17.2228 12.1006 16.7459 11.5856 16.1775C10.41 16.1775 9.26876 16.2954 8.04844 16.6851C6.91528 17.0396 6.80907 18.3486 7.30496 19.0313C8.14366 20.0765 8.73185 20.6406 9.67016 21.6104C10.1674 22.0981 10.8352 22.3728 11.5317 22.3763C12.2283 22.3797 12.8987 22.1115 13.4007 21.6287C14.1332 20.8962 14.5837 20.4076 15.4114 19.4693C15.4605 19.4195 15.4414 19.3323 15.3616 19.3133H15.3623Z"
                fill={`${theme === 'dark' ? 'white' : "black"}`}
              />
            </svg>
            <p className="font-bold">
              <span className={`${theme === 'dark' ? "text-white" : 'text-[#ba1f53]'} font-extrabold text-sm md:text-2xl lg:text-2xl xl:text-2xl`}>
                FUSION
              </span>
              <span className={`${theme === 'dark' ? 'text-[#ba1f53]' : ''} text-xs md:text-sm lg:text-lg xl:text-xl`}>
              HUB
              </span>
            </p>


            <label className="swap swap-rotate">
  
  {/* this hidden checkbox controls the state */}
  <input type="checkbox" onChange={handleToggle} checked={theme === 'light' ? false : true}/>
  
  {/* sun icon */}
  <svg className="swap-on fill-current w-6 md:w-6  lg:w-10 xl:w-10 h-6 md:h-6 lg:h-8 xl:h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
  
  {/* moon icon */}
  <svg className="swap-off fill-current  w-6 md:w-6  lg:w-10 xl:w-10 h-6 md:h-6 lg:h-8 xl:h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
  
</label>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1 flex lg:gap-6 xl:gap-12">
            <NavLink
              className={({ isActive, isPending }) =>
                isPending
                  ? "text-xs"
                  : isActive
                  ? "text-xs  text-[#ba1f53]"
                  : "text-xs"
              }
              to={"/"}
            >
              HOME
            </NavLink>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending
                  ? "text-xs"
                  : isActive
                  ? "text-xs  text-[#ba1f53]"
                  : "text-xs"
              }
              to={"/register"}
            >
              REGISTER
            </NavLink>
            {user && (
              <>
                <NavLink
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "text-xs"
                      : isActive
                      ? "text-xs text-[#ba1f53]"
                      : "text-xs"
                  }
                  to={"/addProduct"}
                >
                  ADD PRODUCT
                </NavLink>
                <NavLink
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "text-xs"
                      : isActive
                      ? "text-xs text-[#ba1f53]"
                      : "text-xs"
                  }
                  to={"/myCart"}
                >
                  MY CART
                </NavLink>
              </>
            )}
            <NavLink
              className={({ isActive, isPending }) =>
                isPending
                  ? "text-xs"
                  : isActive
                  ? "text-xs text-[#ba1f53]"
                  : "text-xs"
              }
              to={"/login"}
            >
              SIGN IN
            </NavLink>
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <div className="flex flex-col items-center justify-center md:flex-row lg:flex-row xl:flex-row">
                <img
                  src={user.photoURL ? user.photoURL : ""}
                  alt=""
                  className="w-6 md:w-10 lg:w-10 xl:w-10 h-6 md:h-10 lg:h-10 xl:h-10 rounded-full mr-0 md:mr-4 lg:mr-4 xl:mr-4"
                />
                <span
                  className={`${
                    theme === "dark" ? "text-white " : "text-black"
                  } font-bold text-[8px] md:text-xs lg:text-xs xl:text-xs mr-2 `}
                >
                  {user.displayName ? user.displayName : user.email}
                </span>
              </div>
              <Link
                to={"/login"}
                onClick={handleLogOut}
                className="bg-[#ba1f53] text-[10px]  text-white rounded-md py-2 px-4"
              >
                LOGOUT
              </Link>
            </>
          ) : (
            <Link
              to={"/login"}
              className="bg-[#ba1f53]   text-white rounded-md py-2 px-5 text-[10px]"
            >
              LOGIN
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
