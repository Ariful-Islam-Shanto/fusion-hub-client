import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Navbar from '../../Components/Navbar/Navbar';
import Brands from '../../Components/Brands/Brands';
import CusReview from '../../Components/Customer Review/CusReview';
import Features from '../../Components/Features/Features';

const Home = () => {
    return (
        <div className='px-24 bg-[#F3F3F3]'>
            <div className='py-6  '>
            <Navbar className=""></Navbar>
            <Banner></Banner>
            </div>
            <Brands></Brands>
            <Features></Features>
            <CusReview></CusReview>
            
        </div>
    );
};

export default Home;