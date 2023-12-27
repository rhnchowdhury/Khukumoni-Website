import React from 'react';
import Dashboard from '../../Pages/Dashboard/Test/Check';
import { Link, Outlet } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';

const DashboardLayout = () => {
    return (
        // <div>
        //     {/* <Header></Header> */}
        //     <NavBar></NavBar>
        //     <label tabIndex={0} htmlFor="dashboard-drawer" className="btn btn-ghost lg:drawer-open lg:hidden">
        //         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        //     </label>
        //     <div className="drawer drawer-mobile">
        //         <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
        //         <div className="drawer-content">
        //             <Outlet></Outlet>
        //         </div>
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

        //         </div>
        //     </div>
        // </div>
        <div >
            {/* className="drawer lg:drawer-open" */}
            <label tabIndex={0} htmlFor="dashboard-drawer" className="btn btn-ghost  lg:drawer-open lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">
                {/* Page content here */}
                {/* <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}
                {/* <label tabIndex={0} htmlFor="dashboard-drawer" className="btn btn-ghost  lg:drawer-open lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label> */}
            </div>
            <div className="drawer-side mt-12">
                <label htmlFor="dashboard-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                    {/* Sidebar content here */}
                    <li><a>Sidebar Item 1</a></li>
                    <li><a>Sidebar Item 2</a></li>
                </ul>

            </div>
        </div>
    );
};

export default DashboardLayout;