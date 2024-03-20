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
import Grades from "./Grades";
import {
    FaBook, FaBookOpen,
    FaCalendar, FaCheck,
    FaChevronDown,
    FaClock, FaDesktop,
    FaEnvelopeOpen, FaHome, FaPlug, FaQuestionCircle,
    FaRegUserCircle, FaRocket,
    FaTachometerAlt
} from "react-icons/fa";
import {FaArrowRightFromBracket, FaCircleNodes, FaPerson} from "react-icons/fa6";

function Courses({ courses }: { courses: any[]; }) {
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
            <div className="d-flex wd-appearing-header align-items-center text-center d-md-none">
                <div className="col-4">
                    <a data-toggle="collapse" data-target="#mini-main-nav">
                        <HiMiniBars3 className="fs-1" style={{color: "white"}}/>
                    </a>
                </div>
                <div className="col-4">
                    <h5 className="header-course-color align-items-center text-center wd-appearing-text">
                         {course?._id}.SP23.01 {course?.name} {matchedLocation ? matchedLocation.location : ""}</h5>
                </div>
                <div className="col-4 wd-appearing-text align-items-center text-center">
                    <a data-toggle="collapse" data-target="#mini-course-nav">
                        <FaChevronDown className="fs-3" style={{color: "white"}}/>
                    </a>

                </div>
            </div>

            <div id="mini-main-nav" className="collapse d-md-none">
                <ul className="wd-navigation">

                    <li><Link to="../Account">
                        <FaRegUserCircle className="fs-5"/> <span className="tab"></span>Account</Link>
                    </li>
                    <li>
                        <Link to="../Dashboard">
                            <FaTachometerAlt className="fs-5"/><span className="tab"></span>Dashboard</Link>
                    </li>
                    <li><Link to="Home">
                        <FaBook className="fs-5"/><span className="tab"></span>Courses</Link>
                    </li>
                    <li><Link to="../Calendar"><FaCalendar className="fs-5"/><span className="tab"></span>Calendar</Link></li>
                    <li><Link to="../Inbox">
                        <FaEnvelopeOpen className="fs-5"/> <span className="tab"></span>Inbox</Link>
                    </li>
                    <li><Link to="../History">
                        <FaClock className="fs-5"/><span className="tab"></span>History</Link>
                    </li>
                    <li><Link to="../Studio">
                        <FaDesktop className="fs-5"/><span className="tab"></span>Studio</Link>
                    </li>
                    <li><Link to="../Commons">
                        <FaArrowRightFromBracket className="fs-5"/><span className="tab"></span>Commons
                    </Link></li>
                    <li><Link to="../Help">
                        <FaQuestionCircle className="fs-5"/> <span className="tab"></span>Help</Link>
                    </li>
                </ul>
            </div>

            <div id="mini-course-nav" className="collapse d-md-none">
                <ul className="wd-navigation" style={{width: "130px"}}>
                    <li>
                        <Link to="Home">
                            <FaHome className="fs-5"/><span className="tab"></span>Home
                        </Link></li>
                    <li>
                        <Link to="Modules">
                            <FaCircleNodes className="fs-5"/><span className="tab"></span>Modules</Link>
                    </li>
                    <li><Link to="#">
                        <FaPlug className="fs-5"/> <span className="tab"></span>Piazza</Link></li>
                    <li><Link to="#">
                        <FaPlug className="fs-5"/> <span className="tab"></span>Zoom</Link></li>
                    <li>
                        <Link to="Assignments">
                            <FaBookOpen className="fs-5"/> {" "}Assignments</Link>
                    </li>
                    <li><Link to="#">
                        <FaRocket className="fs-5"/><span className="tab"></span>Quizzes</Link></li>
                    <li><Link to="Grades">
                        <FaCheck className="fs-5"/><span className="tab"></span>Grades</Link></li>
                    <li><Link to="#">
                        <FaPerson className="fs-5"/><span className="tab"></span>People</Link></li>
                </ul>
            </div>


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
                                            <Link to="Home">{course?.number}.SP23.01 {course?.name}</Link>
                                        </li>
                                        <li className="breadcrumb-item active" id="active-breadcrumb" aria-current="page">
                                            {matchedLocation ? matchedLocation.location : ""}
                                        </li>

                                    </ol>
                                </nav>
                            </div>
                        </div>

                        <hr style={{width:"94%"}}/>
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
                            <Route path="Assignments/:assignmentId/:operation" element={<AssignmentEditor/>}/>
                            <Route path="Quizzes" element={<h1>Quizzes</h1>}/>
                            <Route path="Grades" element={<Grades/>}/>
                            <Route path="People" element={<h1>People</h1>}/>
                        </Routes>
                    </div>




            </div>

        </div>

    );
}

export default Courses