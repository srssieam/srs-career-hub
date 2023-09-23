import { Link, NavLink } from "react-router-dom";

const Header = () => {
    const links = <>
        <li><NavLink to ='/'>Home</NavLink></li>
        <li><NavLink to='statistics'>Statistics</NavLink></li>
        <li><NavLink to='applied-jobs'>Applied Jobs</NavLink></li>
        <li><NavLink to='blog'>Blog</NavLink></li>
    </>
    return (
        <div className="md:px-[30px] lg:px-[100px]">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <a className="text-transparent bg-clip-text bg-gradient-to-r to-purple-600 from-blue-500 normal-case text-lg md:text-3xl font-bold">Career Hub</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to='/featured-jobs'><button className="p-2 md:px-5 md:py-3 rounded-[10px] bg-gradient-to-r to-violet-500 from-indigo-500 text-sm md:text-base font-bold text-white normal-case">Star Applying</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Header;