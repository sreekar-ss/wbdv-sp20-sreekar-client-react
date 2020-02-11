import React from "react";
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../../node_modules/font-awesome/css/font-awesome.css';
import {Link} from "react-router-dom";

const CourseEditorHeader = ({hideCourseEditor, match, history, courseId}) =>
    <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top shadow">

        <button type="button col" className="close wbdv-course-editor wbdv-close" onClick={ () => {history.push("/")}}>
            <span aria-hidden="true">&times;</span>
        </button>

        <a className="navbar-brand col-sm col" href="#">
            <h3 className="wbdv-course-title">CS5610 WebDev {courseId}</h3>
        </a>

        <button className="navbar-toggler col" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">

            <nav className="nav nav-pills nav-fill">
                <a className="nav-item nav-link" href="#">Build</a>
                <a className="nav-item nav-link active wbdv-page-tab" href="#">Pages</a>
                <a className="nav-item nav-link" href="#">Theme</a>
                <a className="nav-item nav-link" href="#">Store</a>
                <a className="nav-item nav-link" href="#">Apps</a>
                <a className="nav-item nav-link" href="#">Settings</a>
            </nav>
            <a className="wbdv-new-page-btn" href="#">
                <i className="fa fa-plus fa-2x wbdv-new-page-btn rounded-circle"></i>
            </a>
        </div>
    </nav>


export default CourseEditorHeader