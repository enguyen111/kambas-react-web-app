import React, {useEffect, useState} from "react";
import "./index.css"
import { useNavigate, useParams, Link } from "react-router-dom";
import {FaCircleCheck} from "react-icons/fa6";
import {FaCalendar, FaEllipsisV, FaPlus} from "react-icons/fa";
import {addAssignment, cancelAssignment, setAssignment, updateAssignment} from "../assignmentsReducer";
import {useDispatch, useSelector} from "react-redux";
import {KanbasState} from "../../../store";

function AssignmentEditor() {
    const { assignmentId } = useParams();
    const assignment = useSelector((state: KanbasState) =>
        state.assignmentsReducer.assignment);
    const { courseId, operation } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const assignmentTypes = [
        {label: "ASSIGNMENT"},
        {label: "QUIZ"},
        {label: "EXAM"},
        {label: "PROJECT"}
    ];

    const existingAssignment = useSelector((state: KanbasState) =>
        state.assignmentsReducer.assignments.find((assignment) => assignment._id === assignmentId)
    );
    const [assignmentType, setAssignmentType] = useState(existingAssignment ? existingAssignment.type : "ASSIGNMENT");

    function handleTypeChange(event: React.ChangeEvent<HTMLSelectElement>) {
        setAssignmentType(event.target.value);
    }



    const handleSave = () => {
        const newAssignment = { ...assignment, course: courseId, type: assignmentType };
        if (operation === "create"){
            dispatch(addAssignment(newAssignment));
        }
        else if (operation === "edit"){
            const updatedAssignment = {
                ...existingAssignment,
                title: assignment.title,
                description: assignment.description,
                points: assignment.points,
                initialDueDate: assignment.initialDueDate,
                initialAvailableDate: assignment.initialAvailableDate,
                initialUntilDate: assignment.initialUntilDate,
                type: assignmentType
            };
            dispatch(updateAssignment(updatedAssignment));
        }

        navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    };



    let formTitle = existingAssignment ? existingAssignment.title : assignment.title;
    let formDescription = existingAssignment ?
        (existingAssignment.description ? existingAssignment.description: assignment.description) : assignment.description;
    let formPoints = existingAssignment ?
        (existingAssignment.points ? existingAssignment.points: assignment.points) : assignment.points;
    let formInitialDueDate = existingAssignment ?
        (existingAssignment.initialDueDate ? existingAssignment.initialDueDate: assignment.initialDueDate) : assignment.initialDueDate;
    let formInitialAvailableDate = existingAssignment ?
        (existingAssignment.initialAvailableDate ? existingAssignment.initialAvailableDate:
            assignment.initialAvailableDate) : assignment.initialAvailableDate;
    let formInitialUntilDate = existingAssignment ?
        (existingAssignment.initialUntilDate ? existingAssignment.initialUntilDate:
            assignment.initialUntilDate) : assignment.initialUntilDate;

    function renderPrevInfo() {
        const updatedAssignment = {
            ...assignment,
            title: formTitle,
            description: formDescription,
            points: formPoints,
            initialDueDate: formInitialDueDate,
            initialAvailableDate: formInitialAvailableDate,
            initialUntilDate: formInitialUntilDate
        };
        dispatch(setAssignment(updatedAssignment));
    }


    useEffect(() => {
        renderPrevInfo();
    }, []);

    return (

        <div className="container-fluid " >
            <div className="float-end">
                <div className="input-group">
                    <div className="input-group-prepend">
                        <button
                            className="btn btn-outline-secondary dropdown-toggle"
                            type="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            <FaEllipsisV style={{color: "black"}}/>
                        </button>
                        <div className="dropdown-menu dropdown-menu-right">
                            <a className="dropdown-item" href="#">
                                Speed Grader
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="float-end wd-published d-none d-md-block" style={{ marginTop: "5px", color:"green" }}>
                <FaCircleCheck />
                {" "}
                Published <span className="tab"></span>
            </div>
            <br /> <br />
            <hr />

            <form>
                <div className="form-group">
                    <label htmlFor="assignment-input">Assignment Name</label>
                    <input
                        value={assignment.title}
                        className="form-control mb-2"
                        id="assignment-input"
                        onChange={(e) => dispatch(setAssignment({
                            ...assignment, title: e.target.value
                        }))}
                        placeholder="Enter your Assignment Name here"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="assignment-description"></label>
                    <textarea className="form-control" id="assignment-description"
                              value={assignment.description}
                              rows={6} placeholder="Enter your assignment description here..."
                              onChange={(e) => dispatch(setAssignment({
                                  ...assignment, description: e.target.value
                              }))}
                    ></textarea>
                </div>

                <br/>
                <div className="d-flex align-items-center">
                    <div className="form-group mx-auto w-75">

                        <div className="row">
                            <div className="col-md-3 text-end">
                                <label htmlFor="points" style={{marginTop: "5px"}}>Points</label>
                            </div>
                            <div className="col-md-9">
                                <input type="text" className="form-control" id="points"
                                       onChange={(e) => dispatch(setAssignment({
                                           ...assignment, points: e.target.value
                                       }))}
                                       placeholder="Enter the point value of this assignment"
                                       value={assignment.points}/>
                            </div>

                        </div>

                    </div>
                </div>
                <br/>
                <div className="d-flex align-items-center">
                    <div className="form-group mx-auto w-75">

                        <div className="row">
                            <div className="col-md-3 text-end">
                                <label htmlFor="assignment-groups">Assignment Group</label>
                            </div>
                            <div className="col-md-9">
                                <select style={{padding: "7px"}} onChange={(e) => handleTypeChange(e)} value={assignmentType}>
                                    {assignmentTypes.map((type, index) =>
                                        (<option key={index} value={type.label}>{type.label}</option>)
                                    )}
                                </select>



                                <p>Selected Type: {assignmentType}</p>
                            </div>

                        </div>

                    </div>
                </div>

                <br/>
                <div className="d-flex align-items-center">
                    <div className="form-group mx-auto w-75">

                        <div className="row">
                            <div className="col-md-3 text-end">
                                <label htmlFor="grade-display">Display Grades as</label>
                            </div>
                            <div className="col-md-9">
                                <select className="form-control" id="grade-display">
                                    <option>Percentage</option>
                                    <option>Letter</option>
                                </select>
                            </div>

                        </div>

                    </div>
                </div>

                <br/>

                <div className="d-flex align-items-center">
                    <div className="form-group mx-auto">
                        <input className="form-check-input" type="checkbox" id="checkbox" value="option1"/>
                        {" "}
                            <label className="form-check-label" htmlFor="checkbox">
                                Do not count this assignment towards  the final grade.</label>
                    </div>
                </div>
                <hr/>

                <div className="d-flex align-items-center justify-content-center">
                    <div className="form-group mx-auto w-75">

                        <div className="row">
                            <div className="col-md-3 text-end">
                                <label htmlFor="participation">Assign</label>
                            </div>
                            <div className="col-md-9">
                                <div className="card" id="participation">
                                    <div className="card-body">
                                        <label htmlFor="assign-to">Assign to</label>
                                        <select className="form-control" id="assign-to" multiple>
                                            <option>Everyone</option>
                                            <option>Student A</option>
                                            <option>Student B</option>
                                            <option>Student C</option>
                                        </select>
                                        <br/>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <label htmlFor="due">Due</label>
                                                <div className="input-group">
                                                    <input className="form-control" id="due"
                                                           onChange={(e) => dispatch(setAssignment({
                                                               ...assignment, initialDueDate: e.target.value
                                                           }))}
                                                           value={assignment.initialDueDate}/>
                                                        <span className="input-group-text"><FaCalendar/></span>
                                                </div>
                                            </div>

                                        </div>
                                        <br/>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label htmlFor="available-from">Available From</label>
                                                <div className="input-group">
                                                    <input className="form-control" id="available-from"
                                                           onChange={(e) => dispatch(setAssignment({
                                                               ...assignment, initialAvailableDate: e.target.value
                                                           }))}
                                                           value={assignment.initialAvailableDate}/>
                                                        <span className="input-group-text"><FaCalendar/></span>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="until">Until</label>
                                                <div className="input-group">
                                                    <input className="form-control" id="until"
                                                           onChange={(e) => dispatch(setAssignment({
                                                               ...assignment, initialUntilDate: e.target.value
                                                           }))}
                                                            value={assignment.initialUntilDate}
                                                    />
                                                        <span className="input-group-text"><FaCalendar/></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </form>

            <hr/>
            <div className="float-start">
                <input className="form-check-input" type="checkbox" id="notify-users" value="option1"/> {" "}
                    <label className="form-check-label" htmlFor="checkbox">Notify users that this content has
                        changed.</label>
            </div>


            <button onClick={handleSave} className="btn btn-success ms-2 float-end">
                Save
            </button>
            <Link onClick={() => dispatch(cancelAssignment())}
                to={`/Kanbas/Courses/${courseId}/Assignments`}
                className="btn btn-danger float-end"
            >
                Cancel
            </Link>


        </div>
    );
}

export default AssignmentEditor;
