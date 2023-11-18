import React from 'react';
import img1 from '../../../../assets/home-imgs/project-img1.png';
import img2 from '../../../../assets/home-imgs/mission-img2.png';
import './Project.css';

const Project = () => {
    return (
        <div>
            <div className="card w-96 bg-[#24316B] shadow-xl">
                <div className="card-body">
                    <h2 className="card-title text-8xl text-center text-white">Our Projects</h2>
                </div>
            </div>
            <div className="card w-96   shadow-xl image-full" style={{ backgroundImage: 'url(../../../../../../assets/home-imgs/project-img2.png)' }}>
                {/* <figure><img src={img1} alt="Shoes" /></figure> */}
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>

            {/* <div className="hero min-h-screen" style={{ backgroundImage: 'url(../../../../../../assets/home-imgs/project-img1.png)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div> */}

        </div>
    );
};

export default Project;