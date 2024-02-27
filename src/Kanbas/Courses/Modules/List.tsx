import React, { useState } from "react";
import "./index.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { CiCircleCheck } from "react-icons/ci";
import { useParams } from "react-router";
import { FaPlus } from "react-icons/fa6";
function ModuleList() {
const { courseId } = useParams();
const modulesList = modules.filter((module) => module.course === courseId);
const [selectedModule, setSelectedModule] = useState(modulesList[0]);
return (
<>
{/* <!-- Add buttons here --> */}
<div className="row end-css ">
    
    <div className="float-end row end-css">
        <button className="button-general-css button-gray-css p-2 col-auto">Collapse All</button>
        <a href="#" className="no-underline-a button-gray-css button-general-css text-dark p-2 col-auto">View Progress</a>
        <div className="dropdown col-auto">     
            <button className="btn button-gray-css dropdown-toggle " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><CiCircleCheck className="text-success font-weight-bold"/>
                Publish All
            </button>
            {/*
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" href="#">Publish All</a>
                <a className="dropdown-item" href="#">Collapse</a>
                
            </div>
            */}
        </div>

        <a href="#"className="no-underline-a button-red-css p-2 col-auto"><FaPlus className="text-white margin-icon-general-css"/>Module</a>
        <a href="#" className="no-underline-a  button-general-css button-dots-css col-auto" ><FaEllipsisV className="text-black" /></a>
    </div>                         

<hr className="m-3"/>
</div>
<ul className="list-group wd-modules">
{modulesList.map((module) => (
<li
className="list-group-item"
onClick={() => setSelectedModule(module)}>
<div className="row">
<div className="float-start col text-start">
<FaEllipsisV className="me-2 " />
{module.name}
</div>
<span className="float-end col text-end">
<FaCheckCircle className="text-success" />
<FaPlusCircle className="ms-2" />
<FaEllipsisV className="ms-2" />
</span>
</div>
{selectedModule._id === module._id && (
<ul className="list-group text-start">
{module.lessons?.map((lesson) => (
<li className="list-group-item">
<FaEllipsisV className="me-2" />
{lesson.name}
<span className="float-end">
<FaCheckCircle className="text-success" />
<FaEllipsisV className="ms-2" />
</span>
</li>
))}
</ul>
)}
</li>
))}
</ul>
</>
);
}
export default ModuleList;