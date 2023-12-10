import React from 'react';
import volunteerBg from '../../../assets/volunteers/volunteer-bg.png';
import img1 from '../../../assets/volunteers/volun-img1.png';
import img2 from '../../../assets/volunteers/volun-img2.png';
import './Volunteer.css';

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
            <div className=" mx-16 mt-16">
                <div className="hero-content flex-col lg:flex-row-reverse ">
                    <div>
                        <img src={img1} alt='' className="max-w-xl " />
                    </div>
                    <div className=''>
                        <h1 className="text-4xl">Help First</h1>
                        <h1 className="text-4xl text-[#24316B] font-bold">Let’s help <br /> together</h1>
                        <br />
                        <p className="py-6 corona-p">COVID-19 exhibits not only a health crisis in Bangladesh but also make severe food crisis among the impoverished especially in Dhaka city. The humanitarian crisis is on the going in whole, Bangladesh is also suffering from humanitarian crises due to this pandemic. <br /> <br /> You might know that many people especially in Dhaka city have lost their source of earning and become transitorily jobless. For this reason, they are not capable to buy foods recurrently for themselves or for families.
                        </p>
                    </div>

                </div>
                <div className="card-actions ">
                    <button className="volunteer-btn">CALL +880 1755 744 312</button>
                </div>
            </div>
            <div className=" mx-16 mt-16">
                <div className="hero-content flex-col lg:flex-row">
                    <div>
                        <img src={img2} alt='' className="max-w-xl " />
                    </div>
                    <div className='ml-8'>
                        <h1 className="text-4xl text-[#24316B] font-bold">More People More impact</h1>
                        <br />
                        <p className="py-6 corona-p">COVID-19 exhibits not only a health crisis in Bangladesh but also make severe food crisis among the impoverished especially in Dhaka city. The humanitarian crisis is on the going in whole, Bangladesh is also suffering from humanitarian crises due to this pandemic.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Volunteer;