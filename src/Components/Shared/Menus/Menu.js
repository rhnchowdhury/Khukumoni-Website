import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { RiMenu3Line } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import './Menu.css';
import { AuthContext } from '../../Context/AuthProvider';

const Menu = () => {
    const [isMobile, setIsMobile] = useState(false);
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.error(err));
    };

    return (
        <div className='lg:mt-12 relative z-50'>
            <div className="menu bg-[#253E88] ">
                <div className={isMobile ? 'nav-links-mobile font-bold space-y-2  text-white' : ' lg:space-x-[59px] font-bold text-xl text-white relative ml-10 menu-links'}
                    onClick={() => setIsMobile(false)}
                >
                    <Link to='/' className='lg:inline block '>Home</Link>
                    <Link className='lg:inline block ' to='/about'>About Us</Link>
                    <Link className='lg:inline block ' to='/program'>Our Program</Link>
                    <Link className='lg:inline block ' to='/volunteer'>Be a Volunteer</Link>
                    <Link className='lg:inline block ' to='/news'>News</Link>
                    {
                        user?.uid ?
                            <Link onClick={handleLogOut} className='lg:inline block '>Log Out</Link>
                            :
                            <Link className='lg:inline block '>Team</Link>

                    }
                    <Link className='lg:inline block ' to='/contact'>Contact</Link>
                    <Link to='/donate' className='lg:inline flex justify-center nav-donate-btn lg:py-5 py-2 px-2 lg:px-8 bg-[#24316B] z-50 '>Donate Now</Link>

                </div>
                <button className='text-4xl lg:hidden text-white relative flex justify-end'
                    onClick={() => setIsMobile(!isMobile)}>
                    {
                        isMobile ?
                            <RxCross2></RxCross2> : <RiMenu3Line />
                    }

                </button>
            </div>

        </div >
    );
};

export default Menu;