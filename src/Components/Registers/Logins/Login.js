import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
// import { useForm } from 'react-hook-form';

const Login = () => {
    // const { register, formState: { errors }, handleSubmit } = useForm();
    const { login } = useContext(AuthContext);
    // const [loginError, setLoginError] = useState('');
    const navigate = useNavigate();

    const handleLogin = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const account = event.target.email.value;
        const password = event.target.password.value;
        const logUser = { name, account, password };
        console.log(logUser);
        event.target.reset();
        // setLoginError('');

        login(account, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate('/donate');
            })
            .then(error => {
                console.log(error)
                // setLoginError(error.message)
            })


        fetch('http://localhost:4000/login', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(logUser),
        })
    };
    // useEffect(() => {
    //     fetch('http://localhost:4000/db')
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data)
    //             setUser(data)
    //         })
    // }, [])
    return (
        <section className='m-5 lg:m-10 p-5 lg:py-2 '>
            <div className='flex justify-center items-center my-10 '>
                {/* <h1>{user.length}</h1> */}
                <div className='bg-[#253E88] p-10 rounded-xl'>
                    <form onSubmit={handleLogin}>
                        {/* <form oonSubmit={handleSubmit(handleLogin)}> */}
                        {/*  */}
                        <h1 className='text-white lg:text-3xl text-xl lg:font-bold font-extrabold'>Login to your account</h1>
                        <div className='mt-5'>
                            <label className="label"><span className="label-text lg:font-bold font-semibold text-white">Name</span></label>
                            <input type='text' name='name'
                                //  {...register("name",
                                // {
                                //     required: "Name is required"
                                // })} 
                                className="input input-bordered w-full max-w-xs" />
                            {/* {errors.name && <p className='text-error'>{errors.name?.message}</p>} */}
                        </div>
                        <div className=''>
                            <label className="label"><span className="label-text lg:font-bold font-semibold text-white">Account No.</span></label>
                            <input type='email' name='email'
                                // {...register("email",
                                //     {
                                //         required: "Email address is required"
                                //     })}
                                className="input input-bordered w-full max-w-xs" />
                            {/* {errors.email && <p className='text-error'>{errors.email?.message}</p>} */}
                        </div>
                        <div>
                            <label className="label"><span className="label-text lg:font-bold font-semibold text-white">Password</span></label>
                            <input type='password' name='password'
                                // {...register("password",
                                // {
                                //     required: "Password is required",
                                //     minLength: { value: 6, message: 'Password must be 6 characters or longer' },
                                //     pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: "Password must be strong" }
                                // })}
                                className="input input-bordered w-full max-w-xs" />
                            {/* {errors.password && <p className='text-error'>{errors.password?.message}</p>} */}
                            <label className="label"><span className="label-text lg:font-semibold text-white">Forget password?</span></label>
                        </div>
                        <input className='btn w-full max-w-xs text-white bg-[#4268B1] border-[#4268B1] hover:bg-[#253E88]' value='Login' type="submit" />
                        {/* {loginError && <p className='text-error'>{loginError}</p>} */}
                        <p className='text-white lg:font-medium mt-2'>New to Khukumoni? <Link to='/signin' className='text-[#F8AD51] lg:font-bold font-semibold'>Create an account</Link></p>
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