import React from 'react';
import {useNavigate} from 'react-router-dom';

const Error = () => {

    const navigate = useNavigate();

    return (
        <div className='w-full h-[100vh] flex flex-col items-center justify-center'>
            <img src="https://i.ibb.co/bHYKS8y/3747371-removebg-preview.png" alt="" />
            <h1 className='text-4xl mb-6 text-black font-extrabold'>Page not found</h1>
            <button onClick={() => {
                navigate('/');
            }} className='px-5 py-2 rounded-md bg-black text-white border-none'>Go Home</button>
        </div>
    );
};

export default Error;