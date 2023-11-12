import React from 'react';

const NavBar = () => {
    return (
        <div>
            <div className="navbar bg-[#4268B1]">
                <div className="navbar-start">
                    <p className='text-white'>+88 01755 744312</p>
                </div>
                <div className="navbar-center">
                    <p className='text-white'>email@gmail.com</p>
                </div>
                <div className="navbar-end">
                    <button className="btn btn-square btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NavBar;