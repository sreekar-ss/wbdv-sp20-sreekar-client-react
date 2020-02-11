import React from "react";
import CourseTableComponent from "./CourseTableComponent";
import CourseGridComponent from "./CourseGridComponent";
import CourseEditor from "./CourseEditor/CourseEditor";
import CourseManagerHeading from "./CourseManagerHeading";
import {createCourse, findAllCourses, deleteCourse} from "../services/CourseService"
import Page1 from "./Page1";
import Page2 from "./Page2";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import CourseListComponent from "./CourseListComponent";

class CourseManagerContainer extends React.Component{
    state = {
        layout: 'table',
        editingCourse: false,
        newCourseTitle: 'Add Course Title',
        courses: []

    }

    componentDidMount = async () => {

        const allCourses = await findAllCourses()
        this.setState({
            courses: allCourses
        })

        // findAllCourses()
        //     .then(courses => this.setState({
        //         courses: courses
        //     }))
    }


    toggle = () =>
        this.setState(prevState => {
            if(prevState.layout === 'table') {
                return ({
                    layout:'grid'
                })
            }
            else {
                return ({
                    layout: 'table'
                })
            }
        })

    deleteCourse = async (deletedCourse) => {
        const status = await deleteCourse(deletedCourse._id)
        console.log(deletedCourse)
        const courses = await findAllCourses()
        this.setState({
            courses: courses
        })
    }
        // this.setState(prevState => {
        //     return({
        //         courses: prevState.courses.filter(function (crs) {
        //                 return crs._id !== course._id
        //         })
        //     })
        // })

    addCourse = async () => {
        const newCourse = {

            title: this.state.newCourseTitle
        }

        const actualCourse = await createCourse(newCourse)
        console.log(actualCourse)
        const allCourses = await findAllCourses()
        this.setState({
            courses: allCourses
        })
        // this.setState(prevState => {
        //     return ({
        //         courses: [...prevState.courses, {
        //             _id: (new Date()).getTime() + "",
        //             title: prevState.newCourseTitle
        //         }]
        //     })
        // })
    }

    showCourseEditor = () =>
        this.setState({
            editingCourse: true
        })

    hideCourseEditor = () =>
        this.setState({
            editingCourse: false
        })


    updateForm = (e) =>
        this.setState({
                newCourseTitle: e.target.value
            })


    render() {
        return (
            <div>
                {/*<Router>*/}

                {/*    <Link to="/page1">*/}
                {/*        Page 1*/}
                {/*    </Link>*/}
                {/*    <Link to="/page2/">*/}
                {/*        Page 2*/}
                {/*    </Link>*/}
                {/*    <Route path="/page1" component={Page1}/>*/}
                {/*    <Route path="/page2/:message"*/}
                {/*           exact={true}*/}
                {/*           component={Page2}/>*/}
                {/*</Router>*/}

                <Router>

                    <Route path="/"
                           exact={true}
                           render={() =>
                        <CourseListComponent
                            toggle={this.toggle}
                            updateForm={this.updateForm}
                            newCourseTitle={this.state.newCourseTitle}
                            layout={this.state.layout}
                            addCourse={this.addCourse}
                            courses={this.state.courses}
                            showCourseEditor={this.showCourseEditor}
                            deleteCourse={this.deleteCourse}
                        />
                    }/>
                    <Route path="/course-editor/:courseId"
                           exact={true}
                           render={(props) =>
                        <CourseEditor
                            {...props}
                            courseId={props.match.params.courseId}
                            hideCourseEditor={this.hideCourseEditor}/>
                    }/>


                </Router>
            </div>
        )
    }

}


export default CourseManagerContainer