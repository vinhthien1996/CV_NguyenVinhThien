import React from 'react';
import style from './Header.module.css';

export default function Header() {
    return (
        <div>
            <div className={style.headerTop}>
                <div className={style.headerAvatar}>
                    <div className={style.headerAvatarImg}>
                        <img src="./img/avatar.jpg" alt="Avatar" />
                    </div>
                </div>
            </div>
            <div className={style.headerBottom}>
                <div className={style.headerTitle}>Nguyễn Vĩnh Thiện</div>
                <div className={style.headerJob}>Fresher Developer</div>
                <div className={style.headerContact}>
                    <a href="https://www.facebook.com/vinhthien1996"><span className={style.headerIcon}><i className="fab fa-facebook-f"></i></span></a>
                    <a href="https://github.com/vinhthien1996"><span className={style.headerIcon}><i className="fab fa-github"></i></span></a>
                </div>
            </div>
        </div>
    )
}
