import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import toast from 'react-hot-toast';

const SignIn = () => {
    const { createUser, updateUser, verifyEmail } = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    // const [token] = useToken(createdUserEmail);
    // if (token) {

    // }

    const handleSignIn = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const address = event.target.address.value;
        const email = event.target.email.value;
        const phone = event.target.phone.value;
        const password = event.target.password.value;
        const user = { name, address, email, phone, password };
        event.target.reset();
        console.log(user);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                const userInfo = {
                    displayName: name
                }
                updateUser(userInfo)
                    .then(() => { })
                    .catch(err => console.error(err));

                handleEmailVerify();
                toast.success('Please verify your email address')
                navigate('/donate');

                // navigate(from,{replace:true});
                // if (user.emailVerified) {
                //     navigate('/donate');
                // }
                // else {
                //     toast.error('Your email is not verified. Please verify your email');
                // }
            })
            .catch(err => {
                console.error(err);
                setError(err.message);
            })

        fetch('http://localhost:4000/sign', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        })

        const handleEmailVerify = () => {
            verifyEmail()
                .then(() => { })
                .catch(error => console.error(error))
        }

    };

    return (
        <section className='m-5 lg:m-10 p-5 lg:py-2 '>
            <div className='flex justify-center items-center my-10 '>
                <div className='bg-[#253E88] p-10 rounded-xl'>
                    <form onSubmit={handleSignIn}>
                        {/* onSubmit={handleSubmit(handleLogin)} */}
                        <div>
                            <h1 className='text-white lg:text-3xl text-xl lg:font-bold font-extrabold'>Create your account</h1>
                        </div>
                        <div className='mt-5'>
                            <input type='text' placeholder='Your Name' name='name' className="input input-bordered w-full max-w-xs" required />
                        </div>
                        <div className='mt-2'>
                            <input type='text' placeholder='Your Address' name='address' className="input input-bordered w-full max-w-xs" required />
                        </div>
                        <div className='mt-2'>
                            <input type='email' placeholder='Your Email Address' name='email' className="input input-bordered w-full max-w-xs" required />
                        </div>
                        <div className='mt-2'>
                            <input type='text' placeholder='Your Phone Number' name='phone' className="input input-bordered w-full max-w-xs" required />
                        </div>
                        <div className='mt-2'>
                            <input type='password' placeholder='Your Password' name='password' className="input input-bordered w-full max-w-xs" required />
                        </div>
                        <div className='mt-2'>
                            <input className='btn w-full max-w-xs text-white bg-[#4268B1] border-[#4268B1] hover:bg-[#253E88] ' value='Sign Up' type="submit" />
                        </div>
                        <p className='text-white font-medium mt-2'>Already have an account ? <Link to='/login' className='text-[#F8AD51] lg:font-bold'>Please Login</Link></p>
                    </form>
                    <p className='text-red-600'>{error}</p>

                </div>
            </div>
        </section>
    );
};

export default SignIn;