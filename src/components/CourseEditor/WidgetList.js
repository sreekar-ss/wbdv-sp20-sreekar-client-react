import React from "react";
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../../node_modules/font-awesome/css/font-awesome.css';
import {createWidget, deleteWidget, FIND_ALL_WIDGETS, updateWidget} from "../../actions/WidgetActions";
import TopicService from "../../services/TopicService";
import {connect} from "react-redux";
import HeadingWidget from "./widgets/HeadingWidget";
import ParagraphWidget from "./widgets/ParagraphWidget";
import WidgetListItem from "./widgets/WidgetListItem";
import WidgetService from "../../services/WidgetService";





class WidgetList extends React.Component{


    componentDidMount() {
        this.props.findWidgetsForTopic(this.props.topicId)
    }


    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.topicId !== prevProps.topicId){
            this.props.findWidgetsForTopic(this.props.topicId)
        }
    }

    state = {
        widget: {},
        widgets: this.props.widgets
    }

    save = (widgetId, widget) => {
        this.setState({
            widget: {}
        })
        this.props.updateWidget(widgetId,widget)
    }

    notEditing = () => {
        this.setState({
            widget: {}
        })
    }



    render() {
        return (
            <div>
                {
                    this.props.widgets && this.props.widgets.map(widget =>
                    <div key={widget.id}>
                        <WidgetListItem
                            deleteWidget={this.props.deleteWidget}
                            widget={widget}
                            editing={widget === this.state.widget}
                            save={this.save}
                            notEditing={this.notEditing}
                            updateWidget={this.props.updateWidget}
                            positionUp={this.props.positionUp}
                            topicId={this.props.topicId}
                        />
                        {
                            widget !== this.state.widget &&
                            <button onClick={() => this.setState({
                            widget: widget
                        })}>
                            <i className="fa fa-pencil-square fa-2x"></i>
                        </button>
                        }
                    </div>
                    )
                }
                <a type="button" style={{float: "left", paddingLeft: "20px", paddingTop: "20px"}} onClick={() => this.props.createWidget(this.props.topicId)}>
                    <i className="fa fa-plus fa-2x"></i>
                </a>

            </div>

        )

    }
}



const stateToPropertyManager = (state) => {
    return {
        widgets: state.widgets.widgets
    }
}

let counter = -1;

const dispatchToPropertyManager = (dispatch) => {
    return {

        findWidgetsForTopic : (topicId) => {
            //WidgetService.findWidgetsForTopic(topicId)
              fetch(`http://localhost:8080/api/topics/${topicId}/widgets`)
                .then(response => response.json())
                .then(actualWidgets =>
                    dispatch({
                        type: FIND_ALL_WIDGETS,
                        widgets: actualWidgets
                    }))
        },

         deleteWidget : (widgetId) => {
                //WidgetService.deleteWidget(widgetId)
                fetch(`http://localhost:8080/api/widgets/${widgetId}`, {
                    method: "DELETE"
                }).then(response => response.json())
                    .then(status =>
                        dispatch(deleteWidget(widgetId))
                    )
         },

        createWidget : (topicId) => {
            //WidgetService.createWidget(topicId, {
            fetch(`http://localhost:8080/api/topics/${topicId}/widgets`, {
                method: "POST",
                body: JSON.stringify({
                    id: (new Date()).getTime()+"",
                    title: "New Widget",
                    index: ++counter

                }),
                headers:{
                    'content-type': 'application/json'
                }
            }).then(response => response.json())
                .then(actualWidget => {
                dispatch(createWidget(actualWidget))
            })
            console.log('Reached Here')
        },

        positionUp : (topicId, widgetId, widget) => {
            fetch(`http://localhost:8080/api/topics/${topicId}/widgets/${widgetId}/up`,{
                method: "POST",
                body: JSON.stringify(widget),
                headers:{
                    'content-type': 'application/json'
                }}).then(response => response.json()).then(actualWidgets =>
                    dispatch({
                        type: FIND_ALL_WIDGETS,
                        widgets: actualWidgets
                    }))
        },


        updateWidget: async (widgetId, widget) => {
            const updatedWidget = WidgetService.updateWidget(widgetId, widget)
            // fetch(`http://localhost:8080/api/widgets/${widgetId}`, {
            //     method: "PUT",
            //     body: JSON.stringify(widget),
            //     headers:{
            //         'content-type': 'application/json'
            //     }
            // }).then(response => await response.json())
                .then(updatedWidget => {
                    dispatch(updateWidget(widget))
                })
            console.log("updated Successfully")
        },

    }

}


export default connect(stateToPropertyManager,dispatchToPropertyManager)
                (WidgetList)