import React from "react";
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../../node_modules/font-awesome/css/font-awesome.css';
import {connect} from "react-redux";
import TopicService from "../../services/TopicService";
import {createTopic, deleteTopic,updateTopic, FIND_ALL_TOPICS} from "../../actions/TopicActions";
import TopicListItem from "./TopicListItem";


class TopicList extends React.Component {

    componentDidMount() {
        this.props.findTopicsForLesson(this.props.lessonId)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.lessonId !== prevProps.lessonId){
            this.props.findTopicsForLesson(this.props.lessonId)
        }
    }


    render() {

        return (
            <div>
                <nav className="nav nav-pills">
                    {
                        this.props.topics && this.props.topics.map(topic =>
                            <TopicListItem

                                courseId={this.props.courseId}
                                moduleId={this.props.moduleId}
                                lessonId={this.props.lessonId}
                                key={topic._id}
                                topic={topic}
                                deleteTopic={this.props.deleteTopic}
                                updateTopic={this.props.updateTopic}
                            />
                        )
                    }
                    <a type="button" style={{float: "right"}} onClick={() => this.props.createTopic(this.props.lessonId)}>
                        <i className="fa fa-plus fa-2x"></i>
                    </a>
                </nav>

            </div>)

    }
}


const stateToPropertyManager = (state) => {
    return {
        topics: state.topics.topics
    }
}

const dispatchToPropertyManager = (dispatch) => {
    return {

        findTopicsForLesson: (lessonId) =>
            TopicService.findTopicsForLesson(lessonId)
                .then(actualTopics =>
                    dispatch({
                        type: FIND_ALL_TOPICS,
                        topics: actualTopics
                    })),
        deleteTopic: (topicId) =>
            TopicService.deleteTopic(topicId)
                .then(status =>
                    dispatch(deleteTopic(topicId))
                ),

        createTopic: (lessonId) => {
            TopicService.createTopic(lessonId, {
                title: 'New Topic'
            }).then(actualTopic =>
            {
                dispatch(createTopic(actualTopic))
            })
        },

        updateTopic: async (topicId, topic) => {
            const updatedTopic = TopicService.updateTopic(topicId, topic)
                console.log(updatedTopic)
        },

    }

}

export default connect(stateToPropertyManager, dispatchToPropertyManager)
                (TopicList)



