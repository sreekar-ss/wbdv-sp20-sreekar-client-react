


export const updateWidget = async (widgetId, widget) => {
    const response = await fetch(`http://localhost:8080/api/widgets/${widgetId}`, {
        method: 'PUT',
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json'
        }
    })
    //const responseWidget = findWidgetByTopic(widgetId)
        return await response.json()
    }



export default {
    updateWidget
}