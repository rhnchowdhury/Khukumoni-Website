import React from 'react';
import Carousel from '../../Pages/Carousel/Carousel';
import Story from '../../Pages/Story/Story';
import News from '../../Pages/News/News';
import Mission from '../../Pages/Missions/Mission';

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <Story></Story>
            <News></News>
            <Mission></Mission>
        </div>
    );
};

export default Home;