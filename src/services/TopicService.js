


export const createTopic = (lessonId, topic) =>
    fetch(`http://localhost:8080/api/lessons/${lessonId}/topics`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(topic)
    })
        .then(response => response.json())


export const findTopicsForLesson = (lessonId) =>
    fetch(`http://localhost:8080/api/lessons/${lessonId}/topics`)
        .then(response => response.json())

export const findAllTopics = () =>
    fetch("http://localhost:8080/api/topics")
        .then(response => response.json())

export const deleteTopic = (topicId) =>
    fetch(`http://localhost:8080/api/topics/${topicId}`, {
        method : "DELETE"
    }).then(response => response.json())

export const findTopicById = (topicId) => {
    return fetch(`http://localhost:8080/api/topics/${topicId}`, {
        method : 'GET'
    }).then(response => response.json())
}


export const updateTopic = async (topicId, topic) => {
    const response = await fetch(`http://localhost:8080/api/topics/${topicId}`, {
        method: 'PUT',
        body: JSON.stringify(topic),
        headers: {
            'content-type': 'application/json'
        }
    })
    if(await response.json() === 1){
        const responseTopic = findTopicById(topicId)

        return await responseTopic
    }

}
export default {
    createTopic,
    findTopicsForLesson,
    findAllTopics,
    deleteTopic,
    updateTopic,
    findTopicById
}
