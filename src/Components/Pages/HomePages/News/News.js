import React from 'react';
import './News.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import vdo1 from '../../../../assets/videos/Somoy TV.mp4';
import vdo2 from '../../../../assets/videos/Jamuna TV.mp4';
import vdo3 from '../../../../assets/videos/Desh TV.mp4';
import vdo4 from '../../../../assets/videos/71 tv.mp4';

const News = () => {
    return (
        <div className='mt-16 mx-16'>
            <h2 className='news-h2'>Khukumoni Foundation’s on News</h2>
            <>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper mt-20"
                >
                    <SwiperSlide>
                        <div className='flex justify-center gap-8'>
                            <div>
                                <video loop controls className='w-[500px] rounded-2xl'>
                                    <source src={vdo1} type='video/mp4' />
                                </video>
                                <h1 className='mt-4 text-center text-2xl font-bold'>Somoy TV</h1>
                            </div>
                            <div>
                                <video loop controls className='w-[500px] rounded-2xl'>
                                    <source src={vdo2} type='video/mp4' />
                                </video>
                                <h1 className='mt-4 text-center text-2xl font-bold'>Jamuna TV</h1>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex justify-center gap-8'>
                            <div>
                                <video loop controls className='w-[550px] h-[285px] rounded-2xl'>
                                    <source src={vdo3} type='video/mp4' />
                                </video>
                                <h1 className='mt-4 text-center text-2xl font-bold'>Desh TV</h1>
                            </div>
                            <div>
                                <video loop controls className='w-[500px] rounded-2xl'>
                                    <source src={vdo4} type='video/mp4' />
                                </video>
                                <h1 className='mt-4 text-center text-2xl font-bold'>71 TV</h1>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </>
        </div>
    );
};

export default News;