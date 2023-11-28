import React from 'react';
import img1 from '../../../assets/program/prog-img1.png';
import img2 from '../../../assets/program/prog-img2.png';
import img3 from '../../../assets/program/prog-img3.png';
import img4 from '../../../assets/program/prog-img4.png';
import img5 from '../../../assets/program/prog-img5.png';
import img6 from '../../../assets/program/prog-img6.png';
import img7 from '../../../assets/program/prog-img7.png';
import img8 from '../../../assets/program/prog-img8.png';
import img9 from '../../../assets/program/prog-img9.png';
import img10 from '../../../assets/program/prog-img10.png';
import img11 from '../../../assets/program/prog-img11.png';
import './Program.css';
import { Link } from 'react-router-dom';

const Program = () => {
    return (
        <div className='my-10 grid gap-5'>
            <div className="border-2 mx-20">
                <div className="hero-content flex-col lg:flex-row ">
                    <div>
                        <h1 className='text-3xl text-[#24316B] font-bold'>Food For All</h1>
                        <img src={img1} alt='' className="max-w-xs rounded-lg mt-6" />
                    </div>
                    <div className='ml-20'>
                        <h1 className="text-2xl text-[#24316B] font-bold">Project Info</h1>
                        <p className="py-6 program-p">Khukumoni foundation designed the food for all programs only for poor and unprivileged people throughout Bangladesh to remove their distress and food crisis. Since 2016 we have been providing food for the poor and helpless people, which is distributed in exchange for only One Taka.
                        </p>
                        <Link to='/food'><button className="btn program-btn">See Details</button></Link>
                    </div>
                </div>
            </div>
            <div className="border-2 mx-20">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div>
                        <h1 className='text-3xl text-[#24316B] font-bold'>Corona Pandemic</h1>
                        <img src={img2} alt='' className="max-w-xs rounded-lg mt-6" />
                    </div>
                    <div className='mr-20'>
                        <h1 className="text-2xl text-[#24316B] font-bold">Project Info</h1>
                        <p className="py-6 program-p">COVID-19 exhibits not only a health crisis in Bangladesh but also make severe food crisis among the impoverished especially in Dhaka city. The humanitarian crisis is on the going in whole, Bangladesh is also suffering from humanitarian crises due to this pandemic.
                        </p>
                        <Link to='/corona'><button className="btn program-btn">See Details</button></Link>
                    </div>
                </div>
            </div>
            <div className="border-2 mx-20">
                <div className="hero-content flex-col lg:flex-row">
                    <div>
                        <h1 className='text-3xl text-[#24316B] font-bold'>Free Education Programme</h1>
                        <img src={img3} alt='' className="max-w-xs rounded-lg mt-6" />
                    </div>
                    <div className='ml-20'>
                        <h1 className="text-2xl text-[#24316B] font-bold">Project Info</h1>
                        <p className="py-6 program-p">Khukumoni foundation believes only quality education can uplift Bangladesh toward the progress in the social and economic sectors. But it requires ensuring quality education among the children throughout the city, slum, and remote arena.
                        </p>
                        <Link to='/education'><button className="btn program-btn">See Details</button></Link>
                    </div>
                </div>
            </div>
            <div className="border-2 mx-20">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div>
                        <h1 className='text-3xl text-[#24316B] font-bold'>Free Health Camping</h1>
                        <img src={img4} alt='' className="max-w-xs rounded-lg mt-6" />
                    </div>
                    <div className='mr-20'>
                        <h1 className="text-2xl text-[#24316B] font-bold">Project Info</h1>
                        <p className="py-6 program-p">We are delighted to announce that the Khukumoni foundation take initiative to start free medical health camping to the betterment of the underprivileged community. Our health camps also make sure that people are taking healthcare at the right time and seeing the doctor earlier enough before falling in a critical situation.
                        </p>
                        <Link to='/health'><button className="btn program-btn">See Details</button></Link>
                    </div>
                </div>
            </div>
            <div className="border-2 mx-20">
                <div className="hero-content flex-col lg:flex-row">
                    <div>
                        <h1 className='text-3xl text-[#24316B] font-bold'>Sponsor a Child</h1>
                        <img src={img5} alt='' className="max-w-xs rounded-lg mt-6" />
                    </div>
                    <div className='ml-20'>
                        <h1 className="text-2xl text-[#24316B] font-bold">Project Info</h1>
                        <p className="py-6 program-p">Sponsoring a child in Bangladesh is a life-changing opportunity to make a positive impact. By offering your support, you provide a child with access to education, healthcare, nutrition, and a brighter future.
                        </p>
                        <Link to='/child'><button className="btn program-btn">See Details</button></Link>
                    </div>
                </div>
            </div>
            <div className="border-2 mx-20">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div>
                        <h1 className='text-3xl text-[#24316B] font-bold'>Skill Development</h1>
                        <img src={img6} alt='' className="max-w-xs rounded-lg mt-6" />
                    </div>
                    <div className='mr-20'>
                        <h1 className="text-2xl text-[#24316B] font-bold">Project Info</h1>
                        <p className="py-6 program-p">Skill development is the process of identifying your skill gaps, and Development and sharpening these skills. It is important because your skills determine your ability to execute your plans with success.
                        </p>
                        <Link to='/skill'><button className="btn program-btn">See Details</button></Link>
                    </div>
                </div>
            </div>
            <div className="border-2 mx-20">
                <div className="hero-content flex-col lg:flex-row">
                    <div>
                        <h1 className='text-3xl text-[#24316B] font-bold'>New Dress Giving Program</h1>
                        <img src={img7} alt='' className="max-w-xs rounded-lg mt-6" />
                    </div>
                    <div className='ml-20'>
                        <h1 className="text-2xl text-[#24316B] font-bold">Project Info</h1>
                        <p className="py-6 program-p">At different festivals, we offer new clothes for needy children and the elderly for 5 takas. In this attempt, they are being filled with joy and ecstasy. We want everyone on earth to be equally joyful on different festivals or religious occasions.
                        </p>
                        <button className="btn program-btn">See Details</button>
                    </div>
                </div>
            </div>
            <div className="border-2 mx-20">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div>
                        <h1 className='text-3xl text-[#24316B] font-bold'>Khukumoni Stipends</h1>
                        <img src={img8} alt='' className="max-w-xs rounded-lg mt-6" />
                    </div>
                    <div className='mr-20'>
                        <h1 className="text-2xl text-[#24316B] font-bold">Project Info</h1>
                        <p className="py-6 program-p">Stipends in Bangladesh play a crucial role in promoting education and alleviating poverty. The government of Bangladesh, along with various non-governmental organizations, offers stipends to students at different levels of education, particularly in primary and secondary schools.
                        </p>
                        <button className="btn program-btn">See Details</button>
                    </div>
                </div>
            </div>
            <div className="border-2 mx-20">
                <div className="hero-content flex-col lg:flex-row">
                    <div>
                        <h1 className='text-3xl text-[#24316B] font-bold'>Cleansing Program</h1>
                        <img src={img9} alt='' className="max-w-xs rounded-lg mt-6" />
                    </div>
                    <div className='ml-20'>
                        <h1 className="text-2xl text-[#24316B] font-bold">Project Info</h1>
                        <p className="py-6 program-p">We train slum children on how to keep themselves neat and clean for better lives. Cleaning is the precondition for becoming healthy and lead better lives. Our mentors and volunteers of all time have emphasized on the necessity of cleanliness among these uncared street children.
                        </p>
                        <button className="btn program-btn">See Details</button>
                    </div>
                </div>
            </div>
            <div className="border-2 mx-20">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div>
                        <h1 className='text-3xl text-[#24316B] font-bold'>Warm Clothes For Poor People</h1>
                        <img src={img10} alt='' className="max-w-xs rounded-lg mt-6" />
                    </div>
                    <div className='mr-20'>
                        <h1 className="text-2xl text-[#24316B] font-bold">Project Info</h1>
                        <p className="py-6 program-p">During the winter we donate winter clothing, blankets, sweaters, sheets, etc. To the poor people who do not have winter clothing.
                        </p>
                        <button className="btn program-btn">See Details</button>
                    </div>
                </div>
            </div>
            <div className="border-2 mx-20">
                <div className="hero-content flex-col lg:flex-row">
                    <div>
                        <h1 className='text-3xl text-[#24316B] font-bold'>Giving Relief To Flood victims</h1>
                        <img src={img11} alt='' className="max-w-xs rounded-lg mt-6" />
                    </div>
                    <div className='ml-20'>
                        <h1 className="text-2xl text-[#24316B] font-bold">Project Info</h1>
                        <p className="py-6 program-p">Khukumoni undertakes a relief distribution program and arranges medical camps every year among flood victims of our country.Because of the geographical situation, natural calamities occur several times in different places of Bangladesh.
                        </p>
                        <button className="btn program-btn">See Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Program;