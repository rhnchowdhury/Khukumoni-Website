import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <section className='m-5 lg:m-10 p-5 lg:py-2 '>
            <div className='flex justify-center items-center my-10 '>
                <div className='bg-[#253E88] p-10 rounded-xl'>
                    <form >
                        {/* onSubmit={handleSubmit(handleLogin)} */}
                        <div>
                            <h1 className='text-white text-3xl font-bold'>Login to your account</h1>
                            {/* <label className="label"><span className="label-text font-bold" style={{ color: "#675444" }}>Name</span></label>
                            <input type='text'
                                 {...register("name",
                                {
                                    required: "Name is required"
                                })} 
                                className="input input-bordered w-full max-w-xs" />
                            {errors.name && <p className='text-error'>{errors.name?.message}</p>} */}
                        </div>
                        <div className='mt-5'>
                            <label className="label"><span className="label-text font-bold text-white">Account No.</span></label>
                            <input type='text'
                                //  {...register("email",
                                // {
                                //     required: "Email address is required"
                                // })} 
                                className="input input-bordered w-full max-w-xs" />
                            {/* {errors.email && <p className='text-error'>{errors.email?.message}</p>} */}
                        </div>
                        <div>
                            <label className="label"><span className="label-text font-bold text-white">Password</span></label>
                            <input type='password'
                                // {...register("password",
                                // {
                                //     required: "Password is required",
                                //     minLength: { value: 6, message: 'Password must be 6 characters or longer' },
                                //     pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: "Password must be strong" }
                                // })}
                                className="input input-bordered w-full max-w-xs" />
                            {/* {errors.password && <p className='text-error'>{errors.password?.message}</p>} */}
                            <label className="label"><span className="label-text font-semibold text-white">Forget password?</span></label>
                        </div>
                        <input className='btn w-full max-w-xs bg-[#F8AD51] border-[#F8AD51]' value='Login' type="submit" />
                        {/* {loginError && <p className='text-error'>{loginError}</p>} */}
                        <p className='text-white font-medium mt-2'>New to Khukumoni? <Link to='/signup' className='text-[#F8AD51] font-bold'>Create an account</Link></p>
                    </form>
                    {/* <div className="divider">OR</div> */}
                    {/* <div className='card-actions justify-center'>
                    <button onClick={handleGoogleSignIn} className='btn btn-outline w-full max-w-xs text-error'>CONTINUE WITH GOOGLE</button>
                </div> */}
                </div>
            </div>
        </section>
    );
};

export default Login;