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
            <h2 className='gallery-h2 my-16'>Gallery</h2>
            {/* <div className='mx-32'> */}
            <div className='grid grid-cols-3 gap-4 mx-20'>
                <div className="card rounded-none w-96">
                    <figure><img src={img1} alt="" className='' /></figure>
                </div>
                <div className="card rounded-none w-56 h-[400px]">
                    <figure><img src={img2} alt="" className='' /></figure>
                </div>
                <div className="card rounded-none -ml-44 w-[560px] h-[400px]">
                    <figure><img src={img3} alt="" className='' /></figure>
                </div>
                <div className="card rounded-none w-96 -mt-32">
                    <figure><img src={img4} alt="" className='' /></figure>
                </div>
                <div className="card rounded-none w-96">
                    <figure><img src={img5} alt="" className='' /></figure>
                </div>
                <div className="card rounded-none w-[407px] -ml-6">
                    <figure><img src={img6} alt="" className='' /></figure>
                </div>
                <div className="card rounded-none w-96 -mt-[133px]">
                    <figure><img src={img7} alt="" className='' /></figure>
                </div>
                <div className="card rounded-none w-[800px] ">
                    <figure><img src={img8} alt="" className='' /></figure>
                </div>
            </div>
            {/* </div> */}
        </div>
    );
};

export default Gallery;