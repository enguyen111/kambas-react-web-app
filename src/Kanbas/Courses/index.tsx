import React from "react"
import {Link, Navigate, Route, Routes, useLocation, useParams} from "react-router-dom";
import courses from "../Database/courses.json"
import {HiMiniBars3} from "react-icons/hi2";
import CourseNavigation from "./Navigation";
import "../styles.css"
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assigments";
import AssignmentEditor from "./Assigments/Editor";

function Courses() {
    const {courseId} = useParams();
    const { pathname } = useLocation();
    const course = courses.find((course) => course._id === courseId);
    const course_nav_locs = [
        { location: "Home"},
        { location: "Modules"},
        { location: "Piazza"},
        { location: "Assignments"},
        { location: "Quizzes"},
        { location: "Grades"},
        { location: "People"},
    ];

    const matchedLocation = course_nav_locs.find(navLoc => pathname.includes(navLoc.location));
    return (
        <div>
            <div className="d-flex container-fluid">
                <div className="flex-fill">
                    <div>
                        <div className="d-none d-md-block">
                            <div className="p-4 flex-md-fill d-flex-header">
                                <HiMiniBars3 className="fs-2" style={{color: "red", } }/>
                                <span className="tab" />
                                <nav className="breadcrumb-div" aria-label="breadcrumb" style={{marginTop: "2px"}}>
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item bread">
                                            <Link to="Home">{course?._id}.SP23.01 {course?.name}</Link>
                                        </li>
                                        <li className="breadcrumb-item active" id="active-breadcrumb" aria-current="page">
                                            {matchedLocation ? matchedLocation.location : ""}
                                        </li>

                                    </ol>
                                </nav>
                            </div>
                        </div>

                        <hr/>
                    </div>
                </div>
            </div>

            <div className="d-flex">
                <CourseNavigation/>

                    <div className="flex-fill container-fluid">
                        <Routes>
                            <Route path="/" element={<Navigate to="Home"/>}/>
                            <Route path="Home" element={<Home/>}/>
                            <Route path="Modules" element={<Modules/>}/>
                            <Route path="Piazza" element={<h1>Piazza</h1>}/>
                            <Route path="Assignments" element={<Assignments/>}/>
                            <Route path="Assignments/:assignmentId" element={<AssignmentEditor/>}/>
                            <Route path="Quizzes" element={<h1>Quizzes</h1>}/>
                            <Route path="Grades" element={<h1>Grades</h1>}/>
                            <Route path="People" element={<h1>People</h1>}/>
                        </Routes>
                    </div>




            </div>

        </div>

    );
}

export default Courses