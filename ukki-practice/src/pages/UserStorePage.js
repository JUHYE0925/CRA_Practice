import styles from '../css/UserStorePage.module.css';

function UserStorePage(){

    return(
        <>
            <div className={styles.bannerStyle}>배너 영역
                <div id={styles.profileStyle}>프로필영역</div>
            </div>
            {/* <div>배너 영역</div> */}
        </>
    );
}

export default UserStorePage;