import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

const Menu = () => {

    return (
        <div className='mt-12 relative z-50 menu-responsive'>
            <div className="menu bg-[#253E88] ">
                <div className='space-x-[59px] font-bold text-xl text-white relative ml-10'>
                    <Link to='/'>Home</Link>
                    <Link to='/about'>About Us</Link>
                    <Link to='/program'>Our Program</Link>
                    <Link to='/volunteer'>Be a Volunteer</Link>
                    <Link to='/news'>News</Link>
                    <Link>Team</Link>
                    <Link to='/contact'>Contact</Link>
                    <Link to='/donate' className=' nav-donate-btn py-5 px-8 bg-[#24316B] z-50'>Donate Now</Link>
                </div>
            </div>
        </div >
    );
};

export default Menu;