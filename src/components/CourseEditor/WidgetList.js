


import React from "react";
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../../node_modules/font-awesome/css/font-awesome.css';
import {createWidget, deleteWidget, FIND_ALL_WIDGETS} from "../../actions/WidgetActions";
import TopicService from "../../services/TopicService";
import {connect} from "react-redux";





class WidgetList extends React.Component{


    componentDidMount() {
        this.props.findWidgetsForTopic(this.props.topicId)
    }


    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.topicId !== prevProps.topicId){
            this.props.findWidgetsForTopic(this.props.topicId)
        }
    }

    render() {
        return (
            <div>
                <h1>Widget List</h1>
                {
                    this.props.widgets.map(widget =>
                    <li key={widget.id}>
                        {widget.title}
                    </li>
                    )
                }



            </div>

        )

    }
}



const stateToPropertyManager = (state) => {
    return {
        widgets: state.widgets.widgets
    }
}



const dispatchToPropertyManager = (dispatch) => {
    return {

        findWidgetsForTopic : (topicId) => {
            //WidgetService.findWidgetsForTopic(topicId)
              fetch("http://localhost:8080/api/widgets")
                .then(response => response.json())
                .then(actualWidgets =>
                    dispatch({
                        type: FIND_ALL_WIDGETS,
                        widgets: actualWidgets
                    }))
        },

        //  deleteWidget : (widgetId) => {
        //         WidgetService.deleteWidget(widgetId)
        //             .then(status =>
        //                 dispatch(deleteWidget(widgetId))
        //             )
        //  },
        //
        //
        // createWidget : (topicId) => {
        //     WidgetService.createWidget(topicId, {
        //         title: 'New Widget'
        //     }).then(actualWidget => {
        //         dispatch(createWidget(actualWidget))
        //     })
        // },
        //
        //
        // updateWidget: async (widgetId, widget) => {
        //     const updatedWidget = WodgetService.updateWidget(widgetId, widget)
        //     console.log(updatedWidget)
        // },

    }

}


export default connect(stateToPropertyManager,dispatchToPropertyManager)
                (WidgetList)