import React from "react";
import LessonListItem from "./LessonListItem";
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../../node_modules/font-awesome/css/font-awesome.css';
import {connect} from "react-redux";
import {createLesson, deleteLesson, updateLesson, FIND_ALL_LESSONS} from "./LessonActions";
import LessonService from "../../services/LessonService";


class LessonList extends React.Component {


    componentDidMount() {
        this.props.findLessonsForModule(this.props.moduleId)
    }



    render () {

        return(
        <div>
            <ul className="nav nav-tabs">
                {
                    this.props.lessons && this.props.lessons.map(lesson =>
                        <LessonListItem

                            courseId={this.props.courseId}
                            moduleId={this.props.moduleId}

                            key={lesson._id}
                            lesson={lesson}
                            deleteLesson = {this.props.deleteLesson}
                            updateLesson = {this.props.updateLesson}
                        />
                    )
                }
                <a href="#" style={{float: "right"}} onClick={() => this.props.createLesson(this.props.moduleId)}>
                    <i className="fa fa-plus fa-2x"></i>
                </a>
            </ul>

        </div>)

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

        updateLesson: (lessonId, lesson) => {
            LessonService.updateLesson(lessonId, lesson)
                .then(updatedLesson =>
                    dispatch(updateLesson(updatedLesson)))
        },

    }

}

export default connect(stateToPropertyManager, dispatchToPropertyManager)
                (LessonList)