import React from 'react';
import img1 from '../../../assets/home-imgs/project-img1.png';
import img2 from '../../../assets/home-imgs/project-img2.png';

const Program = () => {
    return (
        <div className='m-6 grid gap-2'>
            <div className="card w-96">
                <figure><img src={img1} alt="Shoes" className='relative' /></figure>
                <div className="card-body absolute top-48 text-white ">
                    <h2 className="card-title text-5xl text-center font-bold">Khukumoni Stipends</h2>
                </div>
            </div>
            <div className="card w-96">
                <figure><img src={img2} alt="Shoes" className='relative' /></figure>
                <div className="card-body absolute top-60 text-white ">
                    <h2 className="card-title text-5xl text-center font-bold">Food For All</h2>
                </div>
            </div>

            <div className="card w-96 bg-[#24316B] text-center">
                <div className="card-body text-center">
                    <h2 className="card-title text-7xl  font-bold text-white">More...</h2>
                </div>
            </div>
        </div>
    );
};

export default Program;