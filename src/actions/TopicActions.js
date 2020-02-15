export const CREATE_TOPIC = "CREATE_TOPIC"

export const createTopic = (newTopic) => ({
    type: CREATE_TOPIC,
    newTopic: newTopic
})


export const DELETE_TOPIC = "DELETE_TOPIC"

export const deleteTopic = (topicId) => ({
    type: DELETE_TOPIC,
    topicId: topicId
})

export const UPDATE_TOPIC = "UPDATE_TOPIC"
export const updateTopic = (updatedTopic) => ({
    type: UPDATE_TOPIC,
    updatedTopic: updatedTopic
})


export const FIND_ALL_TOPICS = "FIND_ALL_TOPICS"


// export const findTopicsForLesson = (topics) => ({
//     type: FIND_ALL_TOPICS,
//     topics: topics
// })