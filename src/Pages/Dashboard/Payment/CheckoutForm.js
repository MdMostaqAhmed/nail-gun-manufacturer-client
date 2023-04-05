import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';


const CheckoutForm = ({ order }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState("");
    const [success, setSuccess] = useState("");
    const [paymentId, setPaymentId] = useState("");
    const [clientSecret, setClientSecret] = useState("");

    const { _id, price, name, quantity, user, userEmail } = order;

    const totalBill = quantity * price;

    useEffect(() => {
        fetch("https://nail-gun-manufacturer-server-production.up.railway.app/create-payment-intent", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                "authorization": `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify({ totalBill }),

        })
            .then(res => res.json())
            .then(data => {
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret);
                    console.log(clientSecret)
                }
            })

    }, [totalBill]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }
        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card,
        });

        if (error) {
            setCardError(error.message);
        } else {
            setCardError("");
            const { paymentIntent, error: intentError } =
                await stripe.confirmCardPayment(clientSecret, {
                    payment_method: {
                        card: card,
                        billing_details: {
                            name: name,
                            email: userEmail,
                        },
                    },
                });
            if (intentError) {
                setCardError(intentError.message);
                alert("From Intent");
                setSuccess("");
            } else {
                setPaymentId(paymentIntent?.id);
                setSuccess("Congratulations! Payment is Completed");
            }
            console.log("[PaymentMethod]", paymentMethod);
            //store payment on database
            const payment = {
                order: _id,
                transactionId: paymentIntent.id,
            };
            fetch(`https://nail-gun-manufacturer-server-production.up.railway.app/orders/${_id}`, {
                method: "PATCH",
                headers: {
                    "content-type": "application/json",
                    authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                },
                body: JSON.stringify(payment),
            })
                .then((res) => res.json())
                .then((data) => {
                    toast.success("Payment Successfully Completed");
                    console.log(data);
                });
        }
    };

    return (

        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: "16px",
                                color: "#424770",
                                "::placeholder": {
                                    color: "#aab7c4",
                                },
                            },
                            invalid: {
                                color: "#9e2146",
                            },
                        },
                    }}
                />
                <button
                    className="btn btn-sm mt-4 btn-success"
                    type="submit"
                    disabled={!stripe || !clientSecret}
                >
                    Pay
                </button>
                <p className="text-red-500">{cardError}</p>
                <div className="text-green-500">
                    <p>{success}</p>
                    {success && (
                        <p>
                            Your Payment ID:
                            <span className="text-orange-600 font-bold">{paymentId}</span>
                        </p>
                    )}
                </div>
            </form>

            {
                cardError && <p className='text-red-500'>{cardError}</p>
            }
        </>
    );
};

export default CheckoutForm;