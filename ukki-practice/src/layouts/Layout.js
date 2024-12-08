import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingBar from "../components/FloatingBar";

function Layout(){
    return(
        <>
            {<Header/>}
            {<FloatingBar/>}
            {<Footer/>}
            {<Outlet/>}
        </>
    )
}
export default Layout;