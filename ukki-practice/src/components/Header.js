import styles from '../css/scss/Header.module.scss';

function Header(){

    return(
        <div className={styles.header}>
            <img src='/images/common/ukki-logo.png' alt='우끼로고' id={styles.logo}/>
            <p id={styles.search}>검색</p>
            <p id={styles.about}>소개</p>
            <p id={styles.notice}>공지사항</p>
            <p id={styles.mypage}>마이페이지</p>
            <span>로그아웃</span>
        </div>
    );
}

export default Header;