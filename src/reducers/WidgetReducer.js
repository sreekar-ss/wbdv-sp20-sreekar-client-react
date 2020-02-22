import {
    CREATE_WIDGET,
    DELETE_WIDGET,
    FIND_ALL_WIDGETS,
    POSITION_DOWN,
    POSITION_UP,
    UPDATE_WIDGET
} from "../actions/WidgetActions";


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
            console.log("In reducer ");
            return {
                widgets: state.widgets.map(widget => widget.id === action.widget.id ? action.widget: widget)
            }

        case POSITION_UP:
            console.log("In reducer ");
            return {
                widgets: action.widgets
            }

        case POSITION_DOWN:
            return {
                widgets: action.widgets
            }

        default:
            return state

    }
}

export default widgetReducer