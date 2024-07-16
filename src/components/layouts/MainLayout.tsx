import { Outlet } from "react-router-dom";
import Navbar from "../../pages/shared/Navbar";
import Footer from "../../pages/shared/Footer";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';



const MainLayout = () => {
    return (
        <div className="text-6xl font-extrabold h-full">
            
            <Navbar></Navbar>
            
            <div className="min-h-screen">
            <Outlet></Outlet>
           
            </div>
            <ToastContainer />
            

            <Footer></Footer>
            
        </div>
    );
};

export default MainLayout;