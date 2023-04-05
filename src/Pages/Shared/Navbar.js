import React from 'react';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.PNG'
import auth from '../../firebase.init';

const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);
    const [signOut] = useSignOut(auth);
    return (
        <div className=' flex justify-center bg-slate-400'>
            <div className="navbar bg-base-400 container flex justify-between">

                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to="/" className='font-bold'>Home</Link></li>

                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <a href="https://nail-gun-zone.web.app/"
                        className="btn btn-ghost normal-case text-xl">
                        <img src={logo} className="w-48" alt="Nail Gun Zone" />
                    </a>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to="/" className='text-lg'>Home</Link></li>
                        <li><Link to="/allProducts" className='text-lg'>Products</Link></li>
                        <li><Link to="/blog" className='text-lg'>Blog</Link></li>
                        <li><Link to="/portFolio" className='text-lg'>My Portfolio</Link></li>
                        <li>
                            {
                                user && <Link to="/dashboard" className='text-lg'>Dashboard</Link>
                            }
                        </li>

                        <li>
                            {
                                user ? <button

                                    onClick={async () => {
                                        const success = await signOut();
                                        localStorage.removeItem('accessToken')
                                        if (success) {
                                            alert('You are sign out');
                                        }
                                    }}
                                    className=" text-lg">Sign Out</button> : <Link to="/login" className='text-lg'>Login</Link>
                            }
                        </li>
                    </ul>
                </div>

                <div className="navbar-end">
                    <label htmlFor="dashboard-sidebar" tabIndex={1} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                </div>

            </div>
        </div>
    );
};

export default Navbar;