import React from "react";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";


class TopicListItem extends React.Component {


    constructor(props) {
        super(props);
    }


    state ={
        selected : '',
        editing: false,
        topic: this.props.topic
    }


render () {
    return (

<div style={{paddingTop: "5px"}}>


            {
                !this.state.editing && !this.props.editing &&

                <div className="nav-item nav-link shadow bg-white rounded-pill">
                            <div className="row" onClick={(e)=> {
                                this.setState({
                                    selected : this.state.topic.id
                                })
                            }}>
                                <div className="col-4" >
                                    {/*<Link to={`/course-editor/${this.props.courseId}/module/${this.props.moduleId}/lesson/${this.props.lessonId}/topic/${this.props.topic.id}`}>*/}

                                    <h5>{this.state.topic.title}</h5>
                                    {/*</Link>*/}
                                </div>
                                <div className="col-2">
                                        <div type="button" style={{margin: "none"}} onClick={() => this.setState({
                                                editing : true
                                            })}>
                                            <i className="fa fa-pencil-square fa-2x"></i>
                                        </div>
                                </div>
                                <div className="col">

                                        <button type="button" className="close wbdv-module-item-delete-btn"
                                                onClick={() => this.props.deleteTopic(this.state.topic.id)}>
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                </div>

                            </div>
                </div>

            }

    {
        !this.state.editing && this.props.editing &&

        <div className="nav-item nav-link shadow bg-primary rounded-pill">
            <div className="row" onClick={(e) => {
                this.setState({
                    selected : ''
                })
            }}>
                <div className="col-4">
                    {/*<Link to={`/course-editor/${this.props.courseId}/module/${this.props.moduleId}/lesson/${this.props.lessonId}/topic/${this.props.topic.id}`}>*/}
                    <h5 style={{color: "white"}}>{this.state.topic.title}</h5>
                    {/*</Link>*/}
                </div>
                <div className="col">
                    <a type="button" style={{margin: "none", color: "azure"}} onClick={() => this.setState({
                        editing : true
                    })}>
                        <i className="fa fa-pencil-square fa-2x"></i>
                    </a>
                </div>
                <div className="col">
                    <button type="button" className="close wbdv-module-item-delete-btn"
                            onClick={() => this.props.deleteTopic(this.state.topic.id)}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>

            </div>
        </div>

    }

            {

                this.state.editing &&
                <a className="nav-item nav-link shadow rounded-pill">
                    <li className="nav-item">

                        <div className="row">
                            <div className="col-8">
                            {/*<Link to={`/course-editor/${this.props.courseId}/module/${this.props.moduleId}/lesson/${this.props.lessonId}`}>*/}

                                    <input className="form-control"
                                           onChange={(e )=> this.setState(
                                               {
                                                   topic: {
                                                       ...this.state.topic,
                                                       title: e.target.value
                                                   }
                                               }
                                           )
                                           }
                                           value= {this.state.topic.title}/>
                            </div>
                            <div className="col">
                                    <button type="button" style={{border:"none",background:"none"}} onClick={(e) =>{
                                        this.props.updateTopic(this.state.topic.id, this.state.topic).then(status =>
                                            this.setState({
                                                editing: false,
                                            }))
                                    }}>
                                        <i className="fa fa-check-circle fa-2x"></i>
                                    </button>

                            </div>
                            {/*</Link>*/}
                        </div>

                    </li>
                </a>

            }

</div>
    )

}

}


export default TopicListItem