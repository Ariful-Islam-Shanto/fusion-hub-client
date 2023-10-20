import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Navbar from '../../Components/Navbar/Navbar';
import Brands from '../../Components/Brands/Brands';

const Home = () => {
    return (
        <div>
            <div className='py-6 '>
            <Navbar className=""></Navbar>
            <Banner></Banner>
            </div>
            <Brands></Brands>
        </div>
    );
};

export default Home;