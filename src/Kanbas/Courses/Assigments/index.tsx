import React, {useState} from "react";
import {FaCheckCircle, FaEllipsisV, FaPenSquare, FaPlus, FaPlusCircle} from "react-icons/fa";
import {Link, useParams} from "react-router-dom";
import {assignments} from "../../Database";
import {FaMagnifyingGlass} from "react-icons/fa6";

function Assignments() {
    const {courseId} = useParams();
    const assignmentList = assignments.filter((assignment) => assignment.course === courseId);

    const homeworkList = assignmentList.filter((assignment) => assignment.type === "ASSIGNMENT");
    const quizList = assignmentList.filter((assignment) => assignment.type === "QUIZ");
    const examList = assignmentList.filter((assignment) => assignment.type === "EXAM");
    const projectList = assignmentList.filter((assignment) => assignment.type === "PROJECT");





    //TODO:Refactor based on type and data structure and by weights
    return (
        <>
            <>
                <div className="input-group float-start w-25">
                    <span className="input-group-text"><FaMagnifyingGlass/></span>
                    <input type="text" className="form-control"
                           placeholder="Search for Assignments" aria-label="Search"
                           aria-describedby="search-assignments"/>

                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" type="button" data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false" id="search-assignments">
                            <span className="dropdown-toggle"></span>
                        </button>
                        <div className="dropdown-menu dropdown-menu-right form-control">
                            {assignmentList.map((assignment) => (<Link className="dropdown-item" to="#">{assignment.title} </Link>))}
                        </div>
                    </div>
                </div>

                <div className="float-end">
                    <div className="input-group ">
                        <div className="input-group-prepend">
                            <button className="btn btn-outline-secondary dropdown-toggle" type="button"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <FaEllipsisV style={{color: "black"}}/></button>
                            <div className="dropdown-menu dropdown-menu-right">
                                <Link className="dropdown-item" to="#">Edit Assignments Due Date</Link>
                                <Link className="dropdown-item" to="#">Assignment Group Weights</Link>
                                <Link className="dropdown-item" to="#">Gradescope 1.3</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="wd-add-item-button float-end"><FaPlus/> Assignment
                </button>
                <button className="float-end"><FaPlus/>Group</button>
            </>
            <br/>
            <br/>
            <ul className="list-group wd-modules">
                <li className="list-group-item">
                    <div>
                        <FaEllipsisV className="me-2"/> ASSIGNMENTS
                        <span className="float-end">
                            <span className="border border-dark rounded-pill" style={{padding: "2px"}}>40% of Total</span>
                            {" "}
                        <FaCheckCircle className="text-success"/>
                         <FaPlusCircle className="ms-2"/>


                            <button className="btn btn-outline-secondary dropdown-toggle ms-2" type="button"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <FaEllipsisV className="ms-2" style={{color: "black"}}/>
            </button>
            <div className="dropdown-menu dropdown-menu-right">
                <Link className="dropdown-item" to="#">Edit</Link>
                <Link className="dropdown-item" to="#">Speed Grader</Link>
                <Link className="dropdown-item" to="#">Duplicate</Link>
                <Link className="dropdown-item" to="#">Delete</Link>
                <Link className="dropdown-item" to="#">Move To</Link>
                <Link className="dropdown-item" to="#">Send To</Link>
                <Link className="dropdown-item" to="#">Copy To</Link>
                <Link className="dropdown-item" to="#">Share To Commons</Link>
            </div>
                        </span>
                    </div>
                    <ul className="list-group">
                        {homeworkList.map((hw) => (
                            <li className="list-group-item" key={hw._id}>
                                <FaEllipsisV className="me-2"/>
                                <FaPenSquare style={{color: "green"}}/>
                                {" "}
                                <Link
                                    to={`/Kanbas/Courses/${courseId}/Assignments/${hw._id}`}>{hw.title}</Link>
                                <span className="float-end">
                  <FaCheckCircle className="text-success"/><FaEllipsisV className="ms-2"/></span>
                            </li>))}
                    </ul>
                </li>
            </ul>

            <ul className="list-group wd-modules">
                <li className="list-group-item">
                    <div>
                        <FaEllipsisV className="me-2"/> Quizzes
                        <span className="float-end">
                            <span className="border border-dark rounded-pill" style={{padding: "2px"}}>10% of Total</span>
                            {" "}
                        <FaCheckCircle className="text-success"/>
                         <FaPlusCircle className="ms-2"/>
                            <button className="btn btn-outline-secondary dropdown-toggle ms-2" type="button"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <FaEllipsisV className="ms-2" style={{color: "black"}}/>
            </button>
            <div className="dropdown-menu dropdown-menu-right">
                <Link className="dropdown-item" to="#">Edit</Link>
                <Link className="dropdown-item" to="#">Speed Grader</Link>
                <Link className="dropdown-item" to="#">Duplicate</Link>
                <Link className="dropdown-item" to="#">Delete</Link>
                <Link className="dropdown-item" to="#">Move To</Link>
                <Link className="dropdown-item" to="#">Send To</Link>
                <Link className="dropdown-item" to="#">Copy To</Link>
                <Link className="dropdown-item" to="#">Share To Commons</Link>
            </div>
                        </span>
                    </div>
                    <ul className="list-group">
                        {quizList.map((q) => (
                            <li className="list-group-item" key={q._id}>
                                <FaEllipsisV className="me-2"/>
                                <FaPenSquare style={{color: "green"}}/>
                                {" "}
                                <Link
                                    to={`/Kanbas/Courses/${courseId}/Assignments/${q._id}`}>{q.title}</Link>
                                <span className="float-end">
                  <FaCheckCircle className="text-success"/><FaEllipsisV className="ms-2"/></span>
                            </li>))}
                    </ul>
                </li>
            </ul>

            <ul className="list-group wd-modules">
                <li className="list-group-item">
                    <div>
                        <FaEllipsisV className="me-2"/> Exams
                        <span className="float-end">
                            <span className="border border-dark rounded-pill" style={{padding: "2px"}}>20% of Total</span>
                            {" "}
                        <FaCheckCircle className="text-success"/>
                         <FaPlusCircle className="ms-2"/>
                            <button className="btn btn-outline-secondary dropdown-toggle ms-2" type="button"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <FaEllipsisV className="ms-2" style={{color: "black"}}/>
            </button>
            <div className="dropdown-menu dropdown-menu-right">
                <Link className="dropdown-item" to="#">Edit</Link>
                <Link className="dropdown-item" to="#">Speed Grader</Link>
                <Link className="dropdown-item" to="#">Duplicate</Link>
                <Link className="dropdown-item" to="#">Delete</Link>
                <Link className="dropdown-item" to="#">Move To</Link>
                <Link className="dropdown-item" to="#">Send To</Link>
                <Link className="dropdown-item" to="#">Copy To</Link>
                <Link className="dropdown-item" to="#">Share To Commons</Link>
            </div>
                        </span>
                    </div>
                    <ul className="list-group">
                        {examList.map((e) => (
                            <li className="list-group-item" key={e._id}>
                                <FaEllipsisV className="me-2"/>
                                <FaPenSquare style={{color: "green"}}/>
                                {" "}
                                <Link
                                    to={`/Kanbas/Courses/${courseId}/Assignments/${e._id}`}>{e.title}</Link>
                                <span className="float-end">
                  <FaCheckCircle className="text-success"/><FaEllipsisV className="ms-2"/></span>
                            </li>))}
                    </ul>
                </li>
            </ul>

            <ul className="list-group wd-modules">
                <li className="list-group-item">
                    <div>
                        <FaEllipsisV className="me-2"/> Project
                        <span className="float-end">
                            <span className="border border-dark rounded-pill" style={{padding: "2px"}}>30% of Total</span>
                            {" "}
                        <FaCheckCircle className="text-success"/>
                         <FaPlusCircle className="ms-2"/>
                            <button className="btn btn-outline-secondary dropdown-toggle ms-2" type="button"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <FaEllipsisV className="ms-2" style={{color: "black"}}/>
            </button>
            <div className="dropdown-menu dropdown-menu-right">
                <Link className="dropdown-item" to="#">Edit</Link>
                <Link className="dropdown-item" to="#">Speed Grader</Link>
                <Link className="dropdown-item" to="#">Duplicate</Link>
                <Link className="dropdown-item" to="#">Delete</Link>
                <Link className="dropdown-item" to="#">Move To</Link>
                <Link className="dropdown-item" to="#">Send To</Link>
                <Link className="dropdown-item" to="#">Copy To</Link>
                <Link className="dropdown-item" to="#">Share To Commons</Link>
            </div>
                        </span>
                    </div>
                    <ul className="list-group">
                        {projectList.map((p) => (
                            <li className="list-group-item" key={p._id}>
                                <FaEllipsisV className="me-2"/>
                                <FaPenSquare style={{color: "green"}}/>
                                {" "}
                                <Link
                                    to={`/Kanbas/Courses/${courseId}/Assignments/${p._id}`}>{p.title}</Link>
                                <span className="float-end">
                  <FaCheckCircle className="text-success"/><FaEllipsisV className="ms-2"/></span>
                            </li>))}
                    </ul>
                </li>
            </ul>


        </>
    );
}

export default Assignments;