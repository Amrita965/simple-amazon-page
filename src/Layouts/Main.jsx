import { Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar";

const Main = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            
        </>
    );
};

export default Main;