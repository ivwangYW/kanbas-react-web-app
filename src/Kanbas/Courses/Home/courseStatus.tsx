import { IoEnterOutline } from "react-icons/io5";
import { FaAlignCenter } from "react-icons/fa";
import { FaStream } from "react-icons/fa";
import { LuTarget } from "react-icons/lu";
import { TfiAnnouncement } from "react-icons/tfi";
import { CiBellOn } from "react-icons/ci";
import ToDo from "./todo_component";
import "./index.css";
import { CiCalendar } from "react-icons/ci";
import ComingUp from "./comingUp";
function CourseStatus() {


    return(
        <>
        
        <h2 className="text-start">Course Status</h2>
        <div className="row">
        <button className="btn button-general-css button-gray-css p-2 m-2 ">Unpublish</button>
        <button className="btn button-general-css button-gray-css p-2 m-2 ">Published</button>
        </div>
        <ul className="wd-modules font-normal-css status-bar">
                                        <li>
                                            <a href=""><IoEnterOutline className="iconStyle" />Import Existing Content</a>
                                        </li>
                                        <li>
                                            <a href=""><FaAlignCenter className="iconStyle" />Import From Commons</a>
                                        </li>
                                        <li>
                                            <a href=""><LuTarget className="iconStyle" />Choose Home Page</a>
                                        </li>
                                        <li>
                                            <a href=""><FaStream className="iconStyle" />View Course Stream</a>
                                        </li>
                                        <li>
                                            <a href=""><TfiAnnouncement className="iconStyle" />New Anouncement</a>
                                        </li>
                                        <li>
                                            <a href=""><FaStream className="iconStyle" />New Analytics</a>
                                        </li>
                                        <li>
                                            <a href=""><CiBellOn className="iconStyle" />View Course Notifications</a>
                                        </li>
                                    
                                    </ul>

                                    
                                    <h2 className = "text-start">To Do</h2>
                                    
                                    <hr></hr>
                                    <ToDo/>
                                    {/*  Comming Up Section */}
                                    <div className="header-container ">
                                        <div >
                                            <h2 className="inline-header">Coming Up</h2>
                                            <a href="#" className="no-underline-a calendar">
                                            <CiCalendar className="icon-css-2-gray margin-icon-general-css "/>  <span className="text-boldtext-css text-danger">View Calendar</span>
                                            </a>
                                        </div>
                                        
                                    </div>
                                    
                                    <hr></hr>
                                    <ComingUp/>


                                    



        </>
    );
}

export default CourseStatus;