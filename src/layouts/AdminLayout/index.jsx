import Footer from "./components/Footer";
import { Outlet } from "react-router";

function DefaultLayout() {
    return (
        <div>
            <h1>Admin</h1>
            <div className="container">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}
export default DefaultLayout;
