import React, { useEffect, useState } from 'react';

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
    return (
        <div>
            <h1>Manage Orders</h1>
        </div>
    );
};

export default ManageOrders;