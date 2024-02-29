import React from "react";
import { FaCheckCircle, FaEllipsisV, FaPlusCircle } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdOutlineNoteAlt } from "react-icons/md";
import "./index.css";
function Assignments() {
const { courseId } = useParams();
const assignmentList = assignments.filter(
(assignment) => assignment.course === courseId);
return (
<>
{/*<!-- Add buttons and other fields here -->*/}


                    <div className="row m-2 d-flex height-of-row-button-css">
                        <div className="col text-start "><input className="form-control w-50 "type="text" placeholder="Search for Assignments" /></div>
                        <div className="col text-end  ">
                            <button className="btn button-gray-css m-2">Group</button>
                            <button className="btn button-red-assignment-css m-2">Assignment</button>
                            <button className="btn gray-background m-2"><BsThreeDotsVertical /></button>
                            {/*Edit Assignment Dropdown
                            <select name="editAssignment"><i class="fa-solid fa-ellipsis-vertical"></i>
                                <option selected value="editAssignmentDate">Edit Assignment Dates</option>
                                <option value="anotherOption">Another option</option>
                            </select>
                            */}
                        </div>
                    </div>
{/********************list of assignments****************/ }
<ul className="list-group wd-modules">
<li className="list-group-item">
<div className="row">
    <div className="text-start col">
        <FaEllipsisV className="me-2 " /><span className="assignment-title-css">ASSIGNMENTS</span> 
    </div>
    <div className="col text-end">
        
        <span id="percentage-of-score" className="rounded border border-black m-2 p-1">40% of Total</span>

        <FaPlusCircle className="ms-2" /><FaEllipsisV className="ms-2" />
    </div>
</div>
<ul className="list-group">
{assignmentList.map((assignment) => (
<li className="list-group-item">
<div className="row ">
    <div className="col d-flex">
        <FaEllipsisV className="me-2" />
        <MdOutlineNoteAlt className="me-2 text-success"/>
        <div className="text-start">
        <Link className="assignment-title-css"
        to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>{assignment.title}</Link><br/>
        <span className="text-danger">Multipal Modules</span> | <span className="fw-bold">Due</span><span id="dueDate" className="m-2">Sep 30, 2023 at 9:00pm</span>|<span id="points" className="m-2">100 points</span>
        </div>
    </div>
    <div className=" col text-end">
    <FaCheckCircle className="text-success" /><FaEllipsisV className="ms-2" />
    </div>
</div>
</li>))}
</ul>
</li>
</ul>
</>
);}
export default Assignments;