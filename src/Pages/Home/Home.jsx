import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Navbar from '../../Components/Navbar/Navbar';

const Home = () => {
    return (
        <div>
            <div className='py-6'>
            <Navbar></Navbar>
            <Banner></Banner>
            </div>
        </div>
    );
};

export default Home;