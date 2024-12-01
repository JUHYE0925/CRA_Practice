// 레이아웃 페이지
import Header from "../pages/Header";
import {Outlet} from "react-router-dom";

function Layout(){
    return(
        <>
            <Header/>
            <Outlet/>
        </>
    );
}

export default Layout;