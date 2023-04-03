import React from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddProduct = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm();

    const navigate = useNavigate();

    const imageStorageKey = "0085b932c68d6801b79baf8ba1ced898";
    const onSubmit = async (data) => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append("image", image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: "POST",
            body: formData,
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.success) {
                    const img = result.data.url;
                    const product = {
                        name: data.name,
                        description: data.description,
                        price: data.price,
                        minOrder: data.minQuantity,
                        available: data.available,
                        payment: "unpaid",
                        totalSell: 0,
                        img: img,
                    };
                    //Send Product To DataBase
                    fetch("http://localhost:5000/products", {
                        method: "POST",
                        headers: {
                            "content-type": "application/json",
                            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                        },
                        body: JSON.stringify(product),
                    })
                        .then((res) => res.json())
                        .then((inserted) => {
                            if (inserted.insertedId) {
                                toast.success("Product Added Successfully");
                                reset();
                            } else {
                                toast.error("Failed To add the Product ,Try Again");
                            }
                        });
                }
            });
    };
    return (
        <div>
            <div>
                <div className="card w-md bg-base-100 shadow-xl">
                    <div className="card-body py-6">
                        <h2 className="text-center text-2xl font-bold">Add Product</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control w-full">
                                <label className="my-1">
                                    <span className="label-text">Product Name</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Product Name"
                                    className="input input-bordered w-full "
                                    {...register("name", {
                                        required: {
                                            value: true,
                                            message: "Product Name is Required",
                                        },
                                    })}
                                />
                                <label className="my-1">
                                    {errors.name?.type === "required" && (
                                        <span className="label-text-alt text-red-500">
                                            {errors.name.message}
                                        </span>
                                    )}
                                </label>
                            </div>
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                                <div className="form-control w-full ">
                                    <label className="my-1">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <input
                                        type="number"
                                        placeholder="Price/piece"
                                        className="input input-bordered w-full "
                                        {...register("price", {
                                            required: {
                                                value: true,
                                                message: "Nothing is free Dude",
                                            },
                                        })}
                                    />
                                    <label className="my-1">
                                        {errors.price?.type === "required" && (
                                            <span className="label-text-alt text-red-500">
                                                {errors.price.message}
                                            </span>
                                        )}
                                    </label>
                                </div>
                                <div className="form-control w-full ">
                                    <label className="my-1">
                                        <span className="label-text">Amount</span>
                                    </label>
                                    <input
                                        type="number"
                                        placeholder="Price/piece"
                                        className="input input-bordered w-full "
                                        {...register("available", {
                                            required: {
                                                value: true,
                                                message: "Set an amount",
                                            },
                                        })}
                                    />
                                    <label className="my-1">
                                        {errors.available?.type === "required" && (
                                            <span className="label-text-alt text-red-500">
                                                {errors.available.message}
                                            </span>
                                        )}
                                    </label>
                                </div>
                                <div className="form-control w-full ">
                                    <label className="my-1">
                                        <span className="label-text">Minimum Quantity</span>
                                    </label>
                                    <input
                                        type="number"
                                        placeholder="Add Minimum Quantity"
                                        className="input input-bordered w-full "
                                        {...register("minQuantity", {
                                            required: {
                                                value: true,
                                                message: "Give a Minimum Quantity",
                                            },
                                        })}
                                    />
                                    <label className="my-1">
                                        {errors.minQuantity?.type === "required" && (
                                            <span className="label-text-alt text-red-500">
                                                {errors.minQuantity.message}
                                            </span>
                                        )}
                                    </label>
                                </div>
                            </div>
                            <div className="form-control w-full ">
                                <label className="label ">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input
                                    type="file"
                                    className="input input-bordered w-full "
                                    {...register("image", {
                                        required: {
                                            value: true,
                                            message: "Image is Required",
                                        },
                                    })}
                                />
                                <label className="my-1">
                                    {errors.image?.type === "required" && (
                                        <span className="label-text-alt text-red-500">
                                            {errors.image.message}
                                        </span>
                                    )}
                                </label>
                            </div>
                            <div className="form-control w-full ">
                                <label className="my-1">
                                    <span className="label-text">Description</span>
                                </label>
                                <textarea
                                    placeholder="Product Description"
                                    className="input input-bordered w-full "
                                    {...register("description", {
                                        required: {
                                            value: true,
                                            message: "Type Your Product Description",
                                        },
                                    })}
                                />
                                <label className="my-1">
                                    {errors.description?.type === "required" && (
                                        <span className="label-text-alt text-red-500">
                                            {errors.description.message}
                                        </span>
                                    )}
                                </label>
                            </div>
                            <input className="btn btn-primary mx-auto mt-2 mb-4 shadow-xl  w-full  text-white"
                                type="submit"
                                value="Add Now"
                            />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;