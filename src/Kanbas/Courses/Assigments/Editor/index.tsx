import React, { useState } from "react";
import "./index.css"
import { useNavigate, useParams, Link } from "react-router-dom";
import { assignments } from "../../../Database";
import {FaCircleCheck} from "react-icons/fa6";
import {FaCalendar, FaEllipsisV, FaPlus} from "react-icons/fa";

function AssignmentEditor() {
    const { assignmentId } = useParams();
    const assignment = assignments.find(
        (assignment) => assignment._id === assignmentId
    );
    const { courseId } = useParams();
    const navigate = useNavigate();


    const [title, setTitle] = useState(assignment?.title || "");
    const [pointValue, setPV] = useState("100" || "");
    const [initialDueDate, setDD] = useState("Sept. 18, 2023, 11:59 PM" || "");
    const [initialAvailableDate, setAvailDate] = useState("Sept. 6, 2023, 11:59 PM" || "");
    const [initialUntilDate, setUntilDate] = useState("");



    const handleSave = () => {
        console.log("Actually saving assignment TBD in later assignments");
        navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    };

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
                        value={title}
                        className="form-control mb-2"
                        id="assignment-input"
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Enter your Assignment Name here"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="assignment-description"></label>
                    <textarea className="form-control" id="assignment-description"
                              rows={6} placeholder="Enter your assignment description here..."></textarea>
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
                                       onChange={(e) => setPV(e.target.value)}
                                       placeholder="Enter the point value of this assignment"
                                       value={pointValue}/>
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
                                <select className="form-control" id="assignment-groups">
                                    <option>ASSIGNMENT</option>
                                    <option>QUIZ</option>
                                    <option>EXAM</option>
                                    <option>PROJECT</option>
                                </select>
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
                                                           onChange={(e) => setDD(e.target.value)}
                                                           value={initialDueDate}/>
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
                                                           onChange={(e) => setAvailDate(e.target.value)}
                                                           value={initialAvailableDate}/>
                                                        <span className="input-group-text"><FaCalendar/></span>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="until">Until</label>
                                                <div className="input-group">
                                                    <input className="form-control" id="until"
                                                           onChange={(e) => setUntilDate(e.target.value)}
                                                            value={initialUntilDate}
                                                    />
                                                        <span className="input-group-text"><FaCalendar/></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-footer text-center">
                                        <FaPlus />
                                        <span className="half-tab"></span>Add
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
            <Link
                to={`/Kanbas/Courses/${courseId}/Assignments`}
                className="btn btn-danger float-end"
            >
                Cancel
            </Link>


        </div>
    );
}

export default AssignmentEditor;
