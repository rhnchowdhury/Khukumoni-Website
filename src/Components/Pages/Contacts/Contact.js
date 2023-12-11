import React from 'react';
import { AiOutlineMail } from "react-icons/ai";
import { IoCallOutline } from "react-icons/io5";

import './Contact.css';

const Contact = () => {
    return (
        <div>

            <div className=" ">
                {/* hero */}
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <h1 className='contact-p'>Contact</h1>
                        <h1 className="text-5xl font-bold">Get in Touch With Us</h1>
                        <p className="py-6 mr-32">Lorem Ipsum is simply dummy text of the printin typesetting dummy text ever when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <div className='flex'>
                            <div className='bg-base-200 p-5'>
                                <AiOutlineMail className='contact-icon' />
                            </div>
                            <div className="ml-5 space-y-1 mt-5">
                                <div className="font-bold">Message</div>
                                <div className="leading-[130%] ">
                                    foundationkhukumoni@gmail.com
                                </div>
                            </div>
                        </div>
                        <div className='flex mt-8'>
                            <div className='bg-base-200 p-5'>

                                <IoCallOutline className='contact-icon' />
                            </div>
                            <div className="ml-5 space-y-1 mt-5">
                                <div className="font-bold">Contact Us</div>
                                <div className="leading-[130%] ">
                                    +880 1755 744 312
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full max-w-sm border-2">
                        {/* shrink-0   shadow-2xl */}
                        <form className="card-body">
                            <div className="form-control">
                                <input type="text" placeholder="Enter Your Name" className="bg-[#F5F5F5] border-2 p-3" required />
                            </div>
                            <div className="form-control">
                                <input type="text" placeholder="Phone Number" className="bg-[#F5F5F5] border-2 p-3" required />
                            </div>
                            <div className="form-control">
                                <input type="email" placeholder="Email Address" className="bg-[#F5F5F5] border-2 p-3" required />
                            </div>
                            <div className="form-control">
                                <textarea className="bg-[#F5F5F5] border-2 p-3" placeholder="Your Message"></textarea>
                            </div>
                            <div className="form-control mt-5 card-actions justify-center">
                                <button className="contact-submit-btn">SUBMIT</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;