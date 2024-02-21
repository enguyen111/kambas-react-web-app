import React from "react";
import "../index.css"
import courses from "../Database/courses.json"
import {Link} from "react-router-dom";
function Dashboard(){
    return (
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
    );

}

export default Dashboard