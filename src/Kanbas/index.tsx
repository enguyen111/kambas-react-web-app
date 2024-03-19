import KanbasNavigation from "./Navigation";
import {Navigate, Route, Routes} from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import {useState} from "react";
import courseData from "./Database/courses.json";
import {Provider} from "react-redux";
import store from "./store";

function Kanbas() {
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
                    alert("Course was successfully updated!")
                    return course;
                } else {
                    return c;
                }
            })
        );
    };
    return(
        <Provider store={store}>
        <div>
            <div>
                <KanbasNavigation/>
            </div>
            <div>
                <Routes>
                    <Route path="/" element={<Navigate to="Dashboard" />} />
                    <Route path="Account" element={<h2 className="d-flex">Account</h2>}></Route>
                    <Route path="Dashboard" element={
                        <Dashboard
                        courses={courses}
                        course={course}
                        setCourse={setCourse}
                        addNewCourse={addNewCourse}
                        deleteCourse={deleteCourse}
                        updateCourse={updateCourse}/>
                    }></Route>
                    <Route path="Courses/:courseId/*" element={<Courses courses={courses}/>}></Route>
                    <Route path="Calendar"element={<h2>Calendar</h2>}></Route>
                    <Route path="Inbox"element={<h2>Inbox</h2>}></Route>
                    <Route path="History" element={<h2>History</h2>}></Route>
                    <Route path="Studio" element={<h2>Studio</h2>}></Route>
                    <Route path="Commons"element={<h2>Commons</h2>}></Route>
                    <Route path="Help"element={<h2>Help</h2>}></Route>
                </Routes>
            </div>
        </div>
        </Provider>
    );
}
export default Kanbas