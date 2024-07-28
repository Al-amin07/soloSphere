import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const Main = () => {
    return (
        <div className="max-w-7xl mx-auto ">
          <Navbar />
          <div className="my-12 space-y-16">
          <Outlet />
          </div>
          <Footer />
        </div>
    );
};

export default Main;