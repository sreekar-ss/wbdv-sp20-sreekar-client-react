import React from "react";
import ModuleListItem from "./ModuleListItem";
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../../node_modules/font-awesome/css/font-awesome.css';
import {connect, Provider} from "react-redux";
import {createModule, deleteModule, updateModule, FIND_ALL_MODULES} from "../../actions/ModuleActions";
import ModuleService from "../../services/ModuleService";
import LessonList from "./LessonList";
import {createStore} from "redux";

import lessonReducer from "../../reducers/LessonReducer";


class ModuleList extends React.Component  {

    state = {
        modules : []
    }

    componentDidMount () {
          const modules = this.props.findModulesForCourse(this.props.courseId)
        this.setState({
            modules: modules
        })
     }


    render() {
          return(
               <div>
                   <div className="container-fluid" style={{paddingTop: "2cm"}}>
                       {/*<div className="row">*/}

                           {/*<div className="col-4 bg-light flex-column nav-pills">*/}

                                <ul  className="list-group">
                                     {
                                          this.props.modules && this.props.modules.map(module =>
                                              <ModuleListItem
                                                  key = {module._id}
                                                  courseId={this.props.courseId}
                                                  moduleId={this.props.moduleId}
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






                       {/*</div>*/}
                   {/*</div>*/}



               </div>
          )
     }
}


const stateToPropertyManager = (state) => {
     return {
          modules: state.modules.modules
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