import React from "react";
import {updateCourse} from "../services/CourseService";
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/font-awesome/css/font-awesome.css';
import {Link} from "react-router-dom";

class CourseTableRow extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        editing: false,
        course: this.props.course,
        date: (new Date()).toLocaleDateString(),

    }
    render() {
        return (


            <div style={{whiteSpace:"nowrap"}}>
                { !this.state.editing &&
                <button className="list-group-item list-group-item-action shadow p-3  bg-white rounded" href ="#">
                    <div className="row container" style={{whiteSpace:"nowrap"}}>


                        <div className="col">
                            <Link to={`/course-editor/${this.state.course._id}`}>
                                <i className="fa fa-book"></i>
                            </Link>
                        </div>


                        <div className="col col-sm-4" >
                            <Link to={`/course-editor/${this.state.course._id}`}>
                                <span className="col">{this.state.course.title}</span>
                            </Link>
                        </div>


                        <div className="col offset-sm-1">
                            <Link to={`/course-editor/${this.state.course._id}`}>
                                    <span className="d-none d-lg-block">me</span>
                                </Link>
                        </div>


                        <div className="col">
                            <Link to={`/course-editor/${this.state.course._id}`}>
                                <span className="d-none d-lg-block">{this.state.date}</span>
                            </Link>
                        </div>

                        <div className="col">
                            <button type="button" style={{border:"none"}} onClick={() => this.setState({
                                editing: true,
                                date: (new Date()).toLocaleTimeString()
                            })}>
                                <i className="fa fa-pencil"></i>
                            </button>

                            <button type="button" className="close" onClick={() => this.props.deleteCourse(this.props.course)}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>

                    </div>


                </button>
                }
                {
                    this.state.editing &&
                 <button className="list-group-item list-group-item-action active shadow rounded" href ="#">
                    <div className="row container" style={{whiteSpace:"nowrap"}}>
                        <div className="col" onClick={this.props.showCourseEditor}>
                            <i className="fa fa-book fa-2x"></i>
                        </div>

                        <div className="col col-sm-4">
                            <input className="form-control"
                                onChange={(e) => this.setState({
                                    course: {
                                        ...this.state.course,
                                        title: e.target.value
                                    }
                                })}
                                value={this.state.course.title}/>
                        </div>

                        <div className="col offset-sm-1" onClick={this.props.showCourseEditor}>
                            <span className="d-none d-lg-block">me</span>
                        </div>
                        <div className="col" onClick={this.props.showCourseEditor}>
                            <span className="d-none d-lg-block">{this.state.date}</span>
                        </div>

                        <div className="col">

                            <button className="btn-primary" type="button" style={{border:"none",background:"none"}} onClick={ (e) =>{
                                updateCourse(this.state.course._id, this.state.course).then (status =>
                                    this.setState({
                                        editing: false,
                                    }))
                            }}>
                                <i className="fa fa-check-circle fa-2x"></i>
                            </button>

                        </div>
                    </div>
                 </button>
                }


            </div>
        )
    }

}




export default CourseTableRow