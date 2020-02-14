import React from "react";
import ModuleList from "./ModuleList";
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../../node_modules/font-awesome/css/font-awesome.css';
import CourseEditorHeader from "./CourseEditorHeader";
import LessonList from "./LessonList";
import {combineReducers, createStore} from "redux";
import {Provider} from 'react-redux'
import moduleReducer from "../../reducers/ModuleReducer";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import {findCourseById} from "../../services/CourseService";
import lessonReducer from "../../reducers/LessonReducer";
import ModuleEditor from "./ModuleEditor";


const rootReducer = combineReducers({
    modules: moduleReducer,
    lessons: lessonReducer
})

const store = createStore(rootReducer)


const CourseEditor = ({hideCourseEditor, match, history, courseId, moduleId}) =>

    <Provider store={store}>
        <div>
            <button onClick={hideCourseEditor}>Close</button>

            <CourseEditorHeader hideCourseEditor={hideCourseEditor} match={match} courseId={courseId}
                                history={history}/>
<div className="row">
        <div className="col-4">
                    <ModuleList
                        courseId = {courseId}
                        //courseId={courseId}
                    />
        </div>
        <div className="col-8 container-fluid" style={{paddingTop:"2cm"}}>
                    <LessonList
                        courseId = {courseId}
                        moduleId = {moduleId}/>

        </div>

</div>

            {/*<Router>*/}
            {/*      <Route path="/course-editor/:courseId/module/:moduleId"*/}
            {/*      exact={true}*/}
            {/*      render={ (props) =>*/}
            {/*            <ModuleEditor*/}
            {/*                {...props}*/}
            {/*                courseId = {props.match.params.courseId}*/}
            {/*                moduleId = {props.match.params.moduleId}*/}
            {/*                />*/}
            {/*      }*/}
            {/*      />*/}






            {/*        /!*<div className="col-8">*!/*/}

            {/*        /!*    <LessonList lessons={[*!/*/}
            {/*        /!*        {_id: "221", name: "Lesson 1"},*!/*/}
            {/*        /!*        {_id: "222", name: "Lesson 2"},*!/*/}
            {/*        /!*        {_id: "223", name: "Lesson 3"},*!/*/}
            {/*        /!*        {_id: "224", name: "Lesson 4"},*!/*/}
            {/*        /!*    ]}/>*!/*/}
            {/*        /!*</div>*!/*/}


            {/* </Router>*/}
        </div>

    </Provider>

export default CourseEditor