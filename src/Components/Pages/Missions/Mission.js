import React from 'react';
import './Mission.css';
import img1 from '../../../assets/home-imgs/mission-img1.png';
import img2 from '../../../assets/home-imgs/mission-img2.png';
import img3 from '../../../assets/home-imgs/mission-img3.png';
import imgBg from '../../../assets/logos/frame-2.svg';
import imgBg2 from '../../../assets/logos/frame-4.svg';
import imgBg3 from '../../../assets/home-imgs/school-bg.png';

const Mission = () => {
    return (
        <div className='mt-12'>
            <h2 className='mission-h2 '>Mission & Vision</h2>
            <div className='relative'>
                <img src={imgBg} alt="" className='opacity-50' />
            </div>
            <div className='-mt-[900px]'>
                <div className='ml-12 grid grid-cols-2 gap-36'>
                    <div className="card rounded-[50px] w-[550px] h-[650px] bg-[#253E88] text-white shadow-xl">
                        <div className="card-body">
                            <div className='flex'>
                                <img src={img1} alt="" className='w-64 -mt-28 -ml-10' />
                                <h2 className=" mission-h1 ml-3">Our  Mission</h2>
                            </div>
                            <p className='mission-p mt-8'>To make significant improvement of underprivileged people through educational program .Children in our society with nourishment and educational program against hunger around the country to protect lives, eliminate poverty through education and establish social justice.</p>
                            <div className="card-actions justify-end">
                                <button className="mission-btn">Learn More</button>
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
                                <button className="mission-btn">Learn More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex'>
                <div className=' z-50'>
                    <img src={imgBg3} alt="" className='mt-60 relative w-[1200px] h-[600px] mission-bg-img ml-32 ' />
                    {/* <img src={imgBg3} alt="" className='mt-60 relative h-[400px] mission-bg-img ml-32 ' /> */}
                    <div className='-mt-[794px] absolute'>
                        {/* <div className='-mt-[750px] absolute'> */}
                        <img src={img3} alt="" className='w-[473px] ml-52' />
                    </div>
                </div>
                <div>
                    <div className='relative z-0'>
                        <img src={imgBg2} alt="" className='w-[1800px] -z-10' />
                        <div className=' -mt-[450px] absolute ml-72 mr-6'>
                            {/* <div className='-mt-[450px] absolute ml-72 mr-6'> */}
                            <h2 className='mission-sec-h2 text-[#24316B] -mt-96'>Khukumoni <br /> School</h2>
                            <p className='mission-p mt-8'>Free Primary School Education for underprivileged children, where we teach more than 5 hundred children in our 5 school branches around the Dhaka city. Location of schools are given below:
                                <br /> a) Karwan Bazar Railway Slum(beside Tejgaon Truck Stand) <br /> b) Nandipara Lane no 1, Bashabo. <br /> c) Italy Market, Sonir Akhra. <br /> d) Road 12/A, Dhanmondi Lakeshore. <br /> e) Launch Terminal, Sadarghat.
                            </p>
                            <button className="mission-btn mt-8">Learn More</button>
                        </div>
                    </div>


                </div>
            </div>
        </div >
    );
};

export default Mission;