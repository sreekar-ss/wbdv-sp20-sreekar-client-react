import React from "react";
import CourseTableRow from "./CourseTableRow";
import CourseTableHeader from "./CourseTableHeader";


const CourseTableComponent = ({toggle, courses, deleteCourse, showCourseEditor}) =>
    <div>
        <CourseTableHeader toggle = {toggle}/>
        <div className="container">
            <ul>
                {
                    courses.map(function (course,index) {
                        return <CourseTableRow
                                showCourseEditor={showCourseEditor}
                                deleteCourse ={deleteCourse}
                                key = {course._id}
                                course={course}/>
                    })
                }
            </ul>

        </div>
    </div>

export default CourseTableComponent