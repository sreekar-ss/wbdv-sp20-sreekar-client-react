import React from "react";
import CourseGridRow from "./CourseGridRow";



const CourseGridComponent = ({toggle, courses, deleteCourse, showCourseEditor}) =>
    <div>
    <h2>Course Grid Component</h2>
        <div>
            <div className="card-deck">
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