import { Outlet} from "react-router-dom";
import Footer from "../components/Footer";
// import FloatingBar from "../components/FloatingBar";
import Header from "../components/Header";
function Layout(){
    return(
        <>
            <Header/>
            <main>
                <Outlet/>
            </main>
            {/* <FloatingBar/> */}
            <Footer/>
        </>
    )
}
export default Layout;