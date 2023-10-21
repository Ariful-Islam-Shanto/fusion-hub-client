import { sendPasswordResetEmail } from 'firebase/auth';
import React, { useContext, useRef } from 'react';
import toast from 'react-hot-toast';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import { FaFacebook, FaGoogle } from 'react-icons/fa6';
import auth from '../../Firebase/firebase.config';
import { AuthContext } from '../../Auth Provider/AuthProvider';

const Login = () => {
    const {userLogIn, googleLogin, facebookLogin} = useContext(AuthContext);
    const navigate = useNavigate();
    const emailRef = useRef();
    const handleLogIn = e => {
        e.preventDefault();
        
        const form = new FormData(e.target);
        const email = form.get('email')
        const password = form.get('password');
      
        userLogIn(email, password) 
        .then(res => {
            toast.success('Successfully Logged in.')
            navigate('/');
            // Navigate(location?.state ? location.state : '/');
        })
        .catch(err => {
          if(err.message === 'Firebase: Error (auth/invalid-login-credentials).') {
            toast.error('Login Failed: The username or password you entered is incorrect')
          }else{

            toast.error(err.message);
          }
        });
        
    }

    const handleGoogleLogin = () => {
         googleLogin()
         .then(() => {
          toast.success('Successfully logged in.');
         })
         .catch((error) => {
          toast.error(error.message);
         })
    }


    //? Handle user forget password
    const handleForgetPassword = () => {
        const email = emailRef.current.value;
        //? Now validate the email if user do not give any email or a wrong email.
        if(!email) {
            toast.error('Please give an email.');
            return
        }else if(!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email)) {
            toast.error('Please give an valid email address.')
            return;
        }

        //? If the email is valid then give user the reset email.
        sendPasswordResetEmail(auth, email)
        .then(() => {
            toast.success("Please check inbox for email.")
        })
        .catch(err => {
            toast.error(err.message);
        })
    }


    const bg = {
        backgroundImage : `url('https://i.ibb.co/tYpncR2/3907317.jpg')`
    }


  return (
    < div className=' py-6'>
    <Navbar></Navbar>
    <div  className="  px-3  md:px-6 lg:px-12 xl:px24 py-12">
        {/* <div className='flex-1'>
            <img src="https://i.ibb.co/tYpncR2/3907317.jpg" alt="" />
        </div> */}
    <div style={bg} className="relative rounded-md bg-cover flex-1 flex w-full md:w-full lg:w-3/5 xl:w-2/5 flex-col mx-auto text-gray-700">
   
    <div className=' mx-auto w-full h-full rounded-lg bg-transparent backdrop-blur-2xl'>
      <h1 className="text-4xl text-center text-gray-800 font-bold py-8 pb-6 ">Login your account</h1>
      <form onSubmit={handleLogIn}>
      <div className="flex flex-col gap-4 p-6">
        <div className="relative h-11 w-full min-w-[200px]">
          <input ref={emailRef}
            type="text" name="email"
            className="peer h-full w-full rounded-md border border-blue-500 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-500 placeholder-shown:border-t-blue-500 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
            placeholder=" "
          />
          <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
            Email
          </label>
        </div>
        <div className="relative h-11 w-full min-w-[200px]">
          <input
          type="password" name="password"
            className="peer h-full w-full rounded-md border border-blue-500 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-500 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
            placeholder=" "
          />
          <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-blue-500 after:peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
            Password
          </label>
        </div>
        
      </div>
      <p onClick={handleForgetPassword} className="text-gray-400 p-6 ">Forget password?</p>
      <div className="p-6 pt-0">
        <button 
          className="block w-full select-none rounded-lg bg-blue-400 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="submit"
          data-ripple-light="true"
        >
          Sign In
        </button>
        <div className=''>
        <p className='text-center my-6'>
          or Sign in with
        </p>
        <div className='flex  items-center justify-center gap-4'>
        <button onClick={handleGoogleLogin} className='bg-white px-5 py-2 flex gap-2 items-center justify-center drop-shadow-md rounded-xl'>
          <FaGoogle></FaGoogle> <span>Google</span>
        </button>
       
        </div>
        </div>
        <p className="mt-6 flex justify-center font-sans text-sm font-light leading-normal text-inherit antialiased">
          Don't have an account?
          <Link to={'/register'}
            href="#signup"
            className="ml-1 block font-sans text-sm font-bold leading-normal hover:text-blue-700 text-gray-700 antialiased"
          >
            Sign up
          </Link>
        </p>
      </div>
      </form>
      </div>
    </div>
  </div>
  </div>
  );
};

export default Login;
