import { Link } from "react-router-dom";
import pic from "../assets/unnamed.png"


const Navbar = () => {

    const navOption = <>
        <li className="font-bold"><Link to={'/'}>Home</Link></li>
        <li className="font-bold"><Link to={'/featureds'}>Featureds</Link></li>
        <li className="font-bold"><Link to={'/shop'}>Shop</Link></li>
        <li className="font-bold"><Link to={'/blog'}>Blog</Link></li>
        <li className="font-bold"><Link to={'/dashboard'}>Dashboard</Link></li>
        <li className="font-bold"><Link to={'/aboutus'}>About Us</Link></li>
        <li className="font-bold"><Link to={'/contact'}>Contact</Link></li>

    </>

    return (
        <div className="navbar bg-yellow-200">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navOption}
                        <li className="font-bold"><Link to={'/login'} className="btn btn-outline btn-accent">Log In</Link></li>
                        <li className="font-bold"><Link to={'/register'} className="btn btn-outline btn-warning">Register</Link></li>
                    </ul>
                </div>
                <img className="w-[50px] h-[50px] rounded-full" src={pic} alt="" />
            </div>
            <div className="navbar-center hidden lg:flex justify-evenly">
                <ul className="menu menu-horizontal px-1">
                    {navOption}
                </ul>
                <ul className="flex gap-4">
                    <li className="font-bold"><Link to={'/login'} className="btn btn-accent">Log In</Link></li>
                    <li className="font-bold"><Link to={'/register'} className="btn btn-warning">Register</Link></li>
                </ul>
            </div>
            {/* <div className="navbar-end">
            </div> */}
        </div>
    );
};

export default Navbar;