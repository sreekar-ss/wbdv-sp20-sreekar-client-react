
import {CREATE_TOPIC, FIND_ALL_TOPICS, DELETE_TOPIC, UPDATE_TOPIC} from "../actions/TopicActions";


const initialState = {
    stateVariable1: {},

    topics: [ ]
}


const topicReducer = (state = initialState, action) => {

    switch (action.type) {


        case FIND_ALL_TOPICS:
            return {
                topics: action.topics
            }

        case CREATE_TOPIC:
            return {
                topics: [
                    ...state.topics,
                    action.newTopic
                ]
            }

        case DELETE_TOPIC:
            return {
                topics: state.topics.filter(topic => topic._id !== action.topicId)
            }

        case UPDATE_TOPIC:
            return {
                topics: [
                    state.topics.filter(topic => topic._id !== action.topicId),
                    action.updatedTopic
                ]
            }
        default:
            return state

    }

}

export default topicReducer