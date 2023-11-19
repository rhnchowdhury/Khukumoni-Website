import React from 'react';
import img1 from '../../../../assets/home-imgs/project-img1.png';
import img2 from '../../../../assets/home-imgs/project-img2.png';
import img3 from '../../../../assets/home-imgs/project-img3.png';
import imgBg from '../../../../assets/logos/frame-3.svg';
import Event from '../../HomePages/Events/Event';

const Project = () => {
    return (
        <div className='absolute z-40'>
            <div className=''>
                <img src={imgBg} alt="" />
            </div>
            <div className='grid grid-cols-2 gap-5 mx-32 -mt-[1360px] '>
                <div className="card w-[500px] h-[350px] rounded-3xl bg-[#24316B]">
                    <div className="card-body top-96">
                        <h2 className="card-title text-8xl text-center font-extrabold text-white">Our  Projects</h2>
                    </div>
                </div>
                <div className="card w-[500px]">
                    <figure><img src={img1} alt="Shoes" className='relative' /></figure>
                    <div className="card-body absolute top-72 text-white ">
                        <h2 className="card-title text-6xl text-center font-bold">Khukumoni Stipends</h2>
                    </div>
                </div>
                <div className="card w-[500px] -mt-36">
                    <figure><img src={img2} alt="Shoes" className='relative' /></figure>
                    <div className="card-body absolute top-80 text-white ">
                        <h2 className="card-title text-6xl text-center font-bold">Food For All</h2>
                    </div>
                </div>
                <div className="card w-[500px]">
                    <figure><img src={img3} alt="Shoes" className='relative' /></figure>
                    <div className="card-body absolute top-72 text-white ">
                        <h2 className="card-title text-6xl text-center font-bold">Cleansing Program</h2>
                    </div>
                </div>
                <div className="card w-[500px] -mt-36">
                    <figure><img src={img1} alt="Shoes" className='relative' /></figure>
                    <div className="card-body absolute top-72 text-white ">
                        <h2 className="card-title text-6xl text-center font-bold">Khukumoni Stipends</h2>
                    </div>
                </div>
                <div className="card w-[500px]  rounded-3xl bg-[#24316B] ">
                    <div className="card-body mt-24">
                        <h2 className="card-title text-8xl text-center font-extrabold text-white ml-5">More...</h2>
                    </div>
                </div>
            </div>
            <Event></Event>
        </div>
    );
};

export default Project;