import React from "react"
import { useParams } from "react-router-dom";
import courses from "../Database/courses.json"
import {HiMiniBars3} from "react-icons/hi2";

function Courses(){
    const {courseId} = useParams();
    const course = courses.find((course) => course._id === courseId);

    return (
        <div className="d-flex container-fluid">
            <h2><HiMiniBars3 /> Course {course?.name}</h2>
        </div>
    );
}

export default Courses