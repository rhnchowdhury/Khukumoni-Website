import React from 'react';
import img1 from '../../../../assets/home-imgs/events-img1.png';
import img2 from '../../../../assets/home-imgs/events-img2.png';
import img3 from '../../../../assets/home-imgs/events-img3.png';
import './Event.css';

const Event = () => {
    return (
        <div>
            <h2 className='event-h2 my-16'>Our Events</h2>
            <div className='grid grid-cols-3 mx-20'>
                <div className="card w-96 ">
                    <figure><img src={img1} alt="Shoes" className='relative' /></figure>
                    <div className=" absolute  bg-[#253E88] text-white mx-16 mt-[218px] py-2 rounded-t-3xl">
                        <h2 className="text-center text-xl font-bold">Khukumoni School</h2>
                        <p className='event-p mx-10'>New Dress giving program At
                            different festivals,we offer new
                            clothes for poor children and
                            the elderly for 5 taka.</p>
                    </div>
                </div>
                <div className="card w-96">
                    <figure><img src={img2} alt="Shoes" className='relative' /></figure>
                </div>
                <div className="card w-96">
                    <figure><img src={img3} alt="Shoes" className='relative' /></figure>
                    <div className=" absolute  bg-[#253E88] text-white mx-16 mt-[218px] py-2 rounded-t-3xl">
                        <h2 className="text-center text-xl font-bold">Khukumoni School</h2>
                        <p className='event-p mx-10'>New Dress giving program At
                            different festivals,we offer new
                            clothes for poor children and
                            the elderly for 5 taka.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Event;