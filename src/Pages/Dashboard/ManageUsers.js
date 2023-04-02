import React from 'react';
import { useQuery } from 'react-query';


const ManageUsers = () => {

    const { data: users } = useQuery("users", () => {
        fetch("http://localhost:5000/user")
            .then(res => res.json())
    })

    return (
        <div>
            <h1>Manage Userszz</h1>
        </div>
    );
};

export default ManageUsers;