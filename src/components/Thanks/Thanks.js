import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import style from './Thanks.module.css';

export default function Thanks() {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);
    return (
        <div className={style.containerThanks} data-aos="zoom-in">
            <div className={style.contentThanks}>
                <div className={style.contentThanksImg}>
                    <img src="./img/thanks.png" alt="Thanks" />
                </div>
            </div>
        </div>
    )
}
