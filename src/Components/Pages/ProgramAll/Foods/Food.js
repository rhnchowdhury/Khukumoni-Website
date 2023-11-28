import React from 'react';
import img1 from '../../../../assets/program/prog-img1.png';

const Food = () => {
    return (
        <div className='my-8'>
            <div className=" mx-20">
                <div className="hero-content flex-col lg:flex-row ">
                    <div>
                        <h1 className='text-5xl font-bold text-[#24316B]'>Food For All</h1>
                        <img src={img1} alt='' className="max-w-xl rounded-lg mt-8" />
                    </div>
                    <div className='ml-12 mt-32'>
                        <h1 className="text-2xl text-[#24316B] font-bold">Project Info</h1>
                        <p className="py-6 program-p">Khukumoni foundation designed the food for all programs only for poor and unprivileged people throughout Bangladesh to remove their distress and food crisis. Since 2016 we have been providing food for the poor and helpless people, which is distributed in exchange for only One Taka. Through this program, the people and children can get food at a nominal price, which allows them to get rid of hunger. Our goal is to make our beloved Bangladesh hunger-free. To protect the existence of the underprivileged people, the khukumoni foundation takes initiative to distribute food among them during the coronavirus epidemic times even afterward by its food for all programs.
                        </p>
                    </div>
                </div>
                <h1 className="text-2xl text-[#24316B] font-bold">Description</h1>
                <p className='program-p mt-4'>Bangladesh has been facing a huge deficit of food which compelled people to suffer unconditionally. As poverty is engaged inextricably with our country, so the mistress of the poor community is a beggar description. People from different professionals like ricksha puller, van scooter, cleaners, brick mill workers, barbers, the delivery person, and even farm workers are also suffering from the food crisis. Under these circumstances, the COVID-19 pandemic also brings extraneous poverty and food crisis. Peoples are becoming jobless and losing their income sources.

                    To sustain these helpless peoples including Dhaka city and other cities, the Khukumoni foundation tries to reach them with food package to humiliate malnutrition and diseases among street kids or other kids who are helpless and not capable to purchase.

                    This food for all program entrance as an effective initiative to fight against hunger and malnutrition in our country especially in Dhaka city. We are ongoing the long term social development, awareness, educational, and feeding programs besides reducing the food crisis efficiently.

                    If you need food or face a food crisis during or after the pandemic, please contact with us. Furthermore, if you are eager to contribute to distribute food among these impoverished people call us as you can. We eagerly encourage you to be part of these good deeds for making hunger-free Bangladesh.</p>
            </div>
        </div>
    );
};

export default Food;