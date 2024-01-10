import React from 'react';
import img1 from '../../../../assets/home-imgs/project-img1.png';
import img2 from '../../../../assets/home-imgs/project-img2.png';
import img3 from '../../../../assets/home-imgs/project-img3.png';
import Event from '../Events/Event';
import { Link } from 'react-router-dom';

const Project = () => {
    return (
        <div className='relative z-20'>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mx-8 '>
                <div className="card w-96 h-[300px] rounded-3xl bg-[#24316B]">
                    <div className="card-body">
                        <h2 className="card-title text-7xl text-center font-extrabold text-white">Our Projects</h2>
                    </div>
                </div>
                <div className="card w-96">
                    <figure><img src={img1} alt="Shoes" className='relative' /></figure>
                    <div className="card-body absolute mt-48 text-white ">
                        <h2 className="card-title text-6xl text-center font-bold">Khukumoni Stipends</h2>
                    </div>
                </div>
                <div className="card w-96 ">
                    <figure><img src={img2} alt="Shoes" className='relative' /></figure>
                    <div className="card-body absolute mt-48 text-white ">
                        <h2 className="card-title text-6xl text-center font-bold">Food For All</h2>
                    </div>
                </div>
                <div className="card w-96 lg:-mt-20">
                    <figure><img src={img3} alt="Shoes" className='relative' /></figure>
                    <div className="card-body absolute mt-48 text-white ">
                        <h2 className="card-title text-6xl text-center font-bold">Cleansing Program</h2>
                    </div>
                </div>
                <div className="card w-96 h-[300px]">
                    <figure><img src={img1} alt="Shoes" className='relative w-96 h-[300px]' /></figure>
                    <div className="card-body absolute mt-32 text-white">
                        <h2 className="card-title text-5xl  text-center font-extrabold">Dress Giving Program</h2>
                    </div>
                </div>
                <div className="card w-96  rounded-3xl bg-[#24316B] ">
                    <Link to='/program'>
                        <div className="card-body lg:mt-16">
                            <h2 className="card-title text-8xl text-center font-extrabold text-white ">More...</h2>
                        </div></Link>
                </div>
            </div>
            <Event></Event>
        </div>
    );
};

export default Project;