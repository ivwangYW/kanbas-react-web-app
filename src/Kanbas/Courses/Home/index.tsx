import ModuleList from "../Modules/List";
import CourseStatus from "./courseStatus";
import  "../Modules/index.css";
import "./index.css"; 
function Home() {
return (
    <div className="container">
        <div className="row ">
            <div className="col min-width-css-module" > {/*-8 col-sm-12 col-md-8 col-lg-8*/}
                {/*Home *********/}
                <ModuleList />
            </div>
            <div className="col  max-width-css-side-bar d-none d-sm-none d-md-none d-lg-block d-xl-block">
                <CourseStatus/>
            </div>
        </div>
    </div>


);
}
export default Home;