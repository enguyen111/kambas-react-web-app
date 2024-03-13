import A3 from './a3/index'
import A4 from './a4/index'
import {Link, Route, Routes} from "react-router-dom";
import React from "react";
import Nav from "../Nav";
import {Provider} from "react-redux";
import store from "./store";
function Labs() {
    return (
        <Provider store={store}>
        <div className="container-fluid">
            <Nav/>
            <h1>Labs</h1>
            <Link to="a3" > Assignment 3</Link> | {" "}
            <Link to="a4" > Assignment 4</Link> | {" "}
            <Routes>
                <Route path="a3/*" element={<A3 />} />
                <Route path="a4" element={<A4 />} />
            </Routes>
        </div>
        </Provider>
    );
}
export default Labs;