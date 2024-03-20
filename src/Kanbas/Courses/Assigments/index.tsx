import React, {useState} from "react";
import {FaCheckCircle, FaEllipsisV, FaPenSquare, FaPlus, FaPlusCircle} from "react-icons/fa";
import {Link, useParams} from "react-router-dom";
import {assignments} from "../../Database";
import {FaMagnifyingGlass} from "react-icons/fa6";
import {useDispatch, useSelector} from "react-redux";
import {KanbasState} from "../../store";
import {addAssignment, setAssignment, updateAssignment} from "./assignmentsReducer";
import AssignmentGroup from "./AssignmentGroup";

function Assignments() {
    const {courseId} = useParams();

    const assignmentList = useSelector((state: KanbasState) =>
        state.assignmentsReducer.assignments);
    const assignment = useSelector((state: KanbasState) =>
        state.assignmentsReducer.assignment);
    const dispatch = useDispatch();

    const [assignmentType, setAssignmentType] = useState("ASSIGNMENT");

    const assignmentTypes = [
        {label: "ASSIGNMENT"},
        {label: "QUIZ"},
        {label: "EXAM"},
        {label: "PROJECT"}
    ];

    function handleTypeChange(event: React.ChangeEvent<HTMLSelectElement>) {
        setAssignmentType(event.target.value);
    }


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
                <Link className="btn btn-danger float-end"
                    to={`/Kanbas/Courses/${courseId}/Assignments/${"A" + new Date().getTime().toString()}`}><FaPlus/> Assignment</Link>

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
                       onChange={(e) => dispatch(setAssignment({
                           ...assignment, title: e.target.value
                       }))}
                />
                <div className="input_title">
                    Assignment Description:
                </div>
                <textarea value={assignment.description} style={{marginBottom: "10px"}}
                          onChange={(e) => dispatch(setAssignment({
                              ...assignment, description: e.target.value
                          }))}
                />
                <div className="input_title">
                    Assignment Type:
                </div>

                <select style={{padding: "7px"}} onChange={(e) => handleTypeChange(e)} value={assignmentType}>
                    {assignmentTypes.map((type, index) =>
                        (<option key={index} value={type.label}>{type.label}</option>)
                    )}
                </select>



                <p>Selected Type: {assignmentType}</p>
                <button onClick={() => {
                    const newAssignment = { ...assignment, course: courseId, type: assignmentType };
                    dispatch(addAssignment(newAssignment));
                }
                }>Add
                </button>
                <button className="btn btn-success rounded-1" onClick={() => dispatch(updateAssignment(assignment))}>
                    Update
                </button>


            </div>


            <AssignmentGroup group={"ASSIGNMENT"} courseId={courseId} weight={"40"}
                             setAssignmentType={setAssignmentType} label={"ASSIGNMENTS"} />

            <AssignmentGroup group={"QUIZ"} courseId={courseId} weight={"10"}
                              setAssignmentType={setAssignmentType} label={"QUIZZES"}/>

            <AssignmentGroup group={"EXAM"} courseId={courseId} weight={"20"}
                              setAssignmentType={setAssignmentType} label={"EXAMS"}/>

            <AssignmentGroup group={"PROJECT"} courseId={courseId} weight={"30"}
                              setAssignmentType={setAssignmentType} label={"PROJECTS"}/>




        </>
    );
}

export default Assignments;