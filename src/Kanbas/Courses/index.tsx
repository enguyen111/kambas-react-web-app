import React from "react"
import {Navigate, Route, Routes, useParams} from "react-router-dom";
import courses from "../Database/courses.json"
import {HiMiniBars3} from "react-icons/hi2";
import CourseNavigation from "./Navigation";
import "../styles.css"

function Courses() {
    const {courseId} = useParams();
    const course = courses.find((course) => course._id === courseId);

    return (
        <div>
            <div className="d-flex container-fluid">
                <div className="flex-fill">
                    <div>
                        <h2><HiMiniBars3/> Course {course?.name}</h2>
                        <hr/>
                    </div>
                </div>
            </div>

            <div className="d-flex">
                <CourseNavigation/>
                <div>
                    <div>
                        <Routes>
                            <Route path="/" element={<Navigate to="Home"/>}/>
                            <Route path="Home" element={<h1>Home</h1>}/>
                            <Route path="Modules" element={<h1>Modules</h1>}/>
                            <Route path="Piazza" element={<h1>Piazza</h1>}/>
                            <Route path="Assignments" element={<h1>Assignments</h1>}/>
                            <Route path="Assignments/:assignmentId" element={<h1>Assignment Editor</h1>}/>
                            <Route path="Quizzes" element={<h1>Quizzes</h1>}/>
                            <Route path="Grades" element={<h1>Grades</h1>}/>
                            <Route path="People" element={<h1>People</h1>}/>
                        </Routes>
                    </div>

                </div>


            </div>

        </div>

    );
}

export default Courses