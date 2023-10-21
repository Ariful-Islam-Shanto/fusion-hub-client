import React, { useContext } from 'react';
import Banner from '../../Components/Banner/Banner';
import Navbar from '../../Components/Navbar/Navbar';
import Brands from '../../Components/Brands/Brands';
import CusReview from '../../Components/Customer Review/CusReview';
import Features from '../../Components/Features/Features';
import Footer from '../../Components/Footer/Footer';
import { AuthContext } from '../../Auth Provider/AuthProvider';

const Home = () => {
    const {modeTheme} = useContext(AuthContext);
    return (
        <div className=' '>
            <div className={`${modeTheme === 'dark' ? '' : 'bg-[#F3F3F3]'}  w-full`}>
            <div className='py-6  '>
            <Navbar className=""></Navbar>
            <Banner></Banner>
            </div>
            </div>
            <Brands></Brands>
            <Features></Features>
            <CusReview></CusReview>
            <Footer></Footer>
        </div>
    );
};

export default Home;