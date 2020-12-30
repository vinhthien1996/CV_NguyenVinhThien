import React from 'react';
import style from './Project.module.css';

export default function ProjectItem(props) {
    return (
        <div className={style.contentProjectItem}>
            <div className={style.contentProjectItemImg}>

            </div>
            <div className={style.contentProjectItemContent}>
                <div className={style.contentProjectItemImages}>
                    <img src={props.data.image} alt="Project" />
                    <div className={style.contentProjectItemImagesOverlay}></div>
                </div>
                <div className={style.contentProjectItemDes}>
                    <h3><i className="fa fa-bookmark"></i> {props.data.title}</h3>
                    <p>{props.data.des}</p>
                </div>
                <div className={style.contentProjectItemTag}>
                    {props.data.tags.map((item, index) => <span key={index}>{item}</span>)}
                </div>
                <div className={style.contentProjectItemBtn}>
                    <div className={style.btnDemo}>
                        <a href={props.data.demo}><i className="fab fa-chrome"></i> Demo</a>
                    </div>
                    <div className={style.btnGit}>
                        <a href={props.data.git}><i className="fab fa-github"></i> Github</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
