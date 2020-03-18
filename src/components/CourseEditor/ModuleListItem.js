import React from "react";

import {BrowserRouter as Router, Link, Route} from "react-router-dom";


import LessonListItem from "./LessonListItem";


class ModuleListItem extends React.Component {
    constructor(props) {
        super(props);
    }

    state= {
        selected: '',
        editing: false,
        module: this.props.module,
    }

    //  editModule = (e) => {
    //     this.setState({
    //         module: {
    //             ...this.state.module,
    //             title: e.target.value
    //         }
    //     })
    // }

    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     if(this.state.moduleId !== prevProps.moduleId){
    //         this.render()
    //     }
    // }

    render() {
    return(
        // <ModuleItem
        //
        //     //title={this.state.module.title}
        //     module={this.state.module}
        //     deleteModule={this.props.deleteModule}
        //     courseId={this.props.courseId}
        // />
        <div>
            {
                !this.state.editing && !this.props.selected &&
                    <a className="list-group-item list-group-item-action shadow p-3 mb-3 rounded wbdv-module-item">
                        <div className="row">
                            <div className="col-8" onClick={(e) => {
                                this.setState({
                                    selected: this.state.module._id
                                })
                            }}>
                                {/*<Link to={`/course-editor/${this.props.courseId}/module/${this.props.module._id}`}>*/}
                                    <h5 style={{color: "black"}}>{this.state.module.title}</h5>
                                {/*</Link>*/}
                            </div>

                            <div className="col-2">
                                <a type="button" style={{margin: "none"}} onClick={() => this.setState({
                                    editing: true
                                })}>
                                    <i className="fa fa-pencil-square fa-2x"></i>
                                </a>
                            </div>
                            <div className="col-2">
                                <button type="button" className="close wbdv-module-item-delete-btn"
                                        onClick={() => this.props.deleteModule(this.state.module._id)}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                        </div>
                    </a>
            }

            {
                !this.state.editing && this.props.selected &&
                <a className="list-group-item list-group-item-action bg-primary shadow p-3 mb-3 rounded wbdv-module-item">
                    <div className="row">
                        <div className="col-8" onClick={(e) => {
                            this.setState({
                                selected: ''
                            })
                        }}>
                            {/*<Link to={`/course-editor/${this.props.courseId}/module/${this.props.module._id}`}>*/}
                                <h5 style={{color: "white"}}>{this.state.module.title}</h5>
                            {/*</Link>*/}
                        </div>

                        <div className="col-2">
                            <a type="button" style={{margin: "none", color: "azure"}} onClick={() => this.setState({
                                editing: true
                            })}>
                                <i className="fa fa-pencil-square fa-2x"></i>
                            </a>
                        </div>
                        <div className="col-2">
                            <button type="button" className="close wbdv-module-item-delete-btn"
                                    onClick={() => this.props.deleteModule(this.state.module._id)}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                    </div>
                </a>
            }




            {
                this.state.editing &&
                <a href="#" className="list-group-item list-group-item-action list-group-item-primary shadow p-3 mb-3 rounded wbdv-module-item">
                    <div className="row">
                        <div className="col-8">
                            <input className="form-control"
                                   onChange={(e) => this.setState(
                                       {
                                           module: {
                                               ...this.state.module,
                                               title: e.target.value
                                           }
                                       }
                                   )}
                                   value={this.state.module.title}/>
                        </div>

                        <div className="col-2">
                            <button type="button" style={{border:"none",background:"none"}} onClick={(e) =>{
                                console.log(this.state.module._id)
                                this.props.updateModule(this.state.module._id, this.state.module).then(status =>
                                    this.setState({
                                        editing: false,
                                    }))
                            }}>
                                <i className="fa fa-check-circle fa-2x"></i>
                            </button>
                        </div>
                    </div>
                </a>
            }

        </div>

    )
}
}
export default ModuleListItem