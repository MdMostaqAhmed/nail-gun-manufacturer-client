import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import ManageUsersRow from './ManageUsersRow';


const ManageUsers = () => {

    const { isLoading, error, data: users, refetch, } = useQuery("users", () =>
        fetch("https://nail-gun-manufacturer-server-production.up.railway.app/user", {
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        }).then((res) => res.json())
    );
    if (isLoading) {
        return <Loading></Loading>;
    }

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <ManageUsersRow
                                key={user._id}
                                index={index}
                                user={user}
                                refetch={refetch}
                            ></ManageUsersRow>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;