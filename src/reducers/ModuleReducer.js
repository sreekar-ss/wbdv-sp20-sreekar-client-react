import {CREATE_MODULE, DELETE_MODULE, FIND_ALL_MODULES, UPDATE_MODULE} from "../actions/ModuleActions";

const initialState = {
    stateVariable1: {},

    modules: [ ]
}

const moduleReducer = (state = initialState, action) => {

    switch (action.type) {


        case FIND_ALL_MODULES:
            return {
                modules: action.modules
            }

        case CREATE_MODULE:
            return {
                modules: [
                    ...state.modules,
                    action.newModule
                ]
            }

        case DELETE_MODULE:
            return {
                modules: state.modules.filter(module => module._id !== action.moduleId)
            }

        case UPDATE_MODULE:
            return {
                modules: [
                    state.modules.filter(module => module._id !== action.moduleId),
                    action.updatedModule
                    ]
            }
        default:
            return state

    }

}


export default moduleReducer