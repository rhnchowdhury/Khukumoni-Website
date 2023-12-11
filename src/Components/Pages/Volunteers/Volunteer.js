import React from 'react';
import volunteerBg from '../../../assets/volunteers/volunteer-bg.png';
import img1 from '../../../assets/volunteers/volun-img1.png';
import img2 from '../../../assets/volunteers/volun-img2.png';
import './Volunteer.css';

const Volunteer = () => {
    return (
        <div className='mt-12'>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${volunteerBg})` }}>
                <div className=" "></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-7xl mt-32">
                        <h1 className="text-7xl font-extrabold text-[#24316b] [-webkit-text-stroke:4px_white]">Become a Volunteer</h1>
                    </div>
                </div>
            </div>
            <div className=" mx-16 mt-16">
                <div className="hero-content flex-col lg:flex-row-reverse ">
                    <div>
                        <img src={img1} alt='' className="max-w-xl " />
                    </div>
                    <div className=''>
                        <h1 className="text-4xl">Help First</h1>
                        <h1 className="text-4xl text-[#24316B] font-bold">Let’s help <br /> together</h1>
                        <br />
                        <p className="py-6 volunteer-p">COVID-19 exhibits not only a health crisis in Bangladesh but also make severe food crisis among the impoverished especially in Dhaka city. The humanitarian crisis is on the going in whole, Bangladesh is also suffering from humanitarian crises due to this pandemic. <br /> <br /> You might know that many people especially in Dhaka city have lost their source of earning and become transitorily jobless. For this reason, they are not capable to buy foods recurrently for themselves or for families.
                        </p>
                    </div>

                </div>
                <div className="card-actions ">
                    <button className="volunteer-btn">CALL +880 1755 744 312</button>
                </div>
            </div>
            <div className=" mx-16 mt-16">
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
            <div className=" bg-[#E9F0FD] py-20 mt-16">
                {/* hero min-h-screen */}
                <div className="hero-content flex-col lg:flex-row mx-16">
                    <div className="text-center lg:text-left -mt-32">
                        {/* <h1 className="text-5xl font-bold">Login now!</h1> */}
                        <h1 className="text-4xl text-[#253E88]">Help The People With us</h1>
                        <h1 className="text-4xl text-[#24316B] font-bold">Need Your Heartful Help</h1>
                        <p className="py-6 volunteer-p">Lorem Ipsum is simply dummy text of the printin typesetting  dummy text ever  when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            <br /> <br />
                            Bring to the table win-win survival strategies to proactive domination.  is on the runway heading towards a streamlined cloud solution. User gener eal-time will have multiple touch points for offshoring</p>
                        <div className=''>
                            <div>
                                <h6 className="text-2xl text-[#24316B] font-bold"><span className='number-design'>01</span> Create Personal Profile</h6>
                                <p className="volunteer-p ml-14">Veniam quae. Nostrum facere repellendus minus quod aut neque reiciendis.</p>
                            </div>
                            <br />
                            <div>
                                <h6 className="text-2xl text-[#24316B] font-bold"><span className='number-design'>02</span> Add your organization</h6>
                                <p className="volunteer-p ml-14">Veniam quae. Nostrum facere repellendus minus quod aut neque reiciendis.</p>
                            </div>
                            <br />
                            <div>
                                <h6 className="text-2xl text-[#24316B] font-bold"><span className='number-design'>03</span> Add volunteer opportunities</h6>
                                <p className="volunteer-p ml-14">Veniam quae. Nostrum facere repellendus minus quod aut neque reiciendis.</p>
                            </div>
                            <br />
                            <div>
                                <h6 className="text-2xl text-[#24316B] font-bold"><span className='number-design'>04</span> You are ready to recruit!</h6>
                                <p className="volunteer-p ml-14">Veniam quae. Nostrum facere repellendus minus quod aut neque reiciendis.</p>
                            </div>
                            <div className="card-actions ml-20 mt-6">
                                <a href="#login"><button className="volunteer-start-btn">Get Started</button></a>
                            </div>
                        </div>
                    </div>
                    <div className="w-full shadow-2xl bg-base-100 p-10" id='login'>
                        {/* shrink-0  max-w-sm*/}
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
                            <div className="form-control mt-4">
                                <input type="date" placeholder="" className="border-2 p-3" required />
                            </div>
                            <select className="border-2 p-3 w-full mt-4">
                                <option disabled selected>Select Gender</option>
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
                                {/* <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label> */}
                            </div>
                            <div className="form-control mt-4">
                                <input type="email" placeholder="Your Email" className="border-2 p-3" required />
                            </div>
                            <div className="form-control mt-4">
                                <input type="address" placeholder="Address" className="border-2 p-3" required />
                            </div>

                            {/* <div className=" mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div> */}
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