import React from "react";
import ModuleItem from "./ModuleItem";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import ModuleItemEdit from "./ModuleItemEdit";
import ModuleItemSelected from "./ModuleItemSelected";
import LessonItem from "./LessonItem";
import LessonListItem from "./LessonListItem";


class ModuleListItem extends React.Component {
    constructor(props) {
        super(props);
    }

    state= {
        editing: false,
        module: this.props.module,
    }

     editModule = (e) => {
        this.setState({
            module: {
                ...this.state.module,
                title: e.target.value
            }
        })
    }
render() {
    return(
        <ModuleItem

            //title={this.state.module.title}
            module={this.state.module}
            deleteModule={this.props.deleteModule}
            courseId={this.props.courseId}
        />

        // <Router>
        //     <Route path="/course-editor/:courseId"
        //         exact={true}
        //         render = { (props) => {}}
        //     }/>
        //
        //
        //     <Route path="/course-editor/:courseId/module/:moduleId/edit"
        //            exact={true}
        //            render={ (props) =>
        //            <ModuleItemEdit
        //                {...props}
        //                courseId = {props.match.params.courseId}
        //                module = {this.state.module}
        //                updateModule = {this.props.updateModule}
        //                state = {this.state}
        //                editModule = {this.editModule}
        //                moduleId = {this.state.module._id}
        //            />
        //            }/>
        //
        //     <Route path="/course-editor/:courseId/module/:moduleId/lesson"
        //            exact={true}
        //            render={(props) => {
        //         return(
        //                <ModuleItemSelected
        //                    module={this.state.module}
        //                    deleteModule={this.props.deleteModule}
        //                    courseId={props.match.params.courseId}
        //                />
        //                 // <LessonListItem
        //                 //        {...props}
        //                 //        courseId={props.match.params.courseId}
        //                 //        moduleId={props.match.params.moduleId}
        //                 //        module={this.state.module}
        //                 //
        //                 // />
        //                 )
        //            }
        //            }
        //            />
        //
        // </Router>


    )
}
}
export default ModuleListItem