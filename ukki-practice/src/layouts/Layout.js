// src/components/Layout.js
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import FloatingBar from "../components/FloatingBar";
import Header from "../components/Header";
import styles from "../css/Layout.module.css";

function Layout() {
    return (
        <div className={styles.layoutStyle}>
            <Header className={styles.header} />
            <main className={styles.main}>
                <FloatingBar style={{ zIndex : 9999999 }} />
                <Outlet />
            </main>
            <Footer className={styles.footer} />
        </div>
    );
}

export default Layout;
