import { Outlet } from "react-router-dom";
import Navbar from "../../pages/shared/Navbar";
import Footer from "../../pages/shared/Footer";


const MainLayout = () => {
    return (
        <div className="text-6xl font-extrabold">
            <Navbar></Navbar>
            
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default MainLayout;