import React from 'react';
import { useAuthState, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const UpdateProfile = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();
    const [user] = useAuthState(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const imageStorageKey = "0085b932c68d6801b79baf8ba1ced898";

    const onSubmit = (data) => {
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
                    updateProfile({ displayName: data.name, photoURL: img });
                    toast.success("Profile Updated Successfully!");
                    window.location.reload();
                }
            });
    };
    return (
        <div>
            <form
                className="grid grid-cols-1 lg:grid-cols-2 justify-between "
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="my-2">
                    <label>
                        <span>Name{"  "}</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="py-1 w-60"
                        defaultValue={user?.displayName}
                        {...register("name", {
                            required: {
                                value: true,
                                message: "Name is Required",
                            },
                        })}
                    />
                    <label>
                        {errors.name?.type === "required" && (
                            <span className="label-text-alt text-red-500">
                                {errors.name.message}
                            </span>
                        )}
                    </label>
                </div>

                <div className="my-2">
                    <label>
                        <span>Photo </span>
                    </label>
                    <input
                        type="file"
                        className="py-1 w-60 border-2"
                        {...register("image", {
                            required: {
                                value: true,
                                message: "Image is Required",
                            },
                        })}
                    />
                    <label>
                        {errors.image?.type === "required" && (
                            <span className="label-text-alt text-red-500">
                                {errors.image.message}
                            </span>
                        )}
                    </label>
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

export default UpdateProfile;