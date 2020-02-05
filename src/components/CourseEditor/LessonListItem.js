import React from "react";


const LessonListItem = ({lesson}) =>
    <li className="nav-item">
        <a className="nav-link" data-toggle="tab" href="#Lesson1" role="tab" aria-controls="home"
           aria-selected="true">{lesson.name}
        </a>
    </li>


export default LessonListItem