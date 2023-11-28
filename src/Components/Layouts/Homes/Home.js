import React from 'react';
import Carousel from '../../Pages/HomePages/Carousel/Carousel';
import Story from '../../Pages/HomePages/Story/Story';
import News from '../../Pages/HomePages/News/News';
import Mission from '../../Pages/HomePages/Missions/Mission';
import Project from '../../Pages/HomePages/Project/Project';

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <Story></Story>
            <News></News>
            <Mission></Mission>
            <Project></Project>
        </div>
    );
};

export default Home;