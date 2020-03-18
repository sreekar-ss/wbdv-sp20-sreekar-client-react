import React from "react";
import LessonListItem from "./LessonListItem";
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../../node_modules/font-awesome/css/font-awesome.css';
import {connect} from "react-redux";
import {createLesson, deleteLesson, updateLesson, FIND_ALL_LESSONS} from "../../actions/LessonActions";
import LessonService from "../../services/LessonService";
import {Link} from "react-router-dom";


class LessonList extends React.Component {


    componentDidMount() {
        this.props.findLessonsForModule(this.props.moduleId)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.moduleId !== prevProps.moduleId) {
            this.props.findLessonsForModule(this.props.moduleId)
        }
    }

    state = {
        lesson : {}
    }



    // componentDidUpdate(prevProps, prevState, snapshot) {
    //
    //     if(this.props.findLessonsForModule(this.props.moduleId) !== prevProps.findLessonsForModule(prevProps.moduleId)) {
    //             this.fetchData(this.props.findLessonForModule(this.props.moduleId))
    //     }
    // }
    render () {

        return(
            <div className="container-fluid">
            <nav className="nav nav-pills nav-fill">
                {
                    this.props.lessons && this.props.lessons.map(lesson =>
                        <div key={lesson._id} onClick={() => this.setState({lesson: lesson})} style={{paddingRight: "10px"}}>
                            <Link to={`/course-editor/${this.props.courseId}/module/${this.props.moduleId}/lesson/${lesson._id}`}>
                                <LessonListItem
                                    courseId={this.props.courseId}
                                    moduleId={this.props.moduleId}

                                    key={lesson._id}
                                    lesson={lesson}
                                    deleteLesson = {this.props.deleteLesson}
                                    updateLesson = {this.props.updateLesson}
                                    selected = { lesson === this.state.lesson}
                                />
                            </Link>
                        </div>
                    )
                }
                <a type="button" style={{float: "right", paddingLeft: "20px"}} onClick={() => this.props.createLesson(this.props.moduleId)}>
                    <i className="fa fa-plus fa-2x"></i>
                </a>
            </nav>
                <hr/>
            </div>
        )

    }
}

const stateToPropertyManager = (state) => {
    return {
        lessons: state.lessons.lessons
    }
}

const dispatchToPropertyManager = (dispatch) => {
    return {

        findLessonsForModule: (moduleId) =>
            LessonService.findLessonsForModule(moduleId)
                .then(actualLessons =>
                    dispatch({
                        type: FIND_ALL_LESSONS,
                        lessons: actualLessons
                    })),
        deleteLesson: (lessonId) =>
            LessonService.deleteLesson(lessonId)
                .then(status =>
                    dispatch(deleteLesson(lessonId))
                ),

        createLesson: (moduleId) => {
            LessonService.createLesson(moduleId, {
                title: 'New Lesson'
            }).then(actualLesson =>
            {
                dispatch(createLesson(actualLesson))
            })
        },

        updateLesson: async (lessonId, lesson) => {
            const updatedLesson = await LessonService.updateLesson(lessonId, lesson)
                console.log(updatedLesson)
                // .then(updatedLesson =>
                //     dispatch(updateLesson(updatedLesson)))
        },

    }

}

export default connect(stateToPropertyManager, dispatchToPropertyManager)
                (LessonList)