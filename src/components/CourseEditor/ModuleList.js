import React from "react";
import ModuleListItem from "./ModuleListItem";
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../../node_modules/font-awesome/css/font-awesome.css';
import {connect, Provider} from "react-redux";
import {createModule, deleteModule, updateModule, FIND_ALL_MODULES, UPDATE_MODULE} from "../../actions/ModuleActions";
import ModuleService from "../../services/ModuleService";
import LessonList from "./LessonList";
import {createStore} from "redux";

import lessonReducer from "../../reducers/LessonReducer";
import {Link} from "react-router-dom";


class ModuleList extends React.Component  {

    state = {
        modules : [],

    }

    componentDidMount () {
          const modules = this.props.findModulesForCourse(this.props.courseId)
        this.setState({
            modules: modules
        })
     }

     state = {
        module : {}
     }

     // componentDidUpdate(prevProps, prevState, snapshot) {
     //    if(this.props.moduleId !== prevProps.moduleId){
     //        this.render()
     //    }
     // }


    // selectModule = (moduleId) => {
    //     this.setState({
    //         selected : true
    //     })
    //     return this.state.selected
    // }

    render() {
          return(
               <div>
                   <div className="container-fluid" style={{paddingTop: "2cm"}}>
                       {/*<div className="row">*/}

                           {/*<div className="col-4 bg-light flex-column nav-pills">*/}

                                <ul  className="list-group">
                                     {
                                          this.props.modules && this.props.modules.map(module =>
                                              <div key={module._id} onClick={() => this.setState({module: module})}>
                                                  <Link to={`/course-editor/${this.props.courseId}/module/${module._id}`}>
                                                      <ModuleListItem
                                                          key = {module._id}
                                                          courseId={this.props.courseId}
                                                          moduleId={this.props.moduleId}
                                                          module={module}
                                                          deleteModule={this.props.deleteModule}
                                                          updateModule={this.props.updateModule}
                                                          selected = { module === this.state.module}
                                                      />
                                                  </Link>
                                              </div>
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

        updateModule: async (moduleId, module) => {
            const updatedModule = await ModuleService.updateModule(moduleId, module)
            console.log(updatedModule)
             // dispatch({
             //         type: UPDATE_MODULE,
             //         module : updatedModule,
             //         moduleId: updatedModule._id
             //     })
        },
    }
}


export default connect(stateToPropertyManager, dispatchToPropertyManager)
               (ModuleList)