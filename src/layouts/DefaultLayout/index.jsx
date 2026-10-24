import Header from "../components/Header";
import Footer from "./components/Footer";
import Navigation from "../components/Navigation";
import { Outlet } from "react-router";

function DefaultLayout() {
    return (
        <div>
            <Header />
            <Navigation />
            <div className="container">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}
export default DefaultLayout;
    