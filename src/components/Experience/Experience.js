import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import style from './Experience.module.css';

export default function Experience() {

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <div className={style.containerExp} data-aos="fade-up">
            <div className={style.titleExp}><h3>Experience</h3></div>
            <div className={style.contentExp}>
                <div className={style.contentExpItem}>
                    <div className={style.contentExpDate}><i className="fa fa-clock"></i> October 2020 - December 2020</div>
                    <h3>TopDev</h3>
                    <div className={style.nameExp}>Intern Developer</div><div className={style.nameExp}>Laravel</div>
                    <p>
                        <b>Project</b>: Shortend Link
                        <br/><b>Project Description:</b> Research available source code. Develop some more simple functions from the existing project.
                        <br/><b>Result:</b> Learn how to Clean code, Queue, Helpers, Redis cache in Laravel.
                        <br/><b>Technologies:</b> XAMP, Laravel, Redis cache.
                    </p>
                </div>
            </div>
            <div className={style.contentExp}>
                <div className={style.contentExpItem}>
                    <div className={style.contentExpDate}><i className="fa fa-clock"></i> February 2019 - April 2020</div>
                    <h3>Nguyen Gia Media</h3>
                    <div className={style.nameExp}>Designer</div>
                    <p>
                        Position: Team member<br/>
                        
                        Website administration, banner design, standee, advertising video editing for brand advertising.
                    </p>
                </div>
            </div>

        </div>
    )
}
