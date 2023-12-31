import React from 'react';

const Setting = () => {
    return (
        <div className='m-4'>
            {/* flex justify-center items-center */}
            {/* <div> */}
            <h2 className="card-title text-[#F7941D] text-center justify-center">Change Password</h2>
            <hr className="h-px my-2 mx-16 bg-[#F7941D]"></hr>
            {/* </div> */}
            <div className='ml-12 mt-5'>
                <form >
                    {/* <div> */}
                    <div className='mt-5'>
                        <input type='password' placeholder='Old Password' className="input input-bordered w-full max-w-xs" required />
                    </div>
                    <div className='mt-3'>
                        <input type='password' placeholder='New Password' className="input input-bordered w-full max-w-xs" required />
                    </div>
                    <div className='mt-3'>
                        <input type='password' placeholder='Confirm New Password' className="input input-bordered w-full max-w-xs" required />
                    </div>
                    <div className='mt-3'>
                        <button className="btn bg-[#F7941D] hover:bg-slate-400  text-white">Change Password</button>
                    </div>
                    {/* </div> */}
                </form>
            </div>
        </div>
    );
};

export default Setting;