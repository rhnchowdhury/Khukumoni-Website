import React from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {
    return (
        <section className='m-5 lg:m-10 p-5 lg:py-2 '>
            <div className='flex justify-center items-center my-10 '>
                <div className='bg-[#253E88] p-10 rounded-xl'>
                    <form >
                        {/* onSubmit={handleSubmit(handleLogin)} */}
                        <div>
                            <h1 className='text-white text-3xl font-bold'>Create your account</h1>
                        </div>
                        <div className='mt-5'>
                            <input type='text' placeholder='Your Name' className="input input-bordered w-full max-w-xs" required />
                        </div>
                        <div className='mt-2'>
                            <input type='text' placeholder='Your Address' className="input input-bordered w-full max-w-xs" required />
                        </div>
                        <div className='mt-2'>
                            <input type='email' placeholder='Your Email Address' className="input input-bordered w-full max-w-xs" required />
                        </div>
                        <div className='mt-2'>
                            <input type='text' placeholder='Your Phone Number' className="input input-bordered w-full max-w-xs" required />
                        </div>
                        <div className='mt-2'>
                            <input className='btn w-full max-w-xs text-white bg-[#4268B1] border-[#4268B1] hover:bg-[#253E88] ' value='Sign Up' type="submit" />
                        </div>
                        <p className='text-white font-medium mt-2'>Already have an account ? <Link to='/login' className='text-[#F8AD51] font-bold'>Please Login</Link></p>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default SignIn;