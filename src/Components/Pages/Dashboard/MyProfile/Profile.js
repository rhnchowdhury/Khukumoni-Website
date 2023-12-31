import React from 'react';

const Profile = () => {
    return (
        <div className='m-4'>
            <h2 className="card-title text-[#F7941D] text-center justify-center">Profile Details</h2>
            <hr className="h-px my-2 mx-16 bg-[#F7941D]"></hr>
            <div className='ml-12'>
                <p>A/C No<span className='ml-[200px]'>: 0000000</span></p>
                <p>A/C Name<span className='ml-[179px]'>: 0000000</span></p>
                <p>Email<span className='ml-[214px]'>: 0000000</span></p>
            </div>
        </div>
    );
};

export default Profile;