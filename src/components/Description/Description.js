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
                <div className={style.desLeftItem}><span>Address:</span> Go Vap District, Ho Chi Minh City</div>
                <div className={style.desLeftItem}><span>Phone:</span> 0394 756 393</div>
                <div className={style.desLeftItem}><span>Email:</span> vinhthien1996@gmail.com</div>

            </div>
            <div className={style.desRight}>
                <div className={style.desRightContent}>
                    <h3>About me</h3>
                    <p>
                    I’m Nguyen Vinh Thien - I've been working as a designer with 2-year experience. Since April 2020, I decided to leave my job to come back with the major that I learned at the university - Web Developing. I try to learn some up-to-date technologies, create unique and awesome functions for websites, and more.
                    <br/>My target is trying to be a professional developer and work in a creative and motivating environment.
                    </p>
                    <a href="./NguyenVinhThien_FrontendDeveloper.pdf" className={style.desSource}><i className="fa fa-file-download"></i> MY CV</a>
                </div>
            </div>
        </div>
    )
}
