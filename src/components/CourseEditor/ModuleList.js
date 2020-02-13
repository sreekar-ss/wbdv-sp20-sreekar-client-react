import React from "react";
import ModuleListItem from "./ModuleListItem";
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../../node_modules/font-awesome/css/font-awesome.css';
import {connect} from "react-redux";
import {createModule, deleteModule, updateModule, FIND_ALL_MODULES} from "../ModuleActions";
import ModuleService from "../../services/ModuleService";


class ModuleList extends React.Component  {

     componentDidMount() {
          this.props.findModulesForCourse(this.props.courseId)
     }

     render() {
          return(
               <div>
                    <ul  className="list-group">
                         {
                              this.props.modules && this.props.modules.map(module =>
                                  <ModuleListItem
                                      key = {module._id}
                                      module={module}
                                      deleteModule={this.props.deleteModule}
                                      updateModule={this.props.updateModule}
                                  />
                              )
                         }
                    </ul>
                    <a className="wbdv-module-item-add-btn" href="#" style={{float:"right"}} onClick={() => this.props.createModule(this.props.courseId)}>
                         <i className="fa fa-plus fa-2x wbdv-module-item-add-btn"></i>
                    </a>


               </div>
          )
     }
}


const stateToPropertyManager = (state) => {
     return {
          modules: state.modules
     }
}

const dispatchToPropertyManager = (dispatch) => {
    return {

        findModulesForCourse: (courseId) =>
            ModuleService.findModulesForCourse(courseId)
                .then(actualModules =>
                    dispatch({
                        type: FIND_ALL_MODULES,
                        modules: actualModules
                    })),

        deleteModule: (moduleId) =>
            ModuleService.deleteModule(moduleId)
                .then(status =>
                    dispatch(deleteModule(moduleId))
                ),

        createModule: (courseId) => {
            ModuleService.createModule(courseId, {
                title: 'New Module'
            }).then(actualModule =>
                dispatch(createModule(actualModule)))
        },

        updateModule: (moduleId, module) => {
            ModuleService.updateModule(moduleId, module)
                .then(updatedModule =>
                dispatch(updateModule(updatedModule)))
        },
    }
}


export default connect(stateToPropertyManager, dispatchToPropertyManager)
               (ModuleList)