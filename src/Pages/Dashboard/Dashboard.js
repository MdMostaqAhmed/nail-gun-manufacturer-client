import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../Hooks/useAdmin';
import CustomLink from '../Shared/CustomLink';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin, setAdmin] = useAdmin(user);
    return (
        <>
            <div className="navbar-end  lg:hidden">
                <label
                    tabIndex="1"
                    htmlFor="my-drawer-2"
                    className="btn btn-accent lg:hidden"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h8m-8 6h16"
                        />
                    </svg>
                </label>
            </div>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    {/* <!-- Page content here --> */}
                    <h2

                        className="text-3xl font-semibold text-primary text-center my-3"
                    >
                        Welcome to Your Dashboard
                    </h2>
                    <Outlet></Outlet>
                </div>

                <div className="drawer-side lg:h-auto">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-48 lg:w-48 bg-primary  text-neutral ">
                        {/* <!-- Sidebar content here --> */}
                        <li className="text-xl font-semibold text-warning">
                            {admin ? "Admin" : "User"}
                        </li>
                        <li>
                            <CustomLink to="/dashboard">My Profile</CustomLink>
                        </li>
                        {!admin && (
                            <>
                                <li>
                                    <CustomLink to="/dashboard/myOrders">My Orders</CustomLink>
                                </li>

                                <li>
                                    <CustomLink to="/dashboard/review">Add Review</CustomLink>
                                </li>
                            </>
                        )}
                        {admin && (
                            <>
                                <li>
                                    <CustomLink to="/dashboard/manageUsers">
                                        Manage Users
                                    </CustomLink>
                                </li>
                                <li>
                                    <CustomLink to="/dashboard/addProduct">
                                        Add Product
                                    </CustomLink>
                                </li>
                                <li>
                                    <CustomLink to="/dashboard/manageOrders">
                                        Manage Orders
                                    </CustomLink>
                                </li>
                                <li>
                                    <CustomLink to="/dashboard/manageProducts">
                                        Manage Products
                                    </CustomLink>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Dashboard;