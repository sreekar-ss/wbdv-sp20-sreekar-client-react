import React from "react";
import ModuleList from "./ModuleList";

const CourseEditor = ({hideCourseEditor}) =>
    <div>
        <button onClick={hideCourseEditor}>Close</button>
        <h2>Course Editor</h2>
        <div className="row">
            <div className= "col-4">
                <h4>Module List</h4>
                <ModuleList modules ={[
                    {_id: "123", title: "CSS" },
                    {_id: "122", title: "HTML" },
                    {_id: "124", title: "BOOTSTRAP" },
                    {_id: "125", title: "REACT" },
                    ]}/>
            </div>
            <div className= "col-8">
                <h4>Lesson List</h4>
                <ul>
                    <li>Lesson 1</li>
                    <li>Lesson 2</li>
                    <li>Lesson 3</li>
                </ul>
            </div>
        </div>
            <ul>

            </ul>
    </div>


export default CourseEditor