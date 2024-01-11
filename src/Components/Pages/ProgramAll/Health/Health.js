import React from 'react';
import img1 from '../../../../assets/program/prog-img4.png';
import './Health.css';

const Health = () => {
    return (
        <div className='lg:my-8 my-5'>
            <div className="lg:mx-20">
                <div className="hero-content flex-col lg:flex-row ">
                    <div>
                        <h1 className='lg:text-5xl text-4xl font-bold text-[#24316B]'>Free Health Camping</h1>
                        <img src={img1} alt='' className="lg:max-w-xl w-96 rounded-lg mt-8" />
                    </div>
                    <div className='lg:ml-12 lg:mt-32 mt-4'>
                        <h1 className="text-2xl text-[#24316B] font-bold">Project Info</h1>
                        <p className="py-6 health-p">We are delighted to announce that the Khukumoni foundation take initiative to start free medical health camping to the betterment of the underprivileged community. Free health camping is set up with a specific mission to raise awareness amongst the deprived and illiterate people of Bangladesh who have no access to basic healthcare services or knowledge about the diseases they are enduring during the pandemic and so on. Our medical camps provide free medical advice, medicine to the underprivileged people and recommend specialized treatment or surgery whenever it is needed. Our health camps also make sure that people are taking healthcare at the right time and seeing the doctor earlier enough before falling in a critical situation.
                        </p>
                    </div>
                </div>
                <h1 className="ml-4 lg:ml-0 text-2xl text-[#24316B] font-bold">Description</h1>
                <p className='health-sec-p mt-4'>The main objective of Khukumoni foundations medical camp is to provide free introductory care to people in life-threatening diseases which reveal the unusual strengths and goals of medical principles. Our medical camps are supervised by health professionals and our volunteers to carry out a limited health cautions amongst the underprivileged people.

                    The needy community from different regions follow these camps to get free check-up and treatment as well as information regarding good health. Getting the relevant health checkup is important for everyone and while considering it, some important aspects like age, lifestyle, family background, and risks are taken into account on measuring the COVID-19 situation.

                    Khukumoni foundation realized that free medical camps are remarkably helpful for the miserable community who earn an inadequate income and cannot have the money for costly healthcare services demanded by hospitals or clinics. Our free medical camp can be assumed as a life-saving program that intends for providing free medical and surgical services to poor communities living in rural or urban areas by a dynamic team with varieties of medical specialized services.

                    We insist on these following precaution from being infected or spreading coronavirus or other diseases on the basis of WHO declaration which is noted below:-

                    i) Wash your hands with an alcohol-based hand rub or soap a because it kills germs and viruses.

                    ii) Wear masks in those places where social distancing isn’t possible relatively which hamper to spreading the coronavirus.

                    iii)Maintain social distancing at least 3 feet between yourself and others from being uninfected.

                    iv) Avoid going to gathered spots and also avoid coming into close contact with someone that has COVID-19 positive.

                    v) Stay home and Isolate yourself even with slight symptoms such as cough, headache, mild fever, until you recover properly.

                    vi) Try to avoid public bathrooms because it extends the greatest risk of COVID-19 infection. If any individual is going to leave the virus somewhere, it’s in a bathroom.

                    Medical camps are exclusively assisting humanity by taking care of sick children and adults and providing them healthcare services for free for their betterment. When the majority of hospitals and clinics are wrapped up for the needy people leaving them to die from diseases, trauma, and other health drawbacks, free medical camps step in as their enormous desire.

                    Your willingness to join here to help that community is highly appreciated.


                </p>
            </div>
        </div>
    );
};

export default Health;