import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import style from './Description.module.css';

export default function Description() {

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    return (
        <div className={style.containerDes} data-aos="fade-up">
            <div className={style.desLeft}>
                <div className={style.desLeftItem}><span>Date of Birth:</span> 25/05/1996</div>
                <div className={style.desLeftItem}><span>City:</span> Ho Chi Minh City</div>
                <div className={style.desLeftItem}><span>Address:</span> District 8, Ho Chi Minh City</div>
                <div className={style.desLeftItem}><span>Phone:</span> 0394 756 393</div>
                <div className={style.desLeftItem}><span>Email:</span> vinhthien1996@gmail.com</div>

            </div>
            <div className={style.desRight}>
                <div className={style.desRightContent}>
                    <h3>About me</h3>
                    <p>
                        I am an enthusiastic, self-motivated, responsible and hard working person. Besides,
    I am able to work well both in a team environment as well as using own initiative.
    My goal is to be a professional developer in the next 2 years at young and dynamic environment.
                    </p>
                    <a href="./Fresher-NguyenVinhThien.pdf" className={style.desSource}><i className="fa fa-file-download"></i> MY CV</a>
                </div>
            </div>
        </div>
    )
}
