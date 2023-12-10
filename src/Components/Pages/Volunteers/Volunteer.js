import React from 'react';
import volunteerBg from '../../../assets/volunteers/volunteer-bg.png';
import img1 from '../../../assets/volunteers/volun-img1.png';

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
            <div className=" mx-20 ">
                <div className="hero-content flex-col lg:flex-row-reverse ">
                    <div>
                        <img src={img1} alt='' className="max-w-xl mt-8" />
                    </div>
                    <div className='ml-12 mt-32'>
                        <h1 className="text-2xl text-[#24316B] font-bold">Project Info</h1>
                        <p className="py-6 corona-p">COVID-19 exhibits not only a health crisis in Bangladesh but also make severe food crisis among the impoverished especially in Dhaka city. The humanitarian crisis is on the going in whole, Bangladesh is also suffering from humanitarian crises due to this pandemic. <br /> You might know that many people especially in Dhaka city have lost their source of earning and become transitorily jobless. For this reason, they are not capable to buy foods recurrently for themselves or for families. Impoverished peoples including Ricksha puller, hawker, vendor are suffering from food and sanitation. For their existence, the khukumoni foundation takes initiative to distribute food among them during the coronavirus epidemic times even afterward.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Volunteer;