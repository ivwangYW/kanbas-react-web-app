import { CiCalendar } from "react-icons/ci";
function ComingUp() {
    return(
        <>
        <ul>
                                        <li>
                                            <div className="coming-up">
                                                <a href="#" className="no-underline-a">
                                                    <CiCalendar className="icon-css-2-gray margin-icon-general-css"/> <span className="text-boldtext-css text-danger">Lecture</span>
                                                    <span id="course_number" className="notification-detail">CS4550.12631.202410</span>
                                                    <span id="date_time" className="notification-detail"> Sep 18 at 11:59pm</span>
                                                </a>
                                            </div>
                                            
                                        </li>
                                        <li>
                                            <div className="coming-up">
                                                <a href="#" className="no-underline-a">
                                                <CiCalendar className="icon-css-2-gray margin-icon-general-css"/> <span className="text-boldtext-css text-danger">Lecture</span>
                                                    <span id="course_number" className="notification-detail">CS4550.12631.202410</span>
                                                    <span id="date_time" className="notification-detail"> Sep 11 at 11:45am</span>
                                                </a>
                                            </div>
                                            
                                        </li>
                                        
                                    </ul>
        </>
    );
}
export default ComingUp