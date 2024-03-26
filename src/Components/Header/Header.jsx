import { Link, NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <div className="navbar bg-base-100 mb-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li>

                                <Link to='/' className=' px-7 py-3 text-xl font-medium'>Home</Link>
                                <Link to='/listedBooks' className=' px-7 py-3 text-xl font-medium'>Listed Books</Link>
                                <Link to='/pagesToRead' className=' px-7 py-3 text-xl font-medium'>Pages to Read</Link>
                                <Link to='/blogs' className=' px-7 py-3 text-xl font-medium'>Blogs</Link>
                                <Link to='/about' className=' px-7 py-3 text-xl font-medium'>About</Link>
                            </li>
                        </ul>
                    </div>
                    <a className='text-3xl font-bold'>Book Vibe</a>
                </div>
                <div className="navbar-center hidden lg:flex gap-5">
                    <NavLink to='/' className={({ isActive }) => isActive ? 'border border-[#23BE0A] rounded-xl text-md font-semibold px-4 py-1 text-[#23BE0A]' : ' text-md font-medium '}>Home</NavLink>
                    <NavLink to='/listedBooks' className={({ isActive }) => isActive ? 'border border-[#23BE0A] rounded-xl text-md font-semibold px-4 py-1 text-[#23BE0A]' : ' text-md font-medium'}>Listed Books</NavLink>
                    <NavLink to='/pagesToRead' className={({ isActive }) => isActive ? 'border border-[#23BE0A] rounded-xl text-md font-semibold px-4 py-1 text-[#23BE0A]' : ' text-md font-medium '}>Pages to Read</NavLink>
                    <NavLink to='/blogs' className={({ isActive }) => isActive ? 'border border-[#23BE0A] rounded-xl text-md font-semibold px-4 py-1 text-[#23BE0A]' : ' text-md font-medium '}>Blogs</NavLink>
                    <NavLink to='/about' className={({ isActive }) => isActive ? 'border border-[#23BE0A] rounded-xl text-md font-semibold px-4 py-1 text-[#23BE0A]' : ' text-md font-medium '}>About</NavLink>

                </div>
                <div className="navbar-end flex gap-3">
                    <button className="btn bg-[#23BE0A] text-white text-md px-8" >Sign In</button>
                    <button className="btn bg-[#59C6D2] text-white text-md px-8">Sign Up</button>

                </div>
            </div>
        </div >
    );
};

export default Header;