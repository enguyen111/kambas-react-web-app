import KanbasNavigation from "./Navigation";
import {Navigate, Route, Routes} from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";

function Kanbas() {
    return(
        <div>
            <div>
                <KanbasNavigation/>
            </div>
            <div>
                <Routes>
                    <Route path="/" element={<Navigate to="Dashboard" />} />
                    <Route path="Account" element={<h2 className="d-flex">Account</h2>}></Route>
                    <Route path="Dashboard" element={<Dashboard/>}></Route>
                    <Route path="Courses/:courseId/*" element={<Courses/>}></Route>
                    <Route path="Inbox"element={<h2>Inbox</h2>}></Route>
                    <Route path="History" element={<h2>History</h2>}></Route>
                    <Route path="Studio" element={<h2>Studio</h2>}></Route>
                    <Route path="Commons"element={<h2>Commons</h2>}></Route>
                    <Route path="Help"element={<h2>Help</h2>}></Route>
                </Routes>
            </div>
        </div>
    );
}
export default Kanbas