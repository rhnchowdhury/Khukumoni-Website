import React from 'react';
import img1 from '../../../../assets/program/prog-img11.png';
import './Relief.css';

const Relief = () => {
    return (
        <div className='my-8'>
            <div className=" mx-20">
                <div className="hero-content flex-col lg:flex-row ">
                    <div>
                        <h1 className='text-5xl font-bold text-[#24316B]'>Giving Relief To Flood victims</h1>
                        <img src={img1} alt='' className="max-w-xl rounded-lg mt-8" />
                    </div>
                    <div className='ml-12'>
                        <h1 className="text-2xl text-[#24316B] font-bold">Project Info</h1>
                        <p className="py-6 relief-p">Khukumoni undertakes a relief distribution program and arranges medical camps every year among flood victims of our country.Because of the geographical situation, natural calamities occur several times in different places of Bangladesh. As a result, some regions become severely damaged. Victims become needy even homeless.Khukumoni foundation is collecting funds to reach the flood-affected areas with relief in the shortest time.You can also be a part of us by donating the basis of your financial ability and willingness.
                        </p>
                    </div>
                </div>
                <h1 className="text-2xl text-[#24316B] font-bold">Description</h1>
                <p className='relief-p mt-4'>You will be glad to know that Khukumoni Foundation is collecting emergency funds to help the victims at flood-affected areas with essential remedy and reliefs.

                    In our country, flood hits almost every year. Furthermore, we know that Bangladesh is well known for being one of the most exposed climate prone countries as natural calamities like floods, cyclones, etc. Consistently, In this year flood is becoming more devastating and lengthened. Among the people, some of them are a very needy community of different districts become the worst victims.

                    Khukumoni Foundation has always tried to enlarge a helping hand to the victims who are becoming affected and damaged by natural calamities in different times. Another purpose of this relief distribution program is to facilitate the post-flood rehabilitation function in these affected areas.

                    We appreciate you to donate and to become an integral part of us on the basis of your financial capacity. We will distribute as a package based where each relief packages for the flood victims will contain- Rice- 5 Kg Dal- 1 Kg Beaten Rice- 1 Kg Onion – 1 Kg Potatoes- 1 Kg Salt- 1Kg and water purification tablets.

                    Our volunteers from all across Bangladesh acted for distributing emergency relief to victims especially in Jamalpur, Sirajgonj Lalmonirhaat districts, and so on. The volunteers of our foundation participated in the emergency situation with the strategic plan and disciplined way to distribute reliefs among victims.

                    Your sympathy and philanthropy put on us the courage to serve for these impoverished people. We would like to show our honor to all the donors who have aided us during such a critical time.

                    Moreover, if you want to help the victims by donating dry food or medicines then you can send it to us on any day between 09 AM to 07 PM at our Head Office (R.H Home Centre, 3rd Floor, Green Road, Farmgate, Dhaka 1215). Call : +88 01755 744312
                </p>
            </div>
        </div>
    );
};

export default Relief;