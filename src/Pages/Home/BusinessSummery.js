import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BusinessSummery = () => {
    return (
        <div className='container mx-auto'>
            <h2 className='text-center text-5xl font-bold mt-10 mb-8'>Our Business Summery</h2>

            <div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 my-5  mx-3  ">
                    <div className="shadow-xl reason-item border-4 py-2 rounded-xl flex flex-col justify-center items-center"
                    >
                        <img width={80} src="https://i.ibb.co/XW5q7XF/744502.png" alt="" />
                        <h2 className="text-5xl text-info font-bold">50</h2>
                        <h3 className="text-xl text-info font-bold">Countries</h3>
                    </div>
                    <div
                        data-aos="flip-left"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        className="shadow-xl reason-item border-4 rounded-xl  flex flex-col justify-center items-center"
                    >
                        <img width={80} src="https://i.ibb.co/51twWyP/921347.png" alt="" />
                        <h2 className="text-5xl text-info font-bold">
                            1653<sup>+</sup>
                        </h2>
                        <h3 className="text-xl text-info font-bold">Clients</h3>
                    </div>
                    <div
                        data-aos="flip-left"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        className="shadow-xl reason-item border-4 rounded-xl  flex flex-col justify-center items-center"
                    >
                        <img width={80} src="https://i.ibb.co/DRV4Zb8/1589592.png" alt="" />
                        <h2 className="text-5xl text-info font-bold">
                            60M<sup>+</sup>
                        </h2>
                        <h3 className="text-xl text-info font-bold">Annual Revenue</h3>
                    </div>
                    <div
                        data-aos="flip-left"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        className="shadow-xl reason-item border-4 rounded-xl  flex flex-col justify-center items-center"
                    >
                        <img width={80} src="https://i.ibb.co/0r1W5zR/settings.png" alt="" />
                        <h2 className="text-5xl text-info font-bold">150 </h2>
                        <h3 className="text-xl text-info font-bold">Items</h3>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default BusinessSummery;