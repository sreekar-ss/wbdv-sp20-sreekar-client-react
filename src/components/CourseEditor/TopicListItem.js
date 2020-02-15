import React from "react";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";


class TopicListItem extends React.Component {


    constructor(props) {
        super(props);
    }


    state ={
        editing: false,
        topic: this.props.topic
    }


render () {
    return (


        <div>
            {
                !this.state.editing &&

                    <li className="nav-item">

                        <div className="row">
                            <Link to={`/course-editor/${this.props.courseId}/module/${this.props.moduleId}/lesson/${this.props.lessonId}`}>
                                <a className="nav-link">
                                    {this.props.topic.title}

                                    <a type="button" style={{margin: "none"}} onClick={() => this.setState({
                                            editing : true
                                        })}>
                                        <i className="fa fa-pencil-square fa-2x"></i>
                                    </a>

                                    <button type="button" className="close wbdv-module-item-delete-btn"
                                            onClick={() => this.props.deleteTopic(this.state.topic._id)}>
                                        <span aria-hidden="true">&times;</span>
                                    </button>

                                </a>

                            </Link>

                        </div>

                    </li>

            }


            {
                this.state.editing &&
                <li className="nav-item">

                    <div className="row">
                        <Link to={`/course-editor/${this.props.courseId}/module/${this.props.moduleId}/lesson/${this.props.lessonId}`}>
                            <a className="nav-link active">
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

                                <button type="button" style={{border:"none",background:"none"}} onClick={(e) =>{
                                    this.props.updateTopic(this.state.topic._id, this.state.topic).then(status =>
                                        this.setState({
                                            editing: false,
                                        }))
                                }}>
                                    <i className="fa fa-check-circle fa-2x"></i>
                                </button>

                            </a>

                        </Link>

                    </div>

                </li>

            }







        </div>
    )

}

}


export default TopicListItem