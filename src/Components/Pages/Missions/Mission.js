import React from 'react';
import './Mission.css';
import img1 from '../../../assets/home-imgs/mission-img1.png';
import img2 from '../../../assets/home-imgs/mission-img2.png';

const Mission = () => {
    return (
        <div className='mt-12'>
            <h2 className='mission-h2 '>Mission & Vision</h2>
            <div className='mt-32'>
                <div className='ml-12 grid grid-cols-2'>
                    <div className="card rounded-[50px] w-[550px] h-[650px] bg-[#253E88] text-white shadow-xl">
                        <div className="card-body">
                            <div className='flex'>
                                <img src={img1} alt="" className='w-64 -mt-28 -ml-10' />
                                <h2 className=" mission-h1 ml-3">Our  Mission</h2>
                            </div>
                            <p className='mission-p mt-8'>To make significant improvement of underprivileged people through educational program .Children in our society with nourishment and educational program against hunger around the country to protect lives, eliminate poverty through education and establish social justice.</p>
                            <div className="card-actions justify-end">
                                <button className="btn bg-[#24316B] text-white hover:bg-[#24316B] text-lg">Learn More</button>
                            </div>
                        </div>
                    </div>
                    <div className="card rounded-[50px] w-[550px] h-[650px] bg-[#253E88] text-white shadow-xl">
                        <div className="card-body">
                            <div className='flex'>
                                <img src={img2} alt="" className='w-64 -mt-28 -ml-10' />
                                <h2 className=" mission-h1 ml-3">Our  Vision</h2>
                            </div>
                            <p className='mission-p mt-8'>We are working to build a country free of illiteracy, hunger, poverty and make people realize their rights to become respected citizens.</p>
                            <div className="card-actions justify-end">
                                <button className="btn bg-[#24316B] text-white hover:bg-[#24316B] text-lg">Learn More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Mission;