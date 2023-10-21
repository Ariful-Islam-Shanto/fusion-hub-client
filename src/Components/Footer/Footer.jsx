import React, { useContext } from 'react';
import { AuthContext } from '../../Auth Provider/AuthProvider';

const Footer = () => {
  const {modeTheme} = useContext(AuthContext);

    return (
        <div className={`px-3 md:px-6 lg:px-12 xl:px-24 py-6 ${modeTheme === 'dark' ? '' : 'bg-[#F0F0F0]'}`}>
        <footer className="footer p-10 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4  text-base-content">
  <aside className='space-y-4'>
  <svg xmlns="http://www.w3.org/2000/svg" width="44" height="36" viewBox="0 0 24 23" fill="none">
  <path d="M23.3816 2.65212C16.3858 0.165151 8.78173 -0.0402604 1.66188 2.0654C1.37887 2.13313 1.11241 2.25718 0.878411 2.43017C0.64441 2.60315 0.447665 2.82151 0.299923 3.07221C0.152181 3.32292 0.0564718 3.60082 0.0185098 3.88933C-0.0194522 4.17784 0.00111142 4.47105 0.0789728 4.75143C0.468656 6.31529 1.03707 8.11209 1.71974 9.74114C1.73146 9.77923 1.74978 9.76091 1.74978 9.72283C1.65089 8.95884 2.23835 7.99415 3.39055 7.64329C8.92776 5.88105 14.8868 5.95995 20.3755 7.86817C20.5779 7.93741 20.7922 7.96542 21.0056 7.95054C21.2191 7.93566 21.4274 7.87819 21.6182 7.78152C21.8091 7.68485 21.9787 7.55094 22.117 7.38769C22.2553 7.22443 22.3595 7.03514 22.4235 6.83097C23.1062 4.6335 23.3816 3.14143 23.4497 2.76786C23.4614 2.69827 23.3999 2.6719 23.3816 2.65286V2.65212ZM6.50289 7.48654C5.66419 7.66161 4.50466 7.93702 3.63447 8.22562C1.89481 8.82553 1.97538 10.9424 2.90198 11.6178C2.9701 11.2252 3.39055 10.6912 3.85934 10.511C5.59607 9.8283 7.46098 9.42031 9.3464 9.25184C8.38831 8.86288 7.45366 8.30546 6.51534 7.48581L6.50289 7.48654ZM20.352 11.7247C17.8527 10.5504 15.1433 9.88902 12.384 9.77969C9.62473 9.67036 6.87152 10.1153 4.28711 11.0882C3.45867 11.401 2.94007 12.4089 3.45867 13.3655C4.36464 15.0034 5.39279 16.5708 6.53438 18.0541C6.37031 17.4857 6.66037 16.4331 7.77375 16.0889C10.8531 15.1425 14.0841 15.5439 16.2318 16.4134C16.8383 16.6573 17.6968 16.5093 18.178 15.7886C18.9987 14.5243 19.7452 13.2134 20.4136 11.8624C20.4436 11.8016 20.4136 11.7562 20.352 11.7247ZM15.3623 19.3133C14.4615 18.8584 13.6377 18.265 12.9209 17.5546C12.5891 17.2228 12.1006 16.7459 11.5856 16.1775C10.41 16.1775 9.26876 16.2954 8.04844 16.6851C6.91528 17.0396 6.80907 18.3486 7.30496 19.0313C8.14366 20.0765 8.73185 20.6406 9.67016 21.6104C10.1674 22.0981 10.8352 22.3728 11.5317 22.3763C12.2283 22.3797 12.8987 22.1115 13.4007 21.6287C14.1332 20.8962 14.5837 20.4076 15.4114 19.4693C15.4605 19.4195 15.4414 19.3323 15.3616 19.3133H15.3623Z" fill={`${modeTheme === 'dark' ? 'white' : "black"}`}/>
</svg>
    <p>FUSIONHUB<br/>Providing reliable fashion since 1992</p>
  </aside> 
  <nav>
    <header className="footer-title">Services</header> 
    <a className="link link-hover">Branding</a> 
    <a className="link link-hover">Design</a> 
    <a className="link link-hover">Marketing</a> 
    <a className="link link-hover">Advertisement</a>
  </nav> 
  <nav>
    <header className="footer-title">Company</header> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Jobs</a> 
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <header className="footer-title">Legal</header> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
</div>
    );
};

export default Footer;