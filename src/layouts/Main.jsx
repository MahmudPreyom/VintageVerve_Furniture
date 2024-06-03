import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Footer";
import Navbar from "../pages/Navbar";


const Main = () => {

    const location = useLocation();
    const hideNavAndFooter = ['/login', '/register'].includes(location.pathname);

    return (
        <div>
            {!hideNavAndFooter && <Navbar />}
                <Outlet />
            {!hideNavAndFooter && <Footer />}
        </div>
    );
};

export default Main;