import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

const Menu = () => {
    return (
        <div className='mt-12 z-50'>
            <div className="menu bg-[#253E88] ">
                <div className='space-x-20 font-bold text-xl text-white relative mx-8'>
                    <Link to='/'>Home</Link>
                    <Link to='/about'>About Us</Link>
                    <Link to='/program'>Our Program</Link>
                    <Link>Be a Volunteer</Link>
                    <Link>News</Link>
                    <Link>Contact</Link>
                    <Link className=' nav-donate-btn py-5 px-8 bg-[#24316B] z-50'>Donate Now</Link>
                </div>
            </div>
        </div >
    );
};

export default Menu;