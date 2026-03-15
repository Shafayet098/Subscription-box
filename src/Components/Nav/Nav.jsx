import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import './Nav.css'
import { AuthContext } from '../Context/AuthContext';
import profile from './../../assets/profile.png'

const Nav = () => {
    const { user, logOut } = use(AuthContext);
    const handleLogOut = () => {
        logOut().then(() => {
            console.log("successfully Logged Out")
        }).catch(err => {
            console.log(err)
        })
    }
    const link = <>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/profile'}>My Profile</NavLink>
    </>
    return (
        <div className=''>
            <div className="navbar fixed px-4 shadow-lg sm:px-8 z-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul tabIndex="-1" className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-slate-600 ">
                            {
                                link
                            }
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl text-slate-600">Lily<span className='text-secondary'>Box</span></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 flex gap-6 text-lg text-slate-600">
                        {
                            link
                        }
                    </ul>
                </div>
                <div className="navbar-end space-x-2">
                    <div className=''>
                        <img className='rounded-full size-10' title={user?.email} 
                        src={user?.photoURL || profile} alt="" />
                    </div>
                    <div>
                        {
                            user ? <button onClick={handleLogOut} class="inline-flex items-center justify-center  px-8 py-2 text-base font-bold leading-6 text-white bg-primary border border-transparent rounded-full md:w-auto hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">Logout
                            </button>
                                :
                                <Link to={'/login'} ><button class="inline-flex items-center justify-center  px-8 py-2 text-base font-bold leading-6 text-white bg-primary border border-transparent rounded-full md:w-auto hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">Login
                                </button></Link>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nav;