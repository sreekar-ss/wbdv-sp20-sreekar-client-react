import React from "react";
import CourseGridRow from "./CourseGridRow";
import CourseGridHeader from "./CourseGridHeader";



const CourseGridComponent = ({toggle, courses, deleteCourse, showCourseEditor}) =>
    <div>
    <CourseGridHeader toggle = {toggle}/>
        <div>
            <div className="card-deck" style={{padding:"1cm", marginLeft:"1cm"}}>
                {
                    courses.map(function (course,index) {
                        return <CourseGridRow
                                showCourseEditor={showCourseEditor}
                                deleteCourse ={deleteCourse}
                                key = {course._id}
                                course={course}/>
                    })
                }
            </div>

        </div>

    </div>

export default CourseGridComponent