import React from 'react';
import img1 from '../../../../assets/team/team-img1.png';
import img2 from '../../../../assets/team/team-img2.png';
import './Team.css';

const Team = () => {
    return (
        <div className=' lg:mx-8 mx-5'>
            <h2 className='team-h2 my-8'>Our Team</h2>
            <div className='block lg:flex gap-8 '>
                <div>
                    <img src={img1} alt="" className='relative' />
                    <div className='bg-[#24316B] text-white lg:w-56 w-28 lg:h-80 h-40 absolute -mt-[175.5px] lg:-mt-[351.5px]'>
                        <h2 className='lg:text-2xl text-xs font-bold lg:pt-10 pt-2 pl-6'>Nothing you wear is more important than your smile.</h2>
                        {/* <h2 className='lg:text-3xl text-xs font-bold lg:pt-10 pt-2 pl-6'>Nothing you wear is more important than your smile.</h2> */}
                        <h2 className='pl-6 lg:pt-6 pt-3 lg:text-lg text-sm font-medium'>MD AL MANSUR RAHMAN</h2>
                        <h2 className='pl-6 lg:pt-1 pt-3 lg:text-lg text-sm font-medium'>(Founder & Chairman)</h2>
                        {/* <h2 className='pl-6 lg:pt-8 pt-3 lg:text-xl text-sm font-medium'>MD AL MANSUR RAHMAN</h2> */}
                    </div>
                </div>
                <div className='mt-12 lg:mt-0'>
                    <img src={img2} alt="" className='relative' />
                    <div className='bg-[#24316B] text-white lg:w-56 w-28 lg:h-80 h-40 absolute -mt-[175.5px]  lg:-mt-[351.5px]'>
                        <h2 className='lg:text-2xl text-xs font-bold lg:pt-10 pt-2 pl-6'>Nothing you wear is more important than your smile.</h2>
                        <h2 className='pl-6 lg:pt-6 pt-3 lg:text-lg text-sm font-medium'>MST MOSTAKIMA KHATUN</h2>
                        <h2 className='pl-6 lg:pt-1 pt-3 lg:text-lg text-sm font-medium'>(Vice-Chairman)</h2>
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