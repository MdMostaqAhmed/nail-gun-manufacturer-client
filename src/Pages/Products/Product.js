import React from 'react';
import { Navigate } from 'react-router-dom';

const Product = ({ product }) => {
    const { _id, name, img, description, price, available, minOrder } = product;
    const handlePurchase = (id) => {
        Navigate(`/purchase/${id}`)
    }
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{description.slice(0, 120) + "..."}</p>
                    <p className="font-semibold text-2xl">
                        <span className="text-secondary ">${price}</span>{" "}
                        <span className="text-xs">/ Piece</span>
                    </p>

                    <div className="text-xs flex justify-between">
                        <p>
                            Available:{" "}
                            <span className="font-semibold text-green-400">{available}</span>
                        </p>

                        <p className='text-white'>................</p>

                        <p>
                            Min-Order:{" "}
                            <span className="font-semibold text-warning">{minOrder}</span>
                        </p>
                    </div>

                    <div className="card-actions justify-end mt-5">
                        <button
                            onClick={() => handlePurchase(_id)}
                            className="btn btn-primary  btn-sm"
                        >
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;