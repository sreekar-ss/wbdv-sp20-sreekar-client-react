import React from "react";

import {Link} from "react-router-dom";


const LessonItem = ({lesson, courseId, deleteLesson, moduleId}) => {

    return (
        <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="#Lesson1" role="tab" aria-controls="home"
                   aria-selected="true">
                    Test Test
                </a>
        </li>
    )
}


export default LessonItem