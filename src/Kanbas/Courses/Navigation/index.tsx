import { Link, useLocation } from "react-router-dom";
import "./index.css"; // feel free to use the CSS from previous assignments
import { FaRegEyeSlash } from "react-icons/fa6";
import {links, restrictView} from "../../commonData";

function CourseNavigation() {
    
//const links = ["Home", "Modules", "Piazza", "Grades", "Assignments", "Quizes", "Grades", "People", "Panoto Video", "Discussions", "Announcement", "Pages", "Files", "Rubrics", "Outcomes", "Collaborations", "Syllabus", "Settings"];
//const restrictView = ["Files", "Rubrics", "Outcomes", "Collaborations", "Syllabus", "Settings"]; {/*Added*/}
    
    {/*get the corresponding restrictView class for certain link*/}
    function viewRestrictClasses_JSON_array_fun (link:string){
        return restrictView.includes(link)? "restricted":"";
    }
    
const { pathname } = useLocation();
return (
<div className="w-20 float-start ">
<ul className="wd-navigation ">
{links.map((link, index) => (
<li key={index} className={`text-start ${pathname.includes(link) ? "wd-active " : ""} ${viewRestrictClasses_JSON_array_fun(link)}`}>
<Link  to={link}>{link}</Link> 
{viewRestrictClasses_JSON_array_fun(link)=="restricted" && <FaRegEyeSlash className="float-end text-black"/>}
</li>
))}
</ul>
</div>
);
}
export default CourseNavigation;