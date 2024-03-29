import React from 'react';
import img1 from '../../../../assets/home-imgs/story-img.png';
import bgImg from '../../../../assets/logos/frame-1.svg';
import './Story.css';

const Story = () => {
    return (
        <div className='lg:mt-20 mt-12'>
            <div className='lg:mx-20'>
                <h2 className='story-h2 my-5'>Our Story</h2>
                <div className='flex'>
                    <div className='w-[1600px]'>
                        <div className=''>
                            <h1 className='story-h1 lx:mx-0 mx-2'>Khukumoni Foundation</h1>
                            <p className='story-p mt-5 lx:mx-0 mx-7'><span className='story-span'>Khukumoni Foundations</span> destination is empower unprivileged children and youth societies in moral, social, institutional and practical education and voluntary work for the benefit of socio-economic development in Bangladesh.
                                <br />
                                <br />
                                <span className='story-span'>Khukumoni Foundation</span> (for helpless People) is a non-profitable educational support organization in Bangladesh . We believe every child deserves a bright future in the world. <span className='story-span'>Khukumoni Foundation</span> works for the development of children from socially and economically disadvantaged background of the country through creating the educational and social values.
                                <br />
                                <br />
                                Khukumoni has gradually grown as a recognized non-profit charity to break the cycle of poverty and uplift the standard of living of underprivileged street children. We work to end the cycle of child homelessness by identifying and engaging with them. Our organization was founded in 2016 by a group of volunteers in Suhrawardy Udyan, Dhaka. The chairman of our organization is <span className='story-span'>MD AL MANSUR RAHMAN</span> who is the dreamer, enthusiastic and social activist. A team of passionate peoples from differing backgrounds in the society came together to dedicate their time, resources and skills to take forward the organizations.
                                <br />
                                <br />
                                In these four years of journey, we have achieved a new era, opening several branches of the school, running several projects, increasing volunteer involvement and so on. We remain a nearly all-volunteer organization that prioritizes the needs of the street child that we serve.</p>
                        </div>
                    </div>
                    <div className='story-sm-responsive'>
                        <div>
                            <div className='mt-[450px] w-96'>
                                <img src={bgImg} alt="" className='ml-20' />
                            </div>
                            <div className='absolute -mt-[470px] w-96'>
                                <img src={img1} alt="" className='ml-16' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-[#24316B] w-full h-12 relative -mt-6'></div>
        </div>
    );
};

export default Story;