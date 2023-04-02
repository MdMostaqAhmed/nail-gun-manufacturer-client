import React from 'react';
import { useForm } from 'react-hook-form';

const AddMoreInfo = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm();
    return (
        <div>
            <form
                className="grid grid-cols-1 lg:grid-cols-2 justify-between "
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="my-2">
                    <label>
                        <span>BirthDate{"  "}</span>
                    </label>
                    <input
                        type="date"
                        placeholder="Your Name"
                        className="py-1 w-60"
                        {...register("date", {
                            required: {
                                value: true,
                                message: "Date",
                            },
                        })}
                    />
                    <label>
                        {errors.date?.type === "required" && (
                            <span className="label-text-alt text-red-500">
                                {errors.date.message}
                            </span>
                        )}
                    </label>
                </div>
                <div className="my-2">
                    <label>
                        <span>Github </span>
                    </label>
                    <input
                        type="text"
                        className="py-1 w-60 border-2 text-primary"
                        {...register("Github")}
                    />
                </div>
                <div className="my-2">
                    <label>
                        <span>Phone </span>
                    </label>
                    <input
                        type="text"
                        className="py-1 w-60 border-2 text-primary"
                        {...register("phone")}
                    />
                </div>
                <div className="my-2">
                    <label>
                        <span>Educational </span>
                    </label>
                    <input
                        type="text"
                        className="py-1 w-60 border-2 text-primary"
                        {...register("school")}
                    />
                </div>
                <div className="my-2">
                    <label>
                        <span>LinkedIn </span>
                    </label>
                    <input
                        type="text"
                        className="py-1 w-60 border-2 text-primary"
                        {...register("linkedin", {
                            required: {
                                value: true,
                                message: "Linkedin Link",
                            },
                        })}
                    />
                    <label>
                        {errors.linkedin?.type === "required" && (
                            <span className="label-text-alt text-red-500">
                                {errors.linkedin.message}
                            </span>
                        )}
                    </label>
                </div>
                <div className="my-2">
                    <label>
                        <span>Location </span>
                    </label>
                    <input
                        type="location"
                        className="py-1 w-60 border-2 text-primary"
                        {...register("location", {})}
                    />
                </div>

                <input
                    type="submit"
                    value="Update Now"
                    className="btn-sm ml-48 my-2 btn-secondary"
                />
            </form>
        </div>
    );
};

export default AddMoreInfo;