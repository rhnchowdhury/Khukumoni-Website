import React from 'react';
import img1 from '../../../../assets/program/prog-img2.png';
import './Corona.css';

const Corona = () => {
    return (
        <div className='lg:my-8 my-5'>
            <div className="lg:mx-20">
                <div className="hero-content flex-col lg:flex-row ">
                    <div>
                        <h1 className='lg:text-5xl text-4xl font-bold text-[#24316B]'>Corona Pandemic</h1>
                        <img src={img1} alt='' className="lg:max-w-xl w-96 rounded-lg mt-8" />
                    </div>
                    <div className='lg:ml-12 lg:mt-32 mt-4'>
                        <h1 className="text-2xl text-[#24316B] font-bold">Project Info</h1>
                        <p className="py-6 corona-p">COVID-19 exhibits not only a health crisis in Bangladesh but also make severe food crisis among the impoverished especially in Dhaka city. The humanitarian crisis is on the going in whole, Bangladesh is also suffering from humanitarian crises due to this pandemic. You might know that many people especially in Dhaka city have lost their source of earning and become transitorily jobless. For this reason, they are not capable to buy foods recurrently for themselves or for families. Impoverished peoples including Ricksha puller, hawker, vendor are suffering from food and sanitation. For their existence, the khukumoni foundation takes initiative to distribute food among them during the coronavirus epidemic times even afterward.
                        </p>
                    </div>
                </div>
                <h1 className="ml-4 lg:ml-0 text-2xl text-[#24316B] font-bold">Description</h1>
                <p className='corona-sec-p mt-4'>As the Covid-19 attack on Bangladesh severely, the number of jobless people has extended drastically at the time and income of these peoples has fallen significantly. The impact of this epidemic on the lower class and middle-class people especially on their living conditions, health, and honor become worsen day by day. To sustain these helpless peoples including Dhaka city and other cities, the Khukumoni foundation tries to reach them with food, health, and nutrition programs, and sanitation programs to humiliate malnutrition and diseases among street kids or other kids who are helpless and not capable to purchase.

                    At the time of lockdown, underprivileged families have lessened their diet to as short as one meal a day even not. Besides, they are compelled to replace more expensive, protein-rich foods like chicken, fish, and beef with cheaper foods like lentils, potatoes, and rice. If they want to buy food, they have had to borrow from others, even needs to sell their belongings, or pay from what savings they might have earlier. Since the pandemic is on the way still now that’s why to ensure safety for our volunteers and staff distribute food with maintaining social distancing. Besides distributing food among peoples our volunteers take steps to improve on people’s knowledge on COVID 19, Our volunteer provides information regarding preventive measures to remain safe and sound.

                    We are eager to wait for your help/donation to distribute more food among impoverished peoples.</p>
            </div>
        </div>
    );
};

export default Corona;