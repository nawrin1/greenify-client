import { Input } from "@mui/material";
import { FaLeaf } from "react-icons/fa";



const Navbar = () => {
    return (
        <div className=" w-full sticky top-0 z-50">
<div className=" bg-none absolute inset-0 z-10 ">
  <div className="flex justify-around items-center">

    <div className="flex">
    <p className="text-3xl font-bold pt-3">Greenify</p><div className="text-2xl pt-4"><FaLeaf /></div>
    </div>
  
  <div className=" lg:flex pt-4">
    <ul className="menu menu-horizontal  space-x-8 text-xl">
      <li>Home</li>
      <li>
        Products
      </li>
      <li>Product Manage</li>
    </ul>
  </div>
  <div className="flex justify-end ">

  
  <div>
  <Input placeholder="Search"  />
  </div>
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
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <span className="badge badge-sm indicator-item">8</span>
        </div>
      </div>
      <div
        tabIndex={0}
        className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
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
</div>
    );
};

export default Navbar;