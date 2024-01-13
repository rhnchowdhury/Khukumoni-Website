import React from 'react';
import { BsFacebook, BsFillTelephoneFill, BsInstagram } from "react-icons/bs";
import { IoLogoYoutube, IoMailSharp } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import logo from '../../../assets/logos/head-logo.png';
import Menu from '../Menus/Menu';
import './NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <div className='lg:hidden block'>
                {/* lg:hidden block */}
                <Menu></Menu>
            </div>
            <div className="navbar hidden lg:flex bg-[#4268B1] relative">
                {/* hidden lg:flex */}
                <div className="navbar-start ml-8">
                    {/* <p className='text-white'></p> */}
                    <a href="tel:+8801755744312" className='text-white flex font-bold'><span className='mt-1 mr-1 '><BsFillTelephoneFill></BsFillTelephoneFill></span>+8801755744312</a>
                </div>
                <div className="navbar-center">
                    <Link to='https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=foundationkhukumoni@gmail.com' target='_blank'><span className='text-white flex font-bold '><IoMailSharp className='mt-1 mr-1'></IoMailSharp>foundationkhukumoni@gmail.com</span></Link>
                    {/* <p className='text-white flex'><span className='mt-1 mr-2'><IoMailSharp></IoMailSharp></span>foundationkhukumoni@gmail.com</p> */}
                </div>
                <div className="navbar-end mr-8 ">
                    <button className="flex text-white space-x-5 bg-[#24316B] absolute py-[22px] px-5">
                        <a href="https://www.instagram.com/khukumonifoundation" target="_blank" rel="noreferrer noopener"><BsInstagram className='nav-icon'></BsInstagram></a>
                        <a href="https://www.facebook.com/khukumonifoundation" target="_blank" rel="noreferrer noopener"><BsFacebook className='nav-icon'></BsFacebook></a>
                        <a href="https://www.youtube.com/@KhukumoniFoundation-kc1uq" target="_blank" rel="noreferrer noopener"><IoLogoYoutube className='nav-icon' /></a>
                        <a href="https://www.linkedin.com/in/khukumoni-foundation-21041a192/" target="_blank" rel="noreferrer noopener"><FaLinkedin className='nav-icon'></FaLinkedin></a>
                    </button>
                </div>
            </div>
            <div className='flex justify-center mt-8'>
                <div className='relative'>
                    <img src={logo} alt="khukumoni" className='w-[500px]' />
                </div>
                <div className='nav-reg-responsive'>
                    <div className='ml-[165px] absolute '>
                        <Link to='/signin'><button className="nav-btn-style px-3 py-1">Sign Up</button></Link>
                        <Link to='/login'><button className="nav-btn-style ml-4 px-4 py-1 ">Log In</button></Link>
                    </div>
                </div>
            </div>
            <div className='lg:block hidden'>
                <Menu></Menu>
            </div>
        </div>
    );
};

export default NavBar;