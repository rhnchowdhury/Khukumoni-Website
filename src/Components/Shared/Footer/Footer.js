import React from 'react';
import logo from '../../../assets/logos/khukumoni logo.png';
import { Link } from 'react-router-dom';
import './Footer.css';
import { BsFacebook, BsInstagram, BsPinterest } from 'react-icons/bs';
import { FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='mt-8'>
            <footer className="footer p-10 bg-[#18214E]  text-white">
                {/* <aside >
                    <img src={logo} alt="" className='w-4 h-44 e' />
                </aside> */}
                <nav >
                    <img src={logo} alt="" className='w-60 h-60' />
                </nav>
                <nav className='text-xl font-semibold ml-16 relative'>
                    <Link to='/'>Home</Link>
                    <Link to='/about'>About Us</Link>
                    <Link to='/program'>Our Program</Link>
                    <Link>Be a Volunteer</Link>
                    <Link>News</Link>
                    <Link>Contact</Link>
                </nav>
                <nav className='relative flex items-end top-12 left-20'>
                    <button className='text-white text-xl font-bold py-3 px-6 footer-btn'>Donate Now</button>
                    <div className=" top-24 absolute">
                        <button className="flex text-white space-x-5 bg-[#24316B] absolute py-[22px] px-5">
                            <BsInstagram className='nav-icon'></BsInstagram>
                            <BsFacebook className='nav-icon'></BsFacebook>
                            <FaTwitter className='nav-icon'></FaTwitter>
                            <BsPinterest className='nav-icon'></BsPinterest>
                        </button>
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;