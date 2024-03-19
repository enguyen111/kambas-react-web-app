import {FaCheckCircle, FaEllipsisV, FaPenSquare, FaPlusCircle} from "react-icons/fa";
import {Link} from "react-router-dom";
import React from "react";
import {deleteAssignment, setAssignment} from "./assignmentsReducer";
import {useDispatch, useSelector} from "react-redux";
import {KanbasState} from "../../store";

export default function AssignmentGroup ({group, courseId, weight, setAssignmentType, label}:
                                             {
                                                 group: string, courseId: string | undefined, weight: string,
                                                 setAssignmentType: ((type: string) => void),
                                                 label: string
                                             }
){

    const assignmentList = useSelector((state: KanbasState) =>
        state.assignmentsReducer.assignments);
    const dispatch = useDispatch();


    function isEmptyList(aType: string) {
        const aList = assignmentList.filter((a) => a.course === courseId)
            .filter((assignment) => assignment.type === aType);
        return aList.length;
    }
    return (
       <>
           <ul className="list-group wd-modules">
               <li className="list-group-item">
                   <div>
                       <FaEllipsisV className="me-2"/> {label}
                       <span className="float-end">
                            <span className="border border-dark rounded-pill"
                                  style={{padding: "2px"}}>{weight}% of Total</span>
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
                   {isEmptyList(group) !== 0 ?
                       <ul className="list-group">
                           {assignmentList.filter((a) => a.course === courseId)
                               .filter((assignment) => assignment.type === group).map((hw) => (
                                   <li className="list-group-item" key={hw._id}>
                                       <FaEllipsisV className="me-2"/>
                                       <FaPenSquare style={{color: "green"}}/>
                                       {" "}
                                       <Link
                                           to={`/Kanbas/Courses/${courseId}/Assignments/${hw._id}`}>{hw.title}</Link>
                                       {" "}
                                       <button className="btn btn-danger  rounded-1"
                                               style={{padding: "0.4px", margin: "1px"}}
                                               onClick={() => dispatch(deleteAssignment(hw._id))}>
                                           Delete
                                       </button>
                                       {" "}
                                       <button className="btn btn-success rounded-1"
                                               onClick={() => {
                                                   dispatch(setAssignment(hw));
                                                   setAssignmentType(hw.type);
                                               }}>
                                           Edit
                                       </button>




                                       <span className="float-end">
                  <FaCheckCircle className="text-success"/><FaEllipsisV className="ms-2"/></span>
                                   </li>))}
                       </ul>: <div style={{background: "white"}}><h5>NO {group} TO DISPLAY.</h5></div>
                   }
               </li>
           </ul>
       </>
    );
}

