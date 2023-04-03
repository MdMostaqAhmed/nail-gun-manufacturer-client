import React, { useState } from 'react';
import { toast } from 'react-toastify';
import DeleteUserModal from './DeleteUserModal';

const ManageUsersRow = ({ user, index, refetch }) => {
    const { email } = user;
    const [deleteUser, setDeleteUser] = useState(null);
    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: "PUT",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        })
            .then((res) => {
                if (res.status === 403) {
                    toast.error("Sorry! Failed to Promote as an Admin");
                }
                return res.json();
            })
            .then((data) => {
                if (data.modifiedCount > 0) {
                    toast.success("Successfully Promoted as As An Admin ");
                    refetch();
                }
            });
    };
    return (
        <>
            <tr>
                <th>{index + 1}</th>
                <td>{user.email}</td>
                <td>
                    {user?.role !== "admin" && (
                        <button onClick={makeAdmin} className="btn btn-xs">
                            Make Admin
                        </button>
                    )}
                </td>
                <td>
                    <label
                        onClick={() => setDeleteUser(user)}
                        htmlFor="delete-user-modal"
                        className="btn  btn-xs btn-error modal-button"
                    >
                        Remove User
                    </label>
                </td>
            </tr>
            {deleteUser && (
                <DeleteUserModal
                    deleteUser={deleteUser}
                    refetch={refetch}
                    setDeleteUser={setDeleteUser}
                ></DeleteUserModal>
            )}
        </>
    );
};

export default ManageUsersRow;