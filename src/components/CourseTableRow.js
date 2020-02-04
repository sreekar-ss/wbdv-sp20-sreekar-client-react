import React from "react";


const CourseTableRow = ({editing = true ,course, deleteCourse, showCourseEditor}) =>
    <li >

        { !editing &&
            <a href ="#" onClick={showCourseEditor}>
               {course.title}
           </a>
        }
        {
            editing &&
            <input value={course.title}/>
        }

        <button onClick={() => deleteCourse(course)}>Delete</button>
        <button>Edit</button>
    </li>



export default CourseTableRow