import React from 'react';

const DonarInfo = () => {
    return (
        <div className='m-4'>
            <h2 className="card-title text-[#F7941D] text-center justify-center">Donar Details</h2>
            <hr className="h-px my-2 mx-16 bg-[#F7941D]"></hr>
            <div>
                <p className='my-4 text-[#F7941D] text-xl'>Personal Info</p>
            </div>
            <div className='ml-12'>
                <p>A/C No<span className='ml-[200px]'>: 100778</span></p>
                <p>Donar Name<span className='ml-[162px]'>: Test</span></p>
                <p>Phone Number<span className='ml-[144.5px]'>: 0000000</span></p>
                <p>Email<span className='ml-[214px]'>: check@gmail.com</span></p>
                <p>Address<span className='ml-[195px]'>: Farmgate</span></p>
                <p>Total Donate<span className='ml-[162.5px]'>: 1050</span></p>
            </div>
            <div>
                <p className='my-4 text-[#F7941D] text-xl'>Donation Info</p>
            </div>
            <div className='mt-8 mx-2'>
                <div className="overflow-x-auto">
                    <table className="table w-full border-collapse border border-slate-400 ">
                        <thead>
                            <tr className='font-extrabold text-[14px] text-black'>
                                <th className='border border-slate-300'>Date</th>
                                <th className='border border-slate-300'>Transaction Id</th>
                                <th className='border border-slate-300'>Donation Type</th>
                                <th className='border border-slate-300'>Amount</th>
                            </tr>
                        </thead>
                        <tbody className=' '>
                            <tr className=''>
                                <th className='font-normal border border-slate-300'>1-2-23</th>
                                <th className='font-normal border border-slate-300'>100778</th>
                                <th className='font-normal border border-slate-300'>Food</th>
                                <th className='font-normal border border-slate-300'>0177</th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='my-5 text-[#F7941D] text-xl'>
                <p className=' text-[#F7941D] text-xl'>Information Edit</p>
            </div>
            <div className=' px-10 rounded-xl'>
                <form >
                    <div className='mt-5 flex'>
                        <input type='text' placeholder=' Name' className="input input-bordered w-full max-w-sm" required />
                    </div>
                    <div className='mt-3'>
                        <input type='text' placeholder=' Address' className="input input-bordered w-full max-w-sm" required />
                    </div>
                    <div className='mt-3'>
                        <input type='email' placeholder='Email Address' className="input input-bordered w-full max-w-sm" required />
                    </div>
                    <div className='mt-3'>
                        <input type='text' placeholder=' Phone Number' className="input input-bordered w-full max-w-sm" required />
                    </div>
                    <div className='mt-3'>
                        <input className='btn  text-white bg-[#F7941D] border-[#F7941D] hover:bg-[#F7941D] ' value='Submit' type="submit" />
                    </div>
                </form>
            </div>
            <div className='my-5 text-[#F7941D] text-xl'>
                <p className=' text-[#F7941D] text-xl'>Change Password</p>
            </div>
            <div className='ml-12 mt-5'>
                <form >
                    <div className='mt-3'>
                        <input type='password' placeholder='New Password' className="input input-bordered w-full max-w-xs" required />
                    </div>
                    <div className='mt-3'>
                        <input type='password' placeholder='Confirm New Password' className="input input-bordered w-full max-w-xs" required />
                    </div>
                    <div className='mt-3'>
                        <button className="btn bg-[#F7941D] hover:bg-slate-400  text-white">Change Password</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default DonarInfo;