import React, {useState} from "react";
import {FaCheckCircle, FaEllipsisV, FaPenSquare, FaPlus, FaPlusCircle} from "react-icons/fa";
import {Link, useParams} from "react-router-dom";
import {assignments} from "../../Database";
import {FaMagnifyingGlass} from "react-icons/fa6";

function Assignments() {
    const {courseId} = useParams();
    const [assignmentList, setAssignmentList] = useState<any[]>(assignments);
    const [assignmentType, setAssignmentType] = useState("ASSIGNMENT");
    const [assignment, setAssignment] = useState({
        title: "New Assignment",
        description: "New Description",
        type: "ASSIGNMENT",
        course: courseId,
    });

    const assignmentTypes = [
        {label: "ASSIGNMENT"},
        {label: "QUIZ"},
        {label: "EXAM"},
        {label: "PROJECT"}
    ];

    function handleTypeChange(event: React.ChangeEvent<HTMLSelectElement>) {
        setAssignmentType(event.target.value);
    }

    const addAssignment = (assignment: any) => {
        const newAssignment = { ...assignment,
            type: assignmentType,
            _id: new Date().getTime().toString() };
        console.log(newAssignment);

        const newAssignmentList = [newAssignment, ...assignmentList];
        console.log(newAssignmentList);
        setAssignmentList(newAssignmentList);
    };

    /*
    const assignmentList = assignments.filter((a) => a.course === courseId);

    const homeworkList = assignmentList.filter((assignment) => assignment.type === "ASSIGNMENT");
    const quizList = assignmentList.filter((assignment) => assignment.type === "QUIZ");
    const examList = assignmentList.filter((assignment) => assignment.type === "EXAM");
    const projectList = assignmentList.filter((assignment) => assignment.type === "PROJECT");
     */


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
                            {assignments.filter((a) => a.course === courseId).map((assignment, index) =>
                                (<Link key={index} className="dropdown-item" to="#">{assignment.title} </Link>))}
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
            <br/><br/>
            <br/>

            <div className="list-group form-small" id="assignmentAdder">
                <div className="input_title">
                    Assignment Editor:
                </div>
                <div className="input_title">
                    Assignment Title:
                </div>
                <input value={assignment.title} style={{marginBottom: "10px"}}
                       onChange={(e) => setAssignment({
                           ...assignment, title: e.target.value
                       })}
                />
                <div className="input_title">
                    Assignment Description:
                </div>
                <textarea value={assignment.description} style={{marginBottom: "10px"}}
                          onChange={(e) => setAssignment({
                              ...assignment, description: e.target.value
                          })}
                />
                <div className="input_title">
                    Assignment Type:
                </div>

                <select style={{padding: "7px"}} onChange={(e) => handleTypeChange(e)}>
                    {assignmentTypes.map((type, index) =>
                        (<option key={index} value={type.label}>{type.label}</option>)
                    )}
                </select>


                <p>Selected Type: {assignmentType}</p>
                <button onClick={() => {
                    addAssignment(assignment);
                }}>Add</button>


            </div>

            <ul className="list-group wd-modules">
                <li className="list-group-item">
                    <div>
                        <FaEllipsisV className="me-2"/> ASSIGNMENTS
                        <span className="float-end">
                            <span className="border border-dark rounded-pill"
                                  style={{padding: "2px"}}>40% of Total</span>
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
                        {assignmentList.filter((a) => a.course === courseId)
                            .filter((assignment) => assignment.type === "ASSIGNMENT").map((hw) => (
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
                            <span className="border border-dark rounded-pill"
                                  style={{padding: "2px"}}>10% of Total</span>
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
                        {assignmentList.filter((a) => a.course === courseId)
                            .filter((assignment) => assignment.type === "QUIZ").map((q) => (
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
                            <span className="border border-dark rounded-pill"
                                  style={{padding: "2px"}}>20% of Total</span>
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
                        {assignmentList.filter((a) => a.course === courseId).filter((assignment) => assignment.type === "EXAM").map((e) => (
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
                            <span className="border border-dark rounded-pill"
                                  style={{padding: "2px"}}>30% of Total</span>
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
                        {assignmentList.filter((a) => a.course === courseId)
                            .filter((assignment) => assignment.type === "PROJECT").map((p) => (
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