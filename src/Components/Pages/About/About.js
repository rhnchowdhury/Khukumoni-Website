import React from 'react';
import img1 from '../../../assets/home-imgs/project-img2.png';
import img2 from '../../../assets/home-imgs/project-img1.png';
import img3 from '../../../assets/home-imgs/project-img3.png';
import img4 from '../../../assets/home-imgs/project-img4.png';
import './About.css';

const About = () => {
    return (
        <div className='ml-16'>
            <h2 className='about-h2 my-5'>About Us</h2>
            <p className='about-p'><span className='about-span'>Khukumoni Foundations</span> is a non-profit organization committed to making a positive impact on the lives of underserved communities in Bangladesh. Founded in [Year], our mission is to promote sustainable development, education, healthcare, and social welfare, with a focus on empowering individuals and communities to break the cycle of poverty.
                <br />  <br />
                <span className='about-span'>Our Vision </span> <br />
                We are working to build a country free of illiteracy, hunger, poverty and make people realize their rights to become respected citizens.
                <br />  <br />
                <span className='about-span'>Our Mission </span> <br />
                To make significant improvement of underprivileged people through educational program .Children in our society with nourishment and educational program against hunger around the country to protect lives, eliminate poverty through education and establish social justice.
                <br />  <br />
                <span className='about-span'>At Khukumoni Foundations, we are dedicated to:</span>
                <br />  <br />
                <div className='ml-8'>
                    <li><span className='about-span'>Education: </span>  We believe that education is the key to unlocking one's full potential. We work tirelessly to provide quality education and educational resources to children and adults in disadvantaged areas, ensuring that they have the tools to build a better future.</li>
                    <li><span className='about-span'>Healthcare: </span> Good health is a fundamental human right. We strive to improve access to healthcare services, promote health awareness, and provide medical assistance to those in need.</li>
                    <li><span className='about-span'>Community Development: </span> We actively engage with communities to understand their unique challenges and work collaboratively to develop sustainable solutions that uplift their standard of living.</li>
                    <li><span className='about-span'> Empowerment: </span> We are committed to empowering individuals to take control of their own lives. We offer skill-building programs, vocational training, and support for income-generating activities.</li>
                </div>
                <br /> <br />
                <span className='about-span'>Our Impact </span> <br />
                Since our inception, Khukumoni Foundations has made a significant impact on the lives of thousands of people in Bangladesh. We've:
                <br />
                <div className='ml-8'>
                    <li> Established [Number] schools, providing quality education to over [Number] students.</li>

                    <li>Conducted numerous healthcare camps, providing medical services to over [Number] patients.</li>

                    <li>Collaborated with local communities to implement water and sanitation projects, improving living conditions for [Number] families.</li>

                    <li>Trained [Number] individuals in various vocational skills, helping them secure better livelihoods.</li>
                </div>
                <br /> <br />
                <span className='about-span'>Our Team</span> <br />
                Khukumoni Foundations is powered by a passionate and dedicated team of professionals, volunteers, and supporters. Our team works relentlessly to turn our vision into a reality, making a difference in the lives of those who need it the most.
                <br /> <br />
                <span className='about-span'>Get Involved</span> <br />
                We welcome individuals, organizations, and businesses to join hands with us in our mission to create a better Bangladesh. Your support can make a world of difference.
                Join us in transforming lives, one community at a time.</p>
            <div>
                <h2 className='about-h2 my-8'>Our Projects</h2>
                <div className='grid grid-cols-2 mx-56 gap-12'>
                    <div className="card w-96">
                        <figure><img src={img1} alt="Shoes" className='relative' /></figure>
                        <div className="card-body absolute top-56 text-white ">
                            <h2 className="card-title text-5xl text-center font-bold">Food For All</h2>
                        </div>
                    </div>
                    <div className="card w-96">
                        <figure><img src={img2} alt="Shoes" className='relative' /></figure>
                        <div className="card-body absolute top-48 text-white ">
                            <h2 className="card-title text-5xl text-center font-bold">Khukumoni Stipends</h2>
                        </div>
                    </div>
                    <div className="card w-96">
                        <figure><img src={img2} alt="Shoes" className='relative' /></figure>
                        <div className="card-body absolute top-40 text-white ">
                            <h2 className="card-title text-5xl text-center font-bold">New Dress Giving Program</h2>
                        </div>
                    </div>
                    <div className="card w-96">
                        <figure><img src={img3} alt="Shoes" className='relative' /></figure>
                        <div className="card-body absolute top-48 text-white ">
                            <h2 className="card-title text-5xl text-center font-bold">Cleansing Program</h2>
                        </div>
                    </div>
                    <div className="card w-96 ml-56">
                        <figure><img src={img4} alt="Shoes" className='relative' /></figure>
                        <div className="card-body absolute top-56 text-white ">
                            <h2 className="card-title text-5xl text-center font-bold">Khukumoni School</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;