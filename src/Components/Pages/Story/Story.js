import React from 'react';
import img1 from '../../../assets/home-imgs/story-img.png';
import './Story.css';

const Story = () => {
    return (
        <div>
            <h2 className='story-h2'>Our Story</h2>
            <div className='mx-8 flex'>
                <div>
                    <h1 className='story-h1'>Khukumoni Foundation</h1>
                    <p className='story-p'><span className='story-span'>Khukumoni Foundations</span> destination is empower unprivileged children and youth societies in moral, social, institutional and practical education and voluntary work for the benefit of socio-economic development in Bangladesh.
                        <br />
                        <span className='story-span'>Khukumoni Foundation</span> (for helpless People) is a non-profitable educational support organization in Bangladesh . We believe every child deserves a bright future in the world. <span className='story-span'>Khukumoni Foundation</span> works for the development of children from socially and economically disadvantaged background of the country through creating the educational and social values.
                        <br />
                        Khukumoni has gradually grown as a recognized non-profit charity to break the cycle of poverty and uplift the standard of living of underprivileged street children. We work to end the cycle of child homelessness by identifying and engaging with them. Our organization was founded in 2016 by a group of volunteers in Suhrawardy Udyan, Dhaka. The chairman of our organization is <span className='story-span'>MD AL MANSUR RAHMAN</span> who is the dreamer, enthusiastic and social activist. A team of passionate peoples from differing backgrounds in the society came together to dedicate their time, resources and skills to take forward the organizations.
                        <br />
                        In these four years of journey, we have achieved a new era, opening several branches of the school, running several projects, increasing volunteer involvement and so on. We remain a nearly all-volunteer organization that prioritizes the needs of the street child that we serve.</p>
                </div>
                <div>
                    <img src={img1} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Story;