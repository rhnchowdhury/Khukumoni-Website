import React from 'react';
import img1 from '../../../../assets/home-imgs/events-img1.png';
import img2 from '../../../../assets/home-imgs/events-img2.png';
import img3 from '../../../../assets/home-imgs/events-img3.png';
import './Event.css';
import Gallery from '../Gallery/Gallery';
import Team from '../Teams/Team';

const Event = () => {
    return (
        <div className='lg:mx-8 mx-5'>
            <h2 className='event-h2 lg:my-12 my-6'>Our Events</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-12 '>
                <div className="card lg:w-96">
                    <figure><img src={img1} alt="Shoes" className='relative' /></figure>
                    <div className=" absolute bg-[#253E88] text-white lg:mx-16 mx-12 lg:mt-[218px] mt-[162px] lg:py-2 py-1 rounded-t-3xl">
                        <h2 className="text-center lg:text-xl font-bold">Khukumoni School</h2>
                        <p className='event-p mx-10'>New Dress giving program At
                            different festivals,we offer new
                            clothes for poor children and
                            the elderly for 5 taka.</p>
                    </div>
                </div>
                <div className="card lg:w-96">
                    <figure><img src={img2} alt="Shoes" className='relative' /></figure>
                </div>
                <div className="card lg:w-96">
                    <figure><img src={img3} alt="Shoes" className='relative' /></figure>
                    <div className=" absolute  bg-[#253E88] text-white lg:mx-16 mx-12 lg:mt-[218px] mt-[162px] lg:py-2 py-1 rounded-t-3xl">
                        <h2 className="text-center lg:text-xl font-bold">Khukumoni School</h2>
                        <p className='event-p mx-10'>New Dress giving program At
                            different festivals,we offer new
                            clothes for poor children and
                            the elderly for 5 taka.</p>
                    </div>
                </div>
            </div>
            <Team></Team>
            <Gallery></Gallery>
        </div>
    );
};

export default Event;