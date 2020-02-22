

export const CREATE_WIDGET = "CREATE_WIDGET"


export const createWidget = (newWidget) => ({

    type: CREATE_WIDGET,
    newWidget: newWidget
})


export const DELETE_WIDGET = "DELETE_WIDGET"

export const deleteWidget = (widgetId) => ({
    type: DELETE_WIDGET,
    widgetId: widgetId
})

export const UPDATE_WIDGET = "UPDATE_TOPIC"

export const updateWidget = (updatedWidget) => (
    console.log("In action ",updatedWidget),
    {
    type: UPDATE_WIDGET,
    widget: updatedWidget
})


export const POSITION_UP = "POSITION_UP"

export const POSITION_DOWN = "POSITION_DOWN"


export const FIND_ALL_WIDGETS = "FIND_ALL_WIDGETS"