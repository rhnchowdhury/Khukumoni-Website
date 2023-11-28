import React from 'react';
import img1 from '../../../../assets/program/prog-img3.png';
import './Education.css';

const Education = () => {
    return (
        <div className='my-8'>
            <div className=" mx-20">
                <div className="hero-content flex-col lg:flex-row ">
                    <div>
                        <h1 className='text-5xl font-bold text-[#24316B]'>Corona Pandemic</h1>
                        <img src={img1} alt='' className="max-w-xl rounded-lg mt-8" />
                    </div>
                    <div className='ml-12 mt-32'>
                        <h1 className="text-2xl text-[#24316B] font-bold">Project Info</h1>
                        <p className="py-6 education-p">Khukumoni foundation believes only quality education can uplift Bangladesh toward the progress in the social and economic sectors. But it requires ensuring quality education among the children throughout the city, slum, and remote arena. Since Bangladesh is a poor country that's why a large portion of children could not get proper education due to poverty. Khukumoni foundation took the initiative to provide free education by our volunteers to the children who are dropping out of school or are not able to continue study due to family crisis.
                        </p>
                    </div>
                </div>
                <h1 className="text-2xl text-[#24316B] font-bold">Description</h1>
                <p className='education-p mt-4'>As the Covid-19 attack on Bangladesh severely, the number of jobless people has extended drastically at the time and income of these peoples has fallen significantly. The impact of this epidemic on the lower class and middle-class people especially on their living conditions, health, and honor become worsen day by day. To sustain these helpless peoples including Dhaka city and other cities, the Khukumoni foundation tries to reach them with food, health, and nutrition programs, and sanitation programs to humiliate malnutrition and diseases among street kids or other kids who are helpless and not capable to purchase.

                    At the time of lockdown, underprivileged families have lessened their diet to as short as one meal a day even not. Besides, they are compelled to replace more expensive, protein-rich foods like chicken, fish, and beef with cheaper foods like lentils, potatoes, and rice. If they want to buy food, they have had to borrow from others, even needs to sell their belongings, or pay from what savings they might have earlier. Since the pandemic is on the way still now that’s why to ensure safety for our volunteers and staff distribute food with maintaining social distancing. Besides distributing food among peoples our volunteers take steps to improve on people’s knowledge on COVID 19, Our volunteer provides information regarding preventive measures to remain safe and sound.

                    We are eager to wait for your help/donation to distribute more food among impoverished peoples.

                </p>
            </div>
        </div>
    );
};

export default Education;