import React from "react";
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../../node_modules/font-awesome/css/font-awesome.css';
import {
    createWidget,
    deleteWidget,
    FIND_ALL_WIDGETS,
    POSITION_DOWN,
    POSITION_UP,
    updateWidget,
    positionUp,
    positionDown
} from "../../actions/WidgetActions";
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
        widgets: this.props.widgets,
        addWidgetType: "HEADING"
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
            <div className="container-fluid">
                <span>
                {
                    this.props.widgets && this.props.widgets.map(widget =>
                    <div key={widget.id} className="row">
                        <div className="col-10" style={{paddingTop: "1cm"}}>
                        <WidgetListItem
                            deleteWidget={this.props.deleteWidget}
                            widget={widget}
                            editing={widget === this.state.widget}
                            save={this.save}
                            notEditing={this.notEditing}
                            updateWidget={this.props.updateWidget}
                            positionUp={this.props.positionUp}
                            positionDown={this.props.positionDown}
                            topicId={this.props.topicId}
                            counter={counter}
                            first = {this.props.widgets.indexOf(widget) === 0}
                            last = {this.props.widgets.indexOf(widget) === this.props.widgets.length-1}
                            state = {this.props}
                        />
                        </div>
                        <div className="col-2" style={{paddingTop: "1cm"}}>
                            {
                                widget !== this.state.widget &&
                            <button className="btn btn-primary" style={{float:"right"}} onClick={() => this.setState({
                                widget: widget
                            })}>
                                <i className="fa fa-pencil-square fa-2x"></i>
                            </button>
                            }
                        </div>
                    </div>
                    )
                }
            </span>
                { this.props.topicId &&
                <div className="col-4 align-self-center" style={{paddingTop: "1cm"}}>
                    <select className="form-control" onChange={(e)=> {
                        const widgetType = e.target.value
                        this.setState({
                            addWidgetType: widgetType
                        })
                    }}>
                        <option value="HEADING">Heading</option>
                        <option value="PARAGRAPH">Paragraph</option>
                        <option value="LIST">List</option>
                        <option value="IMAGE">Image</option>

                    </select>

                    {
                        this.state.addWidgetType === "HEADING" &&
                        <a type="button" style={{float: "right", paddingLeft: "20px", paddingTop: "20px"}}
                           onClick={() => this.props.createWidget(this.props.topicId)}>
                            <i className="fa fa-plus fa-2x"></i>
                        </a>
                    }
                    {
                        this.state.addWidgetType === "PARAGRAPH" &&
                        <a type="button" style={{float: "right", paddingLeft: "20px", paddingTop: "20px"}}
                           onClick={() => this.props.createWidgetPara(this.props.topicId)}>
                            <i className="fa fa-plus fa-2x"></i>
                        </a>

                    }
                    {
                        this.state.addWidgetType === "LIST" &&
                        <a type="button" style={{float: "right", paddingLeft: "20px", paddingTop: "20px"}}
                           onClick={() => this.props.createWidgetList(this.props.topicId)}>
                            <i className="fa fa-plus fa-2x"></i>
                        </a>

                    }
                    {
                        this.state.addWidgetType === "IMAGE" &&
                        <a type="button" style={{float: "right", paddingLeft: "20px", paddingTop: "20px"}}
                           onClick={() => this.props.createWidgetImage(this.props.topicId)}>
                            <i className="fa fa-plus fa-2x"></i>
                        </a>

                    }
                </div>
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

let counter = -1;

const dispatchToPropertyManager = (dispatch) => {
    return {

        findWidgetsForTopic : (topicId) => {
            //WidgetService.findWidgetsForTopic(topicId)
              fetch(`https://wbdv-sg20-sreekar-server-java.herokuapp.com/api/topics/${topicId}/widgets`)
                .then(response => response.json())
                .then(actualWidgets =>
                    dispatch({
                        type: FIND_ALL_WIDGETS,
                        widgets: actualWidgets
                    }))
        },

         deleteWidget : (widgetId) => {
                //WidgetService.deleteWidget(widgetId)
                fetch(`https://wbdv-sg20-sreekar-server-java.herokuapp.com/api/widgets/${widgetId}`, {
                    method: "DELETE"
                }).then(response => response.json())
                    .then(status =>
                        dispatch(deleteWidget(widgetId))
                    )
         },

        createWidget : (topicId) => {
            //WidgetService.createWidget(topicId, {
            fetch(`https://wbdv-sg20-sreekar-server-java.herokuapp.com/api/topics/${topicId}/widgets`, {
                method: "POST",
                body: JSON.stringify({
                    // id: (new Date()).getTime()+"",
                    title: "Heading Widget",
                    index: ++counter,
                    type: "HEADING"

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

        createWidgetPara : (topicId) => {
            //WidgetService.createWidget(topicId, {
            fetch(`https://wbdv-sg20-sreekar-server-java.herokuapp.com/api/topics/${topicId}/widgets`, {
                method: "POST",
                body: JSON.stringify({
                    // id: (new Date()).getTime()+"",
                    title: "Paragraph Widget",
                    index: ++counter,
                    type: "PARAGRAPH"

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

        createWidgetList : (topicId) => {
            //WidgetService.createWidget(topicId, {
            fetch(`https://wbdv-sg20-sreekar-server-java.herokuapp.com/api/topics/${topicId}/widgets`, {
                method: "POST",
                body: JSON.stringify({
                    // id: (new Date()).getTime()+"",
                    title: "List Widget",
                    index: ++counter,
                    type: "LIST",
                    listType: "ul"

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

        createWidgetImage : (topicId) => {
            //WidgetService.createWidget(topicId, {
            fetch(`https://wbdv-sg20-sreekar-server-java.herokuapp.com/api/topics/${topicId}/widgets`, {
                method: "POST",
                body: JSON.stringify({
                    // id: (new Date()).getTime()+"",
                    title: "Image Widget",
                    index: ++counter,
                    type: "IMAGE"
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

        positionUp : async (topicId, widgetId, widget, state) => {
            let temp;
            temp = dispatch(positionUp(widget))
                    console.log("In Widget List->", temp)
                    console.log("state after change ->", state.widgets)
            for( let i= 0; i < state.widgets.length; i++){
                await WidgetService.updateWidget(state.widgets[i].id, state.widgets[i])
            }
        },

        positionDown : async (topicId, widgetId, widget, state) => {
                    dispatch(positionDown(widget))
                    console.log("In Widget List->", state.widgets)
            for( let i= 0; i < state.widgets.length; i++){
                await WidgetService.updateWidget(state.widgets[i].id, state.widgets[i])
            }
    },

        updateWidget: async (widgetId, widget) => {
            const updatedWidget = WidgetService.updateWidget(widgetId, widget)
                .then(updatedWidget => {
                    dispatch(updateWidget(widget))
                })
            console.log("updated Successfully")
        },

    }

}


export default connect(stateToPropertyManager,dispatchToPropertyManager)
                (WidgetList)
