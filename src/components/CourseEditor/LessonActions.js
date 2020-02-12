export const CREATE_LESSON = "CREATE_LESSON"

export const createLesson = (newLesson) => ({
    type: CREATE_LESSON,
    newModule: newLesson
})


export const DELETE_LESSON = "DELETE_LESSON"

export const deleteLesson = (lessonId) => ({
    type: DELETE_LESSON,
    moduleId: lessonId
})


export const FIND_ALL_LESSONS = "FIND_ALL_LESSONS"