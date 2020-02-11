import React from "react";
import ModuleList from "./ModuleList";
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../../node_modules/font-awesome/css/font-awesome.css';
import CourseEditorHeader from "./CourseEditorHeader";
import LessonList from "./LessonList";



const CourseEditor = ({hideCourseEditor, match, history, courseId}) =>
    <div>
        <button onClick={hideCourseEditor}>Close</button>
        <CourseEditorHeader hideCourseEditor={hideCourseEditor} match={match} courseId={courseId} history={history}/>

        <div className="container-fluid" style={{paddingTop: "2cm"}}>
            <div className="row">
                <div className= "col-4 bg-light flex-column nav-pills">


                        <ModuleList modules ={[
                            {_id: "123", title: "CSS" },
                            {_id: "122", title: "HTML" },
                            {_id: "124", title: "BOOTSTRAP" },
                            {_id: "125", title: "REACT" },
                            ]}/>

                </div>
                <div className= "col-8">

                    <LessonList lessons={[
                        {_id: "221", name:"Lesson 1"},
                        {_id: "222", name:"Lesson 2"},
                        {_id: "223", name:"Lesson 3"},
                        {_id: "224", name:"Lesson 4"},
                    ]}/>
                </div>
            </div>
        </div>

    </div>


export default CourseEditor