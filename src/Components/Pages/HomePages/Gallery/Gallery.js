import React from 'react';
import img1 from '../../../../assets/home-imgs/gallery-img1.png';
import img2 from '../../../../assets/home-imgs/gallery-img7.png';
import img3 from '../../../../assets/home-imgs/gallery-img6.png';
import img4 from '../../../../assets/home-imgs/gallery-img2.png';
import img5 from '../../../../assets/home-imgs/gallery-img3.png';
import img6 from '../../../../assets/home-imgs/gallery-img5.png';
import img7 from '../../../../assets/home-imgs/gallery-img8.png';
import img8 from '../../../../assets/home-imgs/gallery-img4.png';
import './Gallery.css';

const Gallery = () => {
    return (
        <div className='lg:mx-4 mx-5'>
            <h2 className='gallery-h2 my-12'>Gallery</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-3'>
                <div className="card rounded-none lg:w-96">
                    <figure><img src={img1} alt="" className='' /></figure>
                </div>
                <div className="card rounded-none lg:w-56  lg:h-[400px] lg:ml-4">
                    <figure><img src={img2} alt="" className='' /></figure>
                </div>
                <div className="card lg:-ml-[126px] rounded-none">
                    <figure><img src={img3} alt="" className='lg:w-[500px] lg:h-[391px]' /></figure>
                </div>
                <div className="card rounded-none lg:w-96 lg:-mt-32">
                    <figure><img src={img4} alt="" className='' /></figure>
                </div>
                <div className="card rounded-none lg:w-96 lg:ml-4 lg:-mt-3">
                    <figure><img src={img5} alt="" className='' /></figure>
                </div>
                <div className="card rounded-none lg:ml-[34px] lg:-mt-3">
                    <figure><img src={img6} alt="" className=' lg:h-[276.5px]' /></figure>
                </div>
                <div className="card rounded-none lg:-mt-[120px] lg:w-96">
                    <figure><img src={img7} alt="" className='' /></figure>
                </div>
                <div className="card rounded-none lg:ml-[17.1px] lg:w-[714.5px] lg:-mt-1">
                    <figure><img src={img8} alt="" className=' lg:h-[293.5px]' /></figure>
                </div>
            </div>
        </div>
    );
};

export default Gallery;