import React from "react";
import './CourseManagerHeading.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/font-awesome/css/font-awesome.css';

const CourseManagerHeading = ({toggle, updateForm, addCourse, newCourseTitle}) =>
    <nav className="navbar navbar-dark bg-primary"
         style={{background: 'linear-gradient(110deg, #fdcd3b 60%, #ffed4b 60%)', whiteSpace:"nowrap"}}>

                 <span className="navbar-text col-md-2 d-none d-lg-block">
                     <h4 style={{fontWeight: "bolder", color: "azure"}}>Course Manager</h4>
                 </span>

        <input className="form-control form-control col-md-6 col-6" onChange={updateForm}
               placeholder={newCourseTitle}/>


        <button className="btn col-md-1 col-3" onClick={addCourse}>
            <i className="fa fa-plus-circle fa-3x" style={{float: "left", color: "red"}}></i>
        </button>



    </nav>


export default CourseManagerHeading