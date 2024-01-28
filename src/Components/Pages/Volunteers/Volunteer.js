import React from 'react';
import volunteerBg from '../../../assets/volunteers/volunteer-bg.png';
import img1 from '../../../assets/volunteers/volun-img1.png';
import img2 from '../../../assets/volunteers/volun-img2.png';
import './Volunteer.css';

const Volunteer = () => {
    return (
        <div className='mt-12'>
            <div className="hero lg:min-h-screen" style={{ backgroundImage: `url(${volunteerBg})` }}>
                <div className=" "></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-7xl mt-32">
                        <h1 className="text-7xl font-extrabold text-[#24316b] [-webkit-text-stroke:4px_white]">Become a Volunteer</h1>
                    </div>
                </div>
            </div>
            <div className=" lg:mx-16 mx-6 lg:mt-16 mt-4">
                <div className="hero-content flex-col lg:flex-row-reverse ">
                    <div className='lg:block hidden'>
                        <img src={img1} alt='' className="max-w-xl " />
                    </div>
                    <div className=''>
                        <h1 className="text-4xl">Help First</h1>
                        <h1 className="text-4xl text-[#24316B] font-bold">Let’s help <br /> together</h1>
                        <br />
                        <p className="lg:py-6 py-3 volunteer-p">COVID-19 exhibits not only a health crisis in Bangladesh but also make severe food crisis among the impoverished especially in Dhaka city. The humanitarian crisis is on the going in whole, Bangladesh is also suffering from humanitarian crises due to this pandemic. <br /> <br /> You might know that many people especially in Dhaka city have lost their source of earning and become transitorily jobless. For this reason, they are not capable to buy foods recurrently for themselves or for families.
                        </p>
                    </div>

                </div>
                <div className="card-actions lg:ml-2 ml-4">
                    <a href="tel:+8801755744312"><button className="volunteer-btn">CALL +880 1755 744 312</button></a>
                </div>
            </div>
            <div className=" mx-16 mt-16 lg:block hidden">
                <div className="hero-content flex-col lg:flex-row">
                    <div>
                        <img src={img2} alt='' className="max-w-xl " />
                    </div>
                    <div className='ml-8'>
                        <h1 className="text-4xl text-[#24316B] font-bold">More People More impact</h1>
                        <br />
                        <p className="py-6 corona-p">COVID-19 exhibits not only a health crisis in Bangladesh but also make severe food crisis among the impoverished especially in Dhaka city. The humanitarian crisis is on the going in whole, Bangladesh is also suffering from humanitarian crises due to this pandemic.
                        </p>
                    </div>
                </div>
            </div>
            <div className=" bg-[#E9F0FD] lg:py-20 py-10 lg:mt-16 mt-10">
                <div className="hero-content flex-col lg:flex-row ">
                    <div className="text-center lg:text-left lg:-mt-32 lg:mx-16">
                        <h1 className="lg:text-4xl text-2xl text-[#253E88]">Help The People With us</h1>
                        <h1 className="lg:text-4xl text-3xl text-[#24316B] font-bold">Need Your Heartful Help</h1>
                        <p className="py-6 px-4 volunteer-p">Lorem Ipsum is simply dummy text of the printin typesetting  dummy text ever  when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            <br /> <br />
                            Bring to the table win-win survival strategies to proactive domination.  is on the runway heading towards a streamlined cloud solution. User gener eal-time will have multiple touch points for offshoring</p>
                        <div className=''>
                            <div>
                                <h6 className="lg:text-2xl text-lg text-[#24316B] font-bold lg:ml-0 -ml-[50px]"><span className='number-design'>01</span> Create Personal Profile</h6>
                                <p className="volunteer-p lg:ml-14 ml-20">Veniam quae. Nostrum facere repellendus minus quod aut neque reiciendis.</p>
                            </div>
                            <br />
                            <div>
                                <h6 className="lg:text-2xl text-lg text-[#24316B] font-bold lg:ml-0 -ml-[50px]"><span className='number-design'>02</span> Add your organization</h6>
                                <p className="volunteer-p lg:ml-14 ml-20">Veniam quae. Nostrum facere repellendus minus quod aut neque reiciendis.</p>
                            </div>
                            <br />
                            <div>
                                <h6 className="lg:text-2xl text-lg text-[#24316B] font-bold"><span className='number-design'>03</span> Add volunteer opportunities</h6>
                                <p className="volunteer-p lg:ml-14 ml-20">Veniam quae. Nostrum facere repellendus minus quod aut neque reiciendis.</p>
                            </div>
                            <br />
                            <div>
                                <h6 className="lg:text-2xl text-lg text-[#24316B] font-bold lg:ml-0 -ml-9"><span className='number-design'>04</span> You are ready to recruit!</h6>
                                <p className="volunteer-p lg:ml-14 ml-20">Veniam quae. Nostrum facere repellendus minus quod aut neque reiciendis.</p>
                            </div>
                            <div className="card-actions ml-20 mt-6">
                                <a href="#form"><button className="volunteer-start-btn">Get Started</button></a>
                            </div>
                        </div>
                    </div>
                    <div className="w-full shadow-2xl bg-base-100 p-10" id='form'>
                        <div>
                            <h6 className="text-3xl text-[#24316B] font-bold">Complete the Form</h6>
                            <p className="volunteer-p">Fill Form and Become <br /> Volunteer</p>
                        </div>
                        <form className="card-body">
                            <select className="border-2 p-3 w-full" required>
                                <option disabled selected required>Select Division</option>
                                <option>Barishal</option>
                                <option>Chattogram</option>
                                <option>Dhaka</option>
                                <option>Khulna</option>
                                <option>Rajshahi</option>
                                <option>Rongpur</option>
                                <option>Sylhet</option>
                                <option>Mymensingh</option>
                            </select>
                            <div className="form-control mt-4">
                                <input type="text" placeholder="Your District" className="border-2 p-3" required />
                            </div>
                            <div className="form-control mt-4">
                                <input type="name" placeholder="Enter Your Name" className="border-2 p-3" required />
                            </div>
                            <select className="border-2 p-3 w-full mt-4" required>
                                <option disabled selected required>Select Highest Education</option>
                                <option>MSC</option>
                                <option>BSC (Eng)</option>
                                <option>BA (Hon's)</option>
                                <option>Degree</option>
                                <option>HSC</option>
                            </select>
                            <div className="form-control mt-4">
                                <input type="name" placeholder="Enter Institution Name" className="border-2 p-3" required />
                            </div>
                            <div className="form-control mt-4">
                                <input type="date" placeholder="" className="border-2 p-3" required />
                            </div>
                            <select className="border-2 p-3 w-full mt-4">
                                <option disabled selected required>Select Gender</option>
                                <option>Male</option>
                                <option>Female</option>
                            </select>
                            <select className="border-2 p-3 w-full mt-4">
                                <option disabled selected>Select Blood Group</option>
                                <option>A+</option>
                                <option>A-</option>
                                <option>B+</option>
                                <option>B-</option>
                                <option>O+</option>
                                <option>O-</option>
                                <option>AB+</option>
                                <option>AB-</option>
                            </select>
                            <select className="border-2 p-3 w-full mt-4">
                                <option disabled selected>Select T-Shirt Size</option>
                                <option>XXl</option>
                                <option>XL</option>
                                <option>L</option>
                                <option>M</option>
                                <option>S</option>
                            </select>
                            <div className="form-control mt-4">
                                <input type="phone" placeholder="Phone Number" minLength={11} className="border-2 p-3" required />
                            </div>
                            <div className="form-control mt-4">
                                <input type="email" placeholder="Your Email" className="border-2 p-3" required />
                            </div>
                            <div className="form-control mt-4">
                                <input type="address" placeholder="Address" className="border-2 p-3" required />
                            </div>
                            <div className="form-control mt-5 card-actions justify-center">
                                <button className="volunteer-submit-btn">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Volunteer;