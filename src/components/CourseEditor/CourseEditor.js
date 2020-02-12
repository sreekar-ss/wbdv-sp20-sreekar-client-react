import React from "react";
import ModuleList from "./ModuleList";
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../../node_modules/font-awesome/css/font-awesome.css';
import CourseEditorHeader from "./CourseEditorHeader";
import LessonList from "./LessonList";
import {createStore} from "redux";
import {Provider} from 'react-redux'
import moduleReducer from "../../reducers/ModuleReducer";
import {findCourseById} from "../../services/CourseService";


const store = createStore(moduleReducer)


const CourseEditor = ({hideCourseEditor, match, history, courseId}) =>

    <Provider store={store}>
        <div>
            <button onClick={hideCourseEditor}>Close</button>

            <CourseEditorHeader hideCourseEditor={hideCourseEditor} match={match} courseId={courseId}
                                history={history}/>

            <div className="container-fluid" style={{paddingTop: "2cm"}}>
                <div className="row">
                    <div className="col-4 bg-light flex-column nav-pills">


                        <ModuleList courseId={courseId}/>

                    </div>
                    <div className="col-8">

                        <LessonList lessons={[
                            {_id: "221", name: "Lesson 1"},
                            {_id: "222", name: "Lesson 2"},
                            {_id: "223", name: "Lesson 3"},
                            {_id: "224", name: "Lesson 4"},
                        ]}/>
                    </div>
                </div>
            </div>
        </div>
    </Provider>

export default CourseEditor