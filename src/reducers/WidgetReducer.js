import {CREATE_WIDGET, DELETE_WIDGET, FIND_ALL_WIDGETS, UPDATE_WIDGET} from "../actions/WidgetActions";


const initialState = {

    //stateVariable1:{}
    widgets : []
}

const widgetReducer = (state = initialState, action) => {

    switch (action.type) {

        case FIND_ALL_WIDGETS:
            return {
                widgets: action.widgets
            }

        case CREATE_WIDGET:
            return {
                widgets: [
                    ...state.widgets,
                    action.newWidget
                ]
            }
        case DELETE_WIDGET:
            return {
                widgets: state.widgets.filter(widget => widget.id !== action.widgetId)
            }

        case UPDATE_WIDGET:
            return {
                widgets: [
                    state.widgets.filter(widget => widget.id !== action.widgetId),
                    action.updatedWidget
                ]
            }

        default:
            return state

    }
}

export default widgetReducer