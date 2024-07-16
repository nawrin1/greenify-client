import { useState } from 'react';
import { Input } from "@mui/material";
import { FaLeaf } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from 'react-icons/im';
import { NavLink } from 'react-router-dom';
import './Navbar.css'
import { useAppDispatch } from '../../redux/hook';
import { search } from '../../redux/features/productSlice';

const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const dispatch=useAppDispatch()

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="w-full sticky top-0 z-50">
            {/* Hamburger Menu */}
            <div className="absolute inset-0 z-10">
                <div className="flex justify-around items-center">
                    <div className="flex">
                        <div className={`text-2xl pt-4 px-2 lg:hidden `} onClick={toggleSidebar}>
                            <GiHamburgerMenu />
                        </div>
                        <p className="text-3xl font-bold pt-3 ">Greenify</p>
                        <div className="text-2xl pt-4"><FaLeaf /></div>
                    </div>
                    {/* Navbar Links (Hidden on small screens) */}
                    <div className="hidden lg:flex pt-4 pl-10">
                        <ul className="menu menu-horizontal space-x-8 text-xl">
                            
                        <NavLink to='/' className={({ isActive }) =>
                        isActive ? "active" : ""
                        }>
                            <li className='a'>Home</li>
                        </NavLink>

                        <NavLink to='/products' className={({ isActive }) =>
                        isActive ? "active" : ""
                        }>
                            <li className='a'>Products</li>
                        </NavLink>
                            <li>Product Manage</li>
                        </ul>
                    </div>
                    {/* Search Input and Cart Dropdown */}
                    <div className="flex justify-end">
                        <div className=''>
                            <Input onChange={(event)=>dispatch(search(event?.target.value))}placeholder="Search" />
                        </div>
                        {/* Cart Dropdown */}
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                                <div className="indicator">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0 2 2 0 014 0z" />
                                    </svg>
                                    <span className="badge badge-sm indicator-item">8</span>
                                </div>
                            </div>
                            <div tabIndex={0} className={`card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow ${isSidebarOpen ? 'block' : 'hidden'}`}>
                                <div className="card-body">
                                    <span className="text-lg font-bold">8 Items</span>
                                    <span className="text-info">Subtotal: $999</span>
                                    <div className="card-actions">
                                        <button className="btn btn-primary btn-block">View cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            
            <div className={`fixed inset-0 bg-gray-900 bg-opacity-50 z-50 lg:hidden transition-opacity duration-300 ${isSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={toggleSidebar}></div>
            <div className={`fixed inset-y-0 left-0 bg-white w-64 z-50 transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <div className={`text-2xl pt-4 px-2 lg:hidden  w-[50px]`} onClick={toggleSidebar}>
            <ImCross />
                        </div>

                <ul className="menu menu-vertical space-y-4 text-xl pt-20">
                <NavLink to='/' className={({ isActive }) =>
                        isActive ? "active" : ""
                        }>
                            <li className='a'>Home</li>
                        </NavLink>

                        <NavLink to='/products' className={({ isActive }) =>
                        isActive ? "active" : ""
                        }>
                            <li className='a'>Products</li>
                        </NavLink>
                            <li>Product Manage</li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
