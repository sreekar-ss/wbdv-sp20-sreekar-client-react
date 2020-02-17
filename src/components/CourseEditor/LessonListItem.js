import React from "react";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";




class LessonListItem extends React.Component {

    constructor(props) {
        super(props);
    }


    state ={
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
        { !this.state.editing &&

                <li className="nav-item">

                        <div className="row">

                            <a className="nav-link">
                            <Link to={`/course-editor/${this.props.courseId}/module/${this.props.moduleId}/lesson/${this.props.lesson._id}`}>
                                {this.props.lesson.title}
                            </Link>
                                <a type="button" style={{margin: "none"}} onClick={() => this.setState({
                                    editing : true
                                }
                                    )
                                }>
                                    <i className="fa fa-pencil-square fa-2x"></i>
                                </a>

                                <button type="button" className="close wbdv-module-item-delete-btn"
                                        onClick={() => this.props.deleteLesson(this.state.lesson._id)}>
                                    <span aria-hidden="true">&times;</span>
                                </button>


                            </a>


                        </div>
                </li>

            }


        { this.state.editing &&

        <li className="nav-item">
            <Link to={`/course-editor/${this.props.courseId}/module/${this.props.moduleId}`}>
                <div className="row">
                    <a className="nav-link active">
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

                        <button type="button" style={{border:"none",background:"none"}} onClick={(e) =>{
                            this.props.updateLesson(this.state.lesson._id, this.state.lesson).then(status =>
                                this.setState({
                                    editing: false,
                                }))
                        }}>
                            <i className="fa fa-check-circle fa-2x"></i>
                        </button>


                    </a>

                </div>

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