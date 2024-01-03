import React from 'react';
import { Link } from 'react-router-dom';

const AllDonar = () => {
    return (
        <div className='mt-5'>
            <h2 className="card-title text-[#F7941D] text-center justify-center">Donar Information</h2>
            <hr className="h-px my-2 mx-16 bg-[#F7941D]"></hr>
            <div className='mx-2'>
                <p className='my-4 text-[#F7941D] text-xl'>Specific Search</p>
                <form action="">
                    <input type="text" placeholder='A/C No' className="input input-bordered w-full max-w-xs ml-4" />
                    <input type="text" placeholder='Phone Number' className="input input-bordered w-full max-w-xs ml-4" />
                    <div className='mt-4'>
                        <button className='rounded-md py-2 px-5 bg-[#F7941D] text-white'>Search</button>
                        <button className='ml-3 rounded-md py-2 px-5 bg-[#F7941D] text-white'>Download</button>
                    </div>
                </form>
            </div >
            <div className='mt-8 mx-2'>
                <div className="overflow-x-auto">
                    <table className="table w-full border-collapse border border-slate-400 ">
                        <thead>
                            <tr className='font-extrabold text-[14px] text-black'>
                                <th className='border border-slate-300'>Date</th>
                                <th className='border border-slate-300'>A/C No</th>
                                <th className='border border-slate-300'>Donor Name</th>
                                <th className='border border-slate-300'>Phone Number</th>
                                <th className='border border-slate-300'>Email</th>
                                {/* <th className='border border-slate-300'>Division</th> */}
                                <th className='border border-slate-300'>Total Donate</th>
                                <th className='border border-slate-300'>Action</th>
                            </tr>
                        </thead>
                        <tbody className=' '>
                            <tr className=''>
                                <th className='font-normal border border-slate-300'>1-2-23</th>
                                <th className='font-normal border border-slate-300'>100778</th>
                                <th className='font-normal border border-slate-300'>Raihan</th>
                                <th className='font-normal border border-slate-300'>01779983246</th>
                                <th className='font-normal border border-slate-300'>test@gmail</th>
                                {/* <th className='font-normal border border-slate-300'>Barishal</th> */}
                                <th className='font-normal border border-slate-300'>00.00</th>
                                <th className='font-normal border border-slate-300'><Link to='/dashboard/donarInfo'><button className='btn btn-xs bg-[#F7941D] text-white hover:bg-[#F7941D]'>Details</button></Link></th>

                                {/* <td><button className='btn btn-xs btn-warning'>Details</button></td> */}
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </div >
    );
};

export default AllDonar;