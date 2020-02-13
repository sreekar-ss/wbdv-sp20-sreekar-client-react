import React from "react";

import {Link} from "react-router-dom";


const ModuleItem = ({module, deleteModule, courseId}) =>
{
    console.log("==> ", deleteModule);
    return(
        <a href="#" className="list-group-item list-group-item-action shadow p-3 mb-3 rounded wbdv-module-item">
            <div className="row">
                <div className="col-8">
                    <Link to={`course-editor/${courseId}/module/${module._id}/lesson`}>
                        <h5 style={{color: "black"}}>{module.title}</h5>
                    </Link>
                </div>

                <div className="col-2">
                    <Link to={`/course-editor/${courseId}/module/${module._id}`}>
                        <a type="button"  style={{margin:"none"}} >
                            <i className="fa fa-pencil-square fa-2x"></i>
                        </a>
                    </Link>
                </div>
                <div className="col-2">
                    <button type="button" className="close wbdv-module-item-delete-btn"
                            onClick={() => deleteModule(module._id)}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            </div>
        </a>
    )
}


export default ModuleItem