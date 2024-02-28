import { courses } from "../../Kanbas/Database";
import { useParams } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import {Navigate, Route, Routes} from "react-router-dom";
import CourseNavigation from "./Navigation";
import "./index_home.css";
import "./index.css";
import Modules from "./Modules";
import { FaGlasses } from "react-icons/fa";
import Home from "./Home";

function Courses() {
const { courseId } = useParams();

const course = courses.find((course) => course._id === courseId);

return (
<div className="container ">

<div  id="top-white-bar" className="row space-between " >
    <div className=" col m-2 text-danger d-none d-md-block d-lg-block float-start " >
        
        <h1 className="font-size-top-bar float-start "><HiMiniBars3 /> Course {course?.name}</h1>
    </div>
    <div className="col">
        <div className=" btn gray-button-color float-end " >
            <a className="no-underline-a text-black" href="#"><FaGlasses className="me-2"/>Student View</a> 
        </div>
    </div>
        
</div>


<div className="row-auto"  >
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
    <Route path="Assignments" element={<h1>Assignments</h1>} />
    <Route path="Assignments/:assignmentId" element={<h1>Assignment Editor</h1>} />
    <Route path="Grades" element={<h1>Grades</h1>} />
    </Routes>
    </div>
    </div>
    

</div>
</div>

);
}
export default Courses;