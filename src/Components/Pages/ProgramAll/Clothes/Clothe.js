import React from 'react';
import img1 from '../../../../assets/program/prog-img10.png';
import './Clothe.css';

const Clothe = () => {
    return (
        <div className='my-8'>
            <div className=" mx-20">
                <div className="hero-content flex-col lg:flex-row ">
                    <div>
                        <h1 className='text-5xl font-bold text-[#24316B]'>Warm Clothes For Poor People</h1>
                        <img src={img1} alt='' className="max-w-xl rounded-lg mt-8" />
                    </div>
                    <div className='ml-12'>
                        <h1 className="text-2xl text-[#24316B] font-bold">Project Info</h1>
                        <p className="py-6 clothe-p">During the winter we donate winter clothing, blankets, sweaters, sheets, etc. To the poor people who do not have winter clothing.
                        </p>
                    </div>
                </div>
                <h1 className="text-2xl text-[#24316B] font-bold">Description</h1>
                <p className='clothe-p mt-4'>Even though the winter is welcomed by the privileged affluent people in gleeful moods, it brings a lot of suffering to the poor people. But many poor people in our country cannot afford to buy warm clothes for winter. During the winter season, Khukumoni takes initiative to distribute warm clothes among the unprivileged area to reduce suffering. This initiative might not mitigate all their problems but may remit their sufferings to a little extent.
                </p>
            </div>
        </div>
    );
};

export default Clothe;