import React, {useState} from "react";
import "../index.css"
import {Link} from "react-router-dom";
import courseData from "../Database/courses.json"
import {HiMiniBars3} from "react-icons/hi2";
import {
    FaBook,
    FaCalendar,
    FaClock, FaDesktop,
    FaEnvelopeOpen, FaQuestionCircle,
    FaRegUserCircle,
    FaTachometerAlt
} from "react-icons/fa";
import {FaArrowRightFromBracket} from "react-icons/fa6";

function Dashboard() {
    const [formDisplay, setAddFormDisplay] = useState(false);
    const [addButtonDisplay, setAddButtonDisplay] = useState(true);
    const [courses, setCourses] = useState(courseData);
    const [course, setCourse] = useState({
        _id: "0", name: "New Course", number: "New Number",
        startDate: "2023-09-10", endDate: "2023-12-15",
        image: "reactjs.jpg"
    });
    const addNewCourse = () => {
        const newCourse = {
            ...course,
            _id: new Date().getTime().toString()
        };
        setCourses([...courses, {...course, ...newCourse}]);
        setAddButtonDisplay(!addButtonDisplay);
        setAddFormDisplay(!formDisplay);
        alert("New Course Successfully Added!");
    };

    const deleteCourse = (courseId: string) => {
        setCourses(courses.filter((course) => course._id !== courseId));
        alert("Course was successfully deleted!")
    };

    const updateCourse = () => {
        setCourses(
            courses.map((c) => {
                if (c._id === course._id) {
                    toggleForm();
                    alert("Course was successfully updated!")
                    return course;
                } else {
                    return c;
                }
            })
        );
    };


    const toggleForm = () => {
        setAddButtonDisplay(!addButtonDisplay);
        setAddFormDisplay(!formDisplay);
    }



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
                    <li><Link to="../Calendar"><FaCalendar className="fs-5"/><span
                        className="tab"></span>Calendar</Link></li>
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

                        {formDisplay &&
                            <div className="form" id="courseAdder">
                                <div className="input_title">
                                    Course Editor:
                                </div>
                                <input value={course.name} className="form-control" placeholder="Please enter the course name"
                                       onChange={(e) => setCourse({...course, name: e.target.value})}/>
                                <br/>
                                <input value={course.number} className="form-control" placeholder="Please enter the course number"
                                       onChange={(e) => setCourse({...course, number: e.target.value})}/>
                                <br/>
                                <input value={course.startDate} className="form-control" type="date" placeholder="Please enter the start date"
                                       onChange={(e) => setCourse({...course, startDate: e.target.value})}/>
                                <br/>
                                <input value={course.endDate} className="form-control" type="date" placeholder="Please enter the end date"
                                       onChange={(e) => setCourse({...course, endDate: e.target.value})}/>
                                <br/>
                                <button className="btn btn-primary" onClick={addNewCourse}>
                                    Add
                                </button>
                                {" "}
                                <button className="btn btn-success" onClick={updateCourse} >
                                    Update
                                </button>

                            </div>
                        }

                        {addButtonDisplay &&
                            <button className="float-end" onClick={() => {
                                setAddFormDisplay(!formDisplay);
                                setAddButtonDisplay(!addButtonDisplay);
                            }}>
                                Add new course
                            </button>
                        }
                        <br/>

                        <hr/>
                        <h2>Published Courses ({courses.length})</h2>
                        <hr/>
                        <div className="row">
                            <div className="row row-cols-1 row-cols-md-5 g-4">
                                {courses.map((course) => (
                                    <div key={course._id} className="col" style={{width: 300}}>
                                        <div className="card">
                                            <img src={`/images/${course.image}`} className="card-img-top"
                                                 style={{height: 150}}/>
                                            <div className="card-body">
                                                <Link className="card-title" to={`/Kanbas/Courses/${course._id}/Home`}
                                                      style={{
                                                          textDecoration: "none",
                                                          color: "navy",
                                                          fontWeight: "bold"
                                                      }}>
                                                    {course.number}{" "}{course.name}

                                                </Link>
                                                <p className="card-text">{course.name}</p>
                                                <Link to={`/Kanbas/Courses/${course._id}/Home`}
                                                      className="btn btn-primary">
                                                    Go </Link>
                                                {" "}
                                                <button className="btn btn-danger" onClick={(event) => {
                                                    event.preventDefault();
                                                    deleteCourse(course._id);
                                                }}>
                                                    Delete
                                                </button>
                                                {" "}
                                                <button className="btn btn-success" onClick={(event) => {
                                                    event.preventDefault();
                                                    setCourse(course);
                                                    if (!formDisplay) {
                                                        toggleForm();
                                                    }
                                                }}>
                                                    Edit
                                                </button>

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