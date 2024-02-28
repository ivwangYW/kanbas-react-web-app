import { PiNumberCircleOneBold } from "react-icons/pi";
import "./index.css"
function ToDo() {
    return (
        <>
            <ul>
                                        <li >
                    
                                            <div className="notification flex-row d-flex">
                                                    <div>
                                                    <PiNumberCircleOneBold className="text-danger icon-size-css"/>
                                                    </div>
                                                    
                                                    <div>
                                                        <a href="#" className="no-underline-a "><span className="text-danger text-boldtext-css">
                                                            Grade A1 - ENV + HTML
                                                            <span className="notification-detail">100 points • Sep 18 at 11:59pm</span>
                                                        </span>
                                                        </a>
                                                    </div>
                                                    <div>
                                                        <button className="close-button float-end">&times;</button>
                                                    </div>
                                                
                                              </div>
                                        </li>
                                        
                                    </ul>
                    
        </>
    );
}
export default ToDo