import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import style from './Education.module.css';

export default function Education() {

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <div className={style.containerEdu} data-aos="fade-up">
            <div className={style.titleEdu}><h3>Education</h3></div>
            <div className={style.contentEdu}>
                <div className={style.contentEduItem}>
                    <div className={style.contentEduDate}>
                        <span className={style.contentEduCheck}><i className="fa fa-check"></i></span>
                        <span className={style.contentEduYear}>September 2020 - Present</span>
                    </div>
                    <div className={style.contentEduInfo}>
                        <div className={style.contentEduInfoTitle}>CyberSoft Academy</div>
                        <div className={style.contentEduInfoClass}>
                            <span>Front-end (ReactJS, Angular)</span>
                            <span>Fullstack (NodeJS, VueJS)</span>
                        </div>
                        <div className={style.contentEduInfoRank}>Currently taking courses on Front-end and Fullstack Javascript in the evening.</div>
                        
                    </div>
                </div>
                <div className={style.contentEduItem}>
                    <div className={style.contentEduDate}>
                        <span className={style.contentEduCheck}><i className="fa fa-check"></i></span>
                        <span className={style.contentEduYear}>July 2020 - October 2020</span>
                    </div>
                    <div className={style.contentEduInfo}>
                        <div className={style.contentEduInfoTitle}>Korea IT School</div>
                        <div className={style.contentEduInfoClass}>
                            <span>Java Web</span>
                            <span>Spring MVC</span>
                        </div>
                        <div className={style.contentEduInfoRank}>Java web programming course using Spring MVC Framework.</div>
                    </div>
                </div>
                <div className={style.contentEduItem}>
                    <div className={style.contentEduDate}>
                        <span className={style.contentEduCheck}><i className="fa fa-check"></i></span>
                        <span className={style.contentEduYear}>2015 - 2018</span>
                    </div>
                    <div className={style.contentEduInfo}>
                        <div className={style.contentEduInfoTitle}>Vinh Long University of Technology Education</div>
                        <div className={style.contentEduInfoClass}>
                            <span>Information Technology College</span>
                            <span>Software Application</span>
                        </div>
                        <div className={style.contentEduInfoRank}>Degree grade: Good</div>
                        <div className={style.contentEduInfoGPA}>GPA: 3,59 / 4</div>
                    </div>
                </div>

            </div>

        </div>
    )
}
