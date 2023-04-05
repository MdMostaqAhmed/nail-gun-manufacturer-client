import React from 'react';
import BusinessSummery from './BusinessSummery';
import Carousel from './Carousel';
import Footer from './Footer';
import Tools from './Tools';
import Reviews from '../Reviews/Reviews';


const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <Tools></Tools>
            <BusinessSummery></BusinessSummery>
            <div>
                <h3 className='text-center text-5xl font-bold mt-10 mb-8'>
                    What our Clients Say
                </h3>

                <Reviews></Reviews>

            </div>

            <Footer></Footer>
        </div>
    );
};

export default Home;