import {createModule, deleteModule, findAllModules, findModulesForCourse, updateModule} from "./ModuleService";


export const createLesson = (moduleId, lesson) =>

    fetch(`https://wbdv-generic-server.herokuapp.com/api/siddulas/modules/${moduleId}/lessons`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(lesson)
    })
        .then(response => response.json())


export const findLessonsForModule = (moduleId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/siddulas/modules/${moduleId}/lessons`)
        .then(response => response.json())

export const findAllLessons = () =>
    fetch("https://wbdv-generic-server.herokuapp.com/api/siddulas/lessons")
        .then(response => response.json())

export const deleteLesson = (lessonId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/siddulas/lessons/${lessonId}`, {
        method : "DELETE"
    }).then(response => response.json())

export const findLessonById = (lessonId) => {
    return fetch(`https://wbdv-generic-server.herokuapp.com/api/siddulas/lessons/${lessonId}`, {
        method : 'GET'
    }).then(response => response.json())
}

export const updateLesson = async (lessonId, lesson) => {

    const response = await fetch(`https://wbdv-generic-server.herokuapp.com/api/siddulas/lessons/${lessonId}`, {
        method: 'PUT',
        body: JSON.stringify(lesson),
        headers: {
            'content-type': 'application/json'
        }
    })
    if (await response.json() === 1) {
        const responseLesson = findLessonById(lessonId)
        console.log(responseLesson)
        return await responseLesson
    }

}
export default {
    findAllLessons,
    deleteLesson,
    findLessonsForModule,
    createLesson,
    updateLesson,
    findLessonById
}