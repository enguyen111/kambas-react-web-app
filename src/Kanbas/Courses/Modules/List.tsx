import React, {useState} from "react";
import "./index.css";
import modules from "../../Database/modules.json";
import {FaEllipsisV, FaCheckCircle, FaPlusCircle, FaPlus} from "react-icons/fa";
import {useParams} from "react-router";

function ModuleList() {
    const {courseId} = useParams();
    const [moduleList, setModuleList] = useState<any[]>(modules);
    const [formState, setFormState] = useState(false);
    const [addBtnState, setAddBtnState] = useState(true);
    const [module, setModule] = useState({
        name: "New Module",
        description: "New Description",
        course: courseId,
    });
    const addModule = (module: any) => {
        const newModule = {
            ...module,
            _id: new Date().getTime().toString()
        };
        const newModuleList = [newModule, ...moduleList];
        setModuleList(newModuleList);
        toggleForm();
    };
    const deleteModule = (moduleId: string) => {
        const newModuleList = moduleList.filter(
            (module) => module._id !== moduleId );
        setModuleList(newModuleList);
    };

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
        setFormState(!formState);
        setAddBtnState(!addBtnState);
    }

    //const modulesList = modules.filter((module) => module.course === courseId);
    const [selectedModule, setSelectedModule] = useState(moduleList[0]);
    return (
        <>
            <div className="float-end">
                <button>Collapse All</button>
                {" "}
                <button>View Progress</button>
                {" "}

                <select style={{padding: "4px"}}>
                    <option>Publish All</option>
                    <option>Unpublish All</option>
                </select>
                {" "}

                <button className="wd-add-item-button"><FaPlus/> Module</button>
                {" "}

                <button style={{padding: "1px"}}>
                    <FaEllipsisV className="ms-2"/>
                </button>
                <br/>
                <br/>

                {addBtnState &&
                    <button className="float-end btn btn-primary" onClick={toggleForm}>Add Module</button>
                }
            </div>
            <br/>
            <br/>
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
                           onChange={(e) => setModule({
                               ...module, name: e.target.value
                           })}
                    />

                    <div className="input_title">
                        Module Description:
                    </div>

                    <textarea value={module.description} style={{padding: "10px", marginBottom: "10px"}}
                              onChange={(e) => setModule({
                                  ...module, description: e.target.value
                              })}
                    />


                    <button className="btn btn-primary" onClick={() => {
                        addModule(module)
                    }}>Add
                    </button>
                    <button style={{marginTop: "10px", marginBottom: "10px"}
                    } className="btn btn-danger" onClick={toggleForm}>Cancel
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

                                <button className="btn btn-danger  rounded-1" style={{padding: "0.4px", margin: "1px"}}
                                        onClick={() => deleteModule(module._id)}>
                                    Delete
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