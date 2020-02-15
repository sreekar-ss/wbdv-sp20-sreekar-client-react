


export const createTopic = (lessonId, topic) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/siddulas/lessons/${lessonId}/topics`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(topic)
    })
        .then(response => response.json())


export const findTopicsForLesson = (lessonId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/siddulas/lessons/${lessonId}/topics`)
        .then(response => response.json())

export const findAllTopics = () =>
    fetch("https://wbdv-generic-server.herokuapp.com/api/siddulas/topics")
        .then(response => response.json())

export const deleteTopic = (topicId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/siddulas/topics/${topicId}`, {
        method : "DELETE"
    }).then(response => response.json())

export const updateTopic = (topicId, topic) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/siddulas/topics/${topicId}`, {
        method: 'PUT',
        body: JSON.stringify(topic),
        headers: {
            'content-type' : 'application/json'
        }
    }).then(response => response.json())


export default {
    createTopic,
    findTopicsForLesson,
    findAllTopics,
    deleteTopic,
    updateTopic
}
