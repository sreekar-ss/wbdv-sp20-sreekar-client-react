import React from "react";
import LessonListItem from "./LessonListItem";
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../../node_modules/font-awesome/css/font-awesome.css';
import {connect} from "react-redux";
import {createLesson, deleteLesson, FIND_ALL_LESSONS} from "./LessonActions";


const LessonList = ({lessons}) =>
    <div>
        <ul  className="nav nav-tabs">
            {
                lessons.map(lesson =>
                    <LessonListItem
                        key = {lesson._id}
                        lesson={lesson}/>
                )

            }
            <a href="#" style={{float:"right"}}>
                <i className="fa fa-plus fa-2x"></i>
            </a>
        </ul>

        <div className="tab-content" id="myTabContent" style={{paddingTop: "20px"}}>
            <div className="tab-pane fade show active" id="Lesson1" role="tabpanel" aria-labelledby="home-tab">

                <button type="button" className="btn btn-success offset-sm-10">Save</button>
                <span>Preview</span>
                <a href="#">
                    <i className="fa fa-toggle-on"></i>
                </a>

                <div className="card">
                    <h5 className="card-header">Heading widget</h5>

                    <div className="card-body">

                        <div className="row">
                            <div className="col">
                                <h5 className="card-title">Heading </h5>
                            </div>
                            <div className="col" style={{paddingLeft: "10cm"}}>
                                <a href="#">
                                    <i className="fa fa-arrow-up"></i>
                                </a>
                                <a href="#">
                                    <i className="fa fa-arrow-down"></i>
                                </a>
                                <select className="form control" inlist="Heading text">
                                    <option>Heading text</option>
                                </select>
                                <a href="#">
                                    <i className="fa fa-window-close"></i>
                                </a>
                            </div>
                        </div>

                        <input className="form-control" placeholder="Heading text" style={{margin: "10px"}}/>
                            <input className="form-control" placeholder="Heading 1" type="number" style={{margin: "10px"}}/>
                                <input className="form-control" placeholder="Widget Name" style={{margin: "10px"}}/>
                                    <h3>Preview</h3>
                                    <h1>Heading text</h1>
                    </div>
                </div>

            </div>
        </div>
        <a href="#">
            <i className="fa fa-plus-square fa-2x"
               style={{float: "right", marginRight: "10px", color: "crimson", marginTop: "5px"}}></i>
        </a>

    </div>

export default LessonList