import {Link} from "react-router-dom";
import Nav from "../Nav";
import KanbasNavigation from "./Navigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import "./styles.css"


function Kanbas() {
return (
<div className="row no-gutter-row-css no-padding-left-row-css " >
        {/*******************************left Kanbas Navigation Bar************/}
        <div className="col-auto width-left-bar-css  bottom-0 start-0 top-0 overflow-y-scroll ">
            <KanbasNavigation />
        </div>
        {/*******************************right side*****************************/}

        <div  className="col margin-left-middle-bar "   style={{ flexGrow: 1}}  >
            <Routes>
                <Route path="/" element={<Navigate to="Dashboard" />} />
                <Route path="Account" element={<h1>Account</h1>} />
                <Route path="Dashboard" element={<Dashboard />} />
                <Route path="Courses/:courseId/*" element={<Courses />} />
                
            </Routes>
        </div>
    
</div>

);
}
    export default Kanbas
    // since the Kanbas component consists of an entire application with lots of screens
    // each implemented in several files, we've decided to use an entire folder to implement
    // the component. It is common use the same name for the folder and component name, but
    // it is not required.