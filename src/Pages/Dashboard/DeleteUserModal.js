import React from 'react';
import { toast } from 'react-toastify';

const DeleteUserModal = ({ deleteUser, setDeleteUser, refetch }) => {
    const handleDelete = (id) => {
        fetch(`https://nail-gun-manufacturer-server-production.up.railway.app/users/${id}`, {
            method: "DELETE",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount) {
                    toast.success(`  ${deleteUser.name} is Removed Successfully`);
                    setDeleteUser(null);
                    refetch();
                }
            });
    };
    return (
        <div>
            <input type="checkbox" id="delete-user-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-red-500">
                        Are you Sure you want to remove {deleteUser?.email} ?
                    </h3>
                    <p className="py-4">
                        Please note That Removing Product won't be back!
                    </p>
                    <div className="modal-action">
                        <button
                            onClick={() => handleDelete(deleteUser._id)}
                            className="btn btn-xs btn-error"
                        >
                            Confirm
                        </button>
                        <label htmlFor="delete-user-modal" className="btn btn-xs">
                            Close
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteUserModal;