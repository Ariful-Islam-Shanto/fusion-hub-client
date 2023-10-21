import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import Navbar from "../../Components/Navbar/Navbar";
import toast from "react-hot-toast";
import { AuthContext } from "../../Auth Provider/AuthProvider";

const Register = () => {
    const {createUser, modeTheme} = useContext(AuthContext);
    const navigate = useNavigate();

   const handleSubmit = e => {
    e.preventDefault();

    const form = new FormData(e.target);

    const name = form.get('name');
    const photo = form.get('photo');
    const email = form.get('email');
    const password = form.get('password');

    if(!name || !email || !password || !photo) {
        return toast.error("Please fill the form correctly.")
    }

    const haveSpecialCharacter = /[\!\@\#\$\%\^\&\*\(\)\_\+\{\}\[\]\:;\<\>,\.\?~\\\-=\|]/.test(password);
    if (!/.{6,}/.test(password)) {
    return toast.error('Password must be 6 characters long.')
    }
    else if(!/(?=.*[A-Z])/.test(password)) {
        return toast.error('Password must contain a uppercase letter.')
    }else if (!haveSpecialCharacter) {
        return toast.error('Password must have a special character.')
    }


    createUser(email, password) 
    .then((res) => {
        
        updateProfile(res.user, {
            displayName: name ,
            photoURL: photo,
        })
        toast.success('Successfully Created account.')
        navigate('/');
    })
    .catch((error) => {
        if(error.message === 'Firebase: Error (auth/email-already-in-use).'){
           return toast.error("You already have an account. Please Login.");
        }
        return toast.error(error.message)

    })
    

   }


  return (
    <div className="w-full h-full py-6">
    <Navbar></Navbar>

    <div className="flex items-center w-full  justify-center py-12">
      <div className="relative px-10 mx-auto flex flex-col rounded-xl bg-transparent bg-clip-border md:3/4 lg:h-3/4 xl:w-2/4 text-gray-700 ">
        <h4 className={`block font-sans mt-6 text-4xl font-bold leading-snug tracking-normal  text-center ${modeTheme === 'dark' ? 'text-white' : "text-black"}  antialiased`}>
          Register your account
        </h4>
        
        <form onSubmit={handleSubmit} className="mt-8 mb-2 w-full p-4">
          <div className="mb-4 flex flex-col gap-6 w-full">
            <div className="relative h-11 w-full min-w-[200px]">
              <input type="text" name="name"
                className={`peer h-full w-full rounded-md ${modeTheme === 'dark' ? 'text-white bg-white border-white' : "text-black border-white"} border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#ba1f53] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50`}
                placeholder=""
              />
              <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#ba1f53] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#ba1f53] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#ba1f53] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Name
              </label>
            </div>
            <div className="relative h-11 w-full min-w-[200px]">
              <input type="text" name="photo"
                className={`peer h-full w-full rounded-md ${modeTheme === 'dark' ? 'text-white bg-white border-white' : "text-black border-white"} border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#ba1f53] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50`}
                placeholder=""
              />
              <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#ba1f53] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#ba1f53] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#ba1f53] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Photo URL
              </label>
            </div>
            <div className="relative h-11 w-full min-w-[200px]">
              <input type="text" name="email"
                className={`peer h-full w-full ${modeTheme === 'dark' ? 'text-white bg-white border-white' : "text-black border-white"} rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#ba1f53] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50`}
                placeholder=""
              />
              <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#ba1f53] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#ba1f53] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#ba1f53] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Email
              </label>
            </div>
            <div className="relative h-11 w-full min-w-[200px]">
              <input
                type="password" name="password"
                className={`peer h-full w-full rounded-md ${modeTheme === 'dark' ? 'text-white bg-white border-white' : "text-black border-white"} border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#ba1f53] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50`}
                placeholder=" "
              />
              <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#ba1f53] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#ba1f53] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#ba1f53] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Password
              </label>
            </div>
          </div>
          <div className="inline-flex items-center">
            <label
              className="relative -ml-2.5 flex cursor-pointer items-center rounded-full p-3"
              htmlFor="checkbox"
              data-ripple-dark="true"
            >
              <input
                type="checkbox" name="terms"
                className={`before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md ${modeTheme === 'dark' ? 'text-white bg-white border-white' : "text-black border-white"} border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-pink-500 checked:bg-pink-500 checked:before:bg-pink-500 hover:before:opacity-10`}
                id="checkbox"
              />
              <span className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3.5 w-3.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-width="1"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </span>
            </label>
            <label
              className="mt-px cursor-pointer select-none font-light text-gray-700"
              htmlFor="checkbox"
            >
              <p className={`flex items-center font-sans text-sm font-normal leading-normal ${modeTheme === 'dark' ? 'text-white ' : "text-black "} text-gray-700 antialiased`}>
                I agree the
                <a
                  className={`font-medium transition-colors hover:text-gray-500 ${modeTheme === 'dark' ? 'text-white ' : "text-black "}`}
                  href="#"
                >
                  &nbsp;Terms and Conditions
                </a>
              </p>
            </label>
          </div>
          <button 
            className="mt-6 block w-full select-none rounded-lg bg-[#ba1f53] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="submit"
            data-ripple-light="true"
          >
            Register
          </button>
          <p className={`mt-4 ${modeTheme === 'dark' ? 'text-white ' : "text-gray-700 "} block text-center font-sans text-base font-normal leading-relaxed  antialiased`}>
            Already have an account?
            <Link to='/login'
              className={`font-medium ${modeTheme === 'dark' ? 'text-white ' : "text-gray-600 "} transition-colors hover:text-blue-700`}
              href="#"
            >
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Register;
