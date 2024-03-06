import {Link} from "react-router-dom";
import Nav from "../Nav";
import KanbasNavigation from "./Navigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";


function Kanbas() {
return (
<div className="d-flex ">
    {/*******************************left Kanbas Navigation Bar************/}
    
    <KanbasNavigation />
    
    {/*******************************right side*****************************/}

    <div  style={{ flexGrow: 1 }}  >
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