import React from "react";


const ModuleListItem = ({module}) =>
    <a href="#" className="list-group-item list-group-item-action active shadow p-3 mb-3 rounded wbdv-module-item">
            <div className="row">
                    <div className="col">
                            <h5 style={{color:"azure"}}>{module.title}</h5>
                    </div>
                    <div className="col">
                            <button type="button" className="close wbdv-module-item-delete-btn">
                                    <span aria-hidden="true">&times;</span>
                            </button>
                    </div>
            </div>
    </a>

export default ModuleListItem