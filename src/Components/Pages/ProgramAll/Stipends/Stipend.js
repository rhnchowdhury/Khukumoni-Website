import React from 'react';
import img1 from '../../../../assets/program/prog-img8.png';
import './Stipends.css';

const Stipend = () => {
    return (
        <div className='my-8'>
            <div className=" mx-20">
                <div className="hero-content flex-col lg:flex-row ">
                    <div>
                        <h1 className='text-5xl font-bold text-[#24316B]'>Khukumoni Stipends</h1>
                        <img src={img1} alt='' className="max-w-xl rounded-lg mt-8" />
                    </div>
                    <div className='ml-12'>
                        <h1 className="text-2xl text-[#24316B] font-bold">Project Info</h1>
                        <p className="py-6 stipend-p">Stipends in Bangladesh play a crucial role in promoting education and alleviating poverty. The government of Bangladesh, along with various non-governmental organizations, offers stipends to students at different levels of education, particularly in primary and secondary schools. These stipends are targeted at disadvantaged and underprivileged students to ensure they have access to quality education.
                        </p>
                    </div>
                </div>
                <h1 className="text-2xl text-[#24316B] font-bold">Description</h1>
                <p className='stipend-p mt-4'>Stipends serve as incentives for families to send their children to school and keep them engaged in the learning process. They help reduce the financial burden on parents, making it more affordable for them to educate their children. Stipends are often provided to girls and students from marginalized communities, promoting gender equality and social inclusion.

                    By offering stipends, Bangladesh aims to increase literacy rates, reduce the dropout rate, and ultimately break the cycle of poverty. These programs not only empower students with knowledge but also contribute to the overall development and progress of the nation. Stipends in Bangladesh are a testament to the government's commitment to improving access to education and building a brighter future for its citizens.
                </p>
            </div>
        </div>
    );
};

export default Stipend;