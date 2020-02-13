import React from "react";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";


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

    <Router>

        <Route path="/course-editor/:courseId/module/:moduleId"/>
            <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="#Lesson1" role="tab" aria-controls="home"
                   aria-selected="true">{this.state.lesson.title}
                </a>
            </li>

    </Router>
)


    }

}

export default LessonListItem