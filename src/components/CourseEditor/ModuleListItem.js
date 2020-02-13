import React from "react";
import ModuleItem from "./ModuleItem";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import ModuleItemEdit from "./ModuleItemEdit";


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

        <Router>
            <Route path="/course-editor/:courseId"
                exact={true}
                render = { (props) =>
                <ModuleItem

                    //title={this.state.module.title}
                    module={this.state.module}
                    deleteModule={this.props.deleteModule}
                    courseId={props.match.params.courseId}
                />
            }/>


            <Route path="/course-editor/:courseId/module/:moduleId"
                   //exact={true}
                   render={ (props) =>
                   <ModuleItemEdit
                       {...props}
                       courseId = {props.match.params.courseId}
                       module = {this.state.module}
                       updateModule = {this.props.updateModule}
                       state = {this.state}
                       editModule = {this.editModule}
                   />
                   }/>
        </Router>


    )
}
}
export default ModuleListItem