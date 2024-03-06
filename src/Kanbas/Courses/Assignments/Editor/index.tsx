import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { assignments } from "../../../Database";
import "./index.css";
import "../index.css";
import { CiCircleCheck } from "react-icons/ci";
import { BsThreeDotsVertical } from "react-icons/bs";
function AssignmentEditor() {
const { assignmentId } = useParams();
const assignment = assignments.find(
(assignment) => assignment._id === assignmentId);
const { courseId } = useParams();
const navigate = useNavigate();
const handleSave = () => {
console.log("Actually saving assignment TBD in later assignments");
navigate(`/Kanbas/Courses/${courseId}/Assignments`);
};
return (
<div>
{/*--assignment buttons bar--*/}
                    <div className="row ">
                        
                        <div className=" col">
                            <div className="float-end">
                            
                            <CiCircleCheck className="green-text-css m-2 "/><a className="green-text-css m-2 no-underline-a  fw-bold">Published</a>
                            <button className="btn gray-color-css"><BsThreeDotsVertical /></button>
                            {/*--Edit Assignment Dropdown
                            <select name="editAssignment"><i class="fa-solid fa-ellipsis-vertical"></i>
                                <option selected value="editAssignmentDate">Edit Assignment Dates</option>
                                <option value="anotherOption">Another option</option>
                            </select>
-->*/}
                        </div>
                        </div>
                    </div>
{/*assignments list*/}
<hr/>        
                                                {/*<div className="container-fluid ">*/}
<select name="publishSelector" className="form-control m-2">
        <option selected value="speedGrader">SpeedGrader</option>
        <option value="otherOption">Other Option</option>
</select>
<br></br>

<label className="float-start m-2" htmlFor="assignmentContent">Assignment Name</label>
<input id="assignmentContent" value={assignment?.title}
className="form-control mb-2" />

<br/><br/>
{/*
                        <div className="container-fluid ">
                        
                            
                            <div  className="container">
                                <div className="row ">
                                    
                                    <div className="col">
                                        <div className="float-end">
                                            <label   className="m-2"htmlFor="inputGrade">Points</label>
                                        </div>
                                        
                
                                    </div>
                                    <div className="col-8">
                                        <input className="form-control m-2 " name="points" placeholder="100"/>
                                    </div>
                                        <div className="w-100">
                        

                                        </div>
                                    
                                    <div className="col">
                                        <div className="float-end">
                                        <label  className="m-2"htmlFor="assignmentGroup">Assignment Group</label>
                                        </div>
                                    </div>
                                    <div className="col-8">
                                        
                                            
                                        <select  className="form-control m-2 " id="assignmentGroup" name="ASSIGNMENTS" aria-placeholder="ASSIGNMENTS" >
                                            <option selected>ASSIGNMENTS</option>
                                            <option  value="assignmentA1">A1</option>
                                            <option  value="assignmentA1">A2</option>
                                            <option  value="assignmentA1">A3</option>
                                            <option  value="assignmentA1">A4</option>
                                            <option  value="assignmentA1">A5</option>
                                            <option  value="assignmentA1">A6</option>
                                    
                                        </select>
                                    </div>
                                    <div className="w-100"></div>
                                    <div className="col">
                                        <div className="float-end">
                                            <label  className="m-2"htmlFor="displayGradeAs" >Display Grade As</label>
                                        </div>
                                    </div>
                                    <div className="col-8 ">
                                        <select  id="displayGradeAs" className="form-control" name="displayGradeAs">
                                            <option  value="percentage">Percentage</option>
                                            <option  value="letter">Letter</option>
                                        </select>
                                    </div>
                                    <div className="w-100"></div>
                                    <div className="col">
                                        <div className="float-end">
                                            <label className="m-2"htmlFor="checkbox_towardFinalGrade"></label>
                                        </div>
                                    </div>
                                    <div className="col-8">
                                        <input className=" m-2" type="checkbox"/>Do not count this assignment towards the final grade
                                    </div>
                                    <div className="w-100"></div>
                                    <div className="col">
                                        <div className="float-end">
                                            <label className="m-2" htmlFor="assignBox" >Assign</label>
                                        </div>
                                        
                                    </div>
                                    <div className="col-8 m-2">
                                        
                                        <div className="form-control input-group" style={{display:"block;",borderRadius: "5px 5px 0px 0px;"}}>
                                            <form>
                                                <label htmlFor="assignmTo_select" className="bold-text-css m-2">Assign to</label>
                                                <div >
                                                    <select className="form-control">
                                                        <option value="everyone">Everyone</option>
                                                    </select>

                                                </div>
                                                <label htmlFor="dataDue" className="bold-text-css m-2">Due</label>
                                                <div >
                                                    <input type="datetime-local" className="form-control mt-2" id="dueDateTime" name="dueDateTime" value="2023-09-18T23:59"/>
             
                                                </div>
                                                <div className="row mb-2">
                                                    <div className="col-6">
                                                        <label htmlFor="dateAvailFrom" className="m-2">Available from</label><br/>
                                                        <input type="datetime-local" className="m-2" id="dateAvailFrom" value="2023-09-26T23:59" name="dateAvailFrom_name"/>
                                                    </div>
                                                    <div className="col-6">
                                                        <label htmlFor="dateAvailFrom" className="m-2">Until</label><br/>
                                                        <input type="datetime-local" className="m-2 form-control" id="dateAvailFrom"   name="dateAvailFrom_name"/>
                                                    </div>
                                                </div>
                                                

                                                
                                            </form>

                                        
                                           
                                            
                                            
                                        </div>
                                        </div>
                                        
                                        <button type="button" className="btn btn-link form-control button-gray-css text-black no-underline-a" style={{borderRadius: "0px 0px 5px 5px",width:"100%"}} >
                                            
                                            <i className="fa-solid fa-plus"></i> Add
                                        </button>


*/}
<button onClick={handleSave} className="btn btn-success ms-2 float-end">
Save
</button>
<Link to={`/Kanbas/Courses/${courseId}/Assignments`}
className="btn btn-danger float-end">
Cancel
</Link>


</div>

);
}
export default AssignmentEditor;