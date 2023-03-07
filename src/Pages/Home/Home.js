import React from 'react';
import BusinessSummery from './BusinessSummery';
import Carousel from './Carousel';
import Footer from './Footer';
import Review from './Review';
import Tools from './tools';

const Home = () => {
    return (
        <div>
            <h1>This is home</h1>
            <Carousel></Carousel>
            <Tools></Tools>
            <BusinessSummery></BusinessSummery>
            <Review></Review>
            <Footer></Footer>
        </div>
    );
};

export default Home;