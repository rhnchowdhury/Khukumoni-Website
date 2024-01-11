import React from 'react';
import img1 from '../../../../assets/program/prog-img9.png';
import './Clean.css';

const Clean = () => {
    return (
        <div className='lg:my-8 my-5'>
            <div className="lg:mx-20">
                <div className="hero-content flex-col lg:flex-row ">
                    <div>
                        <h1 className='lg:text-5xl text-4xl font-bold text-[#24316B]'>Cleansing Program</h1>
                        <img src={img1} alt='' className="lg:max-w-xl w-96 rounded-lg mt-8" />
                    </div>
                    <div className='lg:ml-12 lg:mt-32 mt-4'>
                        <h1 className="text-2xl text-[#24316B] font-bold">Project Info</h1>
                        <p className="py-6 clean-p">We train slum children on how to keep themselves neat and clean for better lives. Cleaning is the precondition for becoming healthy and lead better lives. Our mentors and volunteers of all time have emphasized on the necessity of cleanliness among these uncared street children. We believe that most of the diseases and epidemics are caused due to unhygienic conditions and cleanliness helps us to avoid this situation.
                        </p>
                    </div>
                </div>
                <h1 className="ml-4 lg:ml-0 text-2xl text-[#24316B] font-bold">Description</h1>
                <p className='clean-sec-p mt-4'>Clean program Healthy environment is the first principle of good health practice.This is the way khukumoni do cleanliness programs. In this program, we clean up all the dirty places such as roads,small drains, rail lines, slums, etc.We hope we can meet this basic need for poor children.

                    We train slum children on how to keep themselves neat and clean for better lives. Cleaning is the precondition for becoming healthy and lead better lives. Our mentors and volunteers of all time have emphasized on the necessity of cleanliness among these uncared street children. We believe that most of the diseases and epidemics are caused due to unhygienic conditions and cleanliness helps us to avoid this situation.</p>
            </div>
        </div>
    );
};

export default Clean;