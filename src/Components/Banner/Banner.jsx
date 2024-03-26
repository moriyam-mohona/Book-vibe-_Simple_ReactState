import { Link } from 'react-router-dom';
import banner from '../../assets/images/Banner.png';
const Banner = () => {
    return (
        <div className="hero min-h-screen bg-base-200 rounded-2xl flex  items-center justify-center px-20 ">
            <div className="hero-content flex flex-col lg:flex-row items-center justify-center w-full gap-14 ">
                <div className="text-center lg:text-left lg:w-2/3">
                    <h1 className="text-5xl font-bold">Books to freshen up your bookshelf</h1>
                    <Link to='/listedBooks'><button className="btn bg-[#23BE0A] text-white px-10 mt-10 text-lg ">View The List</button></Link>


                </div>
                <img src={banner} className="rounded-lg shadow-2xl w-1/3 lg:w-auto" />
            </div>
        </div>

    );
};

export default Banner;