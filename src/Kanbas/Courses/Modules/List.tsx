import React, {useState} from "react";
import "./index.css";
import {FaEllipsisV, FaCheckCircle, FaPlusCircle, FaPlus} from "react-icons/fa";
import {useParams} from "react-router";
import { useSelector, useDispatch } from "react-redux";
import {
    addModule,
    deleteModule,
    updateModule,
    setModule, cancelModule,
} from "./reducer";
import {KanbasState} from "../../store";

function ModuleList() {
    const {courseId} = useParams();

    const moduleList = useSelector((state: KanbasState) =>
        state.modulesReducer.modules);
    const module = useSelector((state: KanbasState) =>
        state.modulesReducer.module);
    const dispatch = useDispatch();

    const [formState, setFormState] = useState(false);
    const [addBtnState, setAddBtnState] = useState(true);
    const [updateBtnState, setUpdateBtnState] = useState(false);
    const [formAddBtn, setFormAddBtn] = useState(false);

    function moduleCount () {
        let count = 0;
        moduleList.map((module) => {
            if (module.course === courseId) {
                count++;
            }
        });
        return count;
    }


    const toggleForm = () => {
        setUpdateBtnState(false);
        setFormAddBtn(true);
        setFormState(!formState);
        setAddBtnState(!addBtnState);
    }

    const [selectedModule, setSelectedModule] = useState(moduleList[0]);
    return (
        <>
            <div className="float-end">
                <button className="btn border-black">Collapse All</button>
                {" "}
                <button className="btn border-black">View Progress</button>
                {" "}

                <select style={{padding: "7px"}}>
                    <option>Publish All</option>
                    <option>Unpublish All</option>
                </select>
                {" "}

                {addBtnState &&
                    <button className="btn btn-danger  border-black align-content-center "
                            onClick={toggleForm}>
                        <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                            <FaPlus/> <span className="half-tab"></span>Module
                        </div>
                    </button>
                }

                {" "}


                <button className="btn border-black" >
                    <FaEllipsisV className="ms-2"/>
                </button>



            </div>

            <br/>
            <br/>
            {formState &&
                <div className="list-group form-small" id="courseAdder">
                    <div className="input_title">
                        Course Editor:
                    </div>

                    <div className="input_title">
                        Module Name:
                    </div>
                    <input value={module.name} style={{marginBottom: "10px"}}
                           onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))}
                    />

                    <div className="input_title">
                        Module Description:
                    </div>

                    <textarea value={module.description} style={{padding: "10px", marginBottom: "10px"}}
                              onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))}
                    />


                    {formAddBtn &&
                        <button className="btn btn-primary" onClick={
                            () => {
                                dispatch(addModule({...module, course: courseId}));
                                toggleForm();
                            }
                        }>Add
                        </button>

                    }
                    {updateBtnState &&
                        <button className="btn btn-success" onClick={() => {
                            dispatch(updateModule(module));
                            setFormState(false);
                            setAddBtnState(true);
                        }}>
                            Update
                        </button>

                    }
                    <button style={{marginTop: "10px", marginBottom: "10px"}
                    } className="btn btn-danger" onClick={() => {
                        toggleForm();
                        dispatch(cancelModule());
                    }}>Cancel
                    </button>


                </div>
            }

            {moduleCount() !== 0 ?
                <ul className="list-group wd-modules">


                    {moduleList.filter((module) => module.course === courseId).map((module, index) => (
                        <li key={index}
                            className="list-group-item"
                            onClick={() => setSelectedModule(module)}>

                            <div>
                                <FaEllipsisV className="me-2"/>
                                {module.name}

                                {" "}

                                <button className="btn btn-danger  rounded-1" style={{padding: "0.4px", margin: "1px"}}
                                        onClick={() => dispatch(deleteModule(module._id))}>
                                    Delete
                                </button>
                                {" "}
                                <button className="btn btn-success rounded-1"
                                    onClick={(event) => {
                                        dispatch(setModule(module));
                                        setUpdateBtnState(true);
                                        setFormState(true);
                                        setAddBtnState(false);
                                        setFormAddBtn(false);
                                    }}>
                                    Edit
                                </button>


                                <span className="float-end">
                <FaCheckCircle className="text-success"/>
                <FaPlusCircle className="ms-2"/>
                <FaEllipsisV className="ms-2"/>
              </span>
                            </div>
                            {selectedModule._id === module._id && (
                                <ul className="list-group">
                                    {module.lessons?.map((lesson: {
                                                              name: string | number | boolean |
                                                                  React.ReactElement<any, string | React.JSXElementConstructor<any>> |
                                                                  Iterable<React.ReactNode> | React.ReactPortal | null | undefined;
                                                          },
                                                          index: React.Key | null | undefined) => (
                                        <li className="list-group-item" key={index}>
                                            <FaEllipsisV className="me-2"/>
                                            {lesson.name}
                                            <span className="float-end">
                      <FaCheckCircle className="text-success"/>
                      <FaEllipsisV className="ms-2"/>
                    </span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>: <h3>No modules to display.</h3>
            }
        </>
    );
}

export default ModuleList;