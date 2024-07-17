import { useState } from 'react';
import { Input } from "@mui/material";
import { FaLeaf } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from 'react-icons/im';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css'
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { search } from '../../redux/features/productSlice';
import useBeforeUnload from '../../components/hooks/reload';
import { PiEmptyBold } from 'react-icons/pi';

const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isCart,setCart]=useState(false)
    const dispatch=useAppDispatch()
    const {total}=useAppSelector((state) => state.cart)
    const {cart}=useAppSelector((state) => state.cart)
    console.log(cart)
    console.log(total,"from nav")

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    const cartToggle=()=>{
        setCart(!isCart)
    }
    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0)
    useBeforeUnload(cart.length !== 0);

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
                        {/* <div className="dropdown dropdown-end">
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
                                    <span className="badge badge-sm indicator-item">{total}</span>
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
                        </div> */}
                         <div>
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle" onClick={cartToggle}>
        <div className="indicator">
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
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0 2 2 0 014 0z"
            />
          </svg>
          <span className="badge badge-sm indicator-item">{total}</span>
        </div>
      </div>

      <div className={`fixed inset-y-0 right-0 bg-white w-80 z-50 transition-transform duration-300 ${isCart ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="text-[16px] pt-2 px-2  w-full flex justify-end" onClick={cartToggle}>
          <div>
          <ImCross />
          </div>
        </div>
        {/* cart div */}
        <div className='px-4   h-full '>
        <div className='flex justify-center  '>
                <h2 className='text-2xl font-semibold text-[#9ac284] text-center pt-7 pb-3'>Shopping Cart</h2>
                <div className="text-[16px] pt-9"><FaLeaf /></div>
                </div>
        {cart.length > 0 ? 
            <div className=' flex flex-col justify-between' >


            
            {cart.map((item, index) => (
              <div key={index} className=" pb-2">
                <div className="flex justify-between text-[16px] border-b border-gray-200 text-[#2b3c17] w-full">
                  
                  <div className='flex-4/6  w-4/6 '>{index+1}. {item.title.slice(0,20)}</div>
                  <div className='flex-1/6  w-1/6 text-center'>x {item.quantity}</div>
                  <div className='flex-1/6  w-1/6 text-center'>${item.price}</div>
                </div>


              </div>
            ))}
            <div className=''>
                    <p className='text-[20px] text-[#6f8d5f] pt-10'>Total Price:  <span className='text-black'>${totalPrice}</span></p>

                </div>
                <div>
                    <Link to={`/checkout`}>
                <button className="relative shadow-sm shadow-slate-600 rounded-sm w-full h-[40px] overflow-hidden border border-black group-hover:border-white text-black bg-white transition-all duration-500 ease-out group">
  <span className="absolute inset-0 w-full h-full bg-black transform translate-x-full transition-transform duration-500 ease-out group-hover:translate-x-0"></span>
  <span className="relative z-10 flex items-center justify-center h-full text-black transition-colors duration-500 ease-out group-hover:text-white lg:text-xl text-[15px]">CheckOut</span>
</button>
</Link>
                </div>
            </div>
            
           : (
            <div className='text-xl text-center flex justify-center '><p>Cart is empty!</p>
            <div className='pt-1'>
                <PiEmptyBold />
            </div>
            </div>
          )}
            


        </div>


      </div>
    </div>






                    </div>
                </div>
            </div>


            
            <div className={`fixed inset-0 bg-gray-900 bg-opacity-50 z-50 lg:hidden transition-opacity duration-300 ${isSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={toggleSidebar}>

            </div>
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


            {/* modal */}
            
        </div>
    );
};

export default Navbar;
