import React, { useContext, useState } from 'react';
import img1 from '../../../assets/logos/ssl-img.jpg';
import { AuthContext } from '../../Context/AuthProvider';

const Donate = () => {
    const [amount, setAmount] = useState();
    const [selects, setSelects] = useState();
    const { user } = useContext(AuthContext);


    const handleButton = async event => {
        event.preventDefault();
        const donation = { amount, category: selects, name: user?.displayName, email: user?.email }
        // console.log(donation);
        const respone = await fetch(process.env.REACT_APP_PAYMENT_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(donation),
        })
        const { redirectURL } = await respone.json();
        window.location.href = redirectURL
    }

    return (
        <section className='m-5 lg:m-10 p-5 lg:py-2 '>
            <div className='flex justify-center items-center my-8 '>
                <div className='bg-[#253E88] p-10 rounded-xl'>
                    <form onSubmit={handleButton}>
                        <div>
                            <h1 className='text-white text-3xl font-bold'>Donation Information</h1>
                            <p className='text-white mt-4'>How much would you like to donate?</p>
                        </div>
                        <div className='mt-5 flex'>
                            <input type="radio" name="radio-1" className="" value='1000' onChange={e => setAmount(e.target.value)} />
                            <p className='text-white ml-1'>BDT 1000</p>
                        </div>
                        <div className='mt-2 flex'>
                            <input type="radio" name="radio-1" className="" value='1500' onChange={e => setAmount(e.target.value)} />
                            <p className='text-white ml-1'>BDT 1500</p>
                        </div>
                        <div className='mt-2 flex'>
                            <input type="radio" name="radio-1" className="" value='2000' onChange={e => setAmount(e.target.value)} />
                            <p className='text-white ml-1'>BDT 2000</p>
                        </div>
                        <div className='mt-2 flex'>
                            <input type="radio" name="radio-1" className="" value='5000' onChange={e => setAmount(e.target.value)} />
                            <p className='text-white ml-1'>BDT 5000</p>
                        </div>
                        <div className='mt-2 flex'>
                            <input type="radio" name="radio-1" className="" value='10000' onChange={e => setAmount(e.target.value)} />
                            <p className='text-white ml-1'>BDT 10000</p>
                        </div>
                        <div className='mt-2 flex'>
                            <input type="radio" name="radio-1" className="" value='15000' onChange={e => setAmount(e.target.value)} />
                            <p className='text-white ml-1'>BDT 15000</p>
                        </div>
                        <div className='mt-2 flex'>
                            <input type="radio" name="radio-1" className="" />
                            <p className='text-white ml-1'>Custom amount (BDT)</p>
                        </div>
                        <input type='text' className="input input-bordered w-full max-w-xs" onChange={e => setAmount(e.target.value)} />
                        {/* </form> */}
                        <div>
                            <div className='mt-4'>
                                <p className='text-white'>Would you like to donate this to a specific <br /> campaign?</p>
                                <select value={selects} onChange={e => setSelects(e.target.value)} className="select select-bordered w-full mt-4">
                                    <option disabled selected>--Select a Donation Type--</option>
                                    <option>One Time Donation</option>
                                    <option>Donate for flood victims</option>
                                    <option>Food For All</option>
                                    <option>Zakat for Education</option>
                                    <option>Donation for Street Hawker</option>
                                    <option>Palestine Medical Equipment Aid</option>
                                    <option>Palestine Medicine Aid</option>
                                    <option>Eid Gift</option>
                                    <option>প্রজেক্ট নিজ পায়ে দাঁড়াই</option>
                                </select>
                            </div>
                            <div className="card-actions justify-end mt-4">
                                <button className="btn bg-[#4268B1] hover:bg-[#24316B] border-none text-white">Donate Now</button>
                            </div>
                            <div>
                                <h1 className='text-white'>We Accept</h1>
                                <img src={img1} alt="" className='w-80 mt-4 rounded-md' />
                            </div>
                        </div>
                    </form>
                </div >
            </div >
        </section >
    );
};

export default Donate;