import styles from '../css/scss/FloatingBar.module.scss';
// import { useState, useEffect } from 'react';



function FloatingBar(){

    // const [scrollY, setScrollY] = useState(500);
    // const minTop = 500;
    // const maxTop = 3000; // 최대 이동 가능 위치

    // useEffect(() => {
    //     const handleScroll = () => {
    //         const scrollPosition = window.scrollY;
    //         if (scrollPosition < minTop) {
    //             setScrollY(minTop);
    //         } else if (scrollPosition > maxTop) {
    //             setScrollY(maxTop);
    //         } else {
    //             setScrollY(scrollPosition);
    //         }
    //     };

    //     window.addEventListener('scroll', handleScroll);
    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, []);

    return(
        <>
        <div className={styles.floatingMenu} id={styles.first}>
            <img src='/images/common/floating_home.png' alt=' 홈으로 가기'  id={styles.floating_home}/>
        </div>
        <div className={styles.floatingMenu} id={styles.second}>            
            <img src='/images/common/floating_top.png' alt=' 맨위로 가기'  id={styles.floating_top}/>
        </div>
        <div className={styles.floatingMenu} id={styles.third}>
            <img src='/images/common/floating_inquiry.png' alt=' 맨위로 가기'  id={styles.floating_inquiry}/>
        </div>
        <div className={styles.floatingMenu} id={styles.fourth}>
            <img src='/images/common/floatingBar-logo.png' alt='플로팅바 우끼' id={styles.floatingBar_logo}/>
        </div>
        </>
    );
}

export default FloatingBar;
