import {API_URL} from "../components/common/constants";


export const createModule = (courseId, module) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/siddulas/courses/${courseId}/modules`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(module)
    })
        .then(response => response.json())

export const findModulesForCourse = (courseId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/siddulas/courses/${courseId}/modules`)
        .then(response => response.json())


export const findAllModules = () =>
    fetch("https://wbdv-generic-server.herokuapp.com/api/siddulas/modules")
        .then(response => response.json())

export const deleteModule = (moduleId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/siddulas/modules/${moduleId}`, {
        method : "DELETE"
    }).then(response => response.json())

export const findModuleById = (moduleId) => {
    return fetch(`https://wbdv-generic-server.herokuapp.com/api/siddulas/modules/${moduleId}`, {
        method : "GET"
    })
                .then(response => response.json())
}


export const updateModule = async (moduleId, module) =>
{
    console.log(moduleId)
    const response = await fetch(`https://wbdv-generic-server.herokuapp.com/api/siddulas/modules/${moduleId}`,{
        method : 'PUT',
        body : JSON.stringify(module),
        headers : {
            'content-type' : 'application/json'
        }
    })
    if( await response.json() === 1){
        const responseModule = findModuleById(moduleId)
        console.log(responseModule)
        return await responseModule
    }
}

export default {
    findAllModules,
    deleteModule,
    findModulesForCourse,
    createModule,
    updateModule,
    findModuleById
}