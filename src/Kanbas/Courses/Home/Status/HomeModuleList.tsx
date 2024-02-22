import {FaEllipsisV, FaFileImport, FaPlus, FaRegBell} from "react-icons/fa";
import React from "react";
import {FaArrowRightFromBracket, FaBullhorn, FaCircleCheck} from "react-icons/fa6";
import {TiCancel} from "react-icons/ti";
import {SlTarget} from "react-icons/sl";
import {IoStatsChartSharp} from "react-icons/io5";
import ModuleList from "../../Modules/List";

function HomeModuleList(){
    return(
        <div>
            <div className="d-none d-lg-block float-end" style={{marginLeft: "20px"}}>
                <h6>Course Status</h6>
                <button><TiCancel className="fs-5"/><span className="half-tab"></span>Unpublish</button>
                <button className="wd-publish-button"><FaCircleCheck/>
                    <span className="half-tab"></span>Publish
                </button>

                <br/><br/>
                <button><FaFileImport/><span className="half-tab"></span>Import Existing
                    Content
                </button>
                <br/>
                <button><FaArrowRightFromBracket /><span className="half-tab"></span>Import
                    From Commons
                </button>
                <br/>
                <button><SlTarget /><span className="half-tab"></span>Choose Home Page
                </button>
                <br/>
                <button><IoStatsChartSharp /><span className="half-tab"></span>View Course Stream
                </button>
                <br/>
                <button><FaBullhorn /><span className="half-tab"></span>New Announcement
                </button>
                <br/>
                <button><FaRegBell /><span className="half-tab"></span>New Analytics</button>
                <br/><br/>
                <h6>To Do</h6>
                <hr/>
                <h6>TBA</h6>
            </div>
            <div >
                <ModuleList />
            </div>
        </div>
    );
}

export default HomeModuleList