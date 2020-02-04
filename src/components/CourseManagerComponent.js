import React from "react";
import CourseTableComponent from "./CourseTableComponent";
import CourseGridComponent from "./CourseGridComponenet";
import CourseEditor from "./CourseEditor/CourseEditor";
import CourseManagerHeading from "./CourseManagerHeading";
import {createCourse, findAllCourses, deleteCourse} from "../services/CourseService"
class CourseManagerComponent extends React.Component{
    state = {
        layout: 'table',
        editingCourse: false,
        newCourseTitle: 'Add New Course Title Here',
        courses: [

        ]
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
                <h1>Course Manager</h1>
                {
                    this.state.editingCourse

                    && <CourseEditor hideCourseEditor={this.hideCourseEditor}/>}
                {!this.state.editingCourse &&

                    <div>
                        <CourseManagerHeading toggle={this.toggle}
                                              addCourse={this.addCourse}
                                              updateForm={this.updateForm}
                                              newCourseTitle={this.state.newCourseTitle}
                        />

                        {this.state.layout === 'table' && <CourseTableComponent
                            showCourseEditor = {this.showCourseEditor}
                            deleteCourse={this.deleteCourse}
                            courses={this.state.courses}/>}
                        {this.state.layout === 'grid' && <CourseGridComponent courses={this.state.courses}/>}
                    </div>
                }
            </div>
        )
    }

}


export default CourseManagerComponent