import { assignments, enrollments, grades, users } from "../../Database";
import {Link, useParams} from "react-router-dom";
import "./index.css"
import {FaGear, FaMagnifyingGlass} from "react-icons/fa6";
import {FaFileExport, FaFileImport, FaFilter} from "react-icons/fa";
function Grades() {
    const { courseId } = useParams();
    const as = assignments.filter((assignment) => assignment.course === courseId);
    const es = enrollments.filter((enrollment) => enrollment.course === courseId);
    //console.log(as);
    const assignmentIds = as.map(({ _id }) => _id);
    const gradeBook = grades.filter(grade => assignmentIds.includes(grade.assignment));

    console.log(gradeBook);
    return (
        <div className="container-fluid">
            <div className="float-end ms-3">
                <button className="rounded" style={{padding:"5px"}}><FaGear/></button>

            </div>
            <div className="float-end ms-3">
                <div className="input-group">
                    <div className="input-group-prepend">
                        <button className="btn btn-outline-secondary override-bs dropdown-toggle" type="button"
                                data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false" id="export-button">
                        <span className="btn-attribute-color" style={{color:"black"}}>
                            <FaFileExport />
                            <span className="half-tab"></span>Export</span>
                        </button>
                        <div className="dropdown-menu dropdown-menu-right" >
                            <Link className="dropdown-item" to="#">Export Current Gradebook View</Link>
                            <Link className="dropdown-item" to="#">Export Entire Gradebook</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="float-end">
                <button className="rounded" style={{padding: "5px"}}>
                    <FaFileImport/> Import
                </button>
            </div>
            <br/>
            <br/>

            <div className="row">
                <div className="col-md-6">
                    <p className="bold">Student Names</p>


                    <div className="input-group">
                        <span className="input-group-text"><FaMagnifyingGlass/></span>
                        <input type="text" className="form-control"
                               placeholder="Search Students" aria-label="Search" aria-describedby="search-assignments"/>

                            <div className="input-group-append">
                                <button className="btn btn-outline-secondary" type="button" data-toggle="dropdown"
                                        aria-haspopup="true" aria-expanded="false" id="search-students">
                                    <span className="dropdown-toggle"></span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-right form-control">
                                    {es.map((enrollment) => {
                                        const user = users.find((user) => user._id === enrollment.user);
                                        return <Link className="dropdown-item" to="#">{user?.firstName} {user?.lastName} </Link>
                                    })}

                                </div>
                            </div>
                    </div>
                </div>



                <div className="col-md-6">
                    <p className="bold">Assignment Names</p>


                    <div className="input-group">
                        <span className="input-group-text"><FaMagnifyingGlass/></span>
                        <input type="text" className="form-control"
                               placeholder="Search Assignments" aria-label="Search"
                               aria-describedby="search-assignments"/>

                            <div className="input-group-append">
                                <button className="btn btn-outline-secondary" type="button" data-toggle="dropdown"
                                        aria-haspopup="true" aria-expanded="false" id="search-assignments">
                                    <span className="dropdown-toggle"></span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-right form-control">
                                    {as.map((assignment) => (<Link className="dropdown-item" to="#">{assignment.title} </Link>))}
                                </div>
                            </div>
                    </div>
                </div>

            </div>
            <br/>

            <div className="float-start">
                <button className="rounded filter-button">
                    <FaFilter/>
                    <span className="half-tab">Apply Filters</span>
                </button>
            </div>
            <br/>
            <br/>


            <div className="table-responsive">
                <table className="table table-bordered">
                    <thead>
                    <th>Student Name</th>
                    {as.map((assignment) => (<th className="text-center" scope="col">{assignment.title} <br/> Out of 100</th>))}
                    </thead>

                    <tbody>
                    {es.map((enrollment) => {
                        const user = users.find((user) => user._id === enrollment.user);
                        return (
                            <tr>
                                <th scope="row">{user?.firstName} {user?.lastName}</th>

                                {as.map((assignment) => {
                                    const grade = gradeBook.find((grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                                    return (<td key={assignment._id}>{grade?.grade || ""}</td>);
                                })}
                            </tr>);
                    })}
                    </tbody>
                </table>
            </div>
        </div>);
}
export default Grades;