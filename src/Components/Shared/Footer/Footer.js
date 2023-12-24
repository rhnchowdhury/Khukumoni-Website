import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/footer/khukumoni-white-logo.svg';
import img1 from '../../../assets/footer/footer-img1.png';
import img2 from '../../../assets/footer/footer-img2.png';
import bgImg1 from '../../../assets/logos/frame-6.svg';
import bgImg2 from '../../../assets/logos/frame-7.svg';
import bgImg3 from '../../../assets/logos/frame-8.svg';
import { BsFacebook, BsInstagram } from 'react-icons/bs';
import { FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';
import { IoLogoYoutube } from 'react-icons/io5';
import { GoMail } from "react-icons/go";
import './Footer.css';

const Footer = () => {
    return (
        <div className='mt-8'>
            <div className="relative  bg-[#18214E] w-full h-[430px] overflow-hidden text-left text-sm text-white ">
                <div className="absolute top-[405px] left-[523px] w-[171px] h-4 text-md">
                    <div className="absolute top-[6.25%] left-[0%] font-light">
                        © 2023 All Rights Reserved
                    </div>
                </div>
                <div className="absolute top-[380px] left-[350px] flex flex-row items-start justify-start gap-[40px] font-medium">
                    <div className="relative">Privacy Policy</div>
                    <div className="relative">Terms of Use</div>
                    <div className="relative">Sales and Refunds</div>
                    <div className="relative">Legal</div>
                    <div className="relative">Site Map</div>
                </div>
                <div className="absolute top-[230px] left-[535px] w-[251px] h-[38px]">
                    <div className="absolute top-[10px] left-[37px] w-[214px] h-[38px]">
                        <div className="absolute top-[9.89%] left-[0%]">
                            <p className="m-0">R.H Home Center, Green Road, Farmgate , Dhaka, Bangladesh</p>
                        </div>
                    </div>
                    <FaMapMarkerAlt className="absolute top-[16px] left-[0px] w-6 h-6 overflow-hidden"></FaMapMarkerAlt>
                </div>
                <div className="absolute top-[290px] left-[535px] w-[186px] h-6">
                    <div className="absolute top-[2px] left-[37px] w-[149px] h-5">
                        <div className="absolute top-[5%] left-[0.67%]">
                            Info@khukumoni.com
                        </div>
                    </div>
                    <GoMail className="absolute top-[0px] left-[0px] w-6 h-6 overflow-hidden"></GoMail>
                </div>
                <b className="absolute top-[210px] left-[530px] text-[18px]">Contact Us</b>
                <div className="absolute top-[330px] left-[535px] rounded-md bg-white shadow-[0px_4px_6px_-4px_rgba(24,_39,_75,_0.12),_0px_8px_8px_-4px_rgba(24,_39,_75,_0.08)] box-border w-[150px] h-[30px] flex flex-row items-center justify-center py-[5px] px-[26px] text-center text-base text-black border-[1px] border-solid border-white">
                    <div className="relative cursor-pointer">
                        <a href="https://www.youtube.com/@KhukumoniFoundation-kc1uq" target="_blank" rel="noreferrer noopener">Subscribe</a>
                    </div>
                </div>
                <img src={bgImg1} alt="" className="absolute h-[94.63%] w-[41.17%] top-[0%] right-[-3.05%] bottom-[15.37%] left-[61.88%] max-w-full overflow-hidden max-h-full opacity-[0.35]" />
                <div className="absolute h-[68.71%] w-[25.97%] top-[18.14%] right-[66.18%] bottom-[18.14%] left-[1.85%] text-lg">
                    <b className="absolute top-[0%] left-[31.82%]">Home</b>
                    <b className="absolute top-[13.35%] left-[31.82%]">About Us</b>
                    <b className="absolute top-[25.69%] left-[31.82%]">Our Program</b>
                    <b className="absolute top-[37.04%] left-[31.82%]">Be a Volunteer</b>
                    <b className="absolute top-[49.39%] left-[31.82%]">News</b>
                    <b className="absolute top-[60.39%] left-[31.82%]">Team</b>
                    <b className="absolute top-[71.68%] left-[31.82%]">Contact</b>
                </div>
                <img src={logo} alt="" className="absolute top-[50px] left-[523px] w-[150px] h-[160px] overflow-hidden" />
                <div className="absolute w-[17.01%] right-[0%] bottom-[0px] left-[82.99%] bg-[#24316B] h-[60px] flex flex-col items-end justify-center py-[27px] px-[38px] box-border">
                    <div className="h-[18.11px] flex flex-row items-center justify-end gap-[17px]">
                        <BsInstagram className='nav-icon'></BsInstagram>
                        <a href="https://www.facebook.com/khukumonifoundation" target="_blank" rel="noreferrer noopener"><BsFacebook className='nav-icon'></BsFacebook></a>
                        <a href="https://www.youtube.com/@KhukumoniFoundation-kc1uq" target="_blank" rel="noreferrer noopener"><IoLogoYoutube className='nav-icon' /></a>
                        <a href="https://www.linkedin.com/in/khukumoni-foundation-21041a192/" target="_blank" rel="noreferrer noopener"><FaLinkedin className='nav-icon'></FaLinkedin></a>
                    </div>
                </div>
                <div className="absolute top-[28px] left-[950px] w-[281px] h-[322px] overflow-hidden">
                    <img src={img2} alt="" className="absolute h-[60%] w-[40%] top-[18%] right-[45.11%] bottom-[3.14%] left-[5.6%] max-w-full overflow-hidden max-h-full object-cover" />
                    <img src={img1} alt="" className="absolute h-[70%] w-[45%] top-[7.15%] right-[4.02%] bottom-[2.26%] left-[36.82%] max-w-full overflow-hidden max-h-full object-cover" />
                </div>
                <div className="absolute top-[270px] left-[950px] w-[250px]  text-[20px]">
                    <div className="absolute   rounded-xl bg-[#24316B] box-border w-[253px] h-[60px] border-[4px] border-solid border-[#6286C4] " />
                    <Link><b className="absolute top-[18px] left-[65px]">Donate Now</b></Link>
                </div>
                <img src={bgImg3} alt="" className="absolute top-[0px] left-[0px] w-[88px] h-[80px] overflow-hidden opacity-[0.35]" />
                <img src={bgImg2} alt="" className="absolute bottom-[0px] left-[0px] w-[198px] h-[50px] overflow-hidden opacity-[0.32]" />
            </div>
        </div>
    );
};

export default Footer;