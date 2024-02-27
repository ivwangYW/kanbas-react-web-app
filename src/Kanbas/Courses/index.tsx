import { courses } from "../../Kanbas/Database";
import { useParams } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import {Navigate, Route, Routes} from "react-router-dom";
import CourseNavigation from "./Navigation";
import "./index_home.css";
import "./index.css";
import Modules from "./Modules";
import { FaGlasses } from "react-icons/fa";
function Courses() {
const { courseId } = useParams();

const course = courses.find((course) => course._id === courseId);

return (
<div className="container">

<div id="top-white-bar" className="row" >
    <div className="space-between position-fixed col m-2 text-danger d-none d-md-block d-lg-block float-start " >
        <div className="float-start ">
            <h1 className="font-size-top-bar "><HiMiniBars3 /> Course {course?.name}</h1>
        </div>
        <div className="btn gray-button-color float-end " >
            <a className="no-underline-a text-black" href="#"><FaGlasses className="me-2"/>Student View</a> 
        </div>
        
    </div>


<div className="row "  >
    <div className="col text-danger d-none d-md-block d-lg-block float-start">
        <CourseNavigation />
    </div>


    <div className="col " >
    <div
    className="overflow-y-scroll position-fixed bottom-0 end-0"
    style={{ left: "320px", top: "50px" }} >
    <Routes>
    <Route path="/" element={<Navigate to="Home" />} />
    <Route path="Home" element={<h1>Home</h1>} />
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
</div>
);
}
export default Courses;