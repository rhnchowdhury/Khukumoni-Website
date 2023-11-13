import React from 'react';
import { BsFacebook, BsFillTelephoneFill, BsInstagram, BsPinterest } from "react-icons/bs";
import { IoMailSharp } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import './NavBar.css';
import logo from '../../../assets/logos/head-logo.png';

const NavBar = () => {
    return (
        <div>
            <div className="navbar bg-[#4268B1]">
                <div className="navbar-start ml-8">
                    <p className='text-white flex'><span className='mt-1 mr-2'><BsFillTelephoneFill></BsFillTelephoneFill></span> +88 01755 744312</p>
                </div>
                <div className="navbar-center">
                    <p className='text-white flex'><span className='mt-1 mr-2'><IoMailSharp></IoMailSharp></span> email@gmail.com</p>
                </div>
                <div className="navbar-end mr-8">
                    <button className="flex text-white space-x-2">
                        <BsInstagram></BsInstagram>
                        <BsFacebook></BsFacebook>
                        <FaTwitter></FaTwitter>
                        <BsPinterest></BsPinterest>
                    </button>
                </div>
            </div>
            <div className='flex justify-center mt-8'>
                <div className='relative'>
                    <img src={logo} alt="" className='' />
                </div>
                <div>
                    <div className='absolute ml-24'>
                        <button className=" btn-style px-3 py-1">Sign Up</button>
                        <button className=" btn-style ml-5 px-4 py-1 ">Log In</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;