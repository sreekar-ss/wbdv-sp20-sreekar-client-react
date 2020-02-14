import React from "react";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import ModuleItem from "./ModuleItem";
import LessonItem from "./LessonItem";

class LessonListItem extends React.Component {

    constructor(props) {
        super(props);
    }


    state ={
        editing: false,
        lesson: this.props.lesson
    }

    editLesson = (e) => {
        this.setState({
            lesson: {
                ...this.state.lesson,
                title: e.target.value
            }
        })}

        render() {

return (
    <li className="nav-item">
        <Link to={`/course-editor/${this.props.courseId}/module/${this.props.moduleId}`}>
            <div className="row">

                <a className="nav-link">
                        {this.props.lesson.title}
                </a>


            </div>

        </Link>
    </li>
    //
    // <Router>
    //
    //     <Route path="/course-editor/:courseId/module/:moduleId/lesson"
    //         exact={true}
    //     render = { (props) =>
    //
    //             <LessonItem
    //                 lesson={this.state.lesson}
    //                 deleteLesson={this.props.deleteLesson}
    //                 courseId={props.courseId}
    //                 moduleId={props.moduleId}
    //                 />
    //                 }
    //         />
    //
    //
    //
    //
    // </Router>
)


    }

}

export default LessonListItem