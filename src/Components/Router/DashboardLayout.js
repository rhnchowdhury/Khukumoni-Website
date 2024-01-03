import React from 'react';
// import Dashboard from '../../Pages/Dashboard/Test/Check';
// import { Link, Outlet } from 'react-router-dom';
// import NavBar from '../NavBar/NavBar';
// import img1 from '../../../assets/logos/head-logo.png';
import DashHeader from '../Pages/Dashboard/DashHeader/DashHeader';
import { Link, Outlet } from 'react-router-dom';
import { FaDollarSign, FaHome, FaUser, FaUserPlus, FaUsers } from 'react-icons/fa';
import { PiUsersFourFill } from "react-icons/pi";
import { TbMessageCircle } from "react-icons/tb";

const DashboardLayout = () => {
    return (

        //         <div className="drawer-side">
        //             <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
        //             <ul className="menu p-4 w-80 bg-red-500 text-base-content">
        //                 {/* <Dashboard></Dashboard> */}
        //                 <li><Link to='/dashboard/test' className='text-orange-600 '>Add Products</Link></li>
        //                 {/* <li><Link to='/dashboard' className='text-orange-600'>My Orders</Link></li> */}
        //                 {/* {
        //                 isBuyer &&
        //                 <li><Link to='/dashboard' className='text-orange-600'>My Orders</Link></li>

        //             } */}
        //                 {/* {isSeller &&
        //                 <>
        //                     <li><Link to='/dashboard/add' className='text-orange-600 '>Add Products</Link></li>
        //                     <li><Link to='/dashboard/product' className='text-orange-600 '>My Products</Link></li>
        //                 </>
        //             } */}
        //                 {/* {
        //                 isAdmin && <>

        //                     <li><Link to='/dashboard/users' className='text-orange-600 '>All Buyers</Link></li>
        //                     <li><Link to='/dashboard/sellers' className='text-orange-600 '>All Sellers</Link></li>
        //                 </>
        //             } */}
        //             </ul>
        <div>
            <DashHeader></DashHeader>
            <div className="drawer lg:drawer-open">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side mt-16 lg:mt-0">
                    <label htmlFor="dashboard-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        <li><Link to='/dashboard' className='text-[#F7941D] font-semibold text-[15px]'><span><FaHome /></span> Dashboard</Link></li>
                        <li><Link to='/dashboard/sms' className='text-[#F7941D] font-semibold text-[15px]'><span><TbMessageCircle /></span> Send SMS</Link></li>
                        <li><Link to='/dashboard/addDonar' className='text-[#F7941D] font-semibold text-[15px]'><span><FaUserPlus /></span>Add New Donar</Link></li>
                        <li><Link to='/dashboard/donar' className='text-[#F7941D] font-semibold text-[15px]'><span><FaUsers /></span>All Donar</Link></li>
                        <li><Link to='/dashboard/donar' className='text-[#F7941D] font-semibold text-[15px]'><span><FaDollarSign /></span>Donation List</Link></li>
                        <li><Link to='/dashboard/donar' className='text-[#F7941D] font-semibold text-[15px]'><span><FaUser /></span>User</Link></li>
                        <li><Link to='/dashboard/volunteer' className='text-[#F7941D] font-semibold text-[15px]'><span><PiUsersFourFill /></span>Volunteer</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;