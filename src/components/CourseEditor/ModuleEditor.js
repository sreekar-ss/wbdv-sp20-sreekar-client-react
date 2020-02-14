import React from "react";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import ModuleItemSelected from "./ModuleItemSelected";
import {createStore} from "redux";
import lessonReducer from "../../reducers/LessonReducer";
import LessonList from "./LessonList";
import {Provider} from "react-redux";

const store = createStore(lessonReducer)

class ModuleEditor extends React.Component {

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
        return (

            <Router>
                <Route path="/course-editor/:courseId/module/:moduleId"
                       exact={true}
                       render={(props) =>

                           <ModuleItemSelected
                               module={this.state.module}
                               courseId={props.match.params.courseId}
                               moduleId={props.match.params.moduleId}
                           />
                       }/>

                <Route path="/course-editor/:courseId/module/:moduleId/lesson"
                    exact={true}
                    render={ (props) =>
                        <div className="offset-7 row" style={{float:"right"}}>
                            <Provider store={store}>
                                <h1>LALALA</h1>

                                <LessonList moduleId={this.props.moduleId}/>
                            </Provider>
                        </div>
                    }/>
        </Router>
        )
    }


}


export default ModuleEditor