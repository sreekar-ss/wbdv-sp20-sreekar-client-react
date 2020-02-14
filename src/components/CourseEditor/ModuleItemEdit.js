import React from "react";

import {Link} from "react-router-dom";

const ModuleItemEdit = ({courseId, module, updateModule, state, editModule, moduleId}) =>
{

    return(
        <a className="list-group-item list-group-item-action active shadow p-3 mb-3 rounded wbdv-module-item">
            <div className="row">
                <div className="col-8">

                    <input className="form-control"
                           onChange={(e) => editModule(e)}
                           value={state.module.title}/>
                </div>

                <div className="col-2">
                    <Link to={`/course-editor/${courseId}/module/${moduleId}`}>
                        <a type="button"  style={{margin:"none", background:"white"}} onClick={() => updateModule(module._id, module)}>
                            <i className="fa fa-check fa-2x"></i>
                        </a>
                    </Link>
                </div>

            </div>
        </a>
    )

}



export default ModuleItemEdit