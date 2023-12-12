import React from 'react';
import img1 from '../../../../assets/team/team-img1.png';
import img2 from '../../../../assets/team/team-img2.png';
import './Team.css';

const Team = () => {
    return (
        <div className='mx-20 '>
            <h2 className='team-h2 my-12'>Our Team</h2>
            <div className='flex gap-8 '>
                <div>
                    <img src={img1} alt="" className='relative' />
                    <div className='bg-[#24316B] text-white w-56 h-80 absolute -mt-[363px]'>
                        <h2 className='text-3xl font-bold pt-10 pl-6'>Nothing you wear is more important than your smile.</h2>
                        <h2 className='pl-6 pt-8 text-xl font-semibold'>MD AL MANSUR RAHMAN</h2>
                    </div>
                </div>
                <div>
                    <img src={img2} alt="" className='relative' />
                    <div className='bg-[#24316B] text-white w-56 h-80 absolute -mt-[363px]'>
                        <h2 className='text-3xl font-bold pt-10 pl-6'>Nothing you wear is more important than your smile.</h2>
                        <h2 className='pl-6 pt-8 text-xl font-semibold'>MD AL MANSUR RAHMAN</h2>
                    </div>
                </div>
            </div>
            <div className="card-actions justify-center mt-8">
                <button className="team-btn">See All</button>
            </div>
        </div>
    );
};

export default Team;