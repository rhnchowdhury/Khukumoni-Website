import React from 'react';
import img1 from '../../../../assets/program/prog-img7.png';
import './Dress.css';

const Dress = () => {
    return (
        <div className='my-8'>
            <div className=" mx-20">
                <div className="hero-content flex-col lg:flex-row ">
                    <div>
                        <h1 className='text-5xl font-bold text-[#24316B]'>New Dress giving program</h1>
                        <img src={img1} alt='' className="max-w-xl rounded-lg mt-8" />
                    </div>
                    <div className='ml-12 '>
                        <h1 className="text-2xl text-[#24316B] font-bold">Project Info</h1>
                        <p className="py-6 dress-p">Khukumoni foundation runs a micro project named new dress giving among the underprivileged and orphan children across the country. At different festivals, we offer new clothes for needy children and the elderly for 5 takas. In this attempt, they are being filled with joy and ecstasy. We want everyone on earth to be equally joyful on different festivals or religious occasions.
                        </p>
                    </div>
                </div>
                <h1 className="text-2xl text-[#24316B] font-bold">Description</h1>
                <p className='dress-p mt-4'>Khukumoni foundation runs a micro project named new dress giving among the underprivileged and orphan children across the country. At different festivals, we offer new clothes for needy children and the elderly for 5 takas. In this attempt, they are being filled with joy and ecstasy. We want everyone on earth to be equally joyful on different festivals or religious occasions. The micro-project of the Khukumoni foundation helps to provide new dresses among the underprivileged and orphan children. There have a large number of the child who is not able to buy a new dress rather they depend on used dresses donated by the local donor or good-hearted man. Sometimes they feel pity for themselves to wear old dressed. For making a glimpse of happiness into their heart, Khukumoni undertakes this project that will also make them confident.

                    Under our project, many of the underprivileged children and poor people get new dresses at different festivals especially in Eid-ul Adha, Eid-ul-Fitr, and other religious festivals. We can realize the significance of happiness of our festivals by sharing joy with others, especially the underprivileged ones. We all of us know that most of the street children ignored, we need to do something for them. Creating happiness among others can bring joy in our own lives. All of us should do something like this for the needy or underprivileged people to remove inequality and distress in our society.
                </p>
            </div>
        </div>
    );
};

export default Dress;