import React from 'react';
import { BsFacebook, BsFillTelephoneFill, BsInstagram, BsPinterest } from "react-icons/bs";
import { IoMailSharp } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import logo from '../../../assets/logos/head-logo.png';
import Menu from '../Menus/Menu';
import './NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <div className="navbar bg-[#4268B1] relative">
                <div className="navbar-start ml-8">
                    <p className='text-white flex'><span className='mt-1 mr-2'><BsFillTelephoneFill></BsFillTelephoneFill></span> +88 01755744312</p>
                </div>
                <div className="navbar-center">
                    <p className='text-white flex'><span className='mt-1 mr-2'><IoMailSharp></IoMailSharp></span>foundationkhukumoni@gmail.com</p>
                </div>
                <div className="navbar-end mr-8 ">
                    <button className="flex text-white space-x-5 bg-[#24316B] absolute py-[22px] px-5">
                        <BsInstagram className='nav-icon'></BsInstagram>
                        <BsFacebook className='nav-icon'></BsFacebook>
                        <FaTwitter className='nav-icon'></FaTwitter>
                        <BsPinterest className='nav-icon'></BsPinterest>
                    </button>
                </div>
            </div>
            <div className='flex justify-center mt-8'>
                <div className='relative'>
                    <img src={logo} alt="khukumoni" className='w-[500px]' />
                </div>
                <div className=''>
                    <div className='ml-60 absolute '>
                        <button className="nav-btn-style px-3 py-1">Sign Up</button>
                        <Link to='/login'><button className="nav-btn-style ml-4 px-4 py-1 ">Log In</button></Link>
                    </div>
                </div>
            </div>
            <Menu></Menu>
        </div>
    );
};

export default NavBar;