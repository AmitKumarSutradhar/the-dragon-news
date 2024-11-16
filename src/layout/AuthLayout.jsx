import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const AuthLayout = () => {
    return (
        <div className="font-poppins bg-[#f3f3f3]">
            <header className="py-3 w-11/12 mx-auto">
                <NavBar></NavBar>
            </header>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;