import React from 'react';
import volunteerBg from '../../../assets/volunteers/volunteer-bg.png';

const Volunteer = () => {
    return (
        <div className='mt-12'>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${volunteerBg})` }}>
                <div className=" "></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-7xl mt-32">
                        <h1 className="text-7xl font-extrabold text-[#24316b] [-webkit-text-stroke:4px_white]">Become a Volunteer</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Volunteer;