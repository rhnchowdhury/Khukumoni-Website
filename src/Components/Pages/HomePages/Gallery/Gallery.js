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
        <div>
            <h2 className='gallery-h2 my-12'>Gallery</h2>
            {/* <div className='mx-32'> */}
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 mx-10'>
                <div className="card rounded-none lg:w-96">
                    <figure><img src={img1} alt="" className='' /></figure>
                </div>
                <div className="card rounded-none lg:w-56 lg:h-[400px] -ml-1">
                    <figure><img src={img2} alt="" className='' /></figure>
                </div>
                <div className="card lg:-ml-[170px] rounded-none">
                    {/* -ml-44 w-[560px] h-[400px] */}
                    <figure><img src={img3} alt="" className='w-[600px] h-[391px]' /></figure>
                </div>
                <div className="card rounded-none lg:w-96 lg:-mt-32">
                    <figure><img src={img4} alt="" className='' /></figure>
                </div>
                <div className="card rounded-none lg:w-96 lg:-ml-1 lg:-mt-3">
                    <figure><img src={img5} alt="" className='' /></figure>
                </div>
                <div className="card rounded-none  lg:-ml-3 lg:-mt-3">
                    <figure><img src={img6} alt="" className='lg:w-[420px] lg:h-[276px]' /></figure>
                </div>
                <div className="card rounded-none lg:-mt-[120px]">
                    {/* w-96 -mt-[133px] */}
                    <figure><img src={img7} alt="" className='' /></figure>
                </div>
                <div className="card rounded-none lg:w-[785px]">
                    <figure><img src={img8} alt="" className=' lg:h-[289px]' /></figure>
                </div>
            </div>
            {/* </div> */}
        </div>
    );
};

export default Gallery;