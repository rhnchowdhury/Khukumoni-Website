import React from 'react';
import img1 from '../../../../assets/program/prog-img6.png';
import './Skill.css';

const Skill = () => {
    return (
        <div className='lg:my-8 my-5'>
            <div className="lg:mx-20">
                <div className="hero-content flex-col lg:flex-row ">
                    <div>
                        <h1 className='lg:text-5xl text-4xl font-bold text-[#24316B]'>Skill Development</h1>
                        <img src={img1} alt='' className="lg:max-w-xl w-96 rounded-lg mt-8" />
                    </div>
                    <div className='lg:ml-12 lg:mt-32 mt-4'>
                        <h1 className="text-2xl text-[#24316B] font-bold">Project Info</h1>
                        <p className="py-6 skill-p">Skill development is the process of identifying your skill gaps, and Development and sharpening these skills. It is important because your skills determine your ability to execute your plans with success. The scope and complexity of change that comes adjacent to today’s technological revolution are unlike anything we’ve seen before. This technological revolution requires new skill sets, and regrettably, people have not advanced at the same speed as technology. We work for all types of skill development such as IT, Mechanical, Electrical technology, Mobile servicing, automobile parts servicing, House maker, Hotel management services, etc.
                        </p>
                    </div>
                </div>
                <h1 className="ml-4 lg:ml-0 text-2xl text-[#24316B] font-bold">Description</h1>
                <p className='skill-sec-p mt-4'>The main objective of Khukumoni foundations medical camp is to provide free introductory care to people in life-threatening diseases which reveal the unusual strengths and goals of medical principles. Our medical camps are supervised by health professionals and our volunteers to carry out a limited health cautions amongst the underprivileged people.

                    The needy community from different regions follow these camps to get free check-up and treatment as well as information regarding good health. Getting the relevant health checkup is important for everyone and while considering it, some important aspects like age, lifestyle, family background, and risks are taken into account on measuring the COVID-19 situation.

                    Khukumoni foundation realized that free medical camps are remarkably helpful for the miserable community who earn an inadequate income and cannot have the money for costly healthcare services demanded by hospitals or clinics. Our free medical camp can be assumed as a life-saving program that intends for providing free medical and surgical services to poor communities living in rural or urban areas by a dynamic team with varieties of medical specialized services.

                    In Bangladesh, skill development in children is a vital aspect of their growth and future prospects. As a country with a rapidly growing population and a diverse socio-economic landscape, nurturing the potential of its young generation is of utmost importance.

                    From a young age, children in Bangladesh begin to acquire essential life skills and values through their families, schools, and communities. These skills encompass both academic and non-academic abilities, including literacy, numeracy, critical thinking, problem-solving, and effective communication.

                    The government of Bangladesh, along with various non-governmental organizations, places a strong emphasis on education and skill development. Initiatives such as universal primary education, vocational training programs, and scholarships aim to provide children with opportunities to acquire the knowledge and skills needed for a better future.

                    Moreover, the cultural and community values in Bangladesh play a significant role in shaping a child's development. Respect for elders, a strong work ethic, and a sense of social responsibility are instilled from a young age, fostering a well-rounded development that goes beyond academics.

                    In recent years, Bangladesh has made significant progress in improving its education system and expanding access to quality education, thus empowering children to acquire the skills necessary to overcome challenges and contribute to the nation's development.

                    As Bangladesh continues to invest in the skill development of its children, it not only ensures a brighter future for the youth but also contributes to the overall growth and prosperity of the nation.
                </p>
            </div>
        </div>
    );
};

export default Skill;