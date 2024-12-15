import {useState} from 'react';
import styles from '../css/FloatingBar.module.css';
import floating1 from '../images/common/floating_home.png';
import floating2 from '../images/common/floating_top.png';
import floating3 from '../images/common/floating_inquiry.png';
import floating4 from '../images/common/floatingBar-logo.png';

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

    const [isVisible, setIsVisible] = useState(false);

    const onClickEventHandler = () => {
        setIsVisible(!isVisible);
    };

    return(
        <>
            <div className={styles.floatingMenu} id={styles.first} style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 1s' }}>
                <img src={floating1} alt=' 홈으로 가기'  id={styles.floating_home}/>
            </div>
            <div className={styles.floatingMenu} id={styles.second} style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 1s' }}>            
                <img src={floating2} alt=' 맨위로 가기'  id={styles.floating_top}/>
            </div>
            <div className={styles.floatingMenu} id={styles.third} style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 1s' }}>
                <img src={floating3} alt=' 맨위로 가기'  id={styles.floating_inquiry}/>
            </div>
            <div className={styles.floatingMenu} id={styles.fourth} onClick={onClickEventHandler}>
                <img src={floating4} alt='플로팅바 우끼' id={styles.floatingBar_logo}/>
            </div>
        </>
    );
}

export default FloatingBar;
