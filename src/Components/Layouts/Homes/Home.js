import React from 'react';
import Carousel from '../../Pages/Carousel/Carousel';
import Story from '../../Pages/Story/Story';
import News from '../../Pages/News/News';

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <Story></Story>
            <News></News>
        </div>
    );
};

export default Home;