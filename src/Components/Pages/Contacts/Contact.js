import React from 'react';
import { AiOutlineMail } from "react-icons/ai";
import { IoCallOutline, IoLogoYoutube } from "react-icons/io5";
import { BsFacebook, BsInstagram } from 'react-icons/bs';
import { FaLinkedin } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
    return (
        <div className='mt-12'>
            <div className="px-20">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <h1 className='contact-h1'>Contact</h1>
                        <h1 className="text-5xl font-bold mt-3">Get in Touch With Us</h1>
                        <p className="py-6 mr-32 contact-p">Lorem Ipsum is simply dummy text of the printin typesetting dummy text ever when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
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
                        <div className='mt-5'>
                            <h1 className='text-4xl font-medium'>Follow us on social media</h1>
                            <p className='contact-p mt-3 mr-32'>Veniam quae. Nostrum facere repellendus minus quod aut aliquam neque reiciendis.</p>
                        </div>
                        <div className="mt-5">
                            <button className="flex space-x-5">
                                <a href="https://www.instagram.com/khukumonifoundation" target="_blank" rel="noreferrer noopener"><BsInstagram className='text-3xl text-[#FF6D6D]'></BsInstagram></a>
                                <a href="https://www.facebook.com/khukumonifoundation" target="_blank" rel="noreferrer noopener"><BsFacebook className='text-3xl text-[#FF6D6D]'></BsFacebook></a>
                                <a href="https://www.youtube.com/@KhukumoniFoundation-kc1uq" target="_blank" rel="noreferrer noopener"><IoLogoYoutube className='text-3xl text-[#FF6D6D]' /></a>
                                <a href="https://www.linkedin.com/in/khukumoni-foundation-21041a192/" target="_blank" rel="noreferrer noopener"><FaLinkedin className='text-3xl text-[#FF6D6D]'></FaLinkedin></a>
                            </button>
                        </div>
                    </div>
                    <div className="w-full py-10 border-2">
                        <form className="card-body">
                            <div className="form-control">
                                <input type="text" placeholder="Enter Your Name" className="bg-[#F5F5F5] border-2 p-4" required />
                            </div>
                            <div className="form-control mt-4">
                                <input type="text" placeholder="Phone Number" className="bg-[#F5F5F5] border-2 p-4" required />
                            </div>
                            <div className="form-control mt-4">
                                <input type="email" placeholder="Email Address" className="bg-[#F5F5F5] border-2 p-4" required />
                            </div>
                            <div className="form-control mt-4">
                                <textarea className="bg-[#F5F5F5] border-2 p-4 h-32" placeholder="Your Message"></textarea>
                            </div>
                            <div className="form-control mt-7 card-actions justify-center">
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