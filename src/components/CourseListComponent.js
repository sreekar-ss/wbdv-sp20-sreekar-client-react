import CourseManagerHeading from "./CourseManagerHeading";
import CourseTableComponent from "./CourseTableComponent";
import CourseGridComponent from "./CourseGridComponent";
import React from "react";

const CourseListComponent = (
    {
        toggle,
        updateForm,
        newCourseTitle,
        layout,
        addCourse,
        courses,
        showCourseEditor,
        deleteCourse
    }
) =>
<div>
    <CourseManagerHeading toggle={toggle}
                          addCourse={addCourse}
                          updateForm={updateForm}
                          newCourseTitle={newCourseTitle}
    />

    {layout === 'table' && <CourseTableComponent
        toggle={toggle}
        showCourseEditor = {showCourseEditor}
        deleteCourse={deleteCourse}
        courses={courses}/>}
    {layout === 'grid' && <CourseGridComponent
        toggle={toggle}
        showCourseEditor = {showCourseEditor}
        deleteCourse={deleteCourse}
        courses={courses}/>}
</div>

export default CourseListComponent