import React from 'react';
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";

import { Elements } from "@stripe/react-stripe-js";
import Loading from '../../Shared/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe("pk_test_51MGJZ4I27wlGZ96QJr6aHsRuoa9DAfGUmMAaxE1bjAiyWVES7smXTfA4SyGho4Coyyn74augnc25ai3gQbQCqhUR00piUKwhcZ");

const Payment = () => {
    const { id } = useParams();
    const url = `http://localhost:5000/orders/${id}`;
    const { data: order, isLoading } = useQuery(["order", id], () =>
        fetch(url, {
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        }).then((res) => res.json())
    );
    if (isLoading) {
        return <Loading></Loading>;
    }

    return (
        <div>
            <div>
                <div className="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                    <div className="card-body">
                        <p className="text-success font-bold">Hello, {order?.user}</p>
                        <h2 className="text-xl font-semibold">
                            Please Pay for
                            <span className="text-secondary font-bold"> {order?.name}</span>
                        </h2>
                        <p className="text-lg">
                            Your Order Detail:
                            <p className="text-lg font-semibold">
                                Product :<span className="text-orange-700"> {order?.name}</span>
                            </p>
                            <p className="text-lg font-semibold">
                                Quantity :
                                <span className="text-orange-700"> {order?.quantity} </span>
                                Pieces
                            </p>
                        </p>
                        <p className="text-lg font-semibold">
                            Total Bill:{" "}
                            <span className="text-orange-700">
                                $ {order?.quantity * order?.price}
                            </span>
                        </p>
                    </div>
                </div>
                <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                    <div className="card-body">
                        <Elements stripe={stripePromise}>
                            <CheckoutForm order={order} />
                        </Elements>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;