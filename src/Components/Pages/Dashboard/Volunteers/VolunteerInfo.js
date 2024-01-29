import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const VolunteerInfo = () => {
    const [volunteer, setVolunteer] = useState([])

    useEffect(() => {
        fetch('http://localhost:4000/volun')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setVolunteer(data)
            })
    }, [])
    return (
        <div className='mt-5'>
            <h2 className="card-title text-[#F7941D] text-center justify-center">Volunteer Information</h2>
            <hr className="h-px my-2 mx-16 bg-[#F7941D]"></hr>
            <div className='mx-2'>
                <p className='my-4 text-[#F7941D] text-xl'>Specific Search</p>
                <form action="">
                    <select className="select select-bordered w-full max-w-xs" required>
                        <option disabled selected required>Select Division</option>
                        <option>Barishal</option>
                        <option>Chattogram</option>
                        <option>Dhaka</option>
                        <option>Khulna</option>
                        <option>Rajshahi</option>
                        <option>Rongpur</option>
                        <option>Sylhet</option>
                        <option>Mymensingh</option>
                    </select>
                    <input type="text" placeholder='Select District' className="input input-bordered w-full max-w-xs ml-4" />
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
                                <th className='border border-slate-300'>No.</th>
                                <th className='border border-slate-300'>Date</th>
                                <th className='border border-slate-300'>Name</th>
                                <th className='border border-slate-300'>Gender</th>
                                <th className='border border-slate-300'>Phone Number</th>
                                <th className='border border-slate-300'>District</th>
                                <th className='border border-slate-300'>Division</th>
                                <th className='border border-slate-300'>Profession</th>
                                <th className='border border-slate-300'>Action</th>
                            </tr>
                        </thead>
                        <tbody className='border border-slate-300 '>
                            {
                                volunteer.map((volun, i) => <tr key={volun.ID}>
                                    <th className='border border-slate-300 font-normal'>{i + 1}</th>
                                    <th className='border border-slate-300 font-normal'>{volun.Date}</th>
                                    <th className='border border-slate-300 font-normal'>{volun.Name}</th>
                                    <th className='border border-slate-300 font-normal'>{volun.Gender}</th>
                                    <th className='border border-slate-300 font-normal'>{volun.Phone}</th>
                                    <th className='border border-slate-300 font-normal'>{volun.District}</th>
                                    <th className='border border-slate-300 font-normal'>{volun.Division}</th>
                                    <th className='border border-slate-300 font-normal'>{volun.Education}</th>
                                    <th className='font-normal border border-slate-300'><Link to='/dashboard/volunteerInfo'><button className='btn btn-xs bg-[#F7941D] text-white hover:bg-[#F7941D]'>Details</button></Link></th>
                                </tr>)
                            }
                            {/* <tr className=''>
                                <th className='font-normal border border-slate-300'>1-2-23</th>
                                <th className='font-normal border border-slate-300'>Raihan</th>
                                <th className='font-normal border border-slate-300'>Shemale</th>
                                <th className='font-normal border border-slate-300'>01779983246</th>
                                <th className='font-normal border border-slate-300'>Bhola</th>
                                <th className='font-normal border border-slate-300'>Barishal</th>
                                <th className='font-normal border border-slate-300'>Student</th>
                                <th className='font-normal border border-slate-300'><Link to='/dashboard/volunteerInfo'><button className='btn btn-xs bg-[#F7941D] text-white hover:bg-[#F7941D]'>Details</button></Link></th>
                            </tr> */}

                        </tbody>
                    </table>
                </div>
            </div>
        </div >
    );
};

export default VolunteerInfo;