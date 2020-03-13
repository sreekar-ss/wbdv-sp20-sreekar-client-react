


export const createTopic = (lessonId, topic) =>
    fetch(`https://wbdv-sg20-sreekar-server-java.herokuapp.com/api/lessons/${lessonId}/topics`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(topic)
    })
        .then(response => response.json())


export const findTopicsForLesson = (lessonId) =>
    fetch(`https://wbdv-sg20-sreekar-server-java.herokuapp.com/api/lessons/${lessonId}/topics`)
        .then(response => response.json())

export const findAllTopics = () =>
    fetch("https://wbdv-sg20-sreekar-server-java.herokuapp.com/api/topics")
        .then(response => response.json())

export const deleteTopic = (topicId) =>
    fetch(`https://wbdv-sg20-sreekar-server-java.herokuapp.com/api/topics/${topicId}`, {
        method : "DELETE"
    }).then(response => response.json())

export const findTopicById = (topicId) => {
    return fetch(`https://wbdv-sg20-sreekar-server-java.herokuapp.com/api/topics/${topicId}`, {
        method : 'GET'
    }).then(response => response.json())
}


export const updateTopic = async (topicId, topic) => {
    const response = await fetch(`https://wbdv-sg20-sreekar-server-java.herokuapp.com/api/topics/${topicId}`, {
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
