import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import style from './Skill.module.css'

export default function Skill() {

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <div className={style.containerSkill} data-aos="fade-up">
            <div className={style.titleSkill}><h3>Skills</h3></div>
            <div className={style.contentSkill}>
                <div className={style.contentSkillItem}>
                    <h3><i className="fa fa-code"></i> PROGRAMMING LANGUAGES</h3>
                    <div className={style.iconSkill}>- Javascript, Java, PHP</div>
                    <h3><i className="fa fa-code"></i> FRAMEWORKS & PLATFORMS</h3>
                    <div className={style.iconSkill}>- ReactJS, NodeJS</div>
                    <div className={style.iconSkill}>- Bootstrap, Jquery</div>
                    <div className={style.iconSkill}>- Laravel</div>
                    <h3><i className="fa fa-code"></i> VERSION CONTROL</h3>
                    <div className={style.iconSkill}>- Github</div>
                </div>
                <div className={style.contentSkillItem}>
                    <h3><i className="fa fa-code"></i> DATABASE</h3>
                    <div className={style.iconSkill}>- MySQL</div>
                    <div className={style.iconSkill}>- MongoDB</div>
                    <h3><i className="fa fa-code"></i> FOREIGN LANGUAGE</h3>
                    <div className={style.iconSkill}>- English (Basic Reading Comprehension)</div>
                </div>
            </div>
        </div>
    )
}
