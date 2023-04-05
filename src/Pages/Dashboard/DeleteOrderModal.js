import React from 'react';
import { toast } from 'react-toastify';

const DeleteOrderModal = ({ deleteOrder, setDeleteOrder }) => {
    const handleDelete = (id) => {
        fetch(`https://nail-gun-manufacturer-server-production.up.railway.app/orders/${id}`, {
            method: "DELETE",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount) {
                    toast.success(`  ${deleteOrder.name} is Removed Successfully`);
                    setDeleteOrder(null);
                }
            });
    };
    return (
        <div>
            <input
                type="checkbox"
                id="delete-doctor-modal"
                className="modal-toggle"
            />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-red-500">
                        Are you Sure you want to Cancel the order of {deleteOrder.name} ?
                    </h3>
                    <p className="py-4">
                        Please note That deleting orders won't be back!
                    </p>
                    <div className="modal-action">
                        <button
                            onClick={() => handleDelete(deleteOrder._id)}
                            className="btn btn-xs btn-error"
                        >
                            Confirm
                        </button>
                        <label htmlFor="delete-doctor-modal" className="btn btn-xs">
                            Close
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteOrderModal;