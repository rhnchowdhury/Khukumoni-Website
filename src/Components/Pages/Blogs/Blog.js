import React from 'react';
import img1 from '../../../assets/volunteers/volunteer-bg.png';
import img2 from '../../../assets/volunteers/volun-img2.png';

const Blog = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${img1})` }}>
                <div className=" "></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-7xl mt-32">
                        <h1 className="text-7xl font-extrabold text-[#24316b] [-webkit-text-stroke:4px_white]">Become a Volunteer</h1>
                    </div>
                </div>
            </div>
            <div className=" mx-16 mt-16">
                <div className="hero-content flex-col lg:flex-row">
                    <div>
                        <img src={img2} alt='' className="max-w-xl " />
                    </div>
                    <div className='ml-8'>
                        <h1 className="text-4xl text-[#24316B] font-bold">More People More impact</h1>
                        <br />
                        <p className="py-6 corona-p">COVID-19 exhibits not only a health crisis in Bangladesh but also make severe food crisis among the impoverished especially in Dhaka city. The humanitarian crisis is on the going in whole, Bangladesh is also suffering from humanitarian crises due to this pandemic.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Blog;