import React from "react";
import {updateCourse} from "../services/CourseService";
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../node_modules/font-awesome/css/font-awesome.css'

class CourseGridRow extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        editing: false,
        course: this.props.course,
        date: (new Date()).toLocaleDateString()
    }

    render() {
        return (
            <div>

                {
                    !this.state.editing &&

                        <div className="card" itemType="button">
                            <div typeof="button" className="card-body" style={{padding:"5px"}} onClick={this.props.showCourseEditor}>
                                <img className="card-img-top" src="https://picsum.photos/id/1041/200/300"/>
                                <h4 className="card-title">
                                    {this.state.course.title}
                                </h4>
                                <p className="card-text">
                                    <i className="fa fa-book"></i>
                                    <small className="text-muted"> Modified: {this.state.date}</small>
                                </p>
                            </div>

                            {/*Updates the time according to the last edited time*/}

                            <div className="card-footer">
                                <button className="btn-primary rounded" type="button" style={{border:"none"}} onClick={() => this.setState({
                                    editing: true,
                                    date: (new Date()).toLocaleTimeString()
                                })}>
                                    <i className="fa fa-pencil fa-2x"></i>
                                </button>

                                <button type="button" className="close" onClick={() => this.props.deleteCourse(this.props.course)}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                        </div>


                }

                {
                    this.state.editing &&
                        <div className="card">
                            <div className="card-body" style={{padding:"5px"}} >
                                <img className="card-img-top" src="https://picsum.photos/id/1041/200/300" onClick={this.props.showCourseEditor}/>
                                <input className="form-control"
                                       onChange={(e) => this.setState({
                                           course: {
                                               ...this.state.course,
                                               title: e.target.value
                                           }
                                       })}
                                       value={this.state.course.title}/>
                                <p className="card-text">
                                    <i className="fa fa-book"></i>
                                    <small className="text-muted"> Modified: {this.state.date}</small>
                                </p>
                                <div className="card-footer">
                                    <button className="btn-primary rounded" type="button" style={{border:"none"}} onClick={ (e) =>{
                                        updateCourse(this.state.course._id, this.state.course).then (status =>
                                            this.setState({
                                                editing: false,
                                            }))
                                    }}>
                                        <i className="fa fa-check-circle fa-2x"></i>
                                    </button>
                                </div>
                            </div>

                        </div>
                }





            </div>
        )

    }

}






export default CourseGridRow