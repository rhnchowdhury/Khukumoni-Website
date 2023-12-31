import React from 'react';
import { Link } from 'react-router-dom';

const NewDonar = () => {
    return (
        <div>
            <div className=' '>
                {/* flex justify-evenly my-10 */}
                {/* justify-center items-center */}
                <div className=' p-10 rounded-xl'>
                    {/* bg-[#253E88] */}
                    <form >
                        {/* onSubmit={handleSubmit(handleLogin)} */}
                        {/* <div>

                            <h1 className='text-white text-3xl font-bold'>Create your account</h1>
                        </div> */}
                        <div className='mt-5 flex'>
                            {/* <div className="label">
                                <span className="label-text">Name</span>
                            </div> */}
                            {/* <input type="text" /> */}
                            <input type='text' placeholder=' Name' className="input input-bordered w-full " required />

                            {/* max-w-xs */}
                        </div>
                        <div className='mt-3'>
                            <input type='text' placeholder=' Address' className="input input-bordered w-full " required />
                        </div>
                        <div className='mt-3'>
                            <input type='email' placeholder='Email Address' className="input input-bordered w-full " required />
                        </div>
                        <div className='mt-3'>
                            <input type='text' placeholder=' Phone Number' className="input input-bordered w-full " required />
                        </div>

                        <div className='mt-3'>
                            <input className='btn  text-white bg-[#4268B1] border-[#4268B1] hover:bg-[#253E88] ' value='Submit' type="submit" />

                        </div>
                        {/* w-full max-w-xs */}
                        {/* <p className='text-white font-medium mt-2'>Already have an account ? <Link to='/login' className='text-[#F8AD51] font-bold'>Please Login</Link></p> */}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default NewDonar;