import React, { useEffect, useState } from 'react';
import DeleteOrderModal from './DeleteOrderModal';

const ManageOrders = () => {
    const [orders, setOrders] = useState([]);
    const [deleteOrder, setDeleteOrder] = useState(null);
    useEffect(() => {
        fetch("http://localhost:5000/orders", {
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        })
            .then((res) => res.json())
            .then((data) => setOrders(data));
    }, [orders]);

    const handleShipment = (_id) => {
        const payment = {
            status: "Shipped",
        };
        fetch(`http://localhost:5000/ship/${_id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(payment),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            });
    };
    return (
        <div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>User</th>
                                <th>Item</th>
                                <th>Quantity</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order, index) => (
                                <tr key={order._id}>
                                    <th>{index + 1}</th>
                                    <td>{order?.userEmail}</td>
                                    <td>{order?.name}</td>
                                    <td>{order?.quantity}</td>
                                    <td>
                                        {order.payment === "paid" && !order.status && (
                                            <span className="text-green-500">
                                                Paid{" "}
                                                <small className="block">
                                                    TranxID: {order?.transactionId}
                                                </small>
                                            </span>
                                        )}
                                        {order?.status && order?.payment === "paid" && (
                                            <span className="text-green-500">Shipped Successfully</span>
                                        )}
                                        {order.payment === "" && (
                                            <span className="text-red-500">Unpaid</span>
                                        )}
                                    </td>

                                    <td>
                                        {order.payment === "" && !order.status && (
                                            <label
                                                onClick={() => setDeleteOrder(order)}
                                                htmlFor="delete-doctor-modal"
                                                className="btn  btn-xs btn-error modal-button"
                                            >
                                                Cancel Order
                                            </label>
                                        )}

                                        {
                                            <span className="text-green-500">
                                                {!order.status && order.payment === "paid" && (
                                                    <div>
                                                        <button
                                                            className="btn btn-xs btn-primary"
                                                            onClick={() => handleShipment(order._id)}
                                                        >
                                                            Shipment
                                                        </button>
                                                    </div>
                                                )}
                                            </span>
                                        }
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {deleteOrder && (
                    <DeleteOrderModal
                        deleteOrder={deleteOrder}
                        setDeleteOrder={setDeleteOrder}
                    ></DeleteOrderModal>
                )}
            </div>
        </div>
    );
};

export default ManageOrders;