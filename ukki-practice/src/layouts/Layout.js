import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import FloatingBar from "../components/FloatingBar";
import Header from "../components/Header";
import UserStorePage from "../pages/UserStorePage";
function Layout(){
    return(
        <>
            {<Header/>}
            {<FloatingBar/>}
            {<UserStorePage/>}
            {<Footer/>}
            {<Outlet/>}
        </>
    )
}
export default Layout;