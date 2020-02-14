export const CREATE_LESSON = "CREATE_LESSON"

export const createLesson = (newLesson) => ({
    type: CREATE_LESSON,
    newLesson: newLesson
})


export const DELETE_LESSON = "DELETE_LESSON"

export const deleteLesson = (lessonId) => ({
    type: DELETE_LESSON,
    lessonId: lessonId
})

export const UPDATE_LESSON = "UPDATE_LESSON"
export const updateLesson = (updatedLesson) => ({
    type: UPDATE_LESSON,
    updatedLesson: updatedLesson
})


export const FIND_ALL_LESSONS = "FIND_ALL_LESSONS"