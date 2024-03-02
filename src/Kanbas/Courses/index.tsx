

import { HiMiniBars3 } from "react-icons/hi2";
import {Navigate, Route, Routes} from "react-router-dom";
import CourseNavigation from "./Navigation";
import "./index_home.css";
import "./index.css";
import Modules from "./Modules";
import { FaGlasses } from "react-icons/fa";
import Home from "./Home";
import PathTracker from "./PathTracker/pathTracker";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";

function Courses() {
//moved to pathTracker          const { courseId } = useParams();

//moved to pathTracker         const course = courses.find((course) => course._id === courseId);


return (
<div className="container ">

<div  id="top-white-bar" className="row space-between " >
    <div className=" col m-2 text-danger d-none d-md-block d-lg-block float-start " >
        
        <span className="font-size-top-bar float-start "><HiMiniBars3 /> </span><PathTracker/>
    </div>
    <div className="col">
        <div className=" btn gray-button-color float-end " >
            <a className="no-underline-a text-black" href="#"><FaGlasses className="me-2"/>Student View</a> 
        </div>
    </div>
        
</div>


<div className="row-auto overflow-y-scroll"  >
    <div className=" col-auto text-danger d-none d-md-block d-lg-block ">
        <CourseNavigation />
    </div>


    <div className="col-auto">
    <div
    className="overflow-y-scroll position-fixed bottom-0 end-0 row"
    style={{ left: "320px", top: "50px" }} >
    <Routes>
    <Route path="/" element={<Navigate to="Home" />} />
    <Route path="Home" element={<Home/>} />
    <Route path="Modules" element={<Modules/>} />
    <Route path="Piazza" element={<h1>Piazza</h1>} />
    <Route path="Assignments" element={<Assignments/>} />
    <Route path="Assignments/:assignmentId" element={<AssignmentEditor/>} />
    <Route path="Grades" element={<h1>Grades</h1>} />
    </Routes>
    </div>
    </div>
    

</div>
</div>

);
}
export default Courses;