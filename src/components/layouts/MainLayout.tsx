import { Outlet } from "react-router-dom";
import Navbar from "../../pages/shared/Navbar";
import Footer from "../../pages/shared/Footer";


const MainLayout = () => {
    return (
        <div className="text-6xl font-extrabold h-full">
            <Navbar></Navbar>
            
            <div className="h-[100vh]">
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
            
        </div>
    );
};

export default MainLayout;