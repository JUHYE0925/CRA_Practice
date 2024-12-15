import styles from '../css/UserStorePage.module.css';
import {useEffect, useState} from 'react';

function UserStorePage(){

    const [storeName, setStoreName] = useState('가게이름');

    useEffect(
        () => {
            console.log('aaaaaaaaaaaaaa')
            fetch("/store/test")
            .then(res => res.json())
            .then(data => {
                // let storeName = document.getElementById("storeName");
                setStoreName(data.storeName);
                console.log(data);
            })
        }, []
    );

    return(
        <div className={styles.userStoreStyle}>
            <div className={styles.bannerStyle}>배너 영역
                <div id={styles.profileStyle}>프로필영역</div>
            </div>
            <p id={styles.storeName}>{`가게 이름 : ${storeName}`}</p>
        </div>
    );
}

export default UserStorePage;