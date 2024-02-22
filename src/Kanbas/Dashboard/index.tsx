import React from "react";
import "../index.css"
import courses from "../Database/courses.json"
import {Link} from "react-router-dom";
import {HiMiniBars3} from "react-icons/hi2";
import {
    FaBook,
    FaCalendar,
    FaChevronDown,
    FaClock, FaDesktop,
    FaEnvelopeOpen, FaQuestionCircle,
    FaRegUserCircle,
    FaTachometerAlt
} from "react-icons/fa";
import {FaArrowRightFromBracket} from "react-icons/fa6";
function Dashboard(){
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
                        Dashboard</h5>
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
        <div className="d-flex">

            <div className="flex-fill">
                <div className="p-4">



                    <h1>Dashboard</h1>
                    <hr/>
                    <h2>Published Courses ({courses.length})</h2>
                    <hr/>
                    <div className="row">
                        <div className="row row-cols-1 row-cols-md-5 g-4">
                            {courses.map((course) => (
                                <div key={course._id} className="col" style={{ width: 300 }}>
                                    <div className="card">
                                        <img src={`/images/${course.image}`} className="card-img-top"
                                             style={{ height: 150 }}/>
                                        <div className="card-body">
                                            <Link className="card-title" to={`/Kanbas/Courses/${course._id}/Home`}
                                                  style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                                                {course._id}{" "}{course.name} </Link>
                                            <p className="card-text">{course.name}</p>
                                            <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn btn-primary">
                                                Go </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

            </div>
            <div className="p-4 d-none d-md-block" style={{width: "26%"}}>
                <h6>To Do</h6>
                <hr/>
            </div>

        </div>
            </div>
    );

}

export default Dashboard