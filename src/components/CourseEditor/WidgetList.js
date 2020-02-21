import React from "react";
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../../node_modules/font-awesome/css/font-awesome.css';
import {createWidget, deleteWidget, FIND_ALL_WIDGETS} from "../../actions/WidgetActions";
import TopicService from "../../services/TopicService";
import {connect} from "react-redux";
import HeadingWidget from "./widgets/HeadingWidget";
import ParagraphWidget from "./widgets/ParagraphWidget";
import WidgetListItem from "./widgets/WidgetListItem";





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
        widget: {}
    }

    save = () => {
        this.setState({
            widget: {}
        })
    }

    render() {
        return (
            <div>
                {
                    this.props.widgets.map(widget =>
                    <div key={widget.id}>
                        <WidgetListItem
                            deleteWidget={this.props.deleteWidget}
                            widget={widget}
                            editing={widget === this.state.widget}
                            save={this.save}
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
                    title: "New Widget"
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