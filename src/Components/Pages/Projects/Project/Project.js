import React from 'react';
import img1 from '../../../../assets/home-imgs/project-img1.png';
import img2 from '../../../../assets/home-imgs/project-img2.png';
import img3 from '../../../../assets/home-imgs/project-img3.png';
import imgBg from '../../../../assets/logos/frame-3.svg';
import './Project.css';

const Project = () => {
    return (
        <div className='absolute z-40'>
            <div className=''>
                <img src={imgBg} alt="" />
            </div>
            <div className='grid grid-cols-2 gap-5 mx-60 -mt-[1360px] '>
                <div className="card w-96 h-60 rounded-3xl bg-[#24316B]">
                    <div className="card-body">
                        <h2 className="card-title text-7xl text-center font-bold text-white">Our Projects</h2>
                    </div>
                </div>
                <div className="card w-96">
                    <figure><img src={img1} alt="Shoes" className='relative' /></figure>
                    <div className="card-body absolute top-48 text-white ">
                        <h2 className="card-title text-5xl text-center font-bold">Khukumoni Stipends</h2>
                    </div>
                </div>
                <div className="card w-96 -mt-36">
                    <figure><img src={img2} alt="Shoes" className='relative' /></figure>
                    <div className="card-body absolute top-56 text-white ">
                        <h2 className="card-title text-5xl text-center font-bold">Food For All</h2>
                    </div>
                </div>
                <div className="card w-96">
                    <figure><img src={img3} alt="Shoes" className='relative' /></figure>
                    <div className="card-body absolute top-48 text-white ">
                        <h2 className="card-title text-5xl text-center font-bold">Cleansing Program</h2>
                    </div>
                </div>
                <div className="card w-96 -mt-36">
                    <figure><img src={img1} alt="Shoes" className='relative' /></figure>
                    <div className="card-body absolute top-48 text-white ">
                        <h2 className="card-title text-5xl text-center font-bold">Khukumoni Stipends</h2>
                    </div>
                </div>
                <div className="card w-96 rounded-3xl bg-[#24316B] ">
                    <div className="card-body">
                        <h2 className="card-title text-7xl text-center font-bold text-white mt-12 ml-5">More...</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;