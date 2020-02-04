import React from "react";


const CourseManagerHeading = ({toggle, updateForm, addCourse, newCourseTitle}) =>
    <div>
        <button onClick={toggle}>Toggle</button>
        <input onChange={updateForm}
               value = {newCourseTitle}/>
        <button onClick={addCourse}>Add Course</button>
    </div>

export default CourseManagerHeading