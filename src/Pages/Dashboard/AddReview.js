import React, { useState } from 'react';
import { toast } from 'react-toastify';
import useAdmin from '../../Hooks/useAdmin';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const AddReview = () => {
    const [user] = useAuthState(auth);
    const [exceed, setExceed] = useState(false);

    const [admin, setAdmin] = useAdmin(user);
    const handleSubmitReview = (event) => {
        event.preventDefault();
        const country = event.target.country.value;
        const description = event.target.description.value;
        const rating = event.target.rating.value;
        const review = {
            name: user?.displayName,
            description: description,
            img: user?.photoURL,
            country: country,
            rating: rating,
            user: user?.email,
        };
        fetch("http://localhost:5000/reviews", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(review),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.acknowledged) {
                    toast.success(`Thank You For your Feedback`);
                    event.target.reset();
                } else {
                    toast.error(`Sorry !Try Again`);
                }
            });
    };
    const handleRating = (val) => {
        const rating = val.target.value;
        if (rating >= 1 && rating <= 5) {
            setExceed(false);
        } else {
            setExceed(true);
            toast.warning("Please Type Number between 1-5");
        }
    };
    return (
        <>
            {!admin && (
                <div
                    className="pt-10 pb-16"
                    style={{
                        backgroundImage:
                            "url(" + "https://i.ibb.co/K2SMvBm/SL-031721-41490-35.jpg" + ")",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                    }}
                >
                    <h2 className="text-center text-2xl font-bold py-5">
                        Give Your Feedback
                    </h2>
                    <div className="card w-96 glass mx-auto shadow-xl">
                        <form onSubmit={handleSubmitReview} className=" border-2 p-4">
                            <div>
                                <label htmlFor="country">Country</label>
                                <input
                                    className="block my-2 border-2"
                                    id="country"
                                    type="text"
                                    name="country"
                                    placeholder="Type Your Country Name"
                                />
                            </div>
                            <div>
                                <label htmlFor="rating">Rating</label>
                                <input
                                    className="block my-2 border-2"
                                    id="rating"
                                    type="text"
                                    name="rating"
                                    onBlur={handleRating}
                                    placeholder="Rate Us"
                                />
                            </div>
                            <label className="my-2 block" htmlFor="review">
                                Comment
                            </label>
                            <textarea
                                id="review"
                                cols="45"
                                name="description"
                                placeholder="Type Your Message"
                                rows="5"
                            ></textarea>
                            <input
                                type="submit"
                                disabled={exceed}
                                className={`inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white 
                    ${!exceed
                                        ? "bg-indigo-600 hover:bg-indigo-700"
                                        : "bg-indigo-200"
                                    }`}
                                value="Post Now"
                            />
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default AddReview;