import React from "react";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";




class LessonListItem extends React.Component {

    constructor(props) {
        super(props);
    }


    state ={
        selected: '',
        editing: false,
        lesson: this.props.lesson
    }

    editLesson = (e) => {
        this.setState({
            lesson: {
                ...this.state.lesson,
                title: e.target.value
            }
        })}

        render() {

return (

    <div>
        { !this.state.editing && !this.props.selected &&


                    <a className="nav-item nav-link shadow bg-white rounded">
                        <div className="row" onClick={(e)=> {
                            this.setState({
                                selected :this.state.lesson._id
                            })
                        }}>
                        <div className="col-6">
                            {/*<Link to={`/course-editor/${this.props.courseId}/module/${this.props.moduleId}/lesson/${this.props.lesson._id}`}>*/}
                                <h5>{this.state.lesson.title}</h5>
                            {/*</Link>*/}
                        </div>
                            <div className="col">
                                <a type="button" style={{margin: "none"}} onClick={() => this.setState({
                                    editing : true
                                }
                                    )
                                }>
                                    <i className="fa fa-pencil-square fa-2x"></i>
                                </a>
                            </div>
                            <div className="col">
                                <button type="button" className="close wbdv-module-item-delete-btn"
                                        onClick={() => this.props.deleteLesson(this.state.lesson._id)}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>

                        </div>
                    </a>


            }

        { !this.state.editing && this.props.selected &&


                    <a className="nav-item nav-link shadow bg-primary rounded">
                        <div className="row" onClick={(e)=> {
                            this.setState({
                                selected :''
                            })
                        }}>
                            <div className="col-6">
                                {/*<Link to={`/course-editor/${this.props.courseId}/module/${this.props.moduleId}/lesson/${this.props.lesson._id}`}>*/}
                                <h5 style={{color: "white"}}>{this.state.lesson.title}</h5>
                                {/*</Link>*/}
                            </div>
                            <div className="col">
                                <a type="button" style={{margin: "none", color: "azure"}} onClick={() => this.setState({
                                        editing : true
                                    }
                                )
                                }>
                                    <i className="fa fa-pencil-square fa-2x"></i>
                                </a>
                            </div>
                            <div className="col">
                                <button type="button" className="close wbdv-module-item-delete-btn"
                                        onClick={() => this.props.deleteLesson(this.state.lesson._id)}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>

                        </div>
                    </a>


        }

        { this.state.editing &&

        <li className="nav-item bg-light shadow">
            <Link to={`/course-editor/${this.props.courseId}/module/${this.props.moduleId}`}>
                <a className="nav-link active">
                <div className="row">
                        <div className="col-8">
                        <input className="form-control"
                               onChange={(e )=> this.setState(
                                   {
                                       lesson: {
                                           ...this.state.lesson,
                                           title: e.target.value
                                       }
                                   }
                               )
                         }
                        value= {this.state.lesson.title}/>
                        </div>
                        <div className="col">
                            <button type="button" style={{border:"none",background:"none"}} onClick={(e) =>{
                                this.props.updateLesson(this.state.lesson._id, this.state.lesson).then(status =>
                                    this.setState({
                                        editing: false,
                                    }))
                            }}>
                                <i className="fa fa-check-circle fa-2x"></i>
                            </button>
                        </div>

                </div>
                </a>
            </Link>
        </li>

        }
    </div>
    //
    // <Router>
    //
    //     <Route path="/course-editor/:courseId/module/:moduleId/lesson"
    //         exact={true}
    //     render = { (props) =>
    //
    //             <LessonItem
    //                 lesson={this.state.lesson}
    //                 deleteLesson={this.props.deleteLesson}
    //                 courseId={props.courseId}
    //                 moduleId={props.moduleId}
    //                 />
    //                 }
    //         />
    //
    //
    //
    //
    // </Router>
)


    }

}

export default LessonListItem