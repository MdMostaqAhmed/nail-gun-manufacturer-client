import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../firebase.init';

const useUserOrders = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            fetch(
                `https://nail-gun-manufacturer-server-production.up.railway.app/orders?userEmail=${user.email}`,
                {
                    method: "GET",
                    headers: {
                        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                    },
                }
            )
                .then((res) => {
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem("accessToken");
                        //Home
                        navigate("/");
                    }
                    return res.json();
                })
                .then((data) => setOrders(data));
        }
    }, [user, orders]);
    return [orders, setOrders];
};

export default useUserOrders;