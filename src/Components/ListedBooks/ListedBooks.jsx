import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Link, Outlet } from "react-router-dom";


const ListedBooks = () => {
    const [tabIndex, setTabIndex] = useState(0);
    return (
        <div>
            <div>
                <h3 className='bg-gray-100 rounded-2xl items-center text-2xl font-bold flex justify-center py-5'>Books</h3>
                <div className="flex justify-center items-center my-5">
                    <details className="dropdown">
                        <summary className="bg-[#23BE0A] text-white px-8 py-3 flex items-center gap-2 rounded-xl">Sort By <IoIosArrowDown className='text-xl font-bold'></IoIosArrowDown></summary>
                        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                            <li><a>Rating</a></li>
                            <li><a>Number of Pages</a></li>
                            <li><a>Publisher year</a></li>
                        </ul>
                    </details>
                </div>

            </div>
            <div className="flex items-start -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap dark:text-gray-800">
                <Link to={''} onClick={() => setTabIndex(0)} className={`flex items-start px-5 py-3 space-x-2 ${tabIndex === 0 ? 'border border-b-0 rounded-lg' : 'border-b'} dark:border-gray-600 dark:text-gray-600`}>
                    <span>Read Books</span>
                </Link>
                <Link to={'wishListBooks'} onClick={() => setTabIndex(1)} className={`flex items-start px-5 py-3 space-x-2 ${tabIndex === 1 ? 'border border-b-0 rounded-lg' : 'border-b'} dark:border-gray-600 dark:text-gray-600`}>
                    <span>Wishlist Books</span>
                </Link>
            </div>

            <Outlet></Outlet>
        </div >
    );
};

export default ListedBooks;