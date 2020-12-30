import React from 'react';
import Header from './Header/Header';
import Description from './Description/Description';
import Skill from './Skill/Skill';
import Experience from './Experience/Experience';
import Education from './Education/Education';
import Project from './Project/Project';
import Thanks from './Thanks/Thanks';

export default function CV() {

    return (
        <>
            <Header />
            <Description />
            <Skill />
            <Experience />
            <Education />
            <Project />
            <Thanks />
        </>
    )
}
