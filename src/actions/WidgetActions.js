

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

export const updateWidget = (updatedWidget) => ({
    type: UPDATE_WIDGET,
    updatedWidget: updatedWidget
})

export const FIND_ALL_WIDGETS = "FIND_ALL_WIDGETS"