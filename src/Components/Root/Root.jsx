import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

export default function Root() {
    return (
        <>
           
            <div id="detail" className='px-5 lg:px-24 py-10' >
                <Header></Header>
                <Outlet />

            </div>
        </>
    );
}