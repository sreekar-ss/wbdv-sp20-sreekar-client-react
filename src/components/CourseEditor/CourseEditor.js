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

import topicReducer from "../../reducers/TopicReducer";
import TopicList from "./TopicList";
import widgetReducer from "../../reducers/WidgetReducer";
import WidgetList from "./WidgetList";


const rootReducer = combineReducers({
    modules: moduleReducer,
    lessons: lessonReducer,
    topics: topicReducer,
    widgets: widgetReducer
})

const store = createStore(rootReducer)


const   CourseEditor = ({hideCourseEditor, match, history, courseId, moduleId, lessonId, topicId}) =>

    <Provider store={store}>
        <div>
            <button onClick={hideCourseEditor}>Close</button>

            <CourseEditorHeader hideCourseEditor={hideCourseEditor} match={match} courseId={courseId}
                                history={history}/>
<div className="row" style={{background: "Gainsboro", position: "absolute",height: "100%", width: "100%"}}>
        <div className="col-4" style={{background: "LightGrey"}}>
                    <ModuleList
                        courseId = {courseId}
                        //courseId={courseId}
                    />
        </div>
        <div className="col-8 container-fluid" style={{paddingTop:"60px"}}>
                    <LessonList
                        courseId = {courseId}
                        moduleId = {moduleId}/>
                    <TopicList
                        courseId = {courseId}
                        moduleId = {moduleId}
                        lessonId = {lessonId}
                        topicId = {topicId}/>
                    <WidgetList
                        courseId = {courseId}
                        moduleId = {moduleId}
                        lessonId = {lessonId}
                        topicId = {topicId}/>
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