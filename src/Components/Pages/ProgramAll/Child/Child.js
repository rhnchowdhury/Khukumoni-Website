import React from 'react';
import img1 from '../../../../assets/program/prog-img5.png';
import './Child.css';

const Child = () => {
    return (
        <div className='my-8'>
            <div className=" mx-20">
                <div className="hero-content flex-col lg:flex-row ">
                    <div>
                        <h1 className='text-5xl font-bold text-[#24316B]'>Skill Development</h1>
                        <img src={img1} alt='' className="max-w-xl rounded-lg mt-8" />
                    </div>
                    <div className='ml-12 mt-32'>
                        <h1 className="text-2xl text-[#24316B] font-bold">Project Info</h1>
                        <p className="py-6 child-p">Sponsoring a child in Bangladesh is a life-changing opportunity to make a positive impact. By offering your support, you provide a child with access to education, healthcare, nutrition, and a brighter future. Your sponsorship helps break the cycle of poverty, giving them hope and the chance to reach their full potential. Together, we can create a world where every child in Bangladesh has the opportunity to thrive and build a better tomorrow. Your sponsorship doesn't just change one life; it has a ripple effect that transforms families and communities for generations to come.
                        </p>
                    </div>
                </div>
                <h1 className="text-2xl text-[#24316B] font-bold">Description</h1>
                <p className='child-p mt-4'>The main objective of Khukumoni foundations medical camp is to provide free introductory care to people in life-threatening diseases which reveal the unusual strengths and goals of medical principles. Our medical camps are supervised by health professionals and our volunteers to carry out a limited health cautions amongst the underprivileged people.

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

export default Child;