import React from "react";

const CourseGridHeader = ({toggle}) =>
    <nav className="navbar navbar-light bg-light">
        <div className="col">

                    <span className="navbar-text col-sm d-block d-lg-none">
                        <h5 className="wbdv-last-modified">Today</h5>
                    </span>

            <span className="navbar-text col-sm wbdv-header wbdv-title d-none d-lg-block">
                       <h5 className="wbdv-header wbdv-title">Recent Documents</h5>
                    </span>

        </div>

        <div className="col" style={{whitespace: "nowrap"}}>

            <div className="container">
                <div className="row align-items-center">
                    <div className="col">
                        <a className="btn btn-secondary dropdown-toggle wbdv-header wbdv-owner d-none d-lg-block"
                           href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true"
                           aria-expanded="false">
                            Owned by
                        </a>
                    </div>

                    <div className="col" style={{marginLeft: "220px"}}>
                        <a type="button" style={{border:"none"}} onClick={toggle} className="wbdv-button wbdv-grid-layout d-block" href="#">
                            <i className="fa fa-list"></i>
                        </a>
                    </div>
                    <div className="col">
                        <a className="wbdv-header wbdv-sort col-lg-1 d-none d-lg-block" href="#">
                            <i className="fa fa-sort-alpha-asc"></i>
                        </a>
                    </div>

                </div>

            </div>


        </div>
    </nav>


export default CourseGridHeader