import React from 'react';
import BusinessSummery from './BusinessSummery';
import Carousel from './Carousel';
import Footer from './Footer';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <Tools></Tools>
            <BusinessSummery></BusinessSummery>
            <Footer></Footer>
        </div>
    );
};

export default Home;