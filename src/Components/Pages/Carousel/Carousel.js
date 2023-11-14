import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import img1 from '../../../assets/Carousel-img/img-1.png';
import img2 from '../../../assets/Carousel-img/img-2.jpg';
import img3 from '../../../assets/Carousel-img/img-3.jpg';
import img4 from '../../../assets/Carousel-img/img-4.jpg';
import img5 from '../../../assets/Carousel-img/img-5.jpg';

const Carousel = () => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper z-[-0]"
            >
                <SwiperSlide>
                    <img src={img1} alt="" className='w-full h-[548px]' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img2} alt="" className='w-full h-[548px]' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img3} alt="" className='w-full h-[548px]' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img4} alt="" className='w-full h-[548px]' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img5} alt="" className='w-full h-[548px]' />
                </SwiperSlide>
                {/* <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide> */}
            </Swiper>
        </>
    );
};

export default Carousel;