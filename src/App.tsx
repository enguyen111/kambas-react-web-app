import React from 'react';
import Labs from "./Labs";
import HelloWorld from "./Labs/a3/HelloWorld";
import {HashRouter, Link, Route, Routes, Navigate} from "react-router-dom";
import Kanbas from "./Kanbas";

function App() {
    return (
        <div>
            <HashRouter>

                <Routes>
                    <Route path="/" element={<Navigate to={"/Labs"} />} />
                    <Route path="/Labs/*" element={<Labs />} />
                    <Route path="/Kanbas/*" element={<Kanbas/>} />
                    <Route path="/hello" element={<HelloWorld/>} />
                </Routes>

            </HashRouter>
        </div>

    );
}


export default App;
