import { Link } from 'react-router-dom';
import banner from '../../assets/images/Banner.png';
const Banner = () => {
    return (
        <div className="hero bg-slate-100 rounded-3xl flex  items-center justify-center py-10 lg:px-20 lg:py-14 ">
            <div className="hero-content flex flex-col-reverse lg:flex-row items-center justify-center w-full gap-14 ">
                <div className="text-center lg:text-left lg:w-2/3">
                    <h1 className="text-5xl font-bold font-play">Books to freshen up your bookshelf</h1>
                    <Link to='/listedBooks'><button className="btn bg-[#23BE0A] text-white px-10 mt-10 text-lg ">View The List</button></Link>
                </div>
                <img src={banner} className="rounded-lg shadow-2xl  lg:w-auto h-96 w-auto" />
            </div>
        </div>

    );
};

export default Banner;