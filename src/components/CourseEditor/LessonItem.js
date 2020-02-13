import React from "react";

import {Link} from "react-router-dom";


const LessonItem = ({lesson, deleteLesson, moduleId}) => {

    return (
        <a className="nav-link" data-toggle="tab" href="#Lesson1" role="tab" aria-controls="home"
           aria-selected="true">{lesson.title}
        </a>
    )
}