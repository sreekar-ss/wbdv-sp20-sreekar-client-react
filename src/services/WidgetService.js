


export const updateWidget = async (widgetId, widget) => {
    const response = await fetch(`https://wbdv-sg20-sreekar-server-java.herokuapp.com/api/widgets/${widgetId}`, {
        method: 'PUT',
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json'
        }
    })

        return await response.json()
    }

export const positionUp = async (topicId, widgetId, widget) => {
        const response = await fetch(`https://wbdv-sg20-sreekar-server-java.herokuapp.com/api/topics/${topicId}/widgets/${widgetId}/up`, {
            method: "POST",
            body: JSON.stringify(widget),
            headers: {
                'content-type': 'application/json'
            }
        })

    return await response.json()
    }

export const positionDown = async (topicId, widgetId, widget) => {
    const response = await fetch(`https://wbdv-sg20-sreekar-server-java.herokuapp.com/api/topics/${topicId}/widgets/${widgetId}/down`, {
        method: "POST",
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json'
        }
    })

    return await response.json()
}


export default {
    updateWidget,
    positionUp,
    positionDown
}