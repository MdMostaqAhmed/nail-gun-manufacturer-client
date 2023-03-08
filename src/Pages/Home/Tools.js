import React from 'react';
import BradNailer from '../../assets/BradNailer.jpg';
import FarmingNailer from '../../assets/FarmingNailer.jpg';
import FinishNailer from '../../assets/FinishNailer.jpg';


const Tools = () => {
    return (
        <div className='w-max mx-auto'>
            <h2 className='text-5xl font-bold mt-8 text-center'>Our Products Nail Guns</h2>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 mt-5'>

                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={BradNailer} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center w-96">
                        <h2 className="card-title">Brad Nailer</h2>
                        <p>Brad nailers come in both pneumatic and cordless varieties, and are typically lighter and more compact than finish nailers or framing nailers. They also tend to leave smaller nail holes, making them ideal for finishing work where a clean and polished appearance is important.</p>
                        <div className="card-actions">
                            <button className="btn btn-info text-white">See All Products</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={FarmingNailer} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center w-96">
                        <h2 className="card-title">Farming Nailer</h2>
                        <p>The framing nailer typically uses compressed air to drive the nails into the wood, but there are also cordless and gas-powered options available. The nails used with a framing nailer are typically collated, meaning they are connected in strips or coils, allowing for faster and easier reloading.</p>
                        <div className="card-actions">
                            <button className="btn btn-info text-white">See All Products</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={FinishNailer} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center w-96">
                        <h2 className="card-title">Finish Nailer</h2>
                        <p>Finish nailers come in both pneumatic and cordless varieties, and can be used for a variety of tasks such as attaching baseboards and crown molding to walls, installing window and door casings, and attaching trim to cabinets and furniture.</p>
                        <div className="card-actions">
                            <button className="btn btn-info text-white">See All Products</button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Tools;