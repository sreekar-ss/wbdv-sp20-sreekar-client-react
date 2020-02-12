const initialState = {
    stateVariable1: {},

    modules: [
        {_id: "123", title: "CSS" },
        {_id: "122", title: "HTML" },
        {_id: "124", title: "BOOTSTRAP" },
        {_id: "125", title: "REACT" },
        {_id: "126", title: "REDUX" },
    ]
}

const moduleReducer = (state = initialState, action) => {

    if(action.type === "CREATE_MODULE"){
        return {
            modules: [
                ...state.modules,
                action.newModule
            ]
        }
    }

    return state
}


export default moduleReducer