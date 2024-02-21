import A3 from './a3/index'
import A4 from './a4/index'
import {Link, Route, Routes} from "react-router-dom";
import React from "react";
function Labs() {
    return (
        <div className="container-fluid">
            <h1>Labs</h1>
            <Link to="a3" > Assignment 3</Link> | {" "}
            <Link to="a4" > Assignment 4</Link> | {" "}
            <Routes>
                <Route path="a3/*" element={<A3 />} />
                <Route path="a4" element={<A4 />} />
            </Routes>
        </div>
    );
}
export default Labs;