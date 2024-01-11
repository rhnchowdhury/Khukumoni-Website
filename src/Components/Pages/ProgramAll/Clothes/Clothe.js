import React from 'react';
import img1 from '../../../../assets/program/prog-img10.png';
import './Clothe.css';

const Clothe = () => {
    return (
        <div className='lg:my-8 my-5'>
            <div className="lg:mx-20">
                <div className="hero-content flex-col lg:flex-row ">
                    <div>
                        <h1 className='lg:text-5xl text-4xl font-bold text-[#24316B]'>Warm Clothes For Poor People</h1>
                        <img src={img1} alt='' className="lg:max-w-xl w-96 rounded-lg mt-8" />
                    </div>
                    <div className='lg:ml-12 lg:mt-32 mt-4'>
                        <h1 className="text-2xl text-[#24316B] font-bold">Project Info</h1>
                        <p className="py-6 clothe-p">During the winter we donate winter clothing, blankets, sweaters, sheets, etc. To the poor people who do not have winter clothing.
                        </p>
                    </div>
                </div>
                <h1 className="ml-4 lg:ml-0 text-2xl text-[#24316B] font-bold">Description</h1>
                <p className='clothe-sec-p mt-4'>Even though the winter is welcomed by the privileged affluent people in gleeful moods, it brings a lot of suffering to the poor people. But many poor people in our country cannot afford to buy warm clothes for winter. During the winter season, Khukumoni takes initiative to distribute warm clothes among the unprivileged area to reduce suffering. This initiative might not mitigate all their problems but may remit their sufferings to a little extent.
                </p>
            </div>
        </div>
    );
};

export default Clothe;