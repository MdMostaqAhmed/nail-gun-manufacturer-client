import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const PurchaseItem = () => {
    const [user] = useAuthState(auth);
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [id])

    const {
        _id,
        name,
        description,
        img,
        price,
        minOrder,
        available,
        payment,
        totalSell,
    } = product;

    //After Submit
    const handleSubmit = (event) => {
        event.preventDefault();
        const userName = event.target.name.value;
        const quantity = event.target.quantity.value;
        const address = event.target.address.value;
        const phone = event.target.phone.value;
        const email = event.target.email.value;
        //Update Quantity After Purchase

        const booking = {
            bookingId: _id,
            name,
            description,
            img,
            price,
            minOrder,
            available,
            payment,
            totalSell,
            userEmail: email,
            phone: phone,
            quantity: quantity,
            user: userName,
            address: address,
        };
        fetch("http://localhost:5000/orders", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(booking),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.success) {
                    toast.success(
                        `Your  Order For ${quantity} pieces ${name}  is Confirmed`
                    );
                } else {
                    toast.error(
                        `Sorry You already Booked this Orders,Pay that order Now`
                    );
                }
            });
    };

    // Button Toggle On Condition
    const [quan, setQuan] = useState(false);
    const handleChange = (val) => {
        const quantity = val.target.value;
        if (quantity < minOrder) {
            setQuan(true);
            toast.warning("Please,Increase Your Order Quantity");
        } else if (quantity > parseInt(available)) {
            setQuan(true);
            toast.warning("Sorry! We Dont Have Sufficient Products Now");
        } else {
            setQuan(false);
        }
    };


    return (
        <div className="mt-10 sm:mt-0 mx-2">
            <h3 className="text-4xl my-5 font-bold text-primary">{name}</h3>
            <div className="md:grid md:grid-cols-5 md:gap-6">
                <div className="md:col-span-2">
                    <div className="px-4 sm:px-0">
                        <div className="card card-compact ">
                            <figure>
                                <img style={{ maxWidth: "60%" }} src={img} alt={name} />
                            </figure>
                            <div className="card-body">
                                {/* <h2 className="card-title text-xl font-bold">{name}</h2> */}

                                <p className="text-lg font-semibold">
                                    Total Sell:{" "}
                                    <span className="text-purple-500">{totalSell}</span>
                                </p>
                                <div className="flex justify-between">
                                    <p className="text-base font-semibold">
                                        Available:{" "}
                                        <span className="text-lg text-green-500">{available}</span>{" "}
                                        <small>Pieces</small>
                                    </p>
                                    <p className="text-base font-semibold">
                                        Minimum Order :
                                        <span className="text-lg text-orange-500">{minOrder}</span>{" "}
                                        Pieces
                                    </p>
                                </div>
                                <p className="text-[#3e3e3e]">
                                    {description?.slice(0, 160) + "..."}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-5 md:mt-0 md:col-span-3">
                    <form onSubmit={handleSubmit}>
                        <div className="overflow-hidden sm:rounded-md">
                            <div className="px-4 py-5 bg-white sm:p-6">
                                <div className="grid grid-cols-6 gap-6">
                                    <div className="col-span-6 sm:col-span-3">
                                        <label
                                            htmlFor="name"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            defaultValue={user?.displayName}
                                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        />
                                    </div>

                                    <div className="col-span-6 sm:col-span-3">
                                        <label
                                            htmlFor="email_address"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Email address
                                        </label>
                                        <input
                                            type="text"
                                            name="email"
                                            id="email_address"
                                            defaultValue={user.email}
                                            readOnly
                                            autoComplete="email"
                                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        />
                                    </div>

                                    <div className="col-span-6 sm:col-span-3">
                                        <label
                                            htmlFor="phone"
                                            required
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Phone
                                        </label>
                                        <input
                                            type="text"
                                            name="phone"
                                            id="phone"
                                            required
                                            placeholder="Type Your Phone Number"
                                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        />
                                    </div>
                                    <div className="col-span-6 sm:col-span-3">
                                        <label
                                            htmlFor="address"
                                            required
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Address
                                        </label>
                                        <textarea
                                            name="address"
                                            id="address"
                                            required
                                            placeholder="Type Your Address"
                                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        />
                                    </div>

                                    <div className="col-span-6 sm:col-span-3">
                                        <label
                                            htmlFor="quantity"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Quantity
                                        </label>
                                        <input
                                            type="number"
                                            name="quantity"
                                            onBlur={handleChange}
                                            // onChange={(e) => this.setState({ value: e.target.value })}
                                            defaultValue={minOrder}
                                            id="quantity"
                                            className="mt-1 block w-30 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        />
                                    </div>
                                    <div className="col-span-6 sm:col-span-3">
                                        <div>
                                            <p className="text-xl font-semibold my-2">
                                                Price :
                                                <span className="text-3xl font-bold text-primary">
                                                    {" "}
                                                    ${price}
                                                </span>
                                                / Piece
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                {user ? (
                                    <p className="text-xl font-semibold text-red-500">
                                        Purchase is Available For Users only Not For Admin{" "}
                                    </p>
                                ) : (
                                    <button
                                        type="submit"
                                        disabled={quan}
                                        // disabled={!this.state.value}
                                        className={`inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white 
                    ${!quan
                                                ? "bg-indigo-600 hover:bg-indigo-700"
                                                : "bg-indigo-200"
                                            }`}
                                    >
                                        Place Order
                                    </button>
                                )}
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PurchaseItem;