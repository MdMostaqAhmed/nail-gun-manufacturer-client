import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../Hooks/useAdmin';
import "./MyProfile.css";

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const [admin, setAdmin] = useAdmin(user);
    return (
        <div >
            <div className="card-containers bg-gradient-to-t from-orange-500 to-yellow-500">
                <span className="pro text-[#B3B8CD] bg-primary rounded-full btn-sm ">
                    {admin ? "admin" : "User"}
                </span>
                <img
                    className='mx-auto mt-3'
                    src={user?.photoURL}
                    alt="user"
                />
                <h3 className="text-2xl my-3 font-bold text-primary">
                    {user?.displayName}
                </h3>

                <div

                    className="buttons"
                >
                    <Link to="/dashboard" className="btn btn-primary mr-3">
                        About Me
                    </Link>

                    <Link to="/dashboard/profile/update" className="btn btn-accent mr-3">
                        Update Profile
                    </Link>
                    <Link to="/dashboard/profile/moreInfo" className="btn btn-secondary">
                        Add More Info
                    </Link>
                </div>
                <div className="skills">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;