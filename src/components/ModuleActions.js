export const CREATE_MODULE = "CREATE_MODULE"

export const createModule = (newModule) => ({
    type: CREATE_MODULE,
    newModule: newModule
})


export const DELETE_MODULE = "DELETE_MODULE"

export const deleteModule = (moduleId) => ({
    type: DELETE_MODULE,
    moduleId: moduleId
})

export const UPDATE_MODULE = "UPDATE_MODULE"
export const updateModule = (updatedModule) => ({
    type: UPDATE_MODULE,
    updatedModule : updatedModule
})

export const FIND_ALL_MODULES = "FIND_ALL_MODULES"