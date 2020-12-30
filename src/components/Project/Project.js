import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import style from './Project.module.css';
import ProjectItem from './ProjectItem';

export default function Project() {

    const dataProject = [
        {
            image: './img/weather-app.png',
            title: 'Weather App',
            des: 'Look up weather by city with bad weather notification (if any)',
            tags: ['ReactJS', 'Redux', 'API Openweathermap'],
            demo: 'http://vinhthien-weather-app.herokuapp.com/',
            git: 'https://github.com/vinhthien1996/weather-app'
        },
        {
            image: './img/tix.png',
            title: 'Tix Homepage',
            des: 'Clone Tix homepage, not include the function to load more lists',
            tags: ['HTML', 'CSS', 'SASS', 'Javascript'],
            demo: 'http://vinhthien-tix.surge.sh/',
            git: 'https://github.com/vinhthien1996/clone_tix'
        },
        {
            image: './img/udemy.png',
            title: 'Udemy Old Homepage',
            des: 'Clone Udemy homepage, responsive not include navbar',
            tags: ['HTML', 'CSS', 'SASS', 'Bootstrap'],
            demo: 'http://vinhthien-udemy.surge.sh/',
            git: 'https://github.com/vinhthien1996/BaiTapSASS_CyberSoft'
        },
        {
            image: './img/movie_star.png',
            title: 'Movie Star Homepage',
            des: 'Clone Movie Star homepage, using bootstrap and library magnific.',
            tags: ['HTML', 'CSS', 'SASS', 'Bootstrap'],
            demo: 'http://vinhthien-bootstrap.surge.sh/',
            git: 'https://github.com/vinhthien1996/BaiTapBootstrap_CyberSoft'
        }
    ]

    const renderProject = () => {
        return dataProject.map((item, index) => {
            return <ProjectItem data={item} key={index} />
        })
    }

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    return (
        <div className={style.containerProject} data-aos="zoom-in">
            <div className={style.titleProject}><h3>Mini Project</h3></div>
            <div className={style.contentProject}>
                {renderProject()}
            </div>
        </div>
    )
}
